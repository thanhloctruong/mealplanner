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
          
          <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="bg-box">
            <img src="/images/bbb.png" alt="" />
          </div>
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>Meal planner service</h1>
                      <h3>Meet the good taste today</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
            <div className="bg-box">
            <img src="/images/bb.jpeg" alt="" />
          </div>
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>Meal planner service</h1>
                      <h3>Food made from the heart</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <div className="bg-box">
            <img src="/images/bbbb.jpeg" alt="" />
          </div>
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>Meal planner service</h1>
                      <h3>Fresh taste at Best Price</h3>
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
            <h2>TH???C PH???M & S???C KH???E</h2>
          </div>
          <div class="row mg_t">
            <div class="col-md-6 " style={{ border: "1px solid #c0c0c0" }}>
              <div class="form_container">
                <a href="https://vfa.gov.vn/thuc-pham-va-suc-khoe/dinh-duong-nang-cao-suc-de-khang-trong-mua-dich-covid-19-ncov.html">
                  <img
                    src="./images/123.jpg"
                    alt=""
                    style={{ width: "100%", maxHeight: "20rem" }}
                  />
                  <h2>
                    Dinh d?????ng n??ng cao s???c ????? kh??ng trong ???m??a??? d???ch Covid-19
                    (nCoV)
                  </h2>
                  <p style={{ color: "#000" }}>
                    Vi r??t corona ch???ng m???i g??y vi??m ???????ng h?? h???p c???p (t??n ch??nh
                    th???c l?? Covid-19 (nCoV) ??ang ho??nh h??nh, khi???n ng?????i m???c
                    b???nh c?? c??c bi???u hi???n nh?? ho, s???t v?? kh?? th???, suy y???u n???i
                    t???ng...
                  </p>
                </a>
              </div>
            </div>
            <div class="col-md-6" style={{ border: "1px solid #c0c0c0" }}>
              <div class="form_container">
                <a href="https://vfa.gov.vn/thuc-pham-va-suc-khoe/tam-quan-trong-cua-an-uong-giup-giam-va-kiem-soat-tot-cholesterol-mau.html">
                  <img
                    src="./images/h11.jpg"
                    alt=""
                    style={{ width: "100%", maxHeight: "20rem" }}
                  />
                  <h2>
                    T???m quan tr???ng c???a ??n u???ng gi??p gi???m v?? ki???m so??t t???t
                    cholesterol m??u
                  </h2>
                  <p style={{ color: "#000" }}>
                    Tr??n th??? gi???i c??ng nh?? n?????c ta, c??c b???nh tim m???ch ng??y c??ng
                    ph??t tri???n v?? ??ang l?? nguy??n nh??n g??y t??? vong h??ng ?????u ???
                    nhi???u n?????c. H???u h???t nh???ng b???nh tim m???ch nguy hi???m nh???t, k???
                    c??? b???nh tim do m???ch v??nh ?????u c?? li??n quan ?????n t??nh tr???ng
                    t??ng cholesterol trong m??u.
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div class="row mg_t">
            <div class="col-md-6" style={{ border: "1px solid #c0c0c0" }}>
              <div class="form_container">
                <a href="https://vfa.gov.vn/thuc-pham-va-suc-khoe/giam-can-nho-thay-doi-thoi-quen-an-uong.html">
                  <img
                    src="./images/h12.png"
                    alt=""
                    style={{ width: "100%", maxHeight: "20rem" }}
                  />
                  <h2>Gi???m c??n nh??? thay ?????i th??i quen ??n u???ng</h2>
                  <p style={{ color: "#000" }}>
                    Khi n??i ?????n gi???m c??n, ng?????i ta ngh?? ngay ?????n ch??? ????? ??n ki??ng
                    m?? kh??ng ?? th???c ???????c r???ng thay ?????i nh???ng th??i quen ??n u???ng
                    x???u t?????ng nh?? nh??? nh???t l???i th???c s??? c?? th??? t???o ra s??? kh??c
                    bi???t l???n.
                  </p>
                </a>
              </div>
            </div>
            <div class="col-md-6" style={{ border: "1px solid #c0c0c0" }}>
              <div class="form_container">
                <a href="https://vfa.gov.vn/thuc-pham-va-suc-khoe/loi-ich-suc-khoe-cua-thuc-pham-huu-co.html">
                  <img
                    src="./images/h13.png"
                    alt=""
                    style={{ width: "100%", maxHeight: "20rem" }}
                  />
                  <h2>L???i ??ch s???c kh???e c???a th???c ph???m h???u c??</h2>
                  <p style={{ color: "#000" }}>
                    Th???c ph???m h???u c?? ???????c nu??i tr???ng kh??ng s??? d???ng ph??n b??n h??a
                    h???c, h??a ch???t, thu???c tr??? s??u n??n s??? t???t cho s???c kh???e chung.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="row mg_t">
            <div class="col-md-6" style={{ border: "1px solid #c0c0c0" }}>
              <div class="form_container">
                <a href="https://vfa.gov.vn/thuc-pham-va-suc-khoe/9-loai-rau-bo-duong-cuc-tot-cho-suc-khoe-cua-ban.html">
                  <img
                    src="./images/h14.png"
                    alt=""
                    style={{ width: "100%", maxHeight: "20rem" }}
                  />
                  <h2>9 lo???i rau b??? d?????ng c???c t???t cho s???c kh???e c???a b???n</h2>
                  <p style={{ color: "#000" }}>
                    H??y b??? sung nh???ng lo???i rau xanh d?????i ????y v??o th???c ????n m???i
                    ng??y c???a b???n ????? c???i thi???n dinh d?????ng c??ng nh?? t??ng c?????ng s???c
                    kh???e.
                  </p>
                </a>
              </div>
            </div>
            <div class="col-md-6" style={{ border: "1px solid #c0c0c0" }}>
              <div class="form_container">
                <a href="https://vfa.gov.vn/thuc-pham-va-suc-khoe/giai-doc-gan-bang-thuc-pham.html">
                  <img
                    src="./images/123.jpg"
                    alt=""
                    style={{ width: "100%", maxHeight: "20rem" }}
                  />
                  <h2>Gi???i ?????c gan b???ng th???c ph???m</h2>
                  <p style={{ color: "#000" }}>
                    Gan l?? c?? quan chuy???n h??a quan tr???ng nh???t trong c?? th??? v???i
                    vai tr?? lo???i b??? c??c ch???t ?????c ra kh???i c?? th???, gi??p ti??u h??a
                    c??c d?????ng ch???t c?? l???i, l??m s???ch m??u v?? lo???i b??? c??c ch???t g??y
                    ?? nhi???m trong m??u tr?????c khi m??u ch???y ??i kh???p c??c c?? quan.
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
