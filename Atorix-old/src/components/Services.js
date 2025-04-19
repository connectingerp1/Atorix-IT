// src/components/Services.js (Update this existing file)

import React from "react";
import ServiceCard from "./HomePage/ServiceCard"; // Adjust import path if needed

// Correct image imports based on your structure (assuming they are in src/assets/images)
import imgWeb from "../assets/images/web.svg";
import imgApp from "../assets/images/app.svg";
import imgHosting from "../assets/images/hosting.svg";
import imgConsultation from "../assets/images/consultation.svg";

// Data for service cards
const servicesData = [
  {
    image: imgWeb,
    title: "SAP Implementation Services",
    description:
      "Implement your SAP solution investment quickly by using a range of implementation services with unique expertise and a combination of best practices.",
  },
  {
    image: imgApp,
    title: "SAP Support Services",
    description:
      "Keep your systems running at peak performance – and get more value from your new and existing SAP software – with SAP Support. We offer a range of support services.",
  },
  {
    image: imgHosting,
    title: "SAP Integration Services",
    description:
      "We are a leading provider of SAP Integration services and our SAP Integration software & solutions ease connecting SAP system to any non-SAP system.",
  },
  {
    image: imgApp,
    title: "SAP Upgrade Services",
    description:
      "SAP Upgrade service ensure a robust, stable process; minimizing risk and maximizing business benefits.",
  }, // Reused imgApp
  {
    image: imgWeb,
    title: "SAP Migration Services",
    description:
      "We provide stable SAP Migration Services. Our SAP Hana team helps your enterprise perceive business challenges to describe an SAP ECC to S/4 HANA migration.",
  }, // Reused imgWeb
  {
    image: imgHosting,
    title: "SAP Freelancing Projects",
    description:
      "These projects can range from SAP module configuration to system integration and troubleshooting, offering flexibility for experienced SAP professionals.",
  }, // Reused imgHosting
  {
    image: imgApp,
    title: "Third Party Services",
    description:
      "Third-party services for SAP are external providers that offer tools, support, or integrations to enhance SAP systems, such as cloud hosting or custom modules.",
  }, // Reused imgApp
  {
    image: imgConsultation,
    title: "SAP Rollout Services",
    description:
      "We deliver high-quality SAP Implementation Rollout & Application services within time & budget for customers, increasing efficiency.",
  },
  {
    image: imgWeb,
    title: "SAP B1 Cloud",
    description:
      "A cloud-based version of SAP Business One for SMEs, providing tools for managing finances, operations, sales, and customer relationships with cloud flexibility.",
  }, // Reused imgWeb
  {
    image: imgHosting,
    title: "Payroll Services",
    description:
      "SAP payroll services handle salary processing, tax deductions, and compliance, integrated with SAP HR modules for streamlined management.",
  }, // Reused imgHosting
];

const Services = () => {
  return (
    // Use theme background, standard padding, id for linking
    <section id="services" className="bg-neutral-bg py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Area */}
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary uppercase tracking-wider mb-3">
            {" "}
            {/* Use theme primary color */}
            Services
          </h2>
          {/* Simple underline using theme color */}
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="mt-4 text-lg lg:text-xl text-neutral-text max-w-3xl mx-auto">
            {" "}
            {/* Use theme text color */}
            We are deeply committed to the growth and success of our clients
            through these comprehensive offerings.
          </p>
        </div>

        {/* Service Cards Grid */}
        {/* Responsive grid columns and gap using theme spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6 mb-16 lg:mb-20">
          {" "}
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.image}
              title={service.title}
              description={service.description}
              aosDelay={index * 100} // Stagger animation delay (0, 100, 200...)
            />
          ))}
        </div>

        {/* "We Build / We Collaborate" Section */}
        <div
          className="bg-neutral-white rounded-xl shadow-medium p-8 md:p-12 border border-neutral-border"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* Using grid for the two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {" "}
            {/* Align items start */}
            {/* Build Column */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-4">
                {/* Icon using theme color */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  className="fill-current text-primary"
                >
                  {" "}
                  <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>{" "}
                  <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>{" "}
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl text-neutral-text-dark font-semibold mb-3">
                {" "}
                {/* Adjusted heading */}
                We Build
              </h3>
              <p className="text-lg text-neutral-text">
                {" "}
                {/* Adjusted text size */}
                We provide a comprehensive range of services including SAP
                Software Licenses, Implementation, Development, Application
                Support, Infrastructure & Hosting, and S/4 HANA Cloud Platform
                solutions.
              </p>
            </div>
            {/* Collaborate Column */}
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-4">
                {/* Icon using theme color */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  className="fill-current text-primary"
                >
                  {" "}
                  <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>{" "}
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl text-neutral-text-dark font-semibold mb-3">
                {" "}
                {/* Adjusted heading */}
                We Collaborate
              </h3>
              <p className="text-lg text-neutral-text">
                {" "}
                {/* Adjusted text size */}
                Partnering closely with your team, we tailor SAP solutions, from
                licensing and implementation to ongoing support and cloud
                migration, ensuring alignment with your unique business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
