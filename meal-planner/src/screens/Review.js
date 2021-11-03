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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <h6>Moana Michell</h6>
                  <p>magna aliqua</p>
                </div>
                <div class="img-box">
                  <img src="images/client1.jpg" alt="" class="box-img" />
                </div>
              </div>
            </div>
            <div class="item col-md-6">
              <div class="box">
                <div class="detail-box">
                  <p>ăn món salad của shop xong em bị ỉa chảy luôn ạ!</p>
                  <h6>ACan</h6>
                  <p>không ngon!</p>
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
