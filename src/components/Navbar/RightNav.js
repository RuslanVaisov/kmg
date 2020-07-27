import React from "react";
import { NavLink } from "react-router-dom";

import "../../assets/RightNav.scss";
import arrowBottom from "../../imgs/arrow-bottom.png";

const RightNav = ({ Toggle }) => {
  return (
    <div className="nav-content">
      <ul
        style={{
          transform: Toggle ? "translateX(0)" : "translateX(100%)",
        }}
      >
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
        <li className="nav-forms-two">
          <NavLink to="/request-a-quote">REQUEST A QUOTE</NavLink>
        </li>
        <li className="nav-forms-two">
          <NavLink to="/customer-receiver-information">
            CUSTOMER-RECEIVER INFORMATION
          </NavLink>
        </li>
        <li className="nav-forms-two">
          <NavLink to="/quantity-information">QUANTITY INFORMATION</NavLink>
        </li>
        <li className="nav-forms-two">
          <NavLink to="/disclaimer">DISCLAIMER</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RightNav;
