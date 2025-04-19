// src/components/Clients.js (Updated)
import React from "react";

// --- Correct image import paths ---
import advetflyLogo from "../assets/images/clients/Advetfly.svg";
import binstellarLogo from "../assets/images/clients/Binstellar.png";
import brihatiLogo from "../assets/images/clients/Brihati.png";
import epnLogo from "../assets/images/clients/EPN.png";
import protergiaLogo from "../assets/images/clients/protergia.png"; // Assuming this is the correct one
import vptLogo from "../assets/images/clients/VPTechnoLabsFinal.png";
import webseedeLogo from "../assets/images/clients/WebSeede.png";
import nxiLogo from "../assets/images/clients/NXI.png";
import form6Logo from "../assets/images/clients/Form6.png";
import sfmsLogo from "../assets/images/clients/SFMS.png";

// --- Structure client data ---
const clientsData = [
  { name: "Advetfly", logo: advetflyLogo },
  { name: "Binstellar", logo: binstellarLogo },
  { name: "Brihati", logo: brihatiLogo },
  { name: "EPN", logo: epnLogo },
  { name: "Protergia", logo: protergiaLogo },
  { name: "VP TechnoLabs", logo: vptLogo },
  { name: "WebSeede", logo: webseedeLogo },
  { name: "NXI", logo: nxiLogo },
  { name: "Form6", logo: form6Logo },
  { name: "SFMS", logo: sfmsLogo },
];

const Clients = () => {
  return (
    // Use theme background, standard padding
    <section className="bg-neutral-bg py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary uppercase tracking-wider mb-3">
            {" "}
            {/* Theme color */}
            Our Clients
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>{" "}
          {/* Theme underline */}
          <p className="mt-4 text-lg lg:text-xl text-neutral-text max-w-3xl mx-auto">
            {" "}
            {/* Theme text */}
            Trusted by leading organizations across various sectors.
          </p>
        </div>

        {/* Marquee Container - overflow-hidden is crucial */}
        {/* Added group class for potential pause-on-hover later */}
        <div
          className="relative flex overflow-hidden group"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          {/* Marquee Track - uses the animation defined in tailwind.config.js */}
          {/* whitespace-nowrap prevents items from wrapping */}
          {/* We render the list twice for a seamless loop */}
          {/* Optional: group-hover:[animation-play-state:paused] to pause on hover */}
          <div className="py-4 flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {/* Render logos the first time */}
            {clientsData.map((client, index) => (
              <div
                key={`client-${index}`}
                className="mx-6 sm:mx-8 md:mx-10 flex-shrink-0"
              >
                {" "}
                {/* Horizontal margin */}
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-16 sm:h-20 w-auto max-w-[150px] object-contain filter grayscale hover:filter-none transition duration-300 ease-in-out" // Responsive height, auto width, grayscale effect
                  loading="lazy"
                />
              </div>
            ))}
            {/* Render logos the second time (for seamless looping) */}
            {clientsData.map((client, index) => (
              <div
                key={`client-dup-${index}`}
                className="mx-6 sm:mx-8 md:mx-10 flex-shrink-0"
              >
                {" "}
                {/* Horizontal margin */}
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-16 sm:h-20 w-auto max-w-[150px] object-contain filter grayscale hover:filter-none transition duration-300 ease-in-out" // Responsive height, auto width, grayscale effect
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
