import React from "react";

function Place(props) {
  return (
    <>
      <div className="banner">
        <div
          className="banner__img"
          style={{ backgroundImage: `url(${"/images/product1.jpg"})` }}
        ></div>
        <div className="aa">
          <h2 className="banner__text"> Menu </h2>
        </div>
      </div>
      <div className="right__content row">
        <div className="col-1 ">
          <img
            src="/images/Picture1.png"
            alt=""
            className="right__content--img"
          />
        </div>

        <div className="col-1">
          <h2>Khoai lang luộc, thịt bò xào đậu que</h2>
        </div>
      </div>
      <div className="right__content row">
        <div className="col-1 ">
          <img
            src="/images/Picture2.png"
            alt=""
            className="right__content--img"
          />
        </div>
        <div className="col-1">
          <h2>Khoai lang, củ quả luộc và thịt gà xé</h2>
        </div>
      </div>
      <div className="right__content row">
        <div className="col-1 ">
          <img
            src="/images/Picture3.png"
            alt=""
            className="right__content--img"
          />
        </div>
        <div className="col-1">
          <h2>Trứng, khoai lang và rau luộc</h2>
        </div>
      </div>
      <div className="right__content row">
        <div className="col-1 ">
          <img
            src="/images/Picture4.png"
            alt=""
            className="right__content--img"
          />
        </div>
        <div className="col-1">
          <h2>Cơm gạo lứt, bắp non xào thịt</h2>
        </div>
      </div>
      <div className="right__content row">
        <div className="col-1 ">
          <img
            src="/images/Picture5.png"
            alt=""
            className="right__content--img"
          />
        </div>
        <div className="col-1">
          <h2>Cơm lứt, thịt gà xào củ quả </h2>
        </div>
      </div>
      <div className="right__content row">
        <div className="col-1 ">
          <img
            src="/images/Picture6.png"
            alt=""
            className="right__content--img"
          />
        </div>
        <div className="col-1">
          <h2>Bắp xào ức gà, bông cải luộc</h2>
        </div>
      </div>
      <div className="right__content row">
        <div className="col-1 ">
          <img
            src="/images/Picture7.png"
            alt=""
            className="right__content--img"
          />
        </div>
        <div className="col-1">
          <h2>Cơm lứt, cá nướng và rau luộc</h2>
        </div>
      </div>
      <div className="right__content row">
        <div className="col-1 ">
          <img
            src="/images/Picture8.png"
            alt=""
            className="right__content--img"
          />
        </div>
        <div className="col-1">
          <h2>Cơm lứt, ức gà nướng và đậu que luoc</h2>
        </div>
      </div>
      <div className="right__content row">
        <div className="col-1 ">
          <img
            src="/images/Picture9.png"
            alt=""
            className="right__content--img"
          />
        </div>
        <div className="col-1">
          <h2>Cơm trắng, ức gà và bông cải luộc kèm bơ đậu phộng</h2>
        </div>
      </div>
      <div className="right__content row">
        <div className="col-1 ">
          <img
            src="/images/Picture10.png"
            alt=""
            className="right__content--img"
          />
        </div>
        <div className="col-1">
          <h2>Cơm lứt, ức gà áp chảo, măng tây ớt chông luộc</h2>
        </div>
      </div>
    </>
  );
}

export default Place;
