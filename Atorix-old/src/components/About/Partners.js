import React from "react";
import pt1 from "../../images/about/pt1.webp";
import pt2 from "../../images/about/pt2.webp";
import pt3 from "../../images/about/pt3.webp";
import pt4 from "../../images/about/pt4.webp";
import pt5 from "../../images/about/pt5.webp";
import VPT from "../../images/clients/VPTechnoLabsFinal.png";
import WebSeede from "../../images/clients/WebSeede.png";
import NXI from "../../images/clients/NXI.png";
import Form6 from "../../images/clients/Form6.png";
import SFMS from "../../images/clients/SFMS.png";

const logos = [pt1, pt2, pt3, pt4, pt5, VPT, WebSeede, NXI, Form6, SFMS];
 
// Keyframe for infinite scrolling animation
const keyframes = `
@keyframes marquee {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}`;

const Partners = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-900 text-center">Our Partners</h2>
        <p className="text-lg text-gray-600 text-center mt-2">
          We collaborate with industry leaders.
        </p>

        {/* Marquee Container */}
        <div className="relative overflow-hidden mt-8">
          <style>{keyframes}</style>
          
          {/* Marquee Wrapper */}
          <div className="flex whitespace-nowrap animate-marquee">
            {/* Duplicated logos to ensure infinite effect */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="mx-6 flex-shrink-0">
                <img
                  src={logo}
                  alt="partner"
                  className="h-32 w-32 object-contain mix-blend-darken filter brightness-100 contrast-125 transition-opacity duration-300 hover:opacity-100 opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
