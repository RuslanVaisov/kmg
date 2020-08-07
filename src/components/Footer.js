import React from "react";

// assets
import "../assets/Footer.scss";
import logo from "../imgs/logo.png";
import facebook from "../imgs/facebook.png";
import instagram from "../imgs/instagram.png";
import linkedin from "../imgs/linkedin.png";

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
        <a
          href="https://www.facebook.com/KMGLOGISTICS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/kmg_global_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/company/kmg-global"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
