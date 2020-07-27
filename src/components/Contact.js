import React from "react";

// assets

import "../assets/Contact.scss";
import clock from "../imgs/clock.png";
import maps from "../imgs/maps.png";
import phone from "../imgs/phone.png";

const Contact = () => {
  return (
    <section className="contact">
      <h1>CONTACT</h1>
      <div className="contact-content">
        <div className="contact-row">
          <div className="contact-row-item">
            <img src={maps} alt="maps" />
            <p>
              6802 Industrial Dr. Unit <br /> 101 Beltsville. MD 20705
            </p>
          </div>
          <div className="contact-row-item">
            <img src={phone} alt="maps" />
            <p>
              Main: 240.624.4800 <br /> Direct: 240.624.4802
            </p>
          </div>
          <div className="contact-row-item">
            <img src={clock} alt="maps" />
            <p>
              Mon – Fri: 9:00am – 6:00pm <br /> Sat: 10.30am – 2:00pm
            </p>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <label htmlFor="Name">Name*</label>
            <input type="text" />
            <label htmlFor="Email">Email*</label>
            <input type="text" />
            <label htmlFor="Phone">Phone*</label>
            <input type="text" />
            <label htmlFor="Message">Message</label>
            <textarea cols="30" rows="10"></textarea>
            <button>SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
