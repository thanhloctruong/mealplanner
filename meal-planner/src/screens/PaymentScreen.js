import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { savePaymentMethod } from "../actions/CartAction";

function PaymentScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };
  return (
    <section className="book_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Payment</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="map_container ">
              <div id="googleMap">
                <img src="images/payment.png" alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form_container">
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="radio"
                    id="paypal"
                    value="PayPal"
                    name="paymentMethod"
                    required
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></input>
                  <label htmlFor="paypal">Paypal</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="stripe"
                    value="stripe"
                    name="paymentMethod"
                    required
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></input>
                  <label htmlFor="stripe">Stripe</label>
                </div>
                <div className="btn_box">
                  <button
                    type="submit"
                   
                  >
                    Payment
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

export default PaymentScreen;
