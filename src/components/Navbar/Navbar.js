import React, { useState } from "react";
import HamburgerMenu from "react-hamburger-menu";

// assets
import "../../assets/Navbar.scss";
import logo from "../../imgs/logo.png";
import RightNav from "./RightNav";
import RightNavDesktop from "./RightNavDesktop";
import whatsapp from "../../imgs/whatsapp.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [Toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!Toggle);
    setOpen(!open);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <section className="navbar">
        <nav>
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
          <div className="right-nav-container">
            <RightNav open={open} Toggle={Toggle} />
            <RightNavDesktop />
          </div>
          <div onClick={handleToggle} className="hamburger">
            <HamburgerMenu
              className="hamburger-menu"
              isOpen={open}
              menuClicked={handleClick}
              width={20}
              height={10}
              strokeWidth={2}
              rotate={0}
              color="#111"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
        </nav>
      </section>
      <div className="whatsapp">
        <a
          href="https://www.whatsapp.com/?lang=ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </div>
    </>
  );
};

export default Navbar;
