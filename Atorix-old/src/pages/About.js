import React from "react";
import Hero from "../components/About/Hero";
import HowWeCanHelp from "../components/About/HowWeCanHelp";
import LeadershipBoard from "../components/About/LeadershipBoard";
import OurPresense from "../components/About/OurPresense";
import Partners from "../components/About/Partners";
import WhatWeDo from "../components/About/WhatWeDo";
import ScrollToTop from "../components/ScrollToTop";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import OurClient from "../components/About/OurClient";

const About = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div id="about" className="pt-12">
        <Hero />
        <WhatWeDo />
        <HowWeCanHelp />
        <LeadershipBoard />
        <Partners />
        {/* <OurClient /> */}
        <OurPresense />
        
        {/* Call-To-Action Footer */}

        <div className="w-full flex items-center justify-center text-white cta">
          <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">
            <div className="w-full flex flex-col lg:flex-row lg:justify-around">
              <div className="mb-4">
                <p className="hover:scale-105 transition duration-300 md:text-4xl mb-4 font-bold ">
                  Ready to Elevate Your Business?
                </p>
              </div>

              <div className="w-full lg:w-72 pt-7 lg:mx-12">
                <Link
                  to="/contact"
                  className="bg-transparent border hover:bg-blue-900 text-2xl
                        hover:border-blue-800 font-bold text-white justify-center text-left rounded-lg px-10 py-4 
                        flex items-center group"
                >
                  Contact Us
                  <svg
                    className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <ScrollToTop />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;
