import express from "express";
import mongoose from "mongoose";
import path from "path";

import userRouter from "./router/UserRouter.js";

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

app.use(express.static(path.join(__dirname, "/meal-planner/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/meal-planner/build/index.html"))
);

// aaa
app.get("/", (req, res) => {
  res.send("server is already");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
