import React, { useState } from "react";

function BMICal(props) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [calBmi, setBmi] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(height);
    const a = weight / ((height / 100) * (height / 100));
    setBmi(a.toFixed(2));
  };
  return (
    <section class="book_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>Chỉ số BMI</h2>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img
              src="/images/BMI.jpg"
              alt="BMI"
              style={{ width: "100%" }}
            ></img>
            <h2>Chỉ số BMI là gì?</h2>
            <p>
              Chỉ số BMI (Body Mass Index) hay còn gọi là chỉ số khối cơ thể,
              chỉ số thể trọng, là một công cụ thường được sử dụng để đo lượng
              mỡ trong cơ thể. Chỉ số BMI chuẩn được tính dựa trên chiều cao và
              cân nặng, áp dụng cho nam và nữ trưởng thành. Chỉ số khối cơ thể
              được tính theo công thức:
              <br />
              <h2>BMI = W/ [(H)2]</h2>
              <br />
              Trong đó:
            </p>
            <p>BMI đơn vị thường dùng là kg/m2</p>
            <br />
            <p>W là cân nặng (kg)</p>
            <p>H là chiều cao (m)</p>
            <p>
              Một người có{" "}
              <span style={{ color: "green" }}>chỉ số BMI bình thường</span> sẽ
              dao động trong khoảng 18,5 - 24,9, con số này cho thấy bạn đang ở
              mức cân nặng lý tưởng.
              <br />
            </p>
          </div>
          <div class="col-md-6">
            <div class="form_container">
              <form onSubmit={handleSubmit}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <label htmlFor="email"> Gender</label>
                  <div>
                    <label htmlFor="male"> Male </label>
                    <input
                      type="radio"
                      name="gender"
                      required
                      value="male"
                      style={{ marginLeft: "1rem" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="male"> Female </label>
                    <input
                      type="radio"
                      name="gender"
                      required
                      value="female"
                      style={{ marginLeft: "1rem" }}
                    />
                  </div>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <select class="form-control nice-select wide" >
                      <option value="" disabled selected>
                        Age
                      </option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      <option value="32">32</option>
                      <option value="33">33</option>
                      <option value="34">34</option>
                      <option value="35">35</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                      <option value="45">45</option>
                      <option value="46">46</option>
                      <option value="47">47</option>
                      <option value="48">48</option>
                      <option value="49">49</option>
                      <option value="50">50</option>
                      <option value="51">51</option>
                      <option value="52">52</option>
                      <option value="53">53</option>
                      <option value="54">54</option>
                      <option value="55">55</option>
                      <option value="56">56</option>
                      <option value="57">57</option>
                      <option value="58">58</option>
                      <option value="59">59</option>
                      <option value="60">60</option>
                      <option value="61">61</option>
                      <option value="62">62</option>
                      <option value="63">63</option>
                      <option value="64">64</option>
                      <option value="65">65</option>
                      <option value="66">66</option>
                      <option value="67">67</option>
                      <option value="68">68</option>
                      <option value="69">69</option>
                      <option value="70">70</option>
                      <option value="71">71</option>
                      <option value="72">72</option>
                      <option value="73">73</option>
                      <option value="74">74</option>
                      <option value="75">75</option>
                      <option value="76">76</option>
                      <option value="77">77</option>
                      <option value="78">78</option>
                      <option value="79">79</option>
                      <option value="80">80</option>
                    </select>
                  </div>
                  <div>
                    <select class="form-control nice-select wide" onChange={e => {setWeight(e.target.value)}}>
                      <option value="" disabled selected>
                        Weight
                      </option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      <option value="32">32</option>
                      <option value="33">33</option>
                      <option value="34">34</option>
                      <option value="35">35</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                      <option value="45">45</option>
                      <option value="46">46</option>
                      <option value="47">47</option>
                      <option value="48">48</option>
                      <option value="49">49</option>
                      <option value="50">50</option>
                      <option value="51">51</option>
                      <option value="52">52</option>
                      <option value="53">53</option>
                      <option value="54">54</option>
                      <option value="55">55</option>
                      <option value="56">56</option>
                      <option value="57">57</option>
                      <option value="58">58</option>
                      <option value="59">59</option>
                      <option value="60">60</option>
                      <option value="61">61</option>
                      <option value="62">62</option>
                      <option value="63">63</option>
                      <option value="64">64</option>
                      <option value="65">65</option>
                      <option value="66">66</option>
                      <option value="67">67</option>
                      <option value="68">68</option>
                      <option value="69">69</option>
                      <option value="70">70</option>
                      <option value="71">71</option>
                      <option value="72">72</option>
                      <option value="73">73</option>
                      <option value="74">74</option>
                      <option value="75">75</option>
                      <option value="76">76</option>
                      <option value="77">77</option>
                      <option value="78">78</option>
                      <option value="79">79</option>
                      <option value="80">80</option>
                      <option value="81">81</option>
                      <option value="82">82</option>
                      <option value="83">83</option>
                      <option value="84">84</option>
                      <option value="85">85</option>
                      <option value="86">86</option>
                      <option value="87">87</option>
                      <option value="88">88</option>
                      <option value="89">89</option>
                      <option value="90">90</option>
                      <option value="91">91</option>
                      <option value="92">92</option>
                      <option value="93">93</option>
                      <option value="94">94</option>
                      <option value="95">95</option>
                      <option value="96">96</option>
                      <option value="97">97</option>
                      <option value="98">98</option>
                      <option value="99">99</option>
                      <option value="100">100</option>
                      <option value="101">101</option>
                      <option value="102">102</option>
                      <option value="103">103</option>
                      <option value="104">104</option>
                      <option value="105">105</option>
                      <option value="106">106</option>
                      <option value="107">107</option>
                      <option value="108">108</option>
                      <option value="109">109</option>
                      <option value="110">110</option>
                      <option value="111">111</option>
                      <option value="112">112</option>
                      <option value="113">113</option>
                      <option value="114">114</option>
                      <option value="115">115</option>
                      <option value="116">116</option>
                      <option value="117">117</option>
                      <option value="118">118</option>
                      <option value="119">119</option>
                      <option value="121">121</option>
                      <option value="122">122</option>
                      <option value="123">123</option>
                      <option value="124">124</option>
                      <option value="125">125</option>
                      <option value="126">126</option>
                      <option value="127">127</option>
                      <option value="128">128</option>
                      <option value="129">129</option>
                      <option value="130">130</option>
                    </select>
                  </div>
                  <div>
                    <select class="form-control nice-select wide" onChange={e => {setHeight(e.target.value)}}>
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
                <select class="form-control nice-select wide">
                      <option value="" disabled selected>
                        Activity
                      </option>
                      <option >Búng thun</option>
                      <option >banh đũa</option>
                      <option >nhảy dây</option>
                  </select>
                </div>
                <div>
                <select class="form-control nice-select wide">
                      <option value="" disabled selected>
                        Goal
                      </option>
                      <option >có Người yêu</option>
                      <option >cưới Dợ</option>
                      <option >tán gái</option>
                  </select>
                </div>
                <div>
                  <h2>{calBmi}</h2>
                </div>
                <div class="btn_box">
                  <button
                    type="submit"
                    style={{ right: "0", position: "absolute" }}
                  >
                    cal BMI
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

export default BMICal;
