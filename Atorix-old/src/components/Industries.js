// src/components/Industries.js (Updated)
import React from "react";
import IndustryCard from "./HomePage/IndustryCard"; // Adjust path if needed

// --- Correct the import paths assuming structure is src/assets/images/industries ---
import automotiveIcon from "../assets/images/industries/automotive.png";
import healthcareIcon from "../assets/images/industries/healthcare.png";
import retailIcon from "../assets/images/industries/retail.png";
import manufacturingIcon from "../assets/images/industries/manufacture.png";
import energyIcon from "../assets/images/industries/Energy.png";
import financialServicesIcon from "../assets/images/industries/finance.png";
import telecommunicationsIcon from "../assets/images/industries/communication.png";
import aerospaceIcon from "../assets/images/industries/aerospace.png";
import logisticsIcon from "../assets/images/industries/logistics.png";
import mediaIcon from "../assets/images/industries/Media.png";
import pharmaceuticalsIcon from "../assets/images/industries/pharmaceutical.png";
import constructionIcon from "../assets/images/industries/construction.png";
import fbIcon from "../assets/images/industries/food.png";
import shippingIcon from "../assets/images/industries/transportation.png";
import tradingIcon from "../assets/images/industries/trading.png";
import chemicalIcon from "../assets/images/industries/chemical.png";
import hospitalityIcon from "../assets/images/industries/hospitality.png";
import agricultureIcon from "../assets/images/industries/agriculture.png";
// Note: Insurance uses the same finance icon, which is fine if intended.
import insuranceIcon from "../assets/images/industries/finance.png";

// --- Structure the data ---
const industriesData = [
  { title: "Automotive", icon: automotiveIcon },
  { title: "Healthcare", icon: healthcareIcon },
  { title: "Retail", icon: retailIcon },
  { title: "Manufacturing", icon: manufacturingIcon },
  { title: "Energy", icon: energyIcon },
  { title: "Financial Services", icon: financialServicesIcon },
  { title: "Telecommunications", icon: telecommunicationsIcon },
  { title: "Aerospace & Defense", icon: aerospaceIcon },
  { title: "Transportation & Logistics", icon: logisticsIcon },
  { title: "Media & Entertainment", icon: mediaIcon },
  { title: "Pharmaceuticals", icon: pharmaceuticalsIcon },
  { title: "Construction", icon: constructionIcon },
  { title: "Food & Beverage", icon: fbIcon }, // Corrected title
  { title: "Shipping", icon: shippingIcon }, // Assuming distinct from T&L
  { title: "Trading", icon: tradingIcon },
  { title: "Chemical", icon: chemicalIcon },
  { title: "Hospitality", icon: hospitalityIcon },
  { title: "Agriculture", icon: agricultureIcon },
  { title: "Insurance", icon: insuranceIcon },
];

const Industries = () => {
  return (
    // Use section, add ID, apply theme background and padding
    <section className="bg-neutral-bg py-16 lg:py-20" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary uppercase tracking-wider mb-3">
            {" "}
            {/* Theme color */}
            Industries We Serve
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>{" "}
          {/* Theme underline */}
        </div>

        {/* Industries Grid - More columns for icon-focused cards */}
        {/* Adjust gap for tighter packing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
          {industriesData.map((industry, index) => (
            <IndustryCard
              key={index}
              iconSrc={industry.icon}
              title={industry.title}
              aosDelay={index * 50} // Faster stagger for many items
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
