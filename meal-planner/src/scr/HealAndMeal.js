import React from 'react';
import Magazine from '../components/Magazine'
function HealAndMeal(props) {
    return (
        <>
        <div className="banner">
          <div
            className="banner__img"
            style={{ backgroundImage: `url(${"/images/danhmuc2.jpg"})` }}
          ></div>
          <div className="aa">
            <h2 className="banner__text">Thực Phẩm & Sức Khoẻ</h2>
          </div>
        </div>
        <div className="right__content row">
          <Magazine
            src="/images/HnM1.jpg"
            title="Dinh dưỡng nâng cao sức đề kháng trong “mùa” dịch Covid-19 (nCoV)"
            text="Vi rút corona chủng mới gây viêm đường hô hấp cấp (tên chính thức là Covid-19 (nCoV) đang hoành hành, khiến người mắc bệnh có các biểu hiện như ho, sốt và khó thở, suy yếu nội tạng..."
          />
          <Magazine
            src="/images/HnM2.jpg"
            title="Các loại thực phẩm có thể gây dậy thì sớm"
            text="Dậy thì là giai đoạn phát triển sinh lý quan trọng của cơ thể, thường kéo dài 3-5 năm. Căn cứ vào những biểu hiện dậy thì bất thường ở trẻ trai trước 10 tuổi và trước 9 tuổi ở trẻ gái được coi là sớm. Một trong những nguyên nhân cơ bản của tình trạng này là do loại thực phẩm mà trẻ được sử dụng hàng ngày. Những thực phẩm làm tăng nguy cơ trẻ dậy thì sớm cần tránh gồm:"
          />
          <Magazine
            src="/images/HnM3.jpg"
            title="Giải độc gan bằng thực phẩm"
            text="Gan là cơ quan chuyển hóa quan trọng nhất trong cơ thể với vai trò loại bỏ các chất độc ra khỏi cơ thể, giúp tiêu hóa các dưỡng chất có lợi, làm sạch máu và loại bỏ các chất gây ô nhiễm trong máu trước khi máu chảy đi khắp các cơ quan."
          />
          <Magazine
            src="/images/HnM4.png"
            title="Ăn rau sống như thế nào để đảm bảo an toàn thực phẩm"
            text="Cục An toàn thực phẩm"
          />
          <Magazine
            src="/images/HnM5.jpg"
            title="9 loại rau bổ dưỡng cực tốt cho sức khỏe của bạn"
            text="Hãy bổ sung những loại rau xanh dưới đây vào thực đơn mỗi ngày của bạn để cải thiện dinh dưỡng cũng như tăng cường sức khỏe."
          />
          <Magazine
            src="/images/HnM6.jpg"
            title="Ăn gì trong mùa lạnh để tốt cho sức khỏe?"
            text="Vào mùa đông, nhiệt độ thấp, khiến sức đề kháng cơ thể yếu kém và nhiều người có nguy cơ mắc các bệnh lây nhiễm. Chính vì vậy, việc ăn uống đủ dưỡng chất giúp cơ thể nâng cao thể trạng chống lại với thời tiết lạnh và bệnh tật."
          />
          <Magazine
            src="/images/HnM7.jpg"
            title="Dinh dưỡng mùa nắng nóng"
            text="Mùa hè nóng bức, ngột ngạt, cơ thể mất nhiều nước khiến nhiều người có cảm giác mệt mỏi, chán ăn, nhất là với trẻ em và người già."
          />
          <Magazine
            src="/images/HnM8.png"
            title="Giảm cân nhờ thay đổi thói quen ăn uống"
            text="Khi nói đến giảm cân, người ta nghĩ ngay đến chế độ ăn kiêng mà không ý thức được rằng thay đổi những thói quen ăn uống xấu tưởng như nhỏ nhặt lại thực sự có thể tạo ra sự khác biệt lớn."
          />
          <Magazine
            src="/images/HnM9.jpg"
            title="Thực phẩm tốt dành cho người mắc bệnh phổi tắc nghẽn mạn tính"
            text="Chế độ ăn uống rất quan trọng với bệnh nhân mắc bệnh phổi tắc nghẽn mạn tính (COPD). Những người mắc chứng COPD tiêu hao nhiều calo hơn khi hô hấp."
          />
          <Magazine
            src="/images/HnM10.jpg"
            title="Các thực phẩm tốt cho người tiểu đường"
            text="Để kiểm soát đường huyết thành công, ngoài việc dùng thuốc, cần có chế độ ăn kiêng nhưng vẫn phải bảo đảm dinh dưỡng. Do đó, người tiểu đường nên biết cách nhận định chỉ số đường huyết của thực phẩm, từ đó biết cách cần giữ hay loại bỏ thực phẩm đó trong chế độ ăn hằng ngày."
          />
          <Magazine
            src="/images/HnM11.jpg"
            title="Chế độ ăn cho người viêm đại tràng mạn tính"
            text="Những người bị viêm đại tràng mạn, ngoài việc dùng thuốc thì việc thay đổi chế độ ăn uống, tình trạng bệnh sẽ cải thiện rất nhiều."
          />
          <Magazine
            src="/images/HnM12.jpg"
            title="Chế độ ăn cho người cao huyết áp"
            text="Chế độ ăn hợp lý giúp người bệnh cao huyết áp giảm nguy cơ bị tai biến, giảm cân nếu thừa cân béo phì."
          />
          <Magazine
            src="/images/HnM13.jpg"
            title="Tầm quan trọng của ăn uống giúp giảm và kiểm soát tốt cholesterol máu"
            text="Trên thế giới cũng như nước ta, các bệnh tim mạch ngày càng phát triển và đang là nguyên nhân gây tử vong hàng đầu ở nhiều nước. Hầu hết những bệnh tim mạch nguy hiểm nhất, kể cả bệnh tim do mạch vành đều có liên quan đến tình trạng tăng cholesterol trong máu."
          />
          <Magazine
            src="/images/HnM14.jpg"
            title="Lợi ích sức khỏe của thực phẩm hữu cơ"
            text="Thực phẩm hữu cơ được nuôi trồng không sử dụng phân bón hóa học, hóa chất, thuốc trừ sâu nên sẽ tốt cho sức khỏe chung."
          />
        </div>
      </>
    );
}

export default HealAndMeal;