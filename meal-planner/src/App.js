import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import HomeScreen from "./screens/HomeScreen";
import HealAndMeal from "./screens/HealAndMeal";
import Dished from "./screens/Dished";
import Menu from "./screens/Menu";
import BMICal from "./screens/BMICal";
import BMRCal from "./screens/BMRCal";
import Portion from "./screens/Portion";
import Signin from "./screens/Signin";
import Register from "./screens/Register";
import { useSelector } from "react-redux";
import AdminRoute from "./components/AdminRoute";
import ChatBox from "./components/ChatBox";
import SupportScreen from "./screens/SupportScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Header from "./screens/Header";
import Review from "./screens/Review";
import About from "./screens/About";
import Booking from "./screens/Booking";

function App() {
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;

  return (
    <Router>
      {/* <!-- header section strats --> */}
      <div className="hero_area">
        {/* <div className="bg-box">
          <img src="/images/bbb.png" alt="" />
        </div> */}
        <Header />

        <main>
          <Route path="/healandmeal" component={HealAndMeal}></Route>
          <Route path="/dished" component={Dished}></Route>
          <Route path="/booking" component={Booking}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/products/:id" component={ProductScreen} exact></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/bmical" component={BMICal}></Route>
          <Route path="/bmrcal" component={BMRCal}></Route>
          <Route path="/portion" component={Portion}></Route>

          <Route path="/signin" component={Signin}></Route>
          <Route path="/register" component={Register}></Route>
          <AdminRoute path="/support" component={SupportScreen}></AdminRoute>
          <Route path="/menu" component={Menu}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
      </div>
      <Review />
      <footer class="footer_section">
        <div class="container">
          <div class="row">
            <div class="col-md-4 footer-col">
              <div class="footer_contact">
                <h4>Contact Us</h4>
                <div class="contact_link_box">
                  <a href="https://mealplannerservice.herokuapp.com">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                      Website: https://mealplannerservice.herokuapp.com
                    </span>
                  </a>
                  <a href="https://mealplannerservice.herokuapp.com">
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <span>Hot line: 0352596397</span>
                  </a>
                  <a href="https://mealplannerservice.herokuapp.com">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>Email: mealplanandoder@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 footer-col">
              <div class="footer_detail">
                <a
                  href="https://mealplannerservice.herokuapp.com"
                  class="footer-logo"
                >
                  Meal planner service
                </a>
                <p>
                  Necessary, making this the first true generator on the
                  Internet.
                </p>
                <div class="footer_social">
                  <a href="https://www.facebook.com/ACan.Truong102">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>

                  <a href="https://www.linkedin.com/in/trương-thành-lộc-3768a9205">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                  <a href="https://www.instagram.com/acandayyy">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 footer-col">
              <h4>Opening Hours</h4>
              <p>Everyday</p>
              <p>6:00 am - 20:00 pm</p>
            </div>
          </div>
          <div class="footer-info">
            <p>
              &copy; <span>2021</span> All Rights Reserved By
              <a href="https://www.facebook.com/ACan.Truong102"> ACan </a>
              <br />
              {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
            </p>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
