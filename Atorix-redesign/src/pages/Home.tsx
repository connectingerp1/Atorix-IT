import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Industries from '../components/home/Industries';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home: React.FC = () => {
  // Set document title
  useEffect(() => {
    document.title = 'Atorix IT Solutions - Best SAP S4 HANA Implementation Partner';
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Industries />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
