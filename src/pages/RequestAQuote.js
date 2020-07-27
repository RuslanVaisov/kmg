import React from "react";
import PagesNav from "../components/Navbar/PagesNav";
import Footer from "../components/Footer";

// assets
import "../assets/RequestAQuote.scss";

const RequestAQuote = () => {
  return (
    <>
      <PagesNav />
      <div className="request-a-quote">
        <h1>REQUEST A QUOTE</h1>
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

          <h2>Shipment Details</h2>
          <div className="shipment-details">
            <h4>Destination Country</h4>
            <div className="destination-country">
              <div className="destination-country-left">
                <div>
                  <input type="checkbox" name="Boxes" />
                  <label htmlFor="Boxes">Boxes</label>
                </div>
                <div>
                  <input type="checkbox" name="Suitcases" />
                  <label htmlFor="Suitcases">Suitcases</label>
                </div>
                <div>
                  <input type="checkbox" name="Drum" />
                  <label htmlFor="Drum">Drum</label>
                </div>
                <div>
                  <input type="checkbox" name="Sacks" />
                  <label htmlFor="Sacks">Sacks</label>
                </div>
                <div>
                  <input type="checkbox" name="Other" />
                  <label htmlFor="Other">Other</label>
                </div>
              </div>
              <div className="destination-country-right">
                <label htmlFor="City">City</label>
                <input type="text" />
                <label htmlFor="Recipient Name">Recipient Name</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <label htmlFor="Description of shipment">
                Description of shipment
              </label>
              <textarea
                name="Description of shipment"
                cols="60"
                rows="10"
              ></textarea>
            </div>
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
            <div>
              <div className="request-a-quote-buttom-bottom">
                <input type="checkbox" name="Check this box to accept" />
                <label htmlFor="Check this box to accept">
                  Check this box to accept
                </label>
              </div>
              <p>
                1. This contract is to ship and clear to Lagos office only, so
                you are required to pick up your items within 24 hours after
                contacted. We are not responsible for anything beyond 24 hrs.{" "}
                <br />
                2. Shipment not made within 2 weeks will be regarded as
                abandoned. Therefore, we will not be responsible for any loss or
                damage and $5 fee a day will be charged from day one till the
                item is shipped or removed. <br />
                3. Payments must be made before shipping, and Lagos Storage fee
                will be =N1000 a day. <br />
                4. We will not be responsible for custom hold or seizure of any
                item or items no matter the reason. <br />
                5. I certify that this cargo does not contain perfume,
                flammable, explosive and other destructive item. Also, I have
                been provided with the privacy act and agree to it. <br />
                6. There must be a packing list I invoice in the box OR handed
                over to KTG Shipping Int’l before any shipment ELSE, you cannot
                make any claim. <br />
                7. Check content of your box (with the packing list only) before
                you leave the office in Lagos. <br />
                8. Failure to check your Ken* at the office, or if you ask your
                Reads to be shipped to another location, will exclude KTG
                Shipping Int’l and Lagos Company from any liability. <br />
                9. All fragile items must be properly packed against breakage by
                the owner and pick-up insurance. Else we are not responsible for
                any DAMAGE. <br />
                10. T-Tech's limit of liability is 0.40 per lb., and up to a
                maximum of $400.00 (Four Hundred) per shipment. Customer need to
                pick up insurance for value of any shipment in excess of $400.00
                which can be purchase from Airline for air cargo. <br />
                11. I agree to be bound by this contract now and in the future.
                <br />
                12. 1 consent to the inspection and screening of this cargo by
                KTG Shipping Int’l in relevance to TSA regulations. Office hours
                in Nigeria: 9:00am to 5pm *please call to appointment
              </p>
            </div>
          </div>
          <div className="quote-initials">
            <label htmlFor="Enter your initials">Enter your initials*</label>
            <input type="text" />
          </div>

          <button>SUBMIT FOR QUOTE</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RequestAQuote;
