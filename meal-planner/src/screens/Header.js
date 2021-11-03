import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
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
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="menu">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    About
                  </a>
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
                      <Link className="dropdown-item" to="bmical">
                        Tinh BMI
                      </Link>
                      <a className="dropdown-item" href="#">
                        CCC
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="book.html">
                    Book Table
                  </a>
                </li>
                <li className="nav-item">
                  <div>
                    <input
                      type="text"
                      className="search-input"
                      placeholder="search cc!"
                    />
                  </div>
                </li>
              </ul>
              <div className="user_option ">
                <a href="" className="user_link">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </a>
                <a className="cart_link" href="#">
                  <i className="fas fa-shopping-cart"></i>
                </a>

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