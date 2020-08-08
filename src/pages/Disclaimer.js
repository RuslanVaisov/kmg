import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import PagesNav from "../components/Navbar/PagesNav";
import Footer from "../components/Footer";

// assets
import "../assets/Disclaimer.scss";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    axios({
      method: "POST",

      // enter the url here
      url: "/disclaimer.php",

      data,
    }).then((response) => {
      if (response.status === 200) {
        alert("Thanks for your application!");
      } else if (response.data.status === "fail") {
        alert("Error in sending the application, please try again...");
      }
      console.log(response);
    });
  };

  return (
    <>
      <PagesNav />
      <div className="request-a-quote">
        <h1>DISCLAIMER</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Name</h2>
          <div className="shipper-name">
            <div>
              <label htmlFor="First">First</label>
              <input
                name="first"
                type="text"
                ref={register({ required: true })}
              />
              {errors.first && (
                <span className="form-error">Please enter your first name</span>
              )}
            </div>
            <div>
              <label htmlFor="Last">Last</label>
              <input
                name="last"
                type="text"
                ref={register({ required: true })}
              />
              {errors.last && (
                <span className="form-error">Please enter your last name</span>
              )}
            </div>
          </div>

          <div className="disclaimer-text">
            <p>
              1. This contract is to ship and clear to Lagos office only, so you
              are required to pick up your items within 24 hours after
              contacted. We are not responsible for anything beyond 24 hrs.
              <br />
              2. Shipment not picked up within 2 weeks will be consider as
              abandoned. Therefore, we will not be responsible for any loss or
              damage and $5 fee a day will be charged from day one till the item
              is shipped or removed. <br />
              3. Payments must be made before shipping, and Lagos Storage fee
              will be =N1000 a day. <br />
              4. We will not be responsible for custom hold or seizure of any
              item or items no matter the reason. <br />
              5. I certify that this cargo does not contain perfume, flammable,
              explosive and other destructive item. Also, I have been provided
              with the privacy act and agree to it. <br />
              6. There must be a packing list or an invoice in the box or handed
              over to KTG Shipping Int’l before any shipment ELSE, you cannot
              make any claim. <br />
              7. Check content of your box (with the packing list only) before
              you leave the office in Lagos. <br />
              8. Failure to check your items at the office, or if you request
              for items to be shipped to another location, will exclude KTG
              Shipping Int’l and Lagos Company from any liability. <br />
              9. All fragile items must be properly packed against breakage by
              the owner and pick-up insurance. Else we are not responsible for
              any DAMAGE. <br />
              10. KTG Shipping International limit of liability is 0.40 per lb.,
              and up to a maximum of $400.00 (Four Hundred dollars) per
              shipment. Customer need to pick up insurance for value of any
              shipment in excess of $400.00 which can be purchase from Airline
              for air cargo. (Need to show receipt). <br />
              11. I agree to be bound by this contract now and in the future.
              <br />
              12. I consent to the inspection and screening of this cargo by KTG
              Shipping Int’l in relevance to TSA regulations
            </p>

            <h3>
              Office hours in Nigeria: 9:00am to 5pm *please call for
              appointment
            </h3>

            <div className="disclaimer-bottom">
              <div>
                <label htmlFor="Sender">Sender</label>
                <input
                  name="sender"
                  ref={register({ required: true })}
                  type="text"
                />
                {errors.sender && (
                  <span className="form-error">Please enter sender's name</span>
                )}
              </div>
              <div>
                <label htmlFor="Date">Date</label>
                <input
                  name="date"
                  ref={register({ required: true })}
                  type="text"
                />
                {errors.date && (
                  <span className="form-error">Please enter the date</span>
                )}
              </div>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <div>
                <label htmlFor="KTG Shipping International">
                  KTG Shipping International
                </label>
                <input
                  name="service"
                  ref={register({ required: true })}
                  type="text"
                />
                {errors.service && (
                  <span className="form-error">Please fill the form</span>
                )}
              </div>
              <div>
                <label htmlFor="Date">Date</label>
                <input
                  name="dateTwo"
                  ref={register({ required: true })}
                  type="text"
                />
                {errors.dateTwo && (
                  <span className="form-error">Please enter the date</span>
                )}
              </div>
            </div>
          </div>

          <button>SUBMIT</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
