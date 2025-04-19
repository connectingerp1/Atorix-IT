// src/components/Portfolio.js (Updated)
import React from "react";
import { Link } from "react-router-dom";
import PortfolioCard from "./HomePage/PortfolioCard"; // Adjust path if needed

// Import desired icons from react-icons
import {
  FaCog,
  FaCode,
  FaShieldAlt,
  FaCubes,
  FaHandshake,
  FaLaptopCode,
} from "react-icons/fa"; // Example icons

// Data for portfolio cards
const portfolioData = [
  {
    IconComponent: FaCog, // Use the component itself
    title: "SAP Functional & Technical",
    description:
      "Ensuring a smooth-operating SAP landscape. Basis provides the technical foundation, while Security establishes robust access control. NetWeaver connects users across platforms.",
  },
  {
    IconComponent: FaCode,
    title: "SAP ABAP Development",
    description:
      "Leverage our technical and analytical skills for core SAP modules (HR, SD, HCM, FICO, MM, PP, PM). We provide cost-effective onsite & remote development to support your infrastructure.",
  },
  {
    IconComponent: FaShieldAlt,
    title: "SAP BASIS & SECURITY",
    description:
      "BASIS acts as middleware bridging OS, databases, and SAP applications (FI, CO, MM, SD, HR, etc.). Security ensures seamless, protected communication and access control.",
  },
  {
    IconComponent: FaCubes,
    title: "SAP S/4 HANA Solution",
    description:
      "Utilize the SaaS edition of S/4HANA (Public or Private Cloud) without needing hardware or internal IT staff. SAP handles infrastructure, runtime, OS, servers, storage, and networking.",
  },
  {
    IconComponent: FaHandshake,
    title: "SAP Implementation & Support",
    description:
      "Strategic deployment of SAP software (FI, CO, MM, SD, HR, etc.) tailored to your needs, from planning and configuration to ongoing support for seamless workflow alignment.",
  },
  {
    IconComponent: FaLaptopCode,
    title: "SAP Software Services",
    description:
      "Overcome decentralized data management challenges. Our services help centralize information, improving access, reducing storage costs, and minimizing data errors across functions.",
  },
];

const Portfolio = () => {
  return (
    // Use section, add ID, apply theme background and padding
    <section className="bg-neutral-bg py-16 lg:py-20" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary uppercase tracking-wider mb-3">
            {" "}
            {/* Use theme primary color */}
            Products & Solutions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>{" "}
          {/* Theme underline */}
          {/* Optional: Add a subtitle here if desired */}
          {/* <p className="mt-4 text-lg lg:text-xl text-neutral-text max-w-3xl mx-auto">Subtitle describing the section</p> */}
        </div>

        {/* Portfolio Cards Grid */}
        {/* Adjusted grid columns for better readability with text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioData.map((item, index) => (
            <PortfolioCard
              key={index}
              IconComponent={item.IconComponent} // Pass the icon component
              title={item.title}
              description={item.description} // Consider using shorter descriptions here
              aosDelay={index * 100} // Stagger animation
            />
          ))}
        </div>

        {/* Schedule Demo Button */}
        <div
          className="text-center mt-12 lg:mt-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {" "}
          {/* Added delay */}
          <Link
            to="/get-demo"
            // Apply theme button styles
            className="inline-flex items-center justify-center px-8 py-3
                                   bg-primary hover:bg-primary-hover text-neutral-white
                                   text-base font-medium rounded-button shadow-subtle
                                   transition duration-150 ease-in-out
                                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Schedule Demo
            <svg
              className="w-5 h-5 ml-2 -mr-1" // Adjusted size/margin
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true" // Hide decorative icon from screen readers
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
    </section>
  );
};

export default Portfolio;
