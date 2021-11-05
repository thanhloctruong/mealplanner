import React, { useState } from "react";
// import CheckoutSteps from "../components/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/CartAction";

function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!userInfo) {
    props.history.push("/signin");
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ fullName, address, city, country }));
    props.history.push("/payment");
  };
  return (
    <section class="book_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>Shipping address</h2>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="map_container ">
              <div id="googleMap">
                <img
                  src="images/delivery.png"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form_container">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Type your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    class="form-control"
                  ></input>
                </div>
                <div>
                  <label htmlFor="address">address</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Type your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    class="form-control"
                  ></input>
                </div>
                <div>
                  <label htmlFor="city">city</label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Type your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    class="form-control"
                  ></input>
                </div>
                <div>
                  <label htmlFor="country">country</label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Type your country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    class="form-control"
                  ></input>
                </div>
                <div class="btn_box">
                  <button
                    type="submit"
                    style={{ right: "0", position: "absolute" }}
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShippingAddressScreen;
