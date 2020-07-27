import React from "react";

// assets
import logo from "../../imgs/logo.png";
import { NavLink } from "react-router-dom";
import "../../assets/PagesNav.scss";

const PagesNav = () => {
  return (
    <section className="pages-nav">
      <div className="pages-navbar">
        <div>
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div>
          <NavLink to="/">BACK TO HOME</NavLink>
        </div>
      </div>
    </section>
  );
};

export default PagesNav;
