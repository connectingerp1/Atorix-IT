// src/components/Cta.js (Updated)
import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  // Define background style using Tailwind arbitrary values and theme colors for overlay
  // Using the Unsplash URL from your original .cta class example
  // Added theme colors with opacity for the overlay gradient
  const backgroundStyle =
    "bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center bg-no-repeat bg-fixed"; // Image layer
  const overlayStyle =
    "bg-gradient-to-r from-neutral-text-dark/60 to-neutral-text-dark/50"; // Gradient overlay layer (using theme dark text color with opacity)

  return (
    // Use section tag, apply background and overlay, set text color, add padding
    <section
      className={`relative w-full py-16 lg:py-24 text-neutral-white ${backgroundStyle}`}
      aria-labelledby="cta-heading" // Accessibility
    >
      {/* Apply overlay */}
      <div
        className={`absolute inset-0 ${overlayStyle}`}
        aria-hidden="true"
      ></div>

      {/* Content container - positioned relative to sit above the overlay */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        {/* Flex container for text and button alignment */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-bold mb-3 text-gray-100" // Use theme heading size conventions
            >
              Ready to Scale Your Business?
            </h2>
            <p className="text-lg md:text-xl text-neutral-subtle-bg">
              {" "}
              {/* Use lighter neutral for subheading */}
              Get in touch and let us build something amazing{" "}
              <span className="font-semibold text-neutral-white">
                together!
              </span>{" "}
              {/* Emphasize 'together' */}
            </p>
          </div>

          {/* Button Area - centered on mobile, aligned right on desktop */}
          <div className="flex-shrink-0 text-center lg:text-right">
            <Link
              to="/contact"
              // Use standard theme button styles, but potentially inverted/outlined if preferred on dark bg
              // Option 1: Primary theme button
              className="inline-flex items-center justify-center px-8 py-3
                           bg-primary hover:bg-primary-hover text-neutral-white
                           text-base font-medium rounded-button shadow-subtle
                           transition duration-150 ease-in-out group
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-neutral-text-dark" // Adjust offset color for dark bg

              // Option 2: Outlined Button (Uncomment below and comment Option 1 if preferred)
              /*
              className="inline-flex items-center justify-center px-8 py-3
                         border-2 border-neutral-white text-neutral-white
                         hover:bg-neutral-white hover:text-primary  // Invert colors on hover
                         text-base font-medium rounded-button shadow-subtle
                         transition duration-150 ease-in-out group
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-white focus:ring-offset-neutral-text-dark" // Adjust focus ring
              */
            >
              Send a Message
              <svg
                className="w-5 h-5 ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1" // Subtle icon movement
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
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
    </section>
  );
};

export default Cta;
