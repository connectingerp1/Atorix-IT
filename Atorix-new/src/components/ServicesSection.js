"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Service data with icons
const servicesData = [
  {
    icon: "/images/web.svg",
    title: "SAP Implementation Services",
    description:
      "Implement your SAP solution investment quickly by using a range of implementation services with unique expertise and best practices.",
  },
  {
    icon: "/images/app.svg",
    title: "SAP Support Services",
    description:
      "Keep your systems running at peak performance and get more value from your new and existing SAP software with our range of support services.",
  },
  {
    icon: "/images/hosting.svg",
    title: "SAP Integration Services",
    description:
      "We are a leading provider of SAP Integration services and our solutions ease connecting SAP system to any non-SAP system.",
  },
  {
    icon: "/images/app.svg",
    title: "SAP Upgrade Services",
    description:
      "SAP Upgrade service ensure a robust, stable process; minimizing risk and maximizing business benefits.",
  },
  {
    icon: "/images/web.svg",
    title: "SAP Migration Services",
    description:
      "We provide stable SAP Migration Services. Our SAP Hana team helps your enterprise perceive challenges to describe an SAP ECC to S/4 HANA migration.",
  },
  {
    icon: "/images/hosting.svg",
    title: "SAP Freelancing Projects",
    description:
      "These projects can range from SAP module configuration to system integration and troubleshooting, offering flexibility for experienced SAP professionals.",
  },
  {
    icon: "/images/consultation.svg",
    title: "Third Party Services",
    description:
      "Third-party services for SAP are external providers that offer tools, support, or integrations to enhance SAP systems, such as cloud hosting or custom modules.",
  },
  {
    icon: "/images/web-dev.svg",
    title: "SAP Rollout Services",
    description:
      "We deliver high-quality SAP Implementation Rollout & Application services within time & budget for customers, increasing efficiency.",
  },
];

export default function ServicesSection() {
  const [visibleServices, setVisibleServices] = useState(6);

  const showMore = () => {
    setVisibleServices(servicesData.length);
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive SAP Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide a complete range of SAP services to help your business
            thrive in the digital economy.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, visibleServices).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Show more button */}
        {visibleServices < servicesData.length && (
          <div className="mt-12 text-center">
            <Button onClick={showMore} variant="outline" size="lg" className="gap-2">
              Show More Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* View all services link */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="gap-2 bg-gradient-hero text-white">
            <Link href="/services">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
