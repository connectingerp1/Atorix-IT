import React from "react";
import Hero from "../components/Industries/Hero";
import ScrollToTop from "../components/ScrollToTop";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import IndustriesComp from "../components/Industries/IndustriesComp";


const IndustriesPage = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div id="about" className="pt-12">
        <Hero />
        <IndustriesComp />


        <ScrollToTop />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default IndustriesPage;
