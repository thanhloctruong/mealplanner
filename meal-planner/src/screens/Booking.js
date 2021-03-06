import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function Booking(props) {
  return (
    <section class="book_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>Book A Table</h2>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form_container">
              <form action="">
                <div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <select class="form-control nice-select wide">
                    <option value="" disabled selected>
                      How many persons?
                    </option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                  </select>
                </div>
                <div>
                  <input type="date" class="form-control" />
                </div>
                <div class="btn_box">
                  <button>Book Now</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <div class="map_container ">
              <div id="googleMap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7894922561613!2d106.68555125046903!3d10.827415492249104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528fa067a6c71%3A0x84147d1dffbaddd7!2zNjg3IMSQLiBQaGFuIFbEg24gVHLhu4ssIFBoxrDhu51uZyA3LCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1636046322297!5m2!1svi!2s" width="600" height="450" title="map" style={{border: 0}} allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
 );
}

export default Booking;
