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
            <h2>THỰC PHẨM & SỨC KHỎE</h2>
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
                <a href="https://vfa.gov.vn/thuc-pham-va-suc-khoe/tam-quan-trong-cua-an-uong-giup-giam-va-kiem-soat-tot-cholesterol-mau.html">
                  <img
                    src="./images/h11.jpg"
                    alt=""
                    style={{ width: "100%", maxHeight: "20rem" }}
                  />
                  <h2>
                    Tầm quan trọng của ăn uống giúp giảm và kiểm soát tốt
                    cholesterol máu
                  </h2>
                  <p style={{ color: "#000" }}>
                    Trên thế giới cũng như nước ta, các bệnh tim mạch ngày càng
                    phát triển và đang là nguyên nhân gây tử vong hàng đầu ở
                    nhiều nước. Hầu hết những bệnh tim mạch nguy hiểm nhất, kể
                    cả bệnh tim do mạch vành đều có liên quan đến tình trạng
                    tăng cholesterol trong máu.
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
                  <h2>Giảm cân nhờ thay đổi thói quen ăn uống</h2>
                  <p style={{ color: "#000" }}>
                    Khi nói đến giảm cân, người ta nghĩ ngay đến chế độ ăn kiêng
                    mà không ý thức được rằng thay đổi những thói quen ăn uống
                    xấu tưởng như nhỏ nhặt lại thực sự có thể tạo ra sự khác
                    biệt lớn.
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
                  <h2>Lợi ích sức khỏe của thực phẩm hữu cơ</h2>
                  <p style={{ color: "#000" }}>
                    Thực phẩm hữu cơ được nuôi trồng không sử dụng phân bón hóa
                    học, hóa chất, thuốc trừ sâu nên sẽ tốt cho sức khỏe chung.
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
                  <h2>9 loại rau bổ dưỡng cực tốt cho sức khỏe của bạn</h2>
                  <p style={{ color: "#000" }}>
                    Hãy bổ sung những loại rau xanh dưới đây vào thực đơn mỗi
                    ngày của bạn để cải thiện dinh dưỡng cũng như tăng cường sức
                    khỏe.
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
                  <h2>Giải độc gan bằng thực phẩm</h2>
                  <p style={{ color: "#000" }}>
                    Gan là cơ quan chuyển hóa quan trọng nhất trong cơ thể với
                    vai trò loại bỏ các chất độc ra khỏi cơ thể, giúp tiêu hóa
                    các dưỡng chất có lợi, làm sạch máu và loại bỏ các chất gây
                    ô nhiễm trong máu trước khi máu chảy đi khắp các cơ quan.
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
