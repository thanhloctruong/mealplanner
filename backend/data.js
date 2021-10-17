import bcrypt from "bcrypt";
const data = {
  users: [
    {
      name: "acan",
      image: "/images/avt.jpg",
      email: "thanhloctruong102@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true
    },
    {
      name: "Diem Chi",
      email: "huynhdiemchi@gmail.com",
      image: "/images/avtt.jpeg",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false
    }
  ]
};
export default data;
