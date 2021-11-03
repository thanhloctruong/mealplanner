import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert(" Password are not match");
    } else {
      dispatch(register(name, email, password));
    }
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
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <h2>Register</h2>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="map_container ">
              <div id="googleMap">
                <img src="./images/Hnm7.jpg" alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form_container">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name"> Name</label>
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder=" enter ur name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
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
                <div>
                  <label htmlFor="confirmPassword"> Confirm Password</label>
                  <input
                    type="password"
                    id="confirmpassword"
                    placeholder="confirmpassword"
                    class="form-control"
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></input>
                </div>
                <div class="btn_box">
                  <button
                    type="submit"
                    style={{ right: "0", position: "absolute" }}
                  >
                    Register
                  </button>
                </div>
                <div>
                  <label />
                  <div>
                    already have an account?
                    <Link to={`props.history.push(redirect)}`}>Sign In </Link>
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

export default Register;
