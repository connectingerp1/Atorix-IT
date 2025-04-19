import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiCode, FiDatabase, FiCloud, FiServer, FiUsers, FiGlobe, FiLifeBuoy, FiShield } from 'react-icons/fi';
import { useTheme } from '../ThemeProvider';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, color }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={`bg-white dark:bg-dark-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300
                 border-t-4 ${color} hover:-translate-y-2 group`}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-lg ${color.replace('border', 'bg').replace('-500', '-50')} dark:bg-opacity-10 text-${color.split('-')[1]}-500`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>
      <Link
        to="/services"
        className="inline-flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 font-medium"
      >
        Learn More
        <FiArrowUpRight className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <FiDatabase size={24} />,
      title: "SAP Implementation",
      description: "Implement your SAP solution investment quickly with our unique expertise and best practices.",
      color: "border-primary-500",
    },
    {
      icon: <FiLifeBuoy size={24} />,
      title: "SAP Support",
      description: "Keep your systems running at peak performance and get more value from your SAP software.",
      color: "border-secondary-500",
    },
    {
      icon: <FiCode size={24} />,
      title: "SAP Integration",
      description: "Connect your SAP system to any non-SAP system with our integration software & solutions.",
      color: "border-accent-500",
    },
    {
      icon: <FiServer size={24} />,
      title: "SAP Upgrade",
      description: "Ensure a robust, stable upgrade process; minimizing risk and maximizing business benefits.",
      color: "border-primary-500",
    },
    {
      icon: <FiCloud size={24} />,
      title: "SAP Migration",
      description: "Migrate from SAP ECC to S/4 HANA with our experienced team and proven methodology.",
      color: "border-secondary-500",
    },
    {
      icon: <FiUsers size={24} />,
      title: "SAP Freelancing",
      description: "Get access to experienced SAP professionals for module configuration to system integration.",
      color: "border-accent-500",
    },
    {
      icon: <FiGlobe size={24} />,
      title: "SAP Rollout",
      description: "Deliver high-quality implementation rollout services within time & budget to increase efficiency.",
      color: "border-primary-500",
    },
    {
      icon: <FiShield size={24} />,
      title: "SAP Cloud Solutions",
      description: "Leverage the power of cloud with our SAP cloud solutions and services.",
      color: "border-secondary-500",
    },
  ];

  return (
    <section className={`py-16 md:py-24 ${theme === 'light' ? 'bg-gray-50' : 'bg-dark-900'}`} id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-primary-500 dark:text-primary-400 uppercase">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2 mb-4 text-gray-900 dark:text-white">
            Comprehensive SAP Services
          </h2>
          <div className="h-1 w-20 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            We are deeply committed to the growth and success of our clients through these comprehensive offerings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index}
              color={service.color}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
