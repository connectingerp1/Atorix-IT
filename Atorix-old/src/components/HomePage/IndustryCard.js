// src/components/Industries/IndustryCard.js (Create folder/file if needed)
import React from "react";

const IndustryCard = ({ iconSrc, title, aosDelay }) => {
  return (
    <div
      className="group flex flex-col items-center justify-center text-center bg-neutral-white rounded-lg shadow-subtle border border-neutral-border p-4 sm:p-6 transition duration-300 ease-in-out hover:shadow-medium hover:border-primary/50 hover:-translate-y-1" // Theme styles, vertical centering, subtle hover lift
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      // Optional: Add a minimum height if needed, e.g., min-h-[180px]
    >
      <img
        src={iconSrc}
        alt={`${title} Industry Icon`} // Descriptive alt text
        className="h-12 w-12 sm:h-16 sm:w-16 object-contain mb-3 sm:mb-4 transition duration-300 ease-in-out group-hover:scale-110" // Responsive size, contain ensures no distortion, hover scale
        loading="lazy" // Lazy load images
      />
      <h4 className="text-sm sm:text-base font-semibold text-neutral-text-dark leading-tight flex-grow flex items-center">
        {" "}
        {/* Responsive text, theme color, ensure title takes space */}
        {title}
      </h4>
    </div>
  );
};

export default IndustryCard;
