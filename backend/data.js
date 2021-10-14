import bcrypt from "bcrypt";
const data = {
    users: [
      {
        name: "acan",
        email: "thanhloctruong102@gmail.com",
        password: bcrypt.hashSync("1234", 8),
        isAdmin: true
      },
      {
        name: "Diem Chi",
        email: "huynhdiemchi@gmail.com",
        password: bcrypt.hashSync("1234", 8),
        isAdmin: false
      }
    ]
}
export default data;