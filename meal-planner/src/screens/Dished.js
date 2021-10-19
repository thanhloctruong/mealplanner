import React from "react";
import Magazine from "../components/Magazine";

function Dished(props) {
  return (
    <>
      <div className="banner">
        <div
          className="banner__img"
          style={{ backgroundImage: `url(${"/images/danhmuc4.jpg"})` }}
        ></div>
        <div className="aa">
          <h2 className="banner__text">Món Ngon Mỗi Ngày</h2>
        </div>
      </div>
      <div className="right__content row">
        <Magazine
          src="/images/products/24.jpg"
          title="Cơm lứt, tôm càng sốt bơ tỏi, củ quả xào"
          text=""
        />
        <Magazine
          src="/images/products/48.jpg"
          title="Pancake chuối"
          text=""
        />
      </div>
    </>
  );
}

export default Dished;
