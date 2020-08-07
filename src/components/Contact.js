import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

// assets

import "../assets/Contact.scss";
import clock from "../imgs/clock.png";
import maps from "../imgs/maps.png";
import phone from "../imgs/phone.png";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    axios({
      method: "POST",

      // enter the url here
      url: "/api/contacts",

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
    <section className="contact">
      <h1>CONTACT</h1>
      <div className="contact-content">
        <div className="contact-row">
          <div className="contact-row-item">
            <img src={maps} alt="maps" />
            <p>
              18851 NE 29th Ave <br /> Suite 700 Aventura, FL 33180
            </p>
          </div>
          <div className="contact-row-item">
            <img src={phone} alt="maps" />
            <p>+1407-751-8885</p>
          </div>
          <div className="contact-row-item">
            <img src={clock} alt="maps" />
            <p>
              Mon – Fri: 9:00am – 6:00pm <br /> Sat: 10.30am – 2:00pm
            </p>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="Name">Name*</label>
            <input name="name" ref={register({ required: true })} type="text" />
            {errors.name && (
              <span className="form-error">Please enter your name</span>
            )}
            <label htmlFor="Email">Email*</label>
            <input
              name="email"
              ref={register({ required: true })}
              type="text"
            />
            {errors.email && (
              <span className="form-error">Please enter your email</span>
            )}
            <label htmlFor="Phone">Phone*</label>
            <input
              name="phone"
              ref={register({ required: true })}
              type="text"
            />
            {errors.email && (
              <span className="form-error">Please enter your phone number</span>
            )}
            <label htmlFor="Message">Message</label>
            <textarea name="message" cols="30" rows="10"></textarea>
            <button>SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
