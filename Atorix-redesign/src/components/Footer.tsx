import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FiTwitter, FiLinkedin, FiFacebook, FiInstagram, FiPhone, FiMail } from 'react-icons/fi';
import logo from '../assets/images/AtorixIT.webp';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Footer Navigation Links
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/#products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Service Links
  const serviceLinks = [
    { name: 'SAP Implementation', path: '/services#implementation' },
    { name: 'SAP Support', path: '/services#support' },
    { name: 'SAP Integration', path: '/services#integration' },
    { name: 'SAP Migration', path: '/services#migration' },
    { name: 'SAP Freelancing', path: '/services#freelancing' },
  ];

  // Social Media Links
  const socialLinks = [
    { name: 'Twitter', icon: FiTwitter, path: 'https://twitter.com/' },
    { name: 'LinkedIn', icon: FiLinkedin, path: 'https://www.linkedin.com/company/atorix-it-solution/' },
    { name: 'Facebook', icon: FiFacebook, path: 'https://www.facebook.com/atorixitsolutions/' },
    { name: 'Instagram', icon: FiInstagram, path: 'https://instagram.com/' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-800 pt-16 pb-6 border-t border-gray-200 dark:border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4" data-aos="fade-right">
            <Link to="/" className="inline-block">
              <img src={logo} alt="Atorix IT Solutions" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Atorix IT Solutions is the Best SAP S4 HANA Implementation Partner,
              providing robust business process solutions for successful clients worldwide.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 shadow-sm hover:shadow-md transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.path.includes('#') ? (
                    <HashLink
                      smooth
                      to={link.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 inline-block py-1"
                    >
                      {link.name}
                    </HashLink>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 inline-block py-1"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <HashLink
                    smooth
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300 inline-block py-1"
                  >
                    {link.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-left" data-aos-delay="300">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-500 mr-3">
                  <FiPhone size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium">Phone</p>
                  <a href="tel:+918956001555" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                    +91 895 600 1555
                  </a>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-500 mr-3">
                  <FiMail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium">Email</p>
                  <a href="mailto:info@atorix.in" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                    info@atorix.in
                  </a>
                </div>
              </li>
              <li>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-medium mb-1">Address</p>
                <address className="not-italic text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  3rd Floor, Office No. C 305,<br />
                  DP Road, Wireless Colony,<br />
                  Pune, Maharashtra, 411003
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer - Copyright */}
        <div className="border-t border-gray-200 dark:border-dark-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} Atorix IT Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <Link to="/privacy-policy" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Call Button */}
      <a
        href="tel:+918956001555"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg hover:bg-primary-600 transition-colors duration-300"
        aria-label="Call us"
      >
        <FiPhone size={24} />
      </a>
    </footer>
  );
};

export default Footer;
