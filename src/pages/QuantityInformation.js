import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import PagesNav from "../components/Navbar/PagesNav";
import Footer from "../components/Footer";

// assets

import "../assets/QuantityInformation.scss";

const QuantityInformation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    axios({
      method: "POST",

      // enter the url here
      url: "/quantity.php",

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
        <h1>QUANTITY INFORMATION</h1>
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
          <h2>Receiver Information</h2>
          <div className="receiver-info">
            <div>
              <label htmlFor="First">First</label>
              <input
                name="receiverFirst"
                ref={register({ required: true })}
                type="text"
              />
              {errors.first && (
                <span className="form-error">
                  Please enter recipient's first name
                </span>
              )}
            </div>
            <div>
              <label htmlFor="Last">Last</label>
              <input
                name="receiverLast"
                ref={register({ required: true })}
                type="text"
              />
              {errors.last && (
                <span className="form-error">
                  Please enter recipient's last name
                </span>
              )}
            </div>
            <div>
              <label htmlFor="Email">Email</label>
              <input
                name="receiverEmail"
                ref={register({ required: true })}
                type="text"
              />
              {errors.email && (
                <span className="form-error">
                  Please enter recipient's email
                </span>
              )}
            </div>
            <div>
              <label htmlFor="Receiver Phone">Receiver Phone</label>
              <input
                name="receiverPhone"
                ref={register({ required: true })}
                type="text"
              />
              {errors.phone && (
                <span className="form-error">
                  Please enter recipient's phone number
                </span>
              )}
            </div>
            <div>
              <label htmlFor="Alternative Phone">Alternative Phone</label>
              <input name="receiverAltPhone" type="text" />
            </div>
          </div>
          <br />
          <hr />
          <br />
          <h2>Unit Type (Please enter only numbers. eg 1,2 or 10)</h2>
          <div className="unit-type">
            <div className="unit-type-row">
              <div>
                <div className="col-1">
                  <input type="checkbox" name="boxes" />
                  <label htmlFor="Boxes">Boxes</label>
                </div>
              </div>
              <div>
                <label htmlFor="Number of boxes (numbers only)">
                  Number of boxes
                </label>
                <input name="boxesNumber" type="text" />
              </div>
              <div>
                <label htmlFor="Weight in Ibs (numbers only)">
                  Weight in Ibs (numbers)
                </label>
                <input name="lbsWeight" type="text" />
              </div>
              <div>
                <label htmlFor="Shipment Description">
                  Shipment Description
                </label>
                <input name="shipmentDescription" type="text" />
              </div>
            </div>
            <div className="unit-type-row">
              <div className="col-1">
                <input type="checkbox" name="barrels" />
                <label htmlFor=" Barrels/Drums">Barrels/Drums</label>
              </div>
              <div>
                <label htmlFor="Number of Barrels/Drums">
                  Number of Barrels/Drums
                </label>
                <input name="berrelsNumber" type="text" />
              </div>
              <div>
                <label htmlFor="Weight in lbs">Weight in lbs</label>
                <input name="lbsWeightTwo" type="text" />
              </div>
              <div>
                <label htmlFor="Shipment Description">
                  Shipment Description
                </label>
                <input name="shipmentDescriptionTwo" type="text" />
              </div>
            </div>
            <div className="unit-type-row">
              <div className="col-1">
                <input type="checkbox" name="suitcases" />
                <label htmlFor="Suitcases">Suitcases</label>
              </div>
              <div>
                <label htmlFor="Number of Suitcases">Number of Suitcases</label>
                <input name="suitcaseNumber" type="text" />
              </div>
              <div>
                <label htmlFor="Weight in lbs">Weight in lbs</label>
                <input name="lbsWeightThree" type="text" />
              </div>
              <div>
                <label htmlFor="Shipment Description">
                  Shipment Description
                </label>
                <input name="shipmentDescriptionThree" type="text" />
              </div>
            </div>
            <div className="unit-type-row">
              <div className="col-1">
                <input type="checkbox" name="bags" />
                <label htmlFor="Bags">Bags</label>
              </div>
              <div>
                <label htmlFor="Number of Bags">Number of Bags</label>
                <input name="bagsNumber" type="text" />
              </div>
              <div>
                <label htmlFor="Weight in lbs">Weight in lbs</label>
                <input name="lbsWeightFour" type="text" />
              </div>
              <div>
                <label htmlFor="Shipment Description">
                  Shipment Description
                </label>
                <input name="shipmentDescriptionFour" type="text" />
              </div>
            </div>
            <div className="unit-type-row">
              <div className="col-1">
                <input type="checkbox" name="кefrigerators" />
                <label htmlFor="Refrigerators">Refrigerators</label>
              </div>
              <div>
                <label htmlFor="Number of Refrigerators">
                  Number of Refrigerators
                </label>
                <input name="refrigeratorNumber" type="text" />
              </div>
              <div>
                <label htmlFor="Weight in lbs">Weight in lbs</label>
                <input name="lbsWeightFive" type="text" />
              </div>
              <div>
                <label htmlFor="Shipment Description">
                  Shipment Description
                </label>
                <input name="shipmentDescriptionFive" type="text" />
              </div>
            </div>
            <div className="unit-type-row">
              <div className="col-1">
                <input type="checkbox" name=" washingMachines" />
                <label htmlFor="Washing Machines">Washing Machines</label>
              </div>
              <div>
                <label htmlFor="Number of Washing Machines">
                  Washing Machines
                </label>
                <input name="washingMachinesNumber" type="text" />
              </div>
              <div>
                <label htmlFor="Weight in lbs">Weight in lbs</label>
                <input name="lbsWeightSix" type="text" />
              </div>
              <div>
                <label htmlFor="Shipment Description">
                  Shipment Description
                </label>
                <input name="shipmentDescriptionSix" type="text" />
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
            <input
              ref={register({ required: true })}
              name="initials"
              type="text"
            />
            {errors.initials && (
              <span className="form-error">Please enter type of ID</span>
            )}
          </div>

          <button>SUBMIT</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default QuantityInformation;
