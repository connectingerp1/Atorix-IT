import React from "react";
import Hero from "../components/Services/Hero";
import ScrollToTop from "../components/ScrollToTop";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import ServicesComp from "../components/Services/ServicesComp";

const ServicesPage = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div id="services" className="pt-12">
        <Hero />
        <ServicesComp />

        <ScrollToTop />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
