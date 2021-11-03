import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Dished from "../components/Dished";
import About from "./About";
import Booking from "./Booking";

function HomeScreen(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
  return (
    <>
      <section className="slider_section ">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="bg-box">
            <img src="/images/bbb.png" alt="" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>Meal planner service</h1>
                      <p>ACan chưa người yêu!</p>
                      <div className="btn-box">
                        <Link to="menu" className="btn1">
                          Order Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>Meal planner service</h1>
                      <p>Quần đùi xào xả ớt</p>
                      <div className="btn-box">
                        <Link to="menu" className="btn1">
                          Order Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>Meal planner service</h1>
                      <p>cật trâu kho tiêu</p>
                      <div className="btn-box">
                        <Link to="menu" className="btn1">
                          Order Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
      {/* <!-- end slider section --> */}
      {/* discount section */}
      <section className="offer_section layout_padding-bottom">
        <div className="offer_container">
          <div className="container ">
            <div className="row">
              <div className="col-md-6  ">
                {/* component discount */}
                <div className="box ">
                  <div className="img-box">
                    <img src="images/o1.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Tasty Thursdays</h5>
                    <h6>
                      <span>20%</span> Off
                    </h6>
                    <a href="">Order Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6  ">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/o2.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Pizza Days</h5>
                    <h6>
                      <span>15%</span> Off
                    </h6>
                    <Link to="menu">Order Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>
          <ul className="filters_menu">
            <li className="active" data-filter="*">
              All
            </li>
            <li data-filter=".burger">Burger</li>
            <li data-filter=".pizza">Pizza</li>
            <li data-filter=".pasta">Pasta</li>
            <li data-filter=".fries">Fries</li>
          </ul>

          <div className="filters-content">
            <div className="row grid">
              {loading ? (
                <LoadingBox></LoadingBox>
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (
                <>
                  {products.length === 0 && (
                    <MessageBox>No Product Found</MessageBox>
                  )}
                  {products.map((product) => (
                    <Dished key={product._id} product={product} />
                  ))}
                  {/* <Products key={product._id} product={product}></Products> */}
                </>
              )}
              {/* component dished */}
              {/* add sort */}
              {/* <Menu/> */}
            </div>
          </div>
          <div className="btn-box">
            <Link to="menu">Order Now</Link>
          </div>
        </div>
      </section>
      <About />
      <Booking />
    </>
  );
}

export default HomeScreen;
