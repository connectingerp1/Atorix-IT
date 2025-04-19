// src/components/Portfolio/PortfolioCard.js
import React from "react";

// Icon prop will be the actual component type from react-icons
const PortfolioCard = ({ IconComponent, title, description, aosDelay }) => {
  return (
    <div
      className="group flex flex-col bg-neutral-white rounded-xl shadow-subtle border border-neutral-border p-6 transition duration-300 ease-in-out hover:shadow-medium hover:border-primary/50 hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      {/* Icon Area */}
      <div className="mb-5 text-center">
        {IconComponent && (
          <IconComponent className="w-10 h-10 text-primary inline-block" />
        )}
      </div>

      {/* Text Content Area */}
      <div className="flex-grow flex flex-col text-center">
        {/* Title */}
        <h4 className="text-xl font-semibold text-neutral-text-dark mb-3 min-h-[48px] flex items-center justify-center">
          {title}
        </h4>

        {/* Description Area */}
        <div className="text-base text-neutral-text min-h-[96px] flex items-start justify-center">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
