import React from "react";

// assets
import "../assets/Footer.scss";
import logo from "../imgs/logo.png";
import facebook from "../imgs/facebook.png";
import instagram from "../imgs/instagram.png";
import twitter from "../imgs/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <p>© 2020. All rights reserved.</p>
      </div>
      <div className="social-media">
        <a href="/">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="/">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="/">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
