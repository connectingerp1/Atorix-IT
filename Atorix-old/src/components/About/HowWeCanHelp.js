import React from "react";
import { Link } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";

const HowWeCanHelp = () => {
  return (
    <section>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-30"></div>

      <div className="relative container mx-auto text-center">
        {/* Icon Before the Title */}
        <div className="flex justify-center items-center gap-3 mb-3">
          <h2 className="text-4xl font-bold text-blue-900 text-center">How We Can Help</h2>
          <FaHandsHelping className="text-blue-900 text-5xl" />
        </div>

        <p className="text-lg text-gray-600 text-center mt-2">
          Our expert solutions are designed for your success.
        </p>
      </div>

      {/* Help Section Card */}
      <div className="relative mt-6 flex justify-center">
        <div className="bg-white shadow-lg border border-gray-200 rounded-lg py-6 px-6 w-full max-w-3xl">
          <h2 className="text-2xl font-semibold text-gray-900">
            How We Can Help You
          </h2>
          <p className=" text-lg mt-4 leading-relaxed  text-black-600 ">
            We are here to offer assistance in various ways. Whether you need
            help with technical issues, guidance on a product, or just want to
            learn more about our services, we are always ready to support you.
          </p>

          <div className="mt-4">
            <h3 className="text-2xl font-weight-600 text-gray-700">
              Get in touch and let us build something amazing!
            </h3> 
            <p className="text-lg mt-4 leading-relaxed  text-black-600 ">
              Have any questions or need further assistance? <br/>Feel free to
              contact us, and we'll be happy to help you!
            </p>

            {/* Button with Animation */}
            <div className="flex justify-end mt-6">
              <Link to="/contact">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Get In Touch <span className="ml-1">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeCanHelp;
