// src/components/Services/ServiceCard.js
import React from "react";

const ServiceCard = ({ imageSrc, title, description, aosDelay }) => {
  return (
    <div
      className="group flex flex-col bg-neutral-white rounded-lg shadow-subtle border border-neutral-border p-4 transition duration-300 ease-in-out hover:shadow-medium hover:border-primary/50 overflow-hidden h-[400px]"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      {/* Image section - fixed height */}
      <div className="mb-4 overflow-hidden rounded-md aspect-video h-[160px]">
        <img
          alt={`${title} illustration`}
          className="w-full h-full object-contain transform transition duration-300 ease-in-out group-hover:scale-105"
          src={imageSrc}
          loading="lazy"
        />
      </div>

      {/* Text section - no extra height forced */}
      <div className="flex-grow flex flex-col text-center">
        {/* Title */}
        <h3 className="text-lg font-semibold text-neutral-text-dark mb-2 min-h-[48px] flex items-center justify-center">
          {title}
        </h3>

        {/* Description - Justified text without forcing height */}
        <p className="text-sm text-neutral-text text-justify mb-0 px-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
