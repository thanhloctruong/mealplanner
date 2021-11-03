import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, props.history, redirect]);
  return (
    <section class="book_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>Sign In</h2>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="map_container ">
              <div id="googleMap">
                <img src="./images/Hnm7.jpg" alt='' style={{width:"100%"}}/>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form_container">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email"> Email</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder=" enter ur email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    placeholder="inter ur password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>

                <div class="btn_box">
                  <button
                    type="submit"
                    style={{ right: "0", position: "absolute" }}
                  >
                    Sign In
                  </button>
                </div>
                <div>
                  <label />
                  <div>
                    <Link to={`/register?redirect=${redirect}`}>
                      {/* <Link to="/register"> */} Create ur account
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;
