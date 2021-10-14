import React from 'react';
import Magazine from '../components/Magazine'
function HealAndMeal(props) {
    return (
        <>
        <div className="banner">
          <div
            className="banner__img"
            style={{ backgroundImage: `url(${"/images/product2.jpg"})` }}
          ></div>
          <div className="aa">
            <h2 className="banner__text">Thực Phẩm & Sức Khoẻ</h2>
          </div>
        </div>
        <div className="right__content row">
          <Magazine />
          <Magazine />
          <Magazine />
          <Magazine />
          <Magazine />
          <Magazine />
          <Magazine />
        </div>
      </>
    );
}

export default HealAndMeal;