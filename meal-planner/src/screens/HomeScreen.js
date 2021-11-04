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
                    <img src="images/products/30.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Tasty Tuesday</h5>
                    <h6>
                      <span>5% Discount</span>
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
                    <h5>5 item or more</h5>
                    <h6>
                      <span>Free shipping</span>
                    </h6>
                    <Link to="menu">Order Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="book_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h2>THỰC PHẨM & SỨC KHỎE</h2>
          </div>
          <div class="row">
            <div class="col-md-6" style={{ border: "1px solid #c0c0c0" }}>
              <div class="form_container">
                <a href="https://vfa.gov.vn/thuc-pham-va-suc-khoe/dinh-duong-nang-cao-suc-de-khang-trong-mua-dich-covid-19-ncov.html">
                  <img
                    src="./images/123.jpg"
                    alt=""
                    style={{ width: "100%", maxHeight: "30rem" }}
                  />
                  <h2>
                    Dinh dưỡng nâng cao sức đề kháng trong “mùa” dịch Covid-19
                    (nCoV)
                  </h2>
                  <p style={{ color: "#000" }}>
                    Vi rút corona chủng mới gây viêm đường hô hấp cấp (tên chính
                    thức là Covid-19 (nCoV) đang hoành hành, khiến người mắc
                    bệnh có các biểu hiện như ho, sốt và khó thở, suy yếu nội
                    tạng...
                  </p>
                </a>
              </div>
            </div>
            <div class="col-md-6" style={{ border: "1px solid #c0c0c0" }}>
            <div class="form_container">
                <a href="https://vfa.gov.vn/thuc-pham-va-suc-khoe/dinh-duong-nang-cao-suc-de-khang-trong-mua-dich-covid-19-ncov.html">
                  <img
                    src="./images/123.jpg"
                    alt=""
                    style={{ width: "100%", maxHeight: "30rem" }}
                  />
                  <h2>
                    Dinh dưỡng nâng cao sức đề kháng trong “mùa” dịch Covid-19
                    (nCoV)
                  </h2>
                  <p style={{ color: "#000" }}>
                    Vi rút corona chủng mới gây viêm đường hô hấp cấp (tên chính
                    thức là Covid-19 (nCoV) đang hoành hành, khiến người mắc
                    bệnh có các biểu hiện như ho, sốt và khó thở, suy yếu nội
                    tạng...
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Booking />
    </>
  );
}

export default HomeScreen;
