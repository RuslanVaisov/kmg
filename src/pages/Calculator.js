import React from "react";
import PagesNav from "../components/Navbar/PagesNav";
import Footer from "../components/Footer";

// assets
import "../assets/Calculator.scss";
import shipping from "../imgs/shipping.png";

const Calculator = () => {
  return (
    <>
      <PagesNav />
      <div className="calculator-content">
        <h1>Calculator</h1>
        <p>
          Please note that Ports of America changed its regulations in regards
          to NON DRIVABLE and EXTENSIVE DAMAGED vehicles. Please note that
          Auction Export will now use container shipping for all extensive
          damaged, non drivable vehicles that have to be forklifted and are
          going to WEST AFRICA. All drivable vehicles without visible extensive
          damage will sail by RORO as usual, vehicles that are non drivable and
          do not have extensive damage will be accepted by RORO TOWABLE. Ports
          of destination will stay the same as Tincan Port for Nigeria and Tema
          port for Ghana.
        </p>

        <div className="calculator-table">
          <h3>OCEAN SHIPPING CALCULATOR</h3>
          <div className="calculator-table-row">
            <form className="calculator-table-left">
              <div className="port-of-departure">
                <label htmlFor="port of departure">Port of Departure:</label>
                <select id="portOfDeparture">
                  <option value="1" selected>
                    New York, NJ
                  </option>
                  <option value="2">Jacksonville, FL</option>
                  <option value="3">Los Angeles, CA</option>
                  <option value="4">Houston, TX</option>
                  <option value="5">Baltimore, MD</option>
                  <option value="6">Halifax, NS</option>
                  <option value="7">Savannah, GA</option>
                  <option value="8">Providence, RI</option>
                  <option value="9">Wilmington, DE</option>
                  <option value="10">Toronto, ON</option>
                </select>
              </div>
              <div className="calculator-country">
                <label htmlFor="country">Destination Country:</label>
                <select id="country">
                  <option value="4">Afghanistan</option>
                  <option value="5">Albania</option>
                  <option value="6">Algeria</option>
                  <option value="7">American Samoa</option>
                  <option value="9">Angola</option>
                  <option value="10">Anguilla</option>
                  <option value="11">Antigua and Barbuda</option>
                  <option value="12">Argentina</option>
                  <option value="13">Armenia</option>
                  <option value="231">Aruba</option>
                  <option value="15">Australia</option>
                  <option value="16">Austria</option>
                  <option value="17">Azerbaijan</option>
                  <option value="18">Bahamas</option>
                  <option value="19">Bahrain</option>
                  <option value="20">Bangladesh</option>
                  <option value="21">Barbados</option>
                  <option value="22">Belarus</option>
                  <option value="23">Belgium</option>
                  <option value="24">Belize</option>
                  <option value="25">Benin</option>
                  <option value="26">Bermuda</option>
                  <option value="28">Bolivia</option>
                  <option value="31">Brazil</option>
                  <option value="34">Bulgaria</option>
                  <option value="35">Burkina Faso</option>
                  <option value="36">Burundi</option>
                  <option value="38">Cambodia</option>
                  <option value="39">Cameroon</option>
                  <option value="40">Cape Verde</option>
                  <option value="41">Cayman Islands</option>
                  <option value="44">Chile</option>
                  <option value="45">China</option>
                  <option value="46">Colombia</option>
                  <option value="48">CONGO, Republic of</option>
                  <option value="50">Costa Rica</option>
                  <option value="51">Cote D Ivoire</option>
                  <option value="52">Croatia</option>
                  <option value="54">Cyprus</option>
                  <option value="55">Czech Republic</option>
                  <option value="56">Denmark</option>
                  <option value="57">Djibouti</option>
                  <option value="58">Dominica</option>
                  <option value="59">Dominican Republic</option>
                  <option value="60">Ecuador</option>
                  <option value="61">Egypt</option>
                  <option value="62">El Salvador</option>
                  <option value="63">Equatorial Guinea</option>
                  <option value="65">Estonia</option>
                  <option value="71">Finland</option>
                  <option value="72">France</option>
                  <option value="74">French Polynesia</option>
                  <option value="75">Gabon</option>
                  <option value="76">Georgia</option>
                  <option value="77">Germany</option>
                  <option value="78">Ghana</option>
                  <option value="80">Greece</option>
                  <option value="82">Grenada</option>
                  <option value="83">Guadeloupe</option>
                  <option value="85">Guatemala</option>
                  <option value="86">Guinea</option>
                  <option value="88">Guyana</option>
                  <option value="89">Haiti</option>
                  <option value="90">Honduras</option>
                  <option value="92">Hungary</option>
                  <option value="93">Iceland</option>
                  <option value="94">India</option>
                  <option value="95">Indonesia</option>
                  <option value="97">Iraq</option>
                  <option value="98">Ireland</option>
                  <option value="100">Israel</option>
                  <option value="101">Italy</option>
                  <option value="102">Jamaica</option>
                  <option value="103">Japan</option>
                  <option value="104">Jordan</option>
                  <option value="105">Kazakhstan</option>
                  <option value="106">Kenya</option>
                  <option value="109">Korea (ROK)</option>
                  <option value="110">Kuwait</option>
                  <option value="111">Kyrgyzstan</option>
                  <option value="113">Latvia</option>
                  <option value="114">Lebanon</option>
                  <option value="116">Liberia</option>
                  <option value="117">Libya</option>
                  <option value="119">Lithuania</option>
                  <option value="120">Luxembourg</option>
                  <option value="122">Macedonia</option>
                  <option value="123">Madagascar</option>
                  <option value="125">Malaysia</option>
                  <option value="126">Maldives</option>
                  <option value="127">Mali</option>
                  <option value="128">Malta</option>
                  <option value="233">Mauritania</option>
                  <option value="133">Mexico</option>
                  <option value="134">Moldova</option>
                  <option value="136">Mongolia</option>
                  <option value="137">Montenegro</option>
                  <option value="139">Morocco</option>
                  <option value="140">Mozambique</option>
                  <option value="142">Namibia</option>
                  <option value="145">Netherlands</option>
                  <option value="146">Netherlands Antilles</option>
                  <option value="147">New Caledonia</option>
                  <option value="148">New Zealand</option>
                  <option value="149">Nicaragua</option>
                  <option value="150">Niger</option>
                  <option value="151">Nigeria</option>
                  <option value="155">Norway</option>
                  <option value="156">Oman</option>
                  <option value="159">Panama</option>
                  <option value="161">Paraguay</option>
                  <option value="162">Peru</option>
                  <option value="163">Philippines</option>
                  <option value="165">Poland</option>
                  <option value="166">Portugal</option>
                  <option value="167">Puerto Rico</option>
                  <option value="168">Qatar</option>
                  <option value="170">Romania</option>
                  <option value="171">Russian Federation</option>
                  <option value="191">Saint Lucia</option>
                  <option value="173">Saint Vincent and the Grenadin</option>
                  <option value="176">Saudi Arabia</option>
                  <option value="177">Senegal</option>
                  <option value="180">Sierra Leone</option>
                  <option value="181">Singapore</option>
                  <option value="182">Slovakia</option>
                  <option value="183">Slovenia</option>
                  <option value="186">South Africa</option>
                  <option value="188">Spain</option>
                  <option value="189">Sri Lanka</option>
                  <option value="190">St. Kitts and Nevis</option>
                  <option value="196">Sweden</option>
                  <option value="197">Switzerland</option>
                  <option value="199">Taiwan</option>
                  <option value="200">Tajikistan</option>
                  <option value="201">Tanzania</option>
                  <option value="202">Thailand</option>
                  <option value="203">The Gambia</option>
                  <option value="204">Togo</option>
                  <option value="207">Trinidad and Tobago</option>
                  <option value="209">Turkey</option>
                  <option value="210">Turkmenistan</option>
                  <option value="213">Uganda</option>
                  <option value="214">Ukraine</option>
                  <option value="215">United Arab Emirates</option>
                  <option value="3">United Kingdom</option>
                  <option value="216">Uruguay</option>
                  <option value="217" selected>
                    Uzbekistan
                  </option>
                  <option value="218">Vanuatu</option>
                  <option value="219">Venezuela</option>
                  <option value="220">Vietnam</option>
                  <option value="222">Virgin Islands (U.S.)</option>
                  <option value="225">Yemen</option>
                  <option value="228">Zambia</option>
                </select>
              </div>
              <div className="destination-port">
                <label htmlFor="destination port">Destination Port:</label>
                <select id="destinationPort">
                  <option value="">- Select -</option>
                </select>
              </div>

              <div className="calculator-service">
                <label htmlFor="service">Service:</label>
                <select id="calculatorService">
                  <option value="1">RORO</option>
                  <option value="2">RORO Forklift</option>
                  <option value="3">RORO Towable</option>
                  <option value="4">20&#39; Container</option>
                  <option value="5">40&#39; Container (3 cars)</option>
                  <option value="6">40&#39; Container (4 cars)</option>
                  <option value="7">Consolidation</option>
                </select>
              </div>
            </form>
            <div className="calculator-table-right">
              <div className="calculation-result">
                <p>
                  For ocean shipping to this destination, kindly refer to our
                  Transportation Department - shipping@auctionexport.com
                </p>
              </div>
              <div className="calculation-cost">
                <p>OCEAN COST:</p>
                <h3>Request</h3>
              </div>
            </div>
          </div>
          <div className="calculator-table-bottom">
            <img src={shipping} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calculator;
