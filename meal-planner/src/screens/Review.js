import React from "react";

function Review(props) {
  return (
    <section class="client_section layout_padding">
      <div class="container">
        <div class="heading_container heading_center psudo_white_primary mb_45">
          <h2>What Says Our Customers</h2>
        </div>
        <div class="carousel-wrap ">
          <div class="owl-carousel client_owl-carousel row ">
            <div class="item col-md-6">
              <div class="box">
                <div class="detail-box">
                  <p>
                    Damn, why i didn't came here soon, too delicios ^^
                  </p>
                  <h6>Moana Michell</h6>
                  <p>rate 5 star </p>
                </div>
                <div class="img-box">
                  <img src="images/client1.jpg" alt="" class="box-img" />
                </div>
              </div>
            </div>
            <div class="item col-md-6">
              <div class="box">
                <div class="detail-box">
                  <p>delicious food, Nutrients and calories are carefully calculated, good idea for diet </p>
                  <h6>ACan</h6>
                  <p>Nice!</p>
                </div>
                <div class="img-box">
                  <img src="images/user1.jpg" alt="" class="box-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
