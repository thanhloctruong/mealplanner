import React from 'react';

function Portion(props) {
    return (
        <>
            <div className="banner">
                <div
                    className="banner__img"
                    style={{ backgroundImage: `url(${"/images/danhmuc3.jpg"})` }}
                ></div>
                <div className="aa">
                    <h2 className="banner__text">Khẩu Phần Ăn</h2>
                </div>
            </div>
            <div className="right__content row">
                <div className="col-1 ">
                    <img
                        src="/images/danhmuc3.jpg"
                        alt=""
                        className="right__content--img"
                    />
                </div>
                <div className="col-1">
                    <h2>Khẩu phần ăn hợp lý</h2>
                    <p>
                        <h3>Dinh dưỡng hợp lý là nền tảng của sức khỏe và trí tuệ.</h3>
                        <p>Một chế độ dinh dưỡng hợp lý đáp ứng đủ nhu cầu cơ thể trong các giai đoạn khác nhau của chu kỳ vòng đời sẽ tạo ra sự tăng trưởng và phát triển tối ưu cho thai nhi và trẻ nhỏ, cũng như phòng chống hữu hiệu với đa số bệnh tật để có một thể lực khỏe mạnh, sức khỏe tốt, năng suất lao động cao và chất lượng cuộc sống tốt cho mọi lứa tuổi. Bữa ăn gia đình chính vì vậy có vai trò vô cùng quan trọng và cần được đảm bảo cả về số lượng và chất lượng.</p>
                        <h3>Một bữa ăn cân đối cần có đủ 4 nhóm thực phẩm:</h3>

                        <li>Nhóm bột đường (chủ yếu từ các loại ngũ cốc).</li>
                        <li>Nhóm chất đạm (thịt, cá, trứng, sữa, các loại đậu, đỗ...)</li>
                        <li>Nhóm chất béo (mỡ động vật, dầu thực vật).</li>
                        <li>Nhóm vitamin và khoáng chất (các loại rau, củ, quả...).</li>

                        Trích: Viện Dinh dưỡng
                    </p>
                </div>
            </div>
        </>
    );
}

export default Portion;