// src/components/Footer.js (Light Theme Version)
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
// Import your standard logo (assuming it works on a light background)
// import logoStandard from '../assets/images/logo.svg'; // Or your main logo file

// Data for Links sections (remains the same)
const footerLinks = [
  { name: "About", path: "/about#about" },
  { name: "Services", path: "/services#services" },
  { name: "Contact", path: "/contact#contact" },
  // { name: 'Career', path: '/career' },
];

const consultingLinks = [
  { name: "Consulting Services", path: "/services#consulting" },
  { name: "SAP Application Services", path: "/services#app-services" },
  { name: "SAP ERP Technologies", path: "/services#erp-tech" },
  { name: "Microsoft Dynamics 365", path: "/services#dynamics" },
  { name: "Security Solutions", path: "/services#security" },
];

// Data for Social Media (remains the same)
const socialLinks = [
  { label: "Twitter", icon: FaTwitter, path: "#" },
  { label: "Facebook", icon: FaFacebook, path: "#" },
  { label: "LinkedIn", icon: FaLinkedinIn, path: "#" },
  { label: "Instagram", icon: FaInstagram, path: "#" },
];

const Footer = () => {
  // Define consistent link styling for LIGHT theme
  const linkStyle =
    "text-neutral-text hover:text-primary transition duration-150 ease-in-out text-sm block mb-2";
  const headingStyle =
    "text-neutral-text-dark font-semibold mb-4 uppercase text-sm tracking-wider";

  return (
    <>
      {/* Use footer tag, apply LIGHT theme background */}
      {/* Option 1: Use the subtle off-white background */}
      <footer className="bg-neutral-bg text-neutral-text pt-16 pb-6">
        {/* Option 2: Use pure white background (uncomment below and comment above) */}
        {/* <footer className="bg-neutral-white text-neutral-text pt-16 pb-6 border-t border-neutral-border"> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top area: Grid for content blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 mb-8">
            {/* 1st block: Company Info/Logo */}
            <div className="sm:col-span-1 md:col-span-4 text-center md:text-left">
              {/* Use standard Logo image (update path) */}
              {/*
                             <Link to="/" className="inline-block mb-4" aria-label="Atorix Home">
                                <img src={logoStandard} alt="Atorix IT Solutions" className="h-10 w-auto" />
                             </Link>
                             */}
              {/* OR Use text heading styled for light theme */}
              <h3 className="text-2xl font-bold text-primary mb-4">
                Atorix IT Solutions
              </h3>

              <address className="text-sm text-neutral-text-light not-italic">
                {" "}
                {/* Use lighter gray for address */}
                3rd Floor, Office No. C 305,
                <br />
                DP Road, Wireless Colony,
                <br />
                Pune, Maharashtra, 411003
              </address>
            </div>

            {/* 2nd block: Quick Links */}
            <div className="sm:col-span-1 md:col-span-2">
              <h6 className={headingStyle}>Links</h6>
              <ul>
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <HashLink smooth to={link.path} className={linkStyle}>
                      {link.name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3rd block: Consulting Services Links */}
            <div className="sm:col-span-1 md:col-span-3">
              <h6 className={headingStyle}>Consulting Services</h6>
              <ul>
                {consultingLinks.map((link) => (
                  <li key={link.name}>
                    <HashLink smooth to={link.path} className={linkStyle}>
                      {link.name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4th block: Social Media */}
            <div className="sm:col-span-2 md:col-span-3 text-center md:text-left">
              <h6 className={headingStyle}>Connect With Us</h6>
              <ul className="flex justify-center md:justify-start space-x-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-neutral-text hover:text-primary bg-neutral-white hover:bg-neutral-subtle-bg w-9 h-9 rounded-full shadow-sm border border-neutral-border transition duration-150 ease-in-out" // Adjusted styles for light theme
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom area: Copyright */}
          {/* Use the standard theme border color */}
          <div className="text-center text-sm text-neutral-text-light pt-6 border-t border-neutral-border">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <HashLink
              smooth
              to="#"
              className="hover:text-primary transition duration-150 ease-in-out"
            >
              Atorix IT Solutions
            </HashLink>
            . All rights reserved. 
          </div>
        </div>
      </footer>
      <a
        href="tel:+918956001555"
        style={{
          position: "fixed",
          bottom: "115px",
          right: "25px",
          backgroundColor: "#007BFF",
          color: "white",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          zIndex: "1000",
          textDecoration: "none",
          fontSize: "24px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="24px"
          height="24px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.28 1.12.27 2.33.42 3.57.42.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C10.1 22 2 13.9 2 4.5c0-.55.45-1 1-1H6.5c.55 0 1 .45 1 1 0 1.24.15 2.45.42 3.57.08.35-.01.74-.28 1.01l-2.2 2.21z" />
        </svg>
      </a>
    </>
  );
};

export default Footer;
