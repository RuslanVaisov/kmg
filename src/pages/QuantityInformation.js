import React from "react";
import PagesNav from "../components/Navbar/PagesNav";
import Footer from "../components/Footer";

// assets

import "../assets/QuantityInformation.scss";

const QuantityInformation = () => {
  return (
    <>
      <PagesNav />
      <div className="request-a-quote">
        <h1>QUANTITY INFORMATION</h1>
        <form>
          <h2>Name</h2>
          <div className="shipper-name">
            <div>
              <label htmlFor="First">First</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="Last">Last</label>
              <input type="text" />
            </div>
          </div>
          <h2>Address</h2>
          <div className="address">
            <label htmlFor="Street Address">Street Address</label>
            <input type="text" />
            <label htmlFor="Address Line 2">Address Line 2</label>
            <input type="text" />
            <label htmlFor="City">City</label>
            <input type="text" />
            <label htmlFor="State / Province / Region">
              State / Province / Region
            </label>
            <input type="text" />
            <label htmlFor="ZIP / Postal Code">ZIP / Postal Code</label>
            <input type="text" />
            <label htmlFor="Email">Email</label>
            <input type="text" />
            <label htmlFor="Phone">Phone</label>
            <input type="text" />
          </div>
          <br />
          <hr />
          <br />
          <h2>Receiver Information</h2>
          <div className="receiver-info">
            <label htmlFor="First">First</label>
            <input type="text" />
            <label htmlFor="Last">Last</label>
            <input type="text" />
            <label htmlFor="Email">Email</label>
            <input type="text" />
            <label htmlFor="Receiver Phone">Receiver Phone</label>
            <input type="text" />
            <label htmlFor="Alternative Phone">Alternative Phone</label>
            <input type="text" />
          </div>
          <br />
          <hr />
          <br />
          <h2>Unit Type (Please enter only numbers. eg 1,2 or 10)</h2>
          <div className="unit-type">
            <div className="unit-type-row">
              <div>
                <div className="col-1">
                  <input type="checkbox" name="Boxes" />
                  <label htmlFor="Boxes">Boxes</label>
                </div>
              </div>
              <div>
                <label htmlFor="Number of boxes (numbers only)">
                  Number of boxes
                </label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="Weight in Ibs (numbers only)">
                  Weight in Ibs (numbers)
                </label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="Shipment Description">
                  Shipment Description
                </label>
                <input type="text" />
              </div>
            </div>
            <div className="unit-type-row">
              <div className="col-1">
                <input type="checkbox" name=" Barrels/Drums" />
                <label htmlFor=" Barrels/Drums">Barrels/Drums</label>
              </div>
              <div>
                <label htmlFor="Number of Barrels/Drums">
                  Number of Barrels/Drums
                </label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="Weight in lbs">Weight in lbs</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="Shipment Description">
                  Shipment Description
                </label>
                <input type="text" />
              </div>
            </div>
            <div className="unit-type-row">
              <div className="col-1">
                <input type="checkbox" name="Suitcases" />
                <label htmlFor="Suitcases">Suitcases</label>
              </div>
              <div>
                <label htmlFor="Number of Suitcases">Number of Suitcases</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="Weight in lbs">Weight in lbs</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="Shipment Description">
                  Shipment Description
                </label>
                <input type="text" />
              </div>
            </div>
            <div className="unit-type-row">
              <div className="col-1">
                <input type="checkbox" name="Bags" />
                <label htmlFor="Bags">Bags</label>
              </div>
              <div>
                <label htmlFor="Number of Bags">Number of Bags</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="Weight in lbs">Weight in lbs</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="Shipment Description">
                  Shipment Description
                </label>
                <input type="text" />
              </div>
            </div>
            <div className="unit-type-row">
              <div className="col-1">
                <input type="checkbox" name="Refrigerators" />
                <label htmlFor="Refrigerators">Refrigerators</label>
              </div>
              <div>
                <label htmlFor="Number of Refrigerators">
                  Number of Refrigerators
                </label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="Weight in lbs">Weight in lbs</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="Shipment Description">
                  Shipment Description
                </label>
                <input type="text" />
              </div>
            </div>
            <div className="unit-type-row">
              <div className="col-1">
                <input type="checkbox" name=" Washing Machines" />
                <label htmlFor="Washing Machines">Washing Machines</label>
              </div>
              <div>
                <label htmlFor="Number of Washing Machines">
                  Washing Machines
                </label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="Weight in lbs">Weight in lbs</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="Shipment Description">
                  Shipment Description
                </label>
                <input type="text" />
              </div>
            </div>
          </div>

          <br />
          <hr />
          <br />

          <div className="quote-initials">
            <label htmlFor="Type of ID Receive Matching phone on ID:">
              Type of ID Receive Matching phone on ID:
            </label>
            <input type="text" />
          </div>

          <button>SUBMIT</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default QuantityInformation;
