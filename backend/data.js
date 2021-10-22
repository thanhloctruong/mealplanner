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
  ],
  products: [
    {
      image: "/images/products/1.jpg",
      price: 10000,
      category: "rau",
      name: "Khoai lang luộc, thịt bò xào đậu que",
      description: "hang cao cap",
      rating: 4.5,
      numReviews: 10,
    },
    {
      image: "/images/products/2.jpg",
      price: 10000,
      category: "rau",
      name: "Khoai lang, củ quả luộc và thịt gà xé",
      description: "hang cao cap",
      rating: 4.5,
      numReviews: 10,
    },
    {
      image: "/images/products/3.jpg",
      price: 10000,
      category: "rau",
      name: "Trứng, khoai lang và rau luộc",
      description: "hang cao cap",
      rating: 4.5,
      numReviews: 10,
    },
  ]
};
export default data;
