import React from "react";
import Clients from "../components/Clients";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Industries from "../components/Industries";

const Home = () => {
  return (
    // Keep this padding! It's needed because NavBar is fixed.
    <div className="pt-16 md:pt-20">
      <Hero />
      <Services />
      <Portfolio />
      <Industries />
      <Clients />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
