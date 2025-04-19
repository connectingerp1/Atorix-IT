import React from "react";
import { Link } from "react-router-dom";
import bg from "../../images/about/bg.webp";

const Hero = () => {
  const backGround = {
    backgroundImage: `url(${bg})`,
  };

  return (
    <section
      className="container mx-auto bg-gray-200 relative bg-cover bg-center h-[90vh] flex items-start mt-14"
      style={backGround}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 text-gray-300 pt-8"></div>

      <div className="relative z-10 text-white px-6 flex flex-col items-start justify-start pl-10 pt-10 max-w-2xl">
        <h1 className="text-6xl text-white font-bold animate-fadeIn leading-tight whitespace-nowrap" data-aos="fade-right">
          Welcome to Atorix SAP and IT Solutions.
        </h1>
        <p className="text-2xl mt-5 font-bold animate-fadeIn delay-300 leading-relaxed" data-aos="fade-right" >
          Atorix IT Solutions is a provider of cutting-edge business technology solutions, specializing in SAP system implementations. With a global footprint, we deliver comprehensive SAP solutions tailored to businesses of all sizes.
        </p>

        {/* Button aligned below content */}
        <div className="flex justify-start mt-6">
          <Link to="/contact">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Started <span className="ml-1">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
