import React, { useState, useEffect } from "react";
import NavLinks from "../Navbar/NavLinks";
import { HashLink } from "react-router-hash-link";
import ThemeToggle from '../ThemeToggle';

const NavBar = () => {
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsTop(window.pageYOffset <= 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ease-in-out ${
        isTop ? "bg-transparent" : "bg-white shadow-lg"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-2 flex items-center justify-between">
        {/* Logo */}
        <HashLink smooth to="/#hero" className="flex items-center">
          <img
            src="/AtorixIT.webp"
            alt="Atorix"
            className="h-12 w-auto md:h-14 transition-all"
          />
        </HashLink>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-3">
          <NavLinks />
          <div className="ml-3">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md text-blue-900 hover:bg-blue-100 transition focus:outline-none"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {/* Hamburger / X icon */}
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-0 z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          onClick={() => setIsOpen(false)}
        />
        <div className="relative bg-white shadow-xl rounded-b-lg p-8 flex flex-col items-center space-y-6">
          <NavLinks />
          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
