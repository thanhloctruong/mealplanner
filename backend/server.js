import express from "express";
import mongoose from "mongoose";
import path from "path";
import productRouter from "./router/productRouter.js";
import http from "http";
import { Server } from "socket.io";
import userRouter from "./router/UserRouter.js";
import uploadRouter from "./router/uploadRouter.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __dirname = path.resolve();

mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://acan:Acan2406%40@cluster0.iajd4.mongodb.net/mealplanner?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use("/api/users", userRouter);
app.use("/api/uploads", uploadRouter);
app.use("/api/products", productRouter);

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));


app.use(express.static(path.join(__dirname, "/meal-planner/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/meal-planner/build/index.html"))
);
// aaa
// app.get("/", (req, res) => {
//   res.send("server is already");
// });s
const port = process.env.PORT || 5000;

const httpServer = http.Server(app);
// const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });
const users = [];
io.on("connection", (socket) => {
  console.log("connection", socket.id);
  socket.on("disconnect", () => {
    const user = users.find((x) => x.socketId === socket.id);
    if (user) {
      user.online = false;
      console.log("Offline", user.name);
      const admin = users.find((x) => x.isAdmin && x.online);
      if (admin) {
        io.to(admin.socketId).emit("updateUser", user);
      }
    }
  });
  socket.on("onLogin", (user) => {
    const updatedUser = {
      ...user,
      online: true,
      socketId: socket.id,
      messages: []
    };
    const existUser = users.find((x) => x._id === updatedUser._id);
    if (existUser) {
      existUser.socketId = socket.id;
      existUser.online = true;
    } else {
      users.push(updatedUser);
    }
    console.log("Online", user.name);
    const admin = users.find((x) => x.isAdmin && x.online);
    if (admin) {
      io.to(admin.socketId).emit("updateUser", updatedUser);
    }
    if (updatedUser.isAdmin) {
      io.to(updatedUser.socketId).emit("listUsers", users);
    }
  });

  socket.on("onUserSelected", (user) => {
    const admin = users.find((x) => x.isAdmin && x.online);
    if (admin) {
      const existUser = users.find((x) => x._id === user._id);
      io.to(admin.socketId).emit("selectUser", existUser);
    }
  });

  socket.on("onMessage", (message) => {
    if (message.isAdmin) {
      const user = users.find((x) => x._id === message._id && x.online);
      if (user) {
        io.to(user.socketId).emit("message", message);
        user.messages.push(message);
      }
    } else {
      const admin = users.find((x) => x.isAdmin && x.online);
      if (admin) {
        io.to(admin.socketId).emit("message", message);
        const user = users.find((x) => x._id === message._id && x.online);
        user.messages.push(message);
      } else {
        io.to(socket.id).emit("message", {
          name: "Admin",
          body: "Sorry. I am not online right now"
        });
      }
    }
  });
});

httpServer.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Serve at http://localhost:${PORT}`);
// });
