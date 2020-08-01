import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

// assets
import "../../assets/RightNavDesktop.scss";
import arrowBottom from "../../imgs/arrow-bottom.png";

const RightNavDesktop = () => {
  return (
    <div className="nav-content-desktop">
      <ul>
        <li>
          <Link
            activeClass="active"
            to="showcase"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
            isDynamic={true}
            ignoreCancelEvents={false}
            offset={-100}
          >
            <p>HOME</p>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
            isDynamic={true}
            ignoreCancelEvents={false}
            offset={-220}
          >
            <p>SERVICES</p>
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
            isDynamic={true}
            ignoreCancelEvents={false}
            offset={-100}
          >
            <p>ABOUT US</p>
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
            isDynamic={true}
            ignoreCancelEvents={false}
            offset={-150}
          >
            <p>CONTACT</p>
          </Link>
        </li>
        {/* <li>
          <NavLink to="/calculator">CALCULATOR</NavLink>
        </li> */}
        <li className="nav-forms">
          {/* <a className="nav-forms-btn" href="/">
            
          </a> */}
          FORMS
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
