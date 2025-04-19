import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useTheme } from '../ThemeProvider';

const CTA: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-800 dark:to-secondary-800">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="url(#smallGrid)" />
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
                Ready to Elevate Your Business?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                Partner with us to transform your business with cutting-edge SAP solutions tailored to your unique needs. Let's connect and discuss how we can help you achieve your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 dark:text-primary-500 rounded-xl font-semibold hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Us
                  <FiArrowRight className="ml-2 animate-pulse" />
                </Link>
                <Link
                  to="/get-demo"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Get a Demo
                </Link>
              </div>
            </motion.div>

            {/* Animated 3D Element */}
            <motion.div
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full max-w-xs"
            >
              {/* 3D spinning cube */}
              <div className="relative h-72 w-72 mx-auto perspective-1000">
                <div className={`relative transform-style-3d w-full h-full animate-spin-slow`}>
                  {/* Front face */}
                  <div className="absolute inset-0 w-40 h-40 bg-white/90 dark:bg-white/80 rounded-2xl shadow-2xl transform translate-z-20 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-700 font-bold text-4xl">SAP</span>
                  </div>
                  {/* Back face */}
                  <div className="absolute inset-0 w-40 h-40 bg-white/90 dark:bg-white/80 rounded-2xl shadow-2xl transform rotate-y-180 translate-z-20 flex items-center justify-center">
                    <span className="text-secondary-600 dark:text-secondary-700 font-bold text-4xl">S/4</span>
                  </div>
                  {/* Right face */}
                  <div className="absolute inset-0 w-40 h-40 bg-white/90 dark:bg-white/80 rounded-2xl shadow-2xl transform rotate-y-90 translate-z-20 flex items-center justify-center">
                    <span className="text-accent-600 dark:text-accent-700 font-bold text-4xl">HANA</span>
                  </div>
                  {/* Left face */}
                  <div className="absolute inset-0 w-40 h-40 bg-white/90 dark:bg-white/80 rounded-2xl shadow-2xl transform rotate-y-270 translate-z-20 flex items-center justify-center">
                    <span className="text-primary-600 dark:text-primary-700 font-bold text-2xl">ERP</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
