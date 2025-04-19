import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from './ThemeProvider';
import logo from '../assets/images/AtorixIT.webp';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/#products' },
  { name: 'Industries', path: '/industries' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            aria-label="Atorix IT - Home"
          >
            <img
              src={logo}
              alt="Atorix IT Solutions"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              link.path.includes('#') ? (
                <HashLink
                  smooth
                  key={link.name}
                  to={link.path}
                  className="px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 rounded-md transition-colors duration-300"
                >
                  {link.name}
                </HashLink>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 rounded-md transition-colors duration-300"
                >
                  {link.name}
                </Link>
              )
            ))}

            {/* Demo Button */}
            <Link
              to="/get-demo"
              className="ml-4 btn-primary"
            >
              Get Demo
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>

            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-300"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-dark-800 shadow-lg"
          >
            <div className="px-4 py-5 space-y-2">
              {navLinks.map((link) => (
                link.path.includes('#') ? (
                  <HashLink
                    smooth
                    key={link.name}
                    to={link.path}
                    className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-md transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </HashLink>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-700 rounded-md transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                )
              ))}

              {/* Demo Button */}
              <Link
                to="/get-demo"
                className="block w-full text-center btn-primary my-4 mx-4"
                onClick={closeMenu}
              >
                Get Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
