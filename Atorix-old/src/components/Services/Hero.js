import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <>
      {/* Navbar */}
      <div className="relative z-10 w-full">
        <NavBar />
      </div>
      <div
        className="hero min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-no-repeat relative mt-14"
        id="hero"
        style={{
          backgroundImage: `url('https://www.ibm.com/content/dam/adobe-cms/services/sites/default/files/2023-05-10/SAP_managed_services_lead.component.xl.ts=1711642241008.png/content/adobe-cms/us/en/consulting/sap-managed/_jcr_content/root/leadspace_container/leadspace')`,
          backgroundSize: "100%", // Slight zoom-out effect
          backgroundPosition: "center bottom 120%", // Move the background 20% up
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div
          className="relative z-10 flex flex-col lg:flex-row items-center justify-center text-white w-full max-w-7xl mx-auto px-6 py-12"
          style={{ transform: "translateY(-20%)" }} // Move content 20% up
        >
          {/* Text Section */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
              SAP Solutions Tailored for Your Business
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200">
              Unlock the power of SAP S/4HANA with{" "}
              <strong>Atorix IT Solutions</strong>. From seamless implementation
              to cloud migration and enterprise support, we deliver{" "}
              <strong>cutting-edge SAP solutions</strong> that drive digital
              transformation.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
            data-aos="fade-up"
            data-aos-delay="300"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
