import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { useTheme } from '../ThemeProvider';

// Import industry icons
import automotiveIcon from '../../assets/images/industries/automotive.png';
import healthcareIcon from '../../assets/images/industries/healthcare.png';
import retailIcon from '../../assets/images/industries/retail.png';
import manufacturingIcon from '../../assets/images/industries/manufacture.png';
import energyIcon from '../../assets/images/industries/Energy.png';
import financialServicesIcon from '../../assets/images/industries/finance.png';
import telecommunicationsIcon from '../../assets/images/industries/communication.png';
import aerospaceIcon from '../../assets/images/industries/aerospace.png';
import logisticsIcon from '../../assets/images/industries/logistics.png';
import chemicalIcon from '../../assets/images/industries/chemical.png';
import hospitalityIcon from '../../assets/images/industries/hospitality.png';
import agricultureIcon from '../../assets/images/industries/agriculture.png';

interface IndustryCardProps {
  icon: string;
  name: string;
  index: number;
  selected: boolean;
  onSelect: () => void;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, name, index, selected, onSelect }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onSelect}
      className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl
                ${selected ? 'ring-2 ring-primary-500 dark:ring-primary-400 shadow-lg' : 'shadow-md'}`}
    >
      <div className="bg-white dark:bg-dark-800 p-4 text-center transition-all duration-300 hover:-translate-y-1">
        <img
          src={icon}
          alt={name}
          className="h-12 w-12 object-contain mx-auto mb-3"
        />
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">{name}</h3>
      </div>
    </motion.div>
  );
};

const Industries: React.FC = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);

  const industries = [
    { name: 'Automotive', icon: automotiveIcon, description: 'We provide SAP solutions for automotive companies to streamline operations and enhance supply chain management.' },
    { name: 'Healthcare', icon: healthcareIcon, description: 'Our SAP solutions help healthcare organizations improve patient care and optimize administrative processes.' },
    { name: 'Retail', icon: retailIcon, description: 'Retail businesses leverage our SAP solutions to enhance customer experiences and manage inventory efficiently.' },
    { name: 'Manufacturing', icon: manufacturingIcon, description: 'We enable manufacturing companies to optimize production processes and reduce operational costs.' },
    { name: 'Energy', icon: energyIcon, description: 'Energy companies benefit from our SAP solutions for better resource management and regulatory compliance.' },
    { name: 'Financial Services', icon: financialServicesIcon, description: 'Our solutions help financial institutions streamline operations and enhance customer services.' },
    { name: 'Telecommunications', icon: telecommunicationsIcon, description: 'We provide SAP solutions for telecom companies to improve service delivery and customer management.' },
    { name: 'Aerospace', icon: aerospaceIcon, description: 'Aerospace companies use our SAP solutions for complex manufacturing and supply chain optimization.' },
    { name: 'Logistics', icon: logisticsIcon, description: 'We help logistics companies enhance their supply chain visibility and operational efficiency.' },
    { name: 'Chemical', icon: chemicalIcon, description: 'Chemical industry benefits from our SAP solutions for compliance management and production optimization.' },
    { name: 'Hospitality', icon: hospitalityIcon, description: 'Our SAP solutions help hospitality businesses deliver exceptional guest experiences and streamline operations.' },
    { name: 'Agriculture', icon: agricultureIcon, description: 'We provide SAP solutions for agriculture companies to optimize resource utilization and improve productivity.' },
  ];

  return (
    <section className={`py-16 md:py-24 relative overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-dark-800'}`} id="industries">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0">
        <div className={`w-full h-full ${theme === 'light' ? 'bg-grid-pattern-light' : 'bg-grid-pattern-dark'}`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-primary-500 dark:text-primary-400 uppercase">Diverse Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4 text-gray-900 dark:text-white">
            Industries We Serve
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            We provide SAP solutions across various industries, tailored to meet specific business needs and challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              name={industry.name}
              index={index}
              selected={selectedIndustry === index}
              onSelect={() => setSelectedIndustry(index)}
            />
          ))}
        </div>

        {/* Selected industry description */}
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-10 mb-8"
        >
          {selectedIndustry !== null ? (
            <div className="glass-container p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {industries[selectedIndustry].name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {industries[selectedIndustry].description}
              </p>
            </div>
          ) : (
            <div className="text-center p-6">
              <p className="text-gray-500 dark:text-gray-400 italic">
                Select an industry to see how we can help.
              </p>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <Link to="/industries" className="btn-outline group">
            Explore All Industries
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
