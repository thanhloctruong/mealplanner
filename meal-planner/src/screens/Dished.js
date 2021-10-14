import React from "react";

function Dished(props) {
  return (
    <>
      <div className="banner">
        <div
          className="banner__img"
          style={{ backgroundImage: `url(${"/images/product1.jpg"})` }}
        ></div>
        <div className="aa">
          <h2 className="banner__text">Món Ngon Mỗi Ngày</h2>
        </div>
      </div>
      <div className="right__content row">
        <div className="col-1 ">
          <img
            src="/images/product1.jpg"
            alt=""
            className="right__content--img"
          />
        </div>
        <div className="col-1">
          <h2>Gioi Thieu</h2>
          <p>
            Meal Plan & Order là dự án khởi nghiệp của Nhóm sinh viên và giảng
            viên ngành Dinh dưỡng của Bộ môn Dinh dưỡng và Khoa học thực phẩm,
            Viện Công nghệ Sinh học và Thực phẩm, trường ĐH Công nghiệp TPHCM.
            Chúng tôi cung cấp cho các bạn các thông tin và lợi ích về thực
            phẩm, dinh dưỡng và sức khỏe. Thông qua tình trạng dinh dưỡng của
            bạn, chúng tôi có thể tư vấn về dinh dưỡng, cung cấp một số thực đơn
            mẫu phù hợp với bạn (meal plan) và bộ phận bếp ăn của chúng tôi có
            thể thực hiện món ăn cho bạn nếu bạn có nhu cầu đặt hàng (order).
            Trước tiên các bạn có thể cung cấp thông tin của mình bằng cách nhấn
            nút "Đăng ký" dưới đây và bộ phận Tư vấn viên chăm sóc khách hàng sẽ
            liên hệ với thời gian sớm nhất có thể:
          </p>
        </div>
      </div>
    </>
  );
}

export default Dished;
