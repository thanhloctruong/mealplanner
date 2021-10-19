import React from "react";
import Magazine from "../components/Magazine";

function Place(props) {
  const data = [
    {
      src: "/images/products/1.jpg",
      name: "Khoai lang luộc, thịt bò xào đậu que"
    },
    {
      src: "/images/products/2.jpg",
      name: "Khoai lang, củ quả luộc và thịt gà xé"
    },
    {
      src: "/images/products/3.jpg",
      name: "Trứng, khoai lang và rau luộc"
    },
    {
      src: "/images/products/4.jpg",
      name: "Cơm gạo lứt, bắp non xào thịt"
    },
    {
      src: "/images/products/5.jpg",
      name: "Cơm lứt, thịt gà xào củ quả"
    },
    {
      src: "/images/products/6.jpg",
      name: "Bắp xào ức gà, bông cải luộc"
    },
    {
      src: "/images/products/7.jpg",
      name: "Cơm lứt, cá nướng và rau luộc"
    },
    {
      src: "/images/products/8.jpg",
      name: "Cơm lứt, ức gà nướng và đậu que luộc"
    },
    {
      src: "/images/products/9.jpg",
      name: "Cơm trắng, ức gà và bông cải luộc kèm bơ đậu phộng"
    },
    {
      src: "/images/products/10.jpg",
      name: "Cơm lứt, ức gà áp chảo, măng tây ớt chông luộc"
    },
    {
      src: "/images/products/11.jpg",
      name: "Cơm lứt, ứt gà sốt bơ đậu phộng, bông cải xanh luộc"
    },
    {
      src: "/images/products/12.jpg",
      name: "Cơm lứt, ức gà nướng, măng tây luộc"
    },
    {
      src: "/images/products/13.jpg",
      name: "Cơm lứt, cá áp chảo, khoai lang cà rốt và trứng luộc"
    },
    {
      src: "/images/products/14.jpg",
      name: "Cơm lứt, ức gà kho, củ quả luộc"
    },
    {
      src: "/images/products/15.jpg",
      name: "Cơm lứt, ức gà xé, nấm xào rau củ"
    },
    {
      src: "/images/products/16.jpg",
      name: "Trứng ốp la, khoai tây nghiền kèm hoa quả"
    },
    {
      src: "/images/products/17.jpg",
      name: "Cá bí rợ áp chảo, rau luộc và cà chua bi"
    },
    {
      src: "/images/products/18.jpg",
      name: "Cơm lứt, ức gà xào cay, rau luộc"
    },
    {
      src: "/images/products/19.jpg",
      name: "Thịt bò bít tết, salad rau củ"
    },
    {
      src: "/images/products/20.jpg",
      name: "Súp cua"
    },
    {
      src: "/images/products/21.jpg",
      name: "Salad thịt bò"
    },
    {
      src: "/images/products/22.jpg",
      name: "Thịt bò trộn rau mầm"
    },
    {
      src: "/images/products/23.jpg",
      name: "Trứng cuộn cơm lứt, rau luộc"
    },
    {
      src: "/images/products/24.jpg",
      name: "Cơm lứt, tôm càng sốt bơ tỏi, củ quả xào"
    },
    {
      src: "/images/products/25.jpg",
      name: "Mì ý sốt cà chua ức gà khoai tây"
    },
    {
      src: "/images/products/26.png",
      name: "Mì ý xào bò"
    },
    {
      src: "/images/products/27.jpg",
      name: "Bánh mì sandwich kèm salad"
    },
    {
      src: "/images/products/28.jpg",
      name: "Cơm lứt, ức gà sốt cà chua"
    },
    {
      src: "/images/products/29.jpg",
      name: "Cơm lứt, bò xào, củ dền luộc"
    },
    {
      src: "/images/products/30.jpg",
      name: "Hủ tiếu bún gạo lứt"
    },
    {
      src: "/images/products/31.jpg",
      name: "Salad bơ"
    },
    {
      src: "/images/products/32.jpg",
      name: "Miến xào gà nấm"
    },
    {
      src: "/images/products/33.jpg",
      name: "Mì gạo lứt trộn"
    },
    {
      src: "/images/products/34.png",
      name: "Ức gà áp chảo sốt chanh"
    },
    {
      src: "/images/products/35.png",
      name: "Tôm xào ớt chuông"
    },
    {
      src: "/images/products/36.jpg",
      name: "Cháo yến mạch, hạt điều và hoa quả"
    },
    {
      src: "/images/products/37.jpg",
      name: "Yến mạch, sữa chua kèm hoa quả "
    },
    {
      src: "/images/products/38.jpg",
      name: "Cháo yến mạch kèm nho khô và óc chó"
    },
    {
      src: "/images/products/39.jpg",
      name: "Salad rau của quả"
    },
    {
      src: "/images/products/40.jpg",
      name: "Cơm chiên dương châu"
    },
    {
      src: "/images/products/41.jpg",
      name: "Bánh bao eat clean"
    },
    {
      src: "/images/products/42.png",
      name: "Đậu phụ non hấp nấm hương "
    },
    {
      src: "/images/products/43.png",
      name: "Mì ý đậu hũ sốt cà"
    },
    {
      src: "/images/products/44.jpg",
      name: "Mì xào rau củ"
    },
    {
      src: "/images/products/45.jpg",
      name: "Mì xào giòn chay"
    },
    {
      src: "/images/products/46.png",
      name: "Sushi chay"
    },
    {
      src: "/images/products/47.jpg",
      name: "Hoa quả dầm sữa chua"
    },
    {
      src: "/images/products/48.jpg",
      name: "Pancake chuối"
    },
    {
      src: "/images/products/49.jpg",
      name: "Bánh phomat trái cây"
    },
    {
      src: "/images/products/50.jpg",
      name: "Chè nhãn nhục"
    },
    {
      src: "/images/products/51.jpg",
      name: "Chè sa kê bạch quả"
    },
    {
      src: "/images/products/52.jpg",
      name: "Sữa chua hy lạp kèm trái cây"
    },
    {
      src: "/images/products/53.jpg",
      name: "Pudding hạt chia"
    },
    {
      src: "/images/products/54.jpg",
      name: "Sinh tố chuối rau chân vịt"
    },
    {
      src: "/images/products/55.jpg",
      name: "Sinh tố bơ chuối"
    }
  ];

  const products = data.map((product) => (
    <Magazine src={product.src} title={product.name} text="" />
  ));

  return (
    <>
      <div className="banner">
        <div
          className="banner__img"
          style={{ backgroundImage: `url(${"/images/danhmuc5.jpg"})` }}
        ></div>
        <div className="aa">
          <h2 className="banner__text">Menu</h2>
        </div>
      </div>
      <div className="right__content row">{products}</div>
    </>
  );
}

export default Place;
