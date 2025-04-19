import React from "react";
import { Link } from "react-router-dom";
// Remove NavBar import - It should be in Home.js or another layout component
// Correct the image path based on your project structure
import heroImg from "../images/web-dev.svg";
// Remove Carousel imports - assuming static hero for now
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  return (
    // Use a section tag for semantics
    // Apply a background (neutral-bg or a gradient), add padding top for fixed navbar
    // Use min-height to fill screen and flex to center content vertically
    <section
      className="bg-neutral-bg flex items-center" // Adjust pt to match navbar height
      id="hero" // Keep ID for hash links
    >
      {/* Max-width container for content alignment, add horizontal padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Flex container for side-by-side layout on larger screens */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-12 md:py-16">
          {" "}
          {/* Increased gap and padding */}
          {/* Text Content Area */}
          <div
            className="lg:w-1/2 text-center lg:text-left"
            data-aos="fade-right" // Use fade animation
            data-aos-delay="200"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-text-dark mb-5">
              {" "}
              {/* Use theme text color, responsive size */}
              ATORIX IT SOLUTIONS
            </h1>
            <p className="text-lg sm:text-xl text-neutral-text mb-8">
              {" "}
              {/* Use theme text color, responsive size */}
              Atorix IT Solutions is the Best SAP S4 HANA Implementation Partner
              in India with its head office in Pune. It has unrivalled
              experience in providing robust, business process solutions for
              successful clients.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              {" "}
              {/* Button alignment and spacing */}
              <Link
                to="/contact"
                // Apply theme colors, padding, rounding, shadow
                className="inline-flex items-center justify-center px-8 py-3
                           bg-primary hover:bg-primary-hover text-neutral-white
                           text-base font-medium rounded-button shadow-subtle
                           transition duration-150 ease-in-out
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" // Added focus state
              >
                Get Started
                <svg
                  className="w-5 h-5 ml-2 -mr-1" // Slightly larger icon, adjust margin
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
              {/* Optional: Add a secondary button here if needed later
              <Link
                to="/services" // Example secondary action
                className="inline-flex items-center justify-center px-8 py-3
                           bg-neutral-subtle-bg hover:bg-neutral-border text-primary
                           text-base font-medium rounded-button shadow-subtle
                           transition duration-150 ease-in-out
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Our Services
              </Link>
              */}
            </div>
          </div>
          {/* Image Area */}
          <div
            className="lg:w-1/2 mt-10 lg:mt-0" // Add margin top only on smaller screens
            data-aos="fade-left" // Use fade animation
            data-aos-delay="400"
          >
            <img
              alt="Illustration of web development process" // More descriptive alt text
              className="w-full h-auto rounded-lg shadow-medium" // Added rounding and shadow from theme
              src={heroImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
