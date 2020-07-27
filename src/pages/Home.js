import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Showcase from "../components/Showcase";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Showcase />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
