import React from "react";
import "./Industries.css"; // Import the CSS file
import automotiveIcon from "../../images/industries/automotive.png";
import healthcareIcon from "../../images/industries/healthcare.png";
import retailIcon from "../../images/industries/retail.png";
import manufacturingIcon from "../../images/industries/manufacture.png";
import energyIcon from "../../images/industries/Energy.png";
import financialServicesIcon from "../../images/industries/finance.png";
import telecommunicationsIcon from "../../images/industries/communication.png";
import aerospaceIcon from "../../images/industries/aerospace.png";
import logisticsIcon from "../../images/industries/logistics.png";
import mediaIcon from "../../images/industries/Media.png";
import pharmaceuticalsIcon from "../../images/industries/pharmaceutical.png";
import constructionIcon from "../../images/industries/construction.png";
import fbIcon from "../../images/industries/food.png";
import shippingIcon from "../../images/industries/transportation.png";
import tradingIcon from "../../images/industries/trading.png";
import chemicalIcon from "../../images/industries/chemical.png";
import hospitalityIcon from "../../images/industries/hospitality.png";
import agricultureIcon from "../../images/industries/agriculture.png";
import insuranceIcon from "../../images/industries/finance.png";

const industriesData = [
  { title: "Automotive", icon: automotiveIcon, description: "Revolutionizing vehicle production with smart manufacturing." },
  { title: "Healthcare", icon: healthcareIcon, description: "Enhancing patient care through digital transformation." },
  { title: "Retail", icon: retailIcon, description: "Optimizing sales and customer engagement with analytics." },
  { title: "Manufacturing", icon: manufacturingIcon, description: "Boosting efficiency with smart factory solutions." },
  { title: "Energy", icon: energyIcon, description: "Driving sustainability with advanced energy management." },
  { title: "Financial Services", icon: financialServicesIcon, description: "Ensuring secure transactions and seamless banking." },
  { title: "Telecommunications", icon: telecommunicationsIcon, description: "Powering global connectivity with scalable IT solutions." },
  { title: "Aerospace & Defense", icon: aerospaceIcon, description: "Enhancing security and efficiency with high-tech solutions." },
  { title: "Transportation & Logistics", icon: logisticsIcon, description: "Optimizing supply chain with real-time data." },
  { title: "Media & Entertainment", icon: mediaIcon, description: "Transforming content delivery with digital solutions." },
  { title: "Pharmaceuticals", icon: pharmaceuticalsIcon, description: "Accelerating drug development with AI." },
  { title: "Construction", icon: constructionIcon, description: "Improving project efficiency with digital tools." },
  { title: "F & B", icon: fbIcon, description: "Streamlining food production with smart logistics." },
  { title: "Logistics", icon: shippingIcon, description: "Enhancing fleet management with automation." },
  { title: "Trading", icon: tradingIcon, description: "Optimizing commerce with data-driven decisions." },
  { title: "Chemical", icon: chemicalIcon, description: "Improving efficiency in chemical manufacturing." },
  { title: "Hospitality", icon: hospitalityIcon, description: "Delivering seamless guest experiences." },
  { title: "Agriculture", icon: agricultureIcon, description: "Revolutionizing farming with AI-driven precision." },
  { title: "Insurance", icon: insuranceIcon, description: "Automating claims processing with AI." },
];

const Industries = () => {
  return (
    <div className="my-8 py-4" id="industries">
      <h2 className="text-center text-3xl text-blue-900 uppercase font-bold">Industries We Serve</h2>
      <div className="flex justify-center">
        <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
      </div>

      <div className="px-4" data-aos="fade-down" data-aos-delay="600">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {industriesData.map(({ title, icon, description }, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <img src={icon} alt={title} className="h-16 md:h-20 mb-2" />
                  <h4 className="font-semibold text-lg md:text-xl text-center">{title}</h4>
                </div>

                {/* Back Side */}
                <div className="flip-card-back">
                  <p className="text-center text-white text-sm md:text-base">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
