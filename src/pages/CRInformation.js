import React from "react";
import PagesNav from "../components/Navbar/PagesNav";
import Footer from "../components/Footer";

const CRInformation = () => {
  return (
    <>
      <PagesNav />
      <div className="request-a-quote">
        <h1>CUSTOMER - RECEIVER INFORMATION</h1>
        <form>
          <h2>Shipper/Sender name</h2>
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
          <h2>Pick up from</h2>
          <div className="pick-up-from">
            <label htmlFor="From state">From state</label>
            <input type="text" />
            <label htmlFor="From city">From city</label>
            <input type="text" />
            <label htmlFor="From zipcode">From zipcode</label>
            <input type="text" />
          </div>
          <br />
          <hr />
          <br />
          <h2>Destination</h2>
          <div className="destination">
            <label htmlFor="Destination Country">Destination Country</label>
            <input type="text" />
            <label htmlFor="City">City</label>
            <input type="text" />
            <label htmlFor="Recipient Name">Recipient Name</label>
            <input type="text" />
            <label htmlFor="Recipient address (optional)">
              Recipient address (optional)
            </label>
            <input type="text" />
            <label htmlFor="Recipient phone">Recipient phone</label>
            <input type="text" />
            <label htmlFor="Alternative phone">Alternative phone</label>
            <input type="text" />
            <label htmlFor="Recipient email">Recipient email</label>
            <input type="text" />
          </div>

          <br />
          <hr />
          <br />

          <div className="request-a-quote-buttom">
            <div className="request-a-quote-buttom-row">
              <div className="request-a-quote-buttom-row-left">
                <div>
                  <input type="checkbox" name="Check this box to accept" />
                  <label htmlFor="Check this box to accept">
                    Check this box to accept
                  </label>
                </div>
                <p>
                  I consent to the inspection and screening of this by KTG
                  Shipping International in relevance toTSA regulations.
                </p>
              </div>
              <div className="request-a-quote-buttom-row-right">
                <div>
                  <input type="checkbox" name="Check this box to accept" />
                  <label htmlFor="Check this box to accept">
                    Check this box to accept
                  </label>
                </div>
                <p>
                  "I certify that this cargo does not contain any unauthorized
                  explosive, incendiary, or other destructive substance or
                  items. I am aware that this endorsement and original signature
                  and shipping documents will be retained on file for a minimum
                  of 30 calendar days"
                </p>
              </div>
            </div>
          </div>
          <div className="quote-initials">
            <label htmlFor="Enter your initials">Enter your initials*</label>
            <input type="text" />
          </div>

          <button>SUBMIT</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CRInformation;
