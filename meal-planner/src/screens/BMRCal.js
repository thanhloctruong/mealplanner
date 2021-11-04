import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveBMIValue } from "../actions/userActions";

function BMRCal(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { BMIValue } = userSignin;
  const [weight, setWeight] = useState(BMIValue.weight);
  const [height, setHeight] = useState(BMIValue.height);
  const [age, setAge] = useState(BMIValue.age);
  const [act, setAct] = useState(BMIValue.act);
  const [goal, setGoal] = useState(BMIValue.goal);
  const [gender, setGender] = useState(BMIValue.gender);
  const [calBmr, setBmr] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(gender.type);
    if (gender === "1") {
      const a = 9.6 * weight + 1.9 * height - 4.7 * age + 66.5;
      setBmr(a.toFixed(2));
    } else if (gender === "0") {
      const a = 13.8 * weight + 6.8 * height - 4.7 * age + 655.1;
      setBmr(a.toFixed(2));
    }
    dispatch(saveBMIValue({ weight, height, age, act, goal, gender }));
  };
  return (
    <section class="book_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>Tỷ lệ trao đổi chất cơ bản (BMR)</h2>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img
              src="/images/BMR.jpg"
              alt="BMI"
              style={{ width: "100%" }}
            ></img>
            <h2>Tỷ lệ trao đổi chất cơ bản (BMR) là gì? - Định nghĩa BMR</h2>
            <p>
              Cơ thể chúng ta đốt cháy calo liên tục trong ngày để duy trì các
              chức năng sống cơ bản như hô hấp, tuần hoàn và tiêu hóa. BMR
              (Basal Metabolic Rate – tỉ lệ trao đổi chất cơ bản) là lượng calo
              tối thiểu cần thiết cho các chức năng này khi nghỉ ngơi. Chỉ số
              này cũng xác định tốc độ cơ thể có thể đốt cháy calo, do đó sẽ thể
              hiện được mối liên hệ với khối lượng cơ thể.
              <br />
            </p>
            <p>
              Một cách phổ biến để tính tỷ lệ trao đổi chất cơ bản BMR là công
              thức Harris-Benedict: <br />
              Nữ: BMR = 655 + (9,6 × trọng lượng tính bằng kg) + (1,8 × chiều
              cao tính bằng cm) – (4,7 × tuổi tính theo năm)
              <br />
              Nam: BMR = 66 + (13,7 × trọng lượng tính bằng kg) + (5 × chiều cao
              tính bằng cm) – (6,8 × tuổi tính theo năm)
            </p>
          </div>
          <div class="col-md-6">
            <div class="form_container">
              <form onSubmit={handleSubmit}>
                <form
                  style={{ display: "flex", justifyContent: "space-between" }}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <label htmlFor="gender"> Gender</label>
                  <div>
                    <label htmlFor="gender"> Male </label>
                    <input
                      type="radio"
                      name="gender"
                      required
                      value="0"
                      style={{ marginLeft: "1rem" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="gender"> Female </label>
                    <input
                      type="radio"
                      name="gender"
                      required
                      value="1"
                      style={{ marginLeft: "1rem" }}
                    />
                  </div>
                </form>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <select
                      class="form-control nice-select wide"
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                      value={age}
                      required
                    >
                      <option value="" disabled selected>
                        Age
                      </option>
                      <option value="15">15 Tuổi</option>
                      <option value="16">16 Tuổi</option>
                      <option value="17">17 Tuổi</option>
                      <option value="18">18 Tuổi</option>
                      <option value="19">19 Tuổi</option>
                      <option value="20">20 Tuổi</option>
                      <option value="21">21 Tuổi</option>
                      <option value="22">22 Tuổi</option>
                      <option value="23">23 Tuổi</option>
                      <option value="24">24 Tuổi</option>
                      <option value="25">25 Tuổi</option>
                      <option value="26">26 Tuổi</option>
                      <option value="27">27 Tuổi</option>
                      <option value="28">28 Tuổi</option>
                      <option value="29">29 Tuổi</option>
                      <option value="30">30 Tuổi</option>
                      <option value="31">31 Tuổi</option>
                      <option value="32">32 Tuổi</option>
                      <option value="33">33 Tuổi</option>
                      <option value="34">34 Tuổi</option>
                      <option value="35">35 Tuổi</option>
                      <option value="36">36 Tuổi</option>
                      <option value="37">37 Tuổi</option>
                      <option value="38">38 Tuổi</option>
                      <option value="39">39 Tuổi</option>
                      <option value="40">40 Tuổi</option>
                      <option value="41">41 Tuổi</option>
                      <option value="42">42 Tuổi</option>
                      <option value="43">43 Tuổi</option>
                      <option value="44">44 Tuổi</option>
                      <option value="45">45 Tuổi</option>
                      <option value="46">46 Tuổi</option>
                      <option value="47">47 Tuổi</option>
                      <option value="48">48 Tuổi</option>
                      <option value="49">49 Tuổi</option>
                      <option value="50">50 Tuổi</option>
                      <option value="51">51 Tuổi</option>
                      <option value="52">52 Tuổi</option>
                      <option value="53">53 Tuổi</option>
                      <option value="54">54 Tuổi</option>
                      <option value="55">55 Tuổi</option>
                      <option value="56">56 Tuổi</option>
                      <option value="57">57 Tuổi</option>
                      <option value="58">58 Tuổi</option>
                      <option value="59">59 Tuổi</option>
                      <option value="60">60 Tuổi</option>
                      <option value="61">61 Tuổi</option>
                      <option value="62">62 Tuổi</option>
                      <option value="63">63 Tuổi</option>
                      <option value="64">64 Tuổi</option>
                      <option value="65">65 Tuổi</option>
                      <option value="66">66 Tuổi</option>
                      <option value="67">67 Tuổi</option>
                      <option value="68">68 Tuổi</option>
                      <option value="69">69 Tuổi</option>
                      <option value="70">70 Tuổi</option>
                      <option value="71">71 Tuổi</option>
                      <option value="72">72 Tuổi</option>
                      <option value="73">73 Tuổi</option>
                      <option value="74">74 Tuổi</option>
                      <option value="75">75 Tuổi</option>
                      <option value="76">76 Tuổi</option>
                      <option value="77">77 Tuổi</option>
                      <option value="78">78 Tuổi</option>
                      <option value="79">79 Tuổi</option>
                      <option value="80">80 Tuổi</option>
                    </select>
                  </div>
                  <div>
                    <select
                      class="form-control nice-select wide"
                      required
                      value={weight}
                      onChange={(e) => {
                        setWeight(e.target.value);
                      }}
                    >
                      <option value="" disabled selected>
                        Weight
                      </option>
                      <option value="30">30 kg</option>
                      <option value="31">31 kg</option>
                      <option value="32">32 kg</option>
                      <option value="33">33 kg</option>
                      <option value="34">34 kg</option>
                      <option value="35">35 kg</option>
                      <option value="36">36 kg</option>
                      <option value="37">37 kg</option>
                      <option value="38">38 kg</option>
                      <option value="39">39 kg</option>
                      <option value="40">40 kg</option>
                      <option value="41">41 kg</option>
                      <option value="42">42 kg</option>
                      <option value="43">43 kg</option>
                      <option value="44">44 kg</option>
                      <option value="45">45 kg</option>
                      <option value="46">46 kg</option>
                      <option value="47">47 kg</option>
                      <option value="48">48 kg</option>
                      <option value="49">49 kg</option>
                      <option value="50">50 kg</option>
                      <option value="51">51 kg</option>
                      <option value="52">52 kg</option>
                      <option value="53">53 kg</option>
                      <option value="54">54 kg</option>
                      <option value="55">55 kg</option>
                      <option value="56">56 kg</option>
                      <option value="57">57 kg</option>
                      <option value="58">58 kg</option>
                      <option value="59">59 kg</option>
                      <option value="60">60 kg</option>
                      <option value="61">61 kg</option>
                      <option value="62">62 kg</option>
                      <option value="63">63 kg</option>
                      <option value="64">64 kg</option>
                      <option value="65">65 kg</option>
                      <option value="66">66 kg</option>
                      <option value="67">67 kg</option>
                      <option value="68">68 kg</option>
                      <option value="69">69 kg</option>
                      <option value="70">70 kg</option>
                      <option value="71">71 kg</option>
                      <option value="72">72 kg</option>
                      <option value="73">73 kg</option>
                      <option value="74">74 kg</option>
                      <option value="75">75 kg</option>
                      <option value="76">76 kg</option>
                      <option value="77">77 kg</option>
                      <option value="78">78 kg</option>
                      <option value="79">79 kg</option>
                      <option value="80">80 kg</option>
                      <option value="81">81 kg</option>
                      <option value="82">82 kg</option>
                      <option value="83">83 kg</option>
                      <option value="84">84 kg</option>
                      <option value="85">85 kg</option>
                      <option value="86">86 kg</option>
                      <option value="87">87 kg</option>
                      <option value="88">88 kg</option>
                      <option value="89">89 kg</option>
                      <option value="90">90 kg</option>
                      <option value="91">91 kg</option>
                      <option value="92">92 kg</option>
                      <option value="93">93 kg</option>
                      <option value="94">94 kg</option>
                      <option value="95">95 kg</option>
                      <option value="96">96 kg</option>
                      <option value="97">97 kg</option>
                      <option value="98">98 kg</option>
                      <option value="99">99 kg</option>
                      <option value="100">100 kg</option>
                      <option value="101">101 kg</option>
                      <option value="102">102 kg</option>
                      <option value="103">103 kg</option>
                      <option value="104">104 kg</option>
                      <option value="105">105 kg</option>
                      <option value="106">106 kg</option>
                      <option value="107">107 kg</option>
                      <option value="108">108 kg</option>
                      <option value="109">109 kg</option>
                      <option value="110">110 kg</option>
                      <option value="111">111 kg</option>
                      <option value="112">112 kg</option>
                      <option value="113">113 kg</option>
                      <option value="114">114 kg</option>
                      <option value="115">115 kg</option>
                      <option value="116">116 kg</option>
                      <option value="117">117 kg</option>
                      <option value="118">118 kg</option>
                      <option value="119">119 kg</option>
                      <option value="121">121 kg</option>
                      <option value="122">122 kg</option>
                      <option value="123">123 kg</option>
                      <option value="124">124 kg</option>
                      <option value="125">125 kg</option>
                      <option value="126">126 kg</option>
                      <option value="127">127 kg</option>
                      <option value="128">128 kg</option>
                      <option value="129">129 kg</option>
                      <option value="130">130 kg</option>
                    </select>
                  </div>
                  <div>
                    <select
                      class="form-control nice-select wide"
                      onChange={(e) => {
                        setHeight(e.target.value);
                      }}
                      value={height}
                    >
                      <option value="" disabled selected>
                        Height
                      </option>
                      <option value="100">100 cm</option>
                      <option value="101">101 cm</option>
                      <option value="102">102 cm</option>
                      <option value="103">103 cm</option>
                      <option value="104">104 cm</option>
                      <option value="105">105 cm</option>
                      <option value="106">106 cm</option>
                      <option value="107">107 cm</option>
                      <option value="108">108 cm</option>
                      <option value="109">109 cm</option>
                      <option value="110">110 cm</option>
                      <option value="111">111 cm</option>
                      <option value="112">112 cm</option>
                      <option value="113">113 cm</option>
                      <option value="114">114 cm</option>
                      <option value="115">115 cm</option>
                      <option value="116">116 cm</option>
                      <option value="117">117 cm</option>
                      <option value="118">118 cm</option>
                      <option value="119">119 cm</option>
                      <option value="121">121 cm</option>
                      <option value="122">122 cm</option>
                      <option value="123">123 cm</option>
                      <option value="124">124 cm</option>
                      <option value="125">125 cm</option>
                      <option value="126">126 cm</option>
                      <option value="127">127 cm</option>
                      <option value="128">128 cm</option>
                      <option value="129">129 cm</option>
                      <option value="130">130 cm</option>
                      <option value="131">131 cm</option>
                      <option value="132">132 cm</option>
                      <option value="133">133 cm</option>
                      <option value="134">134 cm</option>
                      <option value="135">135 cm</option>
                      <option value="136">136 cm</option>
                      <option value="137">137 cm</option>
                      <option value="138">138 cm</option>
                      <option value="139">139 cm</option>
                      <option value="140">140 cm</option>
                      <option value="141">141 cm</option>
                      <option value="142">142 cm</option>
                      <option value="143">143 cm</option>
                      <option value="144">144 cm</option>
                      <option value="145">145 cm</option>
                      <option value="146">146 cm</option>
                      <option value="147">147 cm</option>
                      <option value="148">148 cm</option>
                      <option value="149">149 cm</option>
                      <option value="150">150 cm</option>
                      <option value="151">151 cm</option>
                      <option value="152">152 cm</option>
                      <option value="153">153 cm</option>
                      <option value="154">154 cm</option>
                      <option value="155">155 cm</option>
                      <option value="156">156 cm</option>
                      <option value="157">157 cm</option>
                      <option value="158">158 cm</option>
                      <option value="159">159 cm</option>
                      <option value="160">160 cm</option>
                      <option value="161">161 cm</option>
                      <option value="162">162 cm</option>
                      <option value="163">163 cm</option>
                      <option value="164">164 cm</option>
                      <option value="165">165 cm</option>
                      <option value="166">166 cm</option>
                      <option value="167">167 cm</option>
                      <option value="168">168 cm</option>
                      <option value="169">169 cm</option>
                      <option value="170">170 cm</option>
                      <option value="171">171 cm</option>
                      <option value="172">172 cm</option>
                      <option value="173">173 cm</option>
                      <option value="174">174 cm</option>
                      <option value="175">175 cm</option>
                      <option value="176">176 cm</option>
                      <option value="177">177 cm</option>
                      <option value="178">178 cm</option>
                      <option value="179">179 cm</option>
                      <option value="180">180 cm</option>
                      <option value="181">181 cm</option>
                      <option value="182">182 cm</option>
                      <option value="183">183 cm</option>
                      <option value="184">184 cm</option>
                      <option value="185">185 cm</option>
                      <option value="186">186 cm</option>
                      <option value="187">187 cm</option>
                      <option value="188">188 cm</option>
                      <option value="189">189 cm</option>
                      <option value="190">190 cm</option>
                      <option value="191">191 cm</option>
                      <option value="192">192 cm</option>
                      <option value="193">193 cm</option>
                      <option value="194">194 cm</option>
                      <option value="195">195 cm</option>
                      <option value="196">196 cm</option>
                      <option value="197">197 cm</option>
                      <option value="198">198 cm</option>
                      <option value="199">199 cm</option>
                      <option value="200">200 cm</option>
                      <option value="201">201 cm</option>
                      <option value="202">202 cm</option>
                      <option value="203">203 cm</option>
                      <option value="204">204 cm</option>
                      <option value="205">205 cm</option>
                      <option value="206">206 cm</option>
                      <option value="207">207 cm</option>
                      <option value="208">208 cm</option>
                      <option value="209">209 cm</option>
                      <option value="210">210 cm</option>
                    </select>
                  </div>
                </div>

                <div>
                  <select
                    class="form-control nice-select wide"
                    required
                    onChange={(e) => {
                      setAct(e.target.value);
                    }}
                    value={act}
                  >
                    <option value="" disabled selected>
                      Activity
                    </option>
                    <option value="1,2">
                      Nhẹ: Ít hoặc không vận động, công nhân văn phòng
                    </option>
                    <option value="1,375">
                      Vừa: Người chơi thể thao nhẹ nhàng, tuần 1-2 ngày/tuần{" "}
                    </option>
                    <option value="1,55">
                      Nặng: Người chơi thể thao đều đặn 3 - 5 ngày/tuần{" "}
                    </option>
                  </select>
                </div>
                <div>
                  <select
                    class="form-control nice-select wide"
                    required
                    onChange={(e) => {
                      setGoal(e.target.value);
                    }}
                    value={goal}
                  >
                    <option value="" disabled selected>
                      Goal
                    </option>
                    <option>Giảm cân, giảm mỡ bụng</option>
                    <option>Tăng cân, tăng cơ</option>
                    <option>Cân bằng cuộc sống lành mạnh</option>
                  </select>
                </div>
                <div>
                  <h2>{calBmr}</h2>
                </div>
                <div class="btn_box">
                  <button
                    type="submit"
                    style={{ right: "0", position: "absolute" }}
                  >
                    cal BMR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BMRCal;
