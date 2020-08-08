import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import PagesNav from "../components/Navbar/PagesNav";
import Footer from "../components/Footer";

const CRInformation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    axios({
      method: "POST",

      // enter the url here
      url: "/customer_reciever.php",

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
        <h1>CUSTOMER - RECEIVER INFORMATION</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Shipper/Sender name</h2>
          <div className="shipper-name">
            <div>
              <label htmlFor="First">First</label>
              <input
                name="first"
                ref={register({ required: true })}
                type="text"
              />
              {errors.first && (
                <span className="form-error">Please enter your first name</span>
              )}
            </div>
            <div>
              <label htmlFor="Last">Last</label>
              <input
                name="last"
                ref={register({ required: true })}
                type="text"
              />
              {errors.last && (
                <span className="form-error">Please enter your last name</span>
              )}
            </div>
          </div>
          <h2>Address</h2>
          <div className="address">
            <div>
              <label htmlFor="Street Address">Street Address</label>
              <input
                name="address"
                type="text"
                ref={register({ required: true })}
              />
              {errors.address && (
                <span className="form-error">Please enter your address</span>
              )}
            </div>
            <div>
              <label htmlFor="Address Line 2">Address Line 2</label>
              <input name="addressTwo" type="text" />
            </div>
            <div>
              <label htmlFor="City">City</label>
              <input
                name="city"
                type="text"
                ref={register({ required: true })}
              />
              {errors.city && (
                <span className="form-error">Please enter your city</span>
              )}
            </div>
            <div>
              <label htmlFor="State / Province / Region">
                State / Province / Region
              </label>
              <input
                name="state"
                type="text"
                ref={register({ required: true })}
              />
              {errors.state && (
                <span className="form-error">
                  Please enter your state/province/region
                </span>
              )}
            </div>
            <div>
              <label htmlFor="ZIP / Postal Code">ZIP / Postal Code</label>
              <input
                name="zip"
                type="text"
                ref={register({ required: true })}
              />
              {errors.zip && (
                <span className="form-error">
                  Please enter your zip/postal code
                </span>
              )}
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input
                name="email"
                type="text"
                ref={register({ required: true })}
              />
              {errors.email && (
                <span className="form-error">Please enter your email</span>
              )}
            </div>
            <div>
              <label htmlFor="Phone">Phone</label>
              <input
                name="phone"
                type="text"
                ref={register({ required: true })}
              />
              {errors.phone && (
                <span className="form-error">
                  Please enter your phone number
                </span>
              )}
            </div>
          </div>
          <br />
          <hr />
          <br />
          <h2>Pick up from</h2>
          <div className="pick-up-from">
            <div>
              <label htmlFor="From state">From state</label>
              <input
                name="pickState"
                type="text"
                ref={register({ required: true })}
              />
              {errors.pickState && (
                <span className="form-error">Please enter pick up state</span>
              )}
            </div>
            <div>
              <label htmlFor="From city">From city</label>
              <input
                name="pickCity"
                type="text"
                ref={register({ required: true })}
              />
              {errors.pickCity && (
                <span className="form-error">Please enter pick up city</span>
              )}
            </div>
            <div>
              <label htmlFor="From zipcode">From zipcode</label>
              <input
                name="pickZip"
                type="text"
                ref={register({ required: true })}
              />
              {errors.pickZip && (
                <span className="form-error">Please enter pick up zipcode</span>
              )}
            </div>
          </div>
          <br />
          <hr />
          <br />
          <h2>Destination</h2>
          <div className="destination">
            <div>
              <label htmlFor="Destination Country">Destination Country</label>
              <input
                name="destinationCountry"
                type="text"
                ref={register({ required: true })}
              />
              {errors.destinationCountry && (
                <span className="form-error">
                  Please enter destination country
                </span>
              )}
            </div>
            <div>
              <label htmlFor="City">City</label>
              <input
                name="destinationCity"
                type="text"
                ref={register({ required: true })}
              />
              {errors.destinationCity && (
                <span className="form-error">
                  Please enter destination city
                </span>
              )}
            </div>
            <div>
              <label htmlFor="Recipient Name">Recipient Name</label>
              <input
                name="recipientName"
                type="text"
                ref={register({ required: true })}
              />
              {errors.recipientName && (
                <span className="form-error">
                  Please enter recipient's name
                </span>
              )}
            </div>
            <div>
              <label htmlFor="Recipient address (optional)">
                Recipient address (optional)
              </label>
              <input name="recipientAddress" type="text" />
            </div>
            <div>
              <label htmlFor="Recipient phone">Recipient phone</label>
              <input
                name="recipientPhone"
                type="text"
                ref={register({ required: true })}
              />
              {errors.recipientPhone && (
                <span className="form-error">
                  Please enter recipient's phone number
                </span>
              )}
            </div>
            <div>
              <label htmlFor="Alternative phone">Alternative phone</label>
              <input name="recipientAltPhone" type="text" />
            </div>
            <div>
              <label htmlFor="Recipient email">Recipient email</label>
              <input
                name="recipientEmail"
                type="text"
                ref={register({ required: true })}
              />
              {errors.recipientEmail && (
                <span className="form-error">
                  Please enter recipient's email
                </span>
              )}
            </div>
          </div>

          <br />
          <hr />
          <br />

          <div className="request-a-quote-buttom">
            <div className="request-a-quote-buttom-row">
              <div className="request-a-quote-buttom-row-left">
                <div>
                  <input
                    ref={register({ required: true })}
                    type="checkbox"
                    name="checkboxOne"
                  />
                  <label htmlFor="Check this box to accept">
                    Check this box to accept
                  </label>
                </div>
                {errors.checkboxOne && (
                  <span className="form-error">
                    Please accept these terms to proceed.
                  </span>
                )}
                <p>
                  I consent to the inspection and screening of this by KTG
                  Shipping International in relevance toTSA regulations.
                </p>
              </div>
              <div className="request-a-quote-buttom-row-right">
                <div>
                  <input
                    ref={register({ required: true })}
                    type="checkbox"
                    name="checkboxTwo"
                  />
                  <label htmlFor="Check this box to accept">
                    Check this box to accept
                  </label>
                </div>
                {errors.checkboxTwo && (
                  <span className="form-error">
                    Please accept these terms to proceed.
                  </span>
                )}
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
            <input
              name="initials"
              ref={register({ required: true })}
              type="text"
            />
            {errors.initials && (
              <span className="form-error">Please enter your initials</span>
            )}
          </div>

          <button>SUBMIT</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CRInformation;
