import React, { useState } from "react";

function BMICal(props) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState('');
  const [calBmi, setBmi] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const a = weight/((height/10)*2);
    setBmi(a);
  };
  return (
    <div className="row">
      <div className="col-1">
        <img src="/images/BMI.jpg" />
        <h2>Chỉ số BMI là gì?</h2>
        <p>
          Chỉ số BMI (Body Mass Index) hay còn gọi là chỉ số khối cơ thể, chỉ số
          thể trọng, là một công cụ thường được sử dụng để đo lượng mỡ trong cơ
          thể. Chỉ số BMI chuẩn được tính dựa trên chiều cao và cân nặng, áp
          dụng cho nam và nữ trưởng thành. Chỉ số khối cơ thể được tính theo
          công thức:
        </p>
        <br />
        <h2>BMI = W/ [(H)2]</h2>
        <br />
        <p>Trong đó:</p>
        <p>BMI đơn vị thường dùng là kg/m2</p>
        <br />
        <p>W là cân nặng (kg)</p>
        <p>H là chiều cao (m)</p>
        <p>
          Một người có{" "}
          <span style={{ color: "green" }}>chỉ số BMI bình thường</span> sẽ dao
          động trong khoảng 18,5 - 24,9, con số này cho thấy bạn đang ở mức cân
          nặng lý tưởng.
        </p>
      </div>
      <div className="col-1">
        <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="Weight"></label>
          <input
            type="number"
            id="weight"
            placeholder="VD: 70"
            required
            onChange={(e) => setWeight(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="Height"></label>
          <input
            type="text"
            id="height"
            placeholder="VD: 170"
            required
            onChange={(e) => setHeight(e.target.value)}
          ></input>
        </div>
        <h2>{calBmi}</h2>
        <div>
            <label />
            <button className="btn" type="submit">
              {" "}
              Cal
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default BMICal;
