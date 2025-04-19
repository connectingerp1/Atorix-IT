import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const backGround = {
    backgroundImage: `url("https://assets.techcircle.in/uploads/article-image/2018/04/images/15396-thinkstockphotos-590172248.jpg")`,
  };

  return (
    <section
      className="container mx-auto bg-gray-200 relative bg-cover bg-center h-[90vh] flex items-start mt-14"
      style={backGround}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 text-gray-300 pt-8"></div>

      <div className="relative z-10 text-white px-6 flex flex-col items-start justify-start pl-10 pt-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl text-white font-bold animate-fadeIn leading-tight" data-aos="fade-right">
          Transforming Industries with SAP Solutions
        </h1>
        <p className="text-xl md:text-2xl mt-5 font-semibold animate-fadeIn delay-300 leading-relaxed" data-aos="fade-right">
          Atorix IT Solutions delivers tailored SAP and IT solutions across multiple industries, 
          enhancing efficiency and innovation in Manufacturing, Healthcare, Retail, Finance, and more.
        </p>

        <ul className="mt-5 list-disc list-inside space-y-2 text-lg md:text-xl animate-fadeIn delay-500">
          <li>🚀 Manufacturing – Optimize supply chains with SAP automation.</li>
          <li>🏥 Healthcare – Streamline patient data management securely.</li>
          <li>🛍 Retail – Enhance customer experience with AI-driven insights.</li>
          <li>💰 Finance – Drive compliance and efficiency with ERP solutions.</li>
          <li>🌍 Logistics – Improve tracking and delivery with smart analytics.</li>
        </ul>

        {/* Button aligned below content */}
        <div className="flex justify-start mt-6">
          <Link to="/contact">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Explore Solutions <span className="ml-1">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
