import React from "react";
import { NavLink } from "react-router-dom";

// assets
import "../assets/Showcase.scss";

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="showcase-container">
        <div className="showcase-content">
          <div className="showcase-content-top">
            <h2>INNOVATIVE LOGISTICS</h2>
            <span className="showcase-square"></span>
            <span className="showcase-square"></span>
            <span className="showcase-square"></span>
          </div>
          <h1>SOLUTIONS PROVIDER</h1>
          <div>
            <button className="showcase-btn">
              <NavLink to="/request-a-quote">REQUEST A QUOTE</NavLink>
            </button>
          </div>
        </div>
        <div className="showcase-text">
          <p>
            We are a dynamic team of innovative logistics solutions specialists.
            With combined experience of over 15 years, we can tender to any
            needs and requirements you have regarding moving cargo. We got it
            all covered – ocean, air, surface transportation and the multimodal
            combination of any and all. Our team of logistics professional are
            conveniently located in various time zones to provide uninterrupted
            service to our clients 24/7.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
