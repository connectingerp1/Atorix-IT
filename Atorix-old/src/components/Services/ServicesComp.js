import React from "react";
import "./ServiceCard.css";

// Service Data
const services = [
  {
    title: "SAP Implementation Services",
    description:
      "Implement your SAP solution investment quickly by using a range of implementation services with unique expertise and a combination of best practices.",
    img: "/images/web.svg",
  },
  {
    title: "SAP Support Services",
    description:
      "Keep your systems running at peak performance – and get more value from your new and existing SAP software – with SAP Support.",
    img: "/images/app.svg",
  },
  {
    title: "SAP Integration Services",
    description:
      "We provide SAP Integration services that ease the connection between SAP and non-SAP systems.",
    img: "/images/hosting.svg",
  },
  {
    title: "SAP Upgrade Services",
    description:
      "SAP Upgrade service ensures a robust, stable process; minimizing risk and maximizing business benefits.",
    img: "/images/consultation.svg",
  },
  {
    title: "SAP Migration Services",
    description:
      "Our SAP Hana team helps your enterprise perceive business challenges to describe an SAP ECC to S/4 Hana migration.",
    img: "/images/web.svg",
  },
  {
    title: "SAP Freelancing Projects",
    description:
      "These projects range from SAP module configuration to system integration and troubleshooting.",
    img: "/images/hosting.svg",
  },
  {
    title: "Third Party Services",
    description:
      "Third-party services enhance SAP systems with cloud hosting, data migration, and custom modules.",
    img: "/images/app.svg",
  },
  {
    title: "SAP Rollout Services",
    description:
      "We deliver high-quality SAP Implementation Rollout, increasing efficiency within time & budget.",
    img: "/images/consultation.svg",
  },
  {
    title: "SAP B1 Cloud",
    description:
      "SAP B1 Cloud is a cloud-based version of SAP Business One, designed for small to medium-sized businesses.",
    img: "/images/web.svg",
  },
  {
    title: "Payroll Services",
    description:
      "SAP payroll services handle salary processing, tax deductions, and compliance, integrated with SAP HR modules.",
    img: "/images/hosting.svg",
  },
];

// Service Card Component
const ServiceCard = ({ title, description, img }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img} alt={title} className="icon" />
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ServicesComp = () => {
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4 text-center">
          <h2 className="text-3xl text-blue-900 uppercase font-bold">
            Services
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-xl lg:text-2xl font-semibold text-blue-900">
            We are deeply committed to the growth and success of our clients.
          </h2>
        </div>

        <div className="px-12" data-aos="fade-down" data-aos-delay="600">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Build & Collaborate Section */}
      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between text-center lg:text-left"
            data-aos="zoom-out"
          >
            {/* Build */}
            <div className="lg:w-1/2 flex flex-col lg:mx-5 justify-center">
              <div className="text-blue-900 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                </svg>
              </div>
              <h3 className="text-3xl text-blue-900 font-bold">
                We <span className="font-black">Build</span>
              </h3>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                We provide a comprehensive range of SAP services including
                software licenses, implementation, development, application
                support, hosting, and cloud solutions.
              </p>
            </div>

            {/* Collaborate */}
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <h3 className="text-3xl text-blue-900 font-bold">
                We <span className="font-black">Collaborate</span>
              </h3>
              <p className="my-3 text-xl text-gray-600 font-semibold">
                Our team collaborates to deliver high-quality SAP solutions,
                ensuring efficiency and seamless business operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesComp;
