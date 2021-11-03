import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <section class="about_section layout_padding">
      <div class="container  ">
        <div class="row">
          <div class="col-md-6 ">
            <div class="img-box">
              <img src="./images/danhmuc3.jpeg" style={{borderRadius: '2rem'}} alt="" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="detail-box">
              <div class="heading_container">
                <h2>Meal Planner Service</h2>
              </div>
              <p>
                Meal Plan & Order là dự án khởi nghiệp của Nhóm sinh viên và
                giảng viên ngành Dinh dưỡng của Bộ môn Dinh dưỡng và Khoa học
                thực phẩm, Viện Công nghệ Sinh học và Thực phẩm, trường ĐH Công
                nghiệp TPHCM. <br/>Chúng tôi cung cấp cho các bạn các thông tin và
                lợi ích về thực phẩm, dinh dưỡng và sức khỏe. Thông qua tình
                trạng dinh dưỡng của bạn, chúng tôi có thể tư vấn về dinh dưỡng,
                cung cấp một số thực đơn mẫu phù hợp với bạn (meal plan) và bộ
                phận bếp ăn của chúng tôi có thể thực hiện món ăn cho bạn nếu
                bạn có nhu cầu đặt hàng (order).
              </p>
              <Link to="menu">Order Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
