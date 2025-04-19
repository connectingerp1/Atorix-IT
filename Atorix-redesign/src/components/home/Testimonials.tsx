import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { useTheme } from '../ThemeProvider';

// Import client logos
import binstellarLogo from '../../assets/images/clients/Binstellar.png';
import brihatiLogo from '../../assets/images/clients/Brihati.png';
import epnLogo from '../../assets/images/clients/EPN.png';
import form6Logo from '../../assets/images/clients/Form6.png';
import nxiLogo from '../../assets/images/clients/NXI.png';
import sfmsLogo from '../../assets/images/clients/SFMS.png';
import vpLogo from '../../assets/images/clients/VPTechnoLabsFinal.png';
import webseedeLogo from '../../assets/images/clients/WebSeede.png';
import protergiaLogo from '../../assets/images/clients/protergia.png';

const clientLogos = [
  { name: 'Binstellar', logo: binstellarLogo },
  { name: 'Brihati', logo: brihatiLogo },
  { name: 'EPN', logo: epnLogo },
  { name: 'Form6', logo: form6Logo },
  { name: 'NXI', logo: nxiLogo },
  { name: 'SFMS', logo: sfmsLogo },
  { name: 'VP Tech Labs', logo: vpLogo },
  { name: 'WebSeede', logo: webseedeLogo },
  { name: 'Protergia', logo: protergiaLogo },
];

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    company: 'Tech Innovations Ltd',
    position: 'CTO',
    quote: 'Atorix IT Solutions has been a game-changer for our SAP implementation. Their expertise and dedication helped us streamline our operations and reduce costs significantly.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily Johnson',
    company: 'Global Manufacturing Inc',
    position: 'IT Director',
    quote: "Working with Atorix IT Solutions on our SAP S/4HANA migration was a seamless experience. Their team's technical knowledge and project management skills are outstanding.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Wang',
    company: 'Precision Healthcare',
    position: 'COO',
    quote: 'As a healthcare provider, we needed an SAP solution that could handle our complex requirements. Atorix IT delivered beyond our expectations and continues to provide excellent support.',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  const { theme } = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`py-16 md:py-24 ${theme === 'light' ? 'bg-gray-50' : 'bg-dark-900'}`} id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-primary-500 dark:text-primary-400 uppercase">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="overflow-hidden">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-800 p-8 md:p-10 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col items-center text-center">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`${i < testimonials[currentTestimonial].rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'} w-5 h-5`}
                    />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="mt-4">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white dark:bg-dark-700 rounded-full p-3 shadow-md hover:shadow-lg text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white dark:bg-dark-700 rounded-full p-3 shadow-md hover:shadow-lg text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary-500 w-6'
                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full flex justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
