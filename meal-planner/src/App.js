import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import HomeScreen from "./screens/HomeScreen";
import HealAndMeal from "./screens/HealAndMeal";
import Dished from "./screens/Dished";
import Menu from "./screens/Menu";
import BMICal from "./screens/BMICal";
import Portion from "./screens/Portion";
import Signin from "./screens/Signin";
import Register from "./screens/Register";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "./actions/userActions";
import AdminRoute from "./components/AdminRoute";
import ChatBox from "./components/ChatBox";
import SupportScreen from "./screens/SupportScreen";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  // console.log(userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signout());
  };
  return (
    <Router>
      <div className="wrapper">
        <div className="container">
          <div className="dashboard">
            <div className="left">
              <span className="left__icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <div className="left__content">
                <div className="left__logo">
                  <Link to="/">Meal Planner Service</Link>
                </div>
                <div className="left__profile">
                  {userInfo ? (
                    <>
                      <div className="left__image">
                        {userInfo.image ? (
                          <img src={userInfo.image} alt="" />
                        ) : (
                          <img src="/images/bg1.jpg" alt="" />
                        )}
                        {/* <img src="/images/avt.jpg" alt="" /> */}
                      </div>
                      <p className="left__name">{userInfo.name}</p>
                      {userInfo.isAdmin && (
                        <Link to="/support">Support</Link>
                      )}
                    </>
                  ) : (
                    <>
                      {/* <div className="left__image">
                        <img src="/images/product1.jpg" alt="" />
                      </div>
                      <p className="left__name">Meal Planner Service </p> */}
                    </>
                  )}
                </div>
                <ul className="left__menu">
                  <li className="left__menuItem open">
                    <Link to="/">
                      <img src="/assets/icon-dashboard.svg" alt="" />
                      Trang chủ
                    </Link>
                  </li>
                  <li className="left__menuItem">
                    <Link to="/healandmeal">
                      <img src="/assets/icon-dashboard.svg" alt="" />
                      Thực phẩm & sức khỏe
                    </Link>
                  </li>
                  <li className="left__menuItem">
                    <div className="left__title">
                      <img src="/assets/icon-edit.svg" alt="" />
                      Chỉ số BMI & khẩu phần ăn
                      <img
                        className="left__iconDown"
                        src="/assets/arrow-down.svg"
                        alt=""
                      />
                      <div className="left__text">
                        <Link to="/bmical" className="left__link">
                          BMI
                        </Link>
                        <Link to="/portion" className="left__link">
                          Khẩu phần ăn
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li className="left__menuItem">
                    <Link to="/dished" className="left__title">
                      <img src="/assets/icon-users.svg" alt="" />
                      Món ngon mỗi ngày
                    </Link>
                  </li>
                  <li className="left__menuItem">
                    <Link to="/menu" className="left__title">
                      <img src="/assets/icon-book.svg" alt="" />
                      Menu
                    </Link>
                  </li>
                  {userInfo ? (
                    <li className="left__menuItem">
                      <Link
                        to="/"
                        className="left__title"
                        onClick={handleSignOut}
                      >
                        <img src="/assets/icon-logout.svg" alt="" />
                        Đăng Xuất
                      </Link>
                    </li>
                  ) : (
                    <li className="left__menuItem">
                      <Link to="/signin" className="left__title">
                        <img src="/../assets/icon-pencil.svg" alt="" />
                        Sigin
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="right">
              <Route path="/healandmeal" component={HealAndMeal}></Route>
              <Route path="/dished" component={Dished}></Route>
              <Route path="/bmical" component={BMICal}></Route>
              <Route path="/portion" component={Portion}></Route>
              <Route path="/menu" component={Menu}></Route>
              <Route path="/signin" component={Signin}></Route>
              <Route path="/register" component={Register}></Route>
              <AdminRoute path="/support" component={SupportScreen}></AdminRoute>
              <Route path="/" component={HomeScreen} exact></Route>
            </div>
          </div>
        </div>
      </div>
      <footer className="row center">
      {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
        <div>coppy right ACan @2021</div>
      </footer>
    </Router>
  );
}

export default App;
