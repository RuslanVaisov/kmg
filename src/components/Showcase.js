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
            <h2>THE BEST LOGISTICS</h2>
            <span className="showcase-square"></span>
            <span className="showcase-square"></span>
            <span className="showcase-square"></span>
          </div>
          <h1>SERVICE PROVIDER</h1>
          <div>
            <button className="showcase-btn">
              <NavLink to="/request-a-quote">REQUEST A QUOTE</NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
