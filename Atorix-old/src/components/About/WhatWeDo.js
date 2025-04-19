import React from "react";

const services = [
  {
    // icon: 'fas fa-cogs',
    title: "SAP Implementation Services",
    description:
      "Implement your SAP solution investment quickly by using a range of implementation services with unique expertise and a combination of best practices.",
    borderColor: "border-blue-700",
  },
  { 
    // icon: 'fas fa-life-ring',
    title: "SAP Support Services",
    description:
      "SAP Support. Keep your systems running at peak performance – and get more value from your new and existing SAP software – with SAP Support. We offer a range of support services.",
    borderColor: "border-pink-500",
  },
  {
    // icon: 'fas fa-code',
    title: "SAP Integration Services",
    description:
      "We are leading provider of SAP Integration services and our SAP Integration software & solutions ease to connect SAP system to any non-SAP system.",
    borderColor: "border-sky-500",
  },
  {
    // icon: 'fas fa-sync-alt',
    title: "SAP Upgrade Services",
    description:
      "SAP Upgrade service ensure a robust, stable process; minimizing risk and maximizing business benefits.",
    borderColor: "border-blue-700",
  },
  {
    // icon: 'fas fa-database',
    title: "SAP Migration Services",
    description:
      "We provides stable SAP Migration Services. Our SAP Hana team helps your enterprise perceive business challenges to describe a SAP ECC to s/4 hana.",
    borderColor: "border-pink-500",
  },
  {
    // icon: 'fas fa-rocket',
    title: "SAP Rollout Services",
    description:
      "We deliver high-quality SAP Implementation Rollout, Application services within time & budget for customers and increases efficiency.",
    borderColor: "border-sky-500",
  },
];

const TypingEffect = ({ text }) => {
  return <p className="text-gray-600 text-sm typing-effect">{text}</p>;
};

const WhatWeDo = () => {
  return (
    <div className="container mx-auto px-6 text-center bg-white py-20">
      <h2 className="text-4xl font-bold text-blue-900 text-center">What We Do</h2>
      <p className="text-lg text-gray-600 mt-2">
        Our services are tailored to drive growth and innovation.
      </p>
      <div className="flex items-center justify-center my-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-8xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white text-gray-800 p-4 rounded-lg shadow-lg border-l-8 ${service.borderColor} transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="flex items-center mb-3">
                <div className={`${service.iconColor} p-3 rounded-full`}>
                  <i className={`${service.icon} text-lg text-white`}></i>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">{service.title}</h2>
              </div>
              <p className="text-lg text-black-600 mt-3">{service.description} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
