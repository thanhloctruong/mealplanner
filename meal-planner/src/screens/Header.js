import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../actions/userActions";

function Header(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // console.log(userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signout());
  };
  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <span>Meal planner service</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown ">
                  <button
                    style={{ width: "100%" }}
                    className="btn dropdown-toggle nav-link"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Services
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link className="dropdown-item" to="/bmical">
                      Tính BMI
                    </Link>
                    <Link className="dropdown-item" to="/bmrcal">
                      Tính BMR
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">
                  Booking
                </Link>
              </li>
              <li className="nav-item">
                <div style={{textAlign:"center"}}>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Type something!"
                  />
                </div>
              </li>
            </ul>
            <div className="user_option " style={{justifyContent: "space-around"}}>
              <div className="dropdown user_link">
                {userInfo ? (
                  <>
                    <button
                      style={{ width: "100%", color: "#fff" }}
                      className="btn dropdown-toggle nav-link"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {userInfo.name}
                      {/* <i className="fa fa-user" aria-hidden="true"></i> */}
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="dropdown-item" to="signin">
                        signin
                      </Link>
                      <Link className="dropdown-item" to="/" onClick={handleSignOut}>
                        sign out
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      style={{ width: "100%", color: "#fff" }}
                      className="btn dropdown-toggle nav-link"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="dropdown-item" to="/signin">
                        signin
                      </Link>
                    </div>
                  </>
                )}
              </div>

              <Link className="cart_link" to="/cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>
              {cartItems.length > 0 && (
                <span className="badge" >{cartItems.length}</span>
              )}

              {/* <!-- <a href="" className="order_online">
              Order Online
            </a> --> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
