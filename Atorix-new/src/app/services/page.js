"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Service data with details
const servicesData = [
  {
    id: "implementation",
    title: "SAP Implementation Services",
    icon: "/images/web.svg",
    description:
      "Our comprehensive SAP implementation services help you deploy powerful, tailored SAP solutions that align with your business goals and processes.",
    features: [
      "End-to-end implementation from planning to go-live",
      "Business process analysis and optimization",
      "Custom configuration to match your specific needs",
      "Data migration from legacy systems",
      "User training and knowledge transfer",
      "Post-implementation support and maintenance",
    ],
  },
  {
    id: "support",
    title: "SAP Support Services",
    icon: "/images/app.svg",
    description:
      "Keep your SAP systems running at peak performance with our expert support services, ensuring minimal disruption and maximum uptime.",
    features: [
      "24/7 technical support for critical issues",
      "Regular health checks and performance optimization",
      "Issue diagnosis and resolution",
      "System updates and patch management",
      "Security monitoring and enhancement",
      "User support and troubleshooting",
    ],
  },
  {
    id: "integration",
    title: "SAP Integration Services",
    icon: "/images/hosting.svg",
    description:
      "Seamlessly connect SAP with other business systems to create a unified technology ecosystem that enhances efficiency and data flow.",
    features: [
      "Integration between SAP and non-SAP systems",
      "API development and management",
      "Custom middleware solutions",
      "EDI and B2B integration",
      "Cloud integration services",
      "Integration monitoring and management",
    ],
  },
  {
    id: "upgrade",
    title: "SAP Upgrade Services",
    icon: "/images/app.svg",
    description:
      "Upgrade your existing SAP systems to the latest versions with minimal disruption to unlock new features and improve performance.",
    features: [
      "System assessment and upgrade planning",
      "Technical upgrade execution",
      "Custom code remediation",
      "Testing and validation",
      "User training on new features",
      "Post-upgrade support",
    ],
  },
  {
    id: "migration",
    title: "SAP Migration Services",
    icon: "/images/web.svg",
    description:
      "Migrate your SAP systems to S/4 HANA or cloud platforms with confidence, leveraging our proven methodology and migration expertise.",
    features: [
      "S/4 HANA migration strategy and planning",
      "Database migration services",
      "Cloud migration (AWS, Azure, Google Cloud)",
      "Data cleansing and harmonization",
      "Process optimization during migration",
      "Cutover planning and execution",
    ],
  },
  {
    id: "freelancing",
    title: "SAP Freelancing Projects",
    icon: "/images/hosting.svg",
    description:
      "Access on-demand SAP expertise for specific projects or roles, whether you need short-term support or specialized skills.",
    features: [
      "SAP module configuration specialists",
      "ABAP developers for custom development",
      "SAP Basis administration experts",
      "Project managers for SAP initiatives",
      "Testing and quality assurance professionals",
      "SAP security consultants",
    ],
  },
  {
    id: "third-party",
    title: "Third Party Services",
    icon: "/images/app.svg",
    description:
      "Enhance your SAP ecosystem with complementary third-party solutions that extend functionality and address specific business needs.",
    features: [
      "Third-party solution evaluation and selection",
      "Implementation of partner solutions",
      "Integration with SAP systems",
      "Custom development for specific requirements",
      "Support and maintenance for integrated systems",
      "License management and optimization",
    ],
  },
  {
    id: "rollout",
    title: "SAP Rollout Services",
    icon: "/images/consultation.svg",
    description:
      "Efficiently deploy SAP solutions across multiple locations or business units with standardized processes and localized configurations.",
    features: [
      "Template development for efficient rollout",
      "Country/region-specific localization",
      "Rollout strategy and planning",
      "Change management and training",
      "Local support establishment",
      "Post-rollout optimization",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            Comprehensive SAP Solutions for Your Business
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            From implementation to support, our range of services covers all aspects of SAP to help you achieve your digital transformation goals.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.slice(0, 4).map((service) => (
              <Card key={service.id} className="border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <CardHeader className="p-6">
                  <div className="rounded-lg bg-gray-200 p-1 w-fit mb-4">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={60}
                      height={60}
                      className="h-7 w-7 md:h-16 md:w-16 object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl tracking-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link href={`#${service.id}`} className="text-primary font-medium flex items-center hover:underline">
                    Learn more
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <div className="bg-muted/20">
        {servicesData.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 md:py-24 ${
              index % 2 === 1 ? "bg-background" : ""
            }`}
          >
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "order-2" : "order-1"}>
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                    SAP Service
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>

                  <Button asChild size="lg" className="gap-2">
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "order-1" : "order-2"}>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-border/40">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-10">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={450}
                        height={450}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-hero text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business with SAP?
              </h2>
              <p className="text-lg text-white/80 mb-0">
                Contact our team today to discuss how our SAP services can help your organization achieve its goals.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 w-full md:w-auto"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
