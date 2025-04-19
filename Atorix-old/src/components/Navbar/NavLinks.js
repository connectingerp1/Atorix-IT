// src/components/Navbar/NavLinks.js
import React from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  const linkStyle =
    "block lg:inline-block px-3 py-2 rounded-button text-base font-medium text-neutral-text hover:text-primary hover:bg-neutral-subtle-bg transition duration-150 ease-in-out"; // Common style for links
  const mobileOnlyStyle = "block"; // Use 'block' for mobile layout stacking

  return (
    <>
      <HashLink
        className={`${linkStyle} ${mobileOnlyStyle}`}
        smooth
        to="/about#about"
      >
        About
      </HashLink>
      <HashLink
        className={`${linkStyle} ${mobileOnlyStyle}`}
        smooth
        to="/services#services"
      >
        Services
      </HashLink>
      <HashLink
        className={`${linkStyle} ${mobileOnlyStyle}`}
        smooth
        to="/#portfolio"
      >
        Products & Solutions
      </HashLink>
      <HashLink
        className={`${linkStyle} ${mobileOnlyStyle}`}
        smooth
        to="/industries#industries"
      >
        Industries
      </HashLink>
      <HashLink
        className={`${linkStyle} ${mobileOnlyStyle}`}
        to="/contact#contact"
      >
        Contact Us
      </HashLink>
      {/* Demo Button - styled differently */}
      <HashLink
        className={`
          ${mobileOnlyStyle} lg:ml-4  // Add margin on larger screens only
          inline-flex items-center justify-center w-full lg:w-auto // Full width on mobile, auto on desktop
          px-5 py-2
          border border-transparent rounded-button shadow-subtle // Use subtle shadow
          text-base font-medium text-neutral-white bg-primary hover:bg-primary-hover
          transition duration-150 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary // Added focus state
        `}
        smooth
        to="/get-demo#demo"
      >
        Demo our products
      </HashLink>
    </>
  );
};

export default NavLinks;
