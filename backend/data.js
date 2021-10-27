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
      price: 60000,
      category: "Món mặn",
      name: " Khoai lang luộc, thịt bò xào đậu que ",
      description: "Khoai lang,thịt bò, đậu que, nước sốt",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/2.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Khoai lang, củ quả luộc và thịt gà xé ",
      description: " Khoai lang, củ quả,thịt gà, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/3.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Trứng, khoai lang và rau luộc ",
      description: " Trứng, khoai lang, rau, nước sốt",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/4.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm gạo lứt, bắp non xào thịt ",
      description: " Cơm lứt, bắp non, thịt, nước sốt ",
      
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/5.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm lứt, thịt gà xào củ quả ",
      description: " Cơm lứt, ức gà, củ quả, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/6.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Bắp xào ức gà, bông cải luộc ",
      description: " Bắp, ức gà, bông cải, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/7.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm lứt, cá nướng và rau luộc ",
      description: " Cơm lứt, cá, rau, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/8.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm lứt, ức gà nướng và đậu que luộc ",
      description: " Cơm lứt, ức gà, đậu que, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/9.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm trắng, ức gà và bông cải luộc kèm bơ đậu phộng ",
      description: " Cơm trắng, ức gà, bông cải, bơ đậu phộng ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/10.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm lứt, ức gà áp chảo, măng tây ớt chuông luộc ",
      description: " Cơm lứt, ức gà, măng tây, ớt chuông, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/11.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm lứt, ứt gà sốt bơ đậu phộng, bông cải xanh luộc ",
      description: " Cơm lứt, ứt gà, bông cải xanh ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/12.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm lứt, ức gà nướng, măng tây luộc ",
      description: " Cơm lứt, ức gà, măng tây, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/13.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm lứt, cá áp chảo, khoai lang cà rốt và trứng lòng đào ",
      description: " Cơm lứt, cá, khoai lang, cà rốt, trứng, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/14.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm lứt, ức gà kho, củ quả luộc ",
      description: " Cơm lứt, ức gà, củ quả, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/15.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm lứt, ức gà xé, nấm xào rau củ ",
      description: " Cơm lứt, ức gà, nấm, rau củ, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/16.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Trứng ốp la, khoai tây nghiền kèm hoa quả ",
      description: " Trứng, khoai tây, hoa quả, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/17.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cá bí rợ áp chảo, rau luộc và cà chua bi ",
      description: " Cá bí rợ, rau, cà chua bi, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/18.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm lứt, ức gà xào cay, rau luộc ",
      description: " Cơm lứt, ức gà, rau, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/19.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Thịt bò bít tết, salad rau củ ",
      description: " Thịt bò, rau củ, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/20.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Súp cua ",
      description: " Cua, trứng, nấm, củ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/21.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Salad thịt bò ",
      description: " Thịt bò, salad, hành tây, cà chua, nước sốt ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/22.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Thịt bò trộn rau mầm ",
      description: " Thịt bò, rau mầm, hành tây,nước sốt",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/23.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Trứng cuộn cơm lứt, rau luộc ",
      description: " Gạo lứt, trứng, rau, củ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/24.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm lứt, tôm càng sốt bơ tỏi, củ quả xào ",
      description: " Gạo lứt, tôm càng, rau củ, sốt bơ tỏi",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/25.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Mì ý sốt cà chua ức gà khoai tây ",
      description: " Mì ý, ức gà, khoai tây, sốt cà chua",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/26.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Mì ý xào bò ",
      description: " Mì ý, thịt bò, rau, củ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/27.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Bánh mì sandwich kèm salad ",
      description: " Bánh mì sandwich, salad",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/28.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm lứt, ức gà sốt cà chua ",
      description: " Gạo lứt, ức gà, sốt cà chua",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/29.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Cơm lứt, bò xào, củ dền luộc ",
      description: " Gạo lứt, thịt bò, củ dền",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/30.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Hủ tiếu bún gạo lứt ",
      description: " Hủ tiếu, bún, gạo lứt, rau, củ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/31.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Salad bơ ",
      description: " Salad, bơ, nước sốt",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/32.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Miến xào gà nấm ",
      description: " Miến, gà, nấm",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/33.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Mì gạo lứt trộn ",
      description: " Mì, gạo lứt, nước sốt",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/34.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Ức gà áp chảo sốt chanh ",
      description: " Ức gà, sốt chanh",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/35.jpg",
      price: 60000,
      category: "Món mặn",
      name: " Tôm xào ớt chuông ",
      description: " Tôm, ớt chuông",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/36.jpg",
      price: 50000,
      category: "Món chay",
      name: " Cháo yến mạch, hạt điều và hoa quả  ",
      description: " Gạo, yến mạch, hạt điều, hoa quả",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/37.jpg",
      price: 50000,
      category: "Món chay",
      name: " Yến mạch, sữa chua kèm hoa quả ",
      description: " Yến mạch, sữa chua, hoa quả",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/38.jpg",
      price: 50000,
      category: "Món chay",
      name: " Cháo yến mạch kèm nho khô và óc chó ",
      description: " Gạo, yến mạch, nho khô, óc chó",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/39.jpg",
      price: 50000,
      category: "Món chay",
      name: " Salad rau củ quả ",
      description: " Salad, rau, quả, nước sốt",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/40.jpg",
      price: 50000,
      category: "Món chay",
      name: " Cơm chiên dương châu ",
      description: " Gạo, rau củ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/41.jpg",
      price: 50000,
      category: "Món chay",
      name: " Bánh bao eat clean ",
      description: " Bột bánh bao, củ, nấm",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/42.jpg",
      price: 50000,
      category: "Món chay",
      name: " Cơm lứt, đậu phụ non hấp nấm hương ",
      description: " Gạo lứt, đậu phụ non, nấm hương",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/43.jpg",
      price: 50000,
      category: "Món chay",
      name: " Mì ý đậu hũ sốt cà ",
      description: " Mì ý, đậu hũ, sốt cà",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/44.jpg",
      price: 50000,
      category: "Món chay",
      name: " Mì xào rau củ ",
      description: " Mì, rau, củ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/45.jpg",
      price: 50000,
      category: "Món chay",
      name: " Mì xào giòn chay ",
      description: " Mì, rau, củ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/46.jpg",
      price: 50000,
      category: "Món chay",
      name: " Sushi chay ",
      description: " Rong biển, gạo, rau, củ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/47.jpg",
      price: 30000,
      category: "Tráng miệng",
      name: " Hoa quả dầm sữa chua ",
      description: " Sữa chua, hoa quả",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/48.jpg",
      price: 30000,
      category: "Tráng miệng",
      name: " Pancake chuối ",
      description: " Bột gạo, chuối, sữa, các loại hạt",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/49.jpg",
      price: 30000,
      category: "Tráng miệng",
      name: " Bánh phomat trái cây ",
      description: " Bánh, phomat, trái cây",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/50.jpg",
      price: 30000,
      category: "Tráng miệng",
      name: " Chè nhãn nhục ",
      description: " Đường phèn, nhãn nhục,bông cúc khô, táo khô",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/51.jpg",
      price: 30000,
      category: "Tráng miệng",
      name: " Chè sa kê bạch quả ",
      description: " Đường phèn, sa kê, ",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/52.jpg",
      price: 30000,
      category: "Tráng miệng",
      name: " Sữa chua hy lạp kèm trái cây ",
      description: " Sữa chua hy lạp, trái cây",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/53.jpg",
      price: 30000,
      category: "Tráng miệng",
      name: " Pudding hạt chia ",
      description: " Hạt chia, trứng, đường, sữa",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/54.jpg",
      price: 30000,
      category: "Tráng miệng",
      name: " Sinh tố chuối rau chân vịt ",
      description: " Chuối, rau chân vịt",
      rating: 4.5,
      numReviews: 10,
      },
      {
      image: "/images/products/55.jpg",
      price: 30000,
      category: "Tráng miệng",
      name: " Sinh tố bơ chuối ",
      description: " Chuối, bơ",
      rating: 4.5,
      numReviews: 10,
      },
  ]
};
export default data;
