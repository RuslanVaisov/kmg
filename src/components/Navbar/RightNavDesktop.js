import React from "react";
import { NavLink } from "react-router-dom";

import arrowBottom from "../../imgs/arrow-bottom.png";

// assets
import "../../assets/RightNavDesktop.scss";

const RightNavDesktop = () => {
  return (
    <div className="nav-content-desktop">
      <ul>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="#about">ABOUT US</a>
        </li>

        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <NavLink to="/calculator">CALCULATOR</NavLink>
        </li>
        <li className="nav-forms">
          <a className="nav-forms-btn" href="#">
            FORMS
          </a>
          <img src={arrowBottom} alt="arrow-bottom" />
          <ul className="nav-forms-content">
            <li>
              <NavLink to="/request-a-quote">Request a quote</NavLink>
            </li>
            <li>
              <NavLink to="/customer-receiver-information">
                Customer-Receiver Information
              </NavLink>
            </li>
            <li>
              <NavLink to="/quantity-information">Quantity Information</NavLink>
            </li>
            <li>
              <NavLink to="/disclaimer">Disclaimer</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default RightNavDesktop;
