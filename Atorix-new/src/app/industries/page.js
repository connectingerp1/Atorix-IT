"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Industry data with details
const industriesData = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "/images/industries/healthcare.png",
    description: "Transform patient care and operational efficiency with SAP solutions tailored for healthcare providers and organizations.",
    challenges: [
      "Complex regulatory compliance requirements",
      "Patient data management and security",
      "Integration with specialized medical systems",
      "Revenue cycle management",
      "Operational efficiency in resource allocation",
    ],
    solutions: [
      "SAP Healthcare industry solutions",
      "Electronic medical records integration",
      "Compliance-focused implementations",
      "Patient management systems",
      "Healthcare analytics and reporting",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "/images/industries/manufacture.png",
    description: "Streamline production processes and optimize supply chains with comprehensive SAP solutions for manufacturers.",
    challenges: [
      "Complex supply chain management",
      "Production planning and scheduling",
      "Quality management and compliance",
      "Inventory optimization",
      "Equipment maintenance and reliability",
    ],
    solutions: [
      "SAP S/4HANA Manufacturing solutions",
      "Production planning and execution systems",
      "Supply chain optimization",
      "Quality management modules",
      "Predictive maintenance solutions",
    ],
  },
  {
    id: "finance",
    name: "Finance",
    icon: "/images/industries/finance.png",
    description: "Enhance financial operations, reporting, and compliance with specialized SAP solutions for financial institutions.",
    challenges: [
      "Regulatory compliance and reporting",
      "Risk management",
      "Customer relationship management",
      "Transaction processing efficiency",
      "Fraud detection and prevention",
    ],
    solutions: [
      "SAP Financial Services solutions",
      "Regulatory reporting automation",
      "Customer experience platforms",
      "Financial analytics and dashboards",
      "Risk management systems",
    ],
  },
  {
    id: "retail",
    name: "Retail",
    icon: "/images/industries/retail.png",
    description: "Transform customer experiences and streamline retail operations with SAP solutions designed for modern retailers.",
    challenges: [
      "Omnichannel customer experience",
      "Inventory and supply chain management",
      "Point of sale integration",
      "Pricing and promotion management",
      "Customer loyalty programs",
    ],
    solutions: [
      "SAP Retail solutions",
      "Omnichannel commerce platforms",
      "Merchandise management systems",
      "Customer experience solutions",
      "Retail analytics and forecasting",
    ],
  },
  {
    id: "energy",
    name: "Energy",
    icon: "/images/industries/Energy.png",
    description: "Optimize operations and manage assets efficiently with SAP solutions tailored for energy companies.",
    challenges: [
      "Asset management and maintenance",
      "Commodity trading and risk management",
      "Regulatory compliance",
      "Supply chain optimization",
      "Sustainability reporting",
    ],
    solutions: [
      "SAP for Energy & Natural Resources",
      "Asset management solutions",
      "Trading and risk management platforms",
      "Regulatory compliance systems",
      "Sustainability reporting frameworks",
    ],
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: "/images/industries/automotive.png",
    description: "Drive innovation and efficiency in automotive manufacturing and supply chains with specialized SAP solutions.",
    challenges: [
      "Complex global supply chains",
      "Just-in-time manufacturing",
      "Quality management and recalls",
      "Product lifecycle management",
      "Dealership management",
    ],
    solutions: [
      "SAP Automotive solutions",
      "Supply chain visibility systems",
      "Quality management modules",
      "Manufacturing execution systems",
      "Dealership management platforms",
    ],
  },
];

// Industry card component for overview section
function IndustryCard({ name, icon, description }) {
  return (
    <Card className="group border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300">
      <CardHeader className="p-6">
        <div className="w-16 h-16 rounded-lg bg-primary/10 p-3 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
          <Image
            src={icon}
            alt={name}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link href={`#${name.toLowerCase()}`} className="text-primary font-medium flex items-center hover:underline">
          Learn more
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Industries We Serve
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            Industry-Specific SAP Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We deliver tailored SAP solutions for diverse industries, addressing unique challenges and creating opportunities for innovation and growth.
          </p>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((industry) => (
              <IndustryCard
                key={industry.id}
                name={industry.name}
                icon={industry.icon}
                description={industry.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      <div className="bg-muted/20">
        {industriesData.map((industry, index) => (
          <section
            key={industry.id}
            id={industry.id}
            className={`py-16 md:py-24 ${
              index % 2 === 1 ? "bg-background" : ""
            }`}
          >
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "order-2" : "order-1"}>
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                    Industry Solutions
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{industry.name}</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    {industry.description}
                  </p>

                  {/* Industry Challenges */}
                  <h3 className="text-xl font-semibold mb-4">Key Challenges</h3>
                  <div className="space-y-3 mb-8">
                    {industry.challenges.map((challenge, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <p>{challenge}</p>
                      </div>
                    ))}
                  </div>

                  {/* Industry Solutions */}
                  <h3 className="text-xl font-semibold mb-4">Our Solutions</h3>
                  <div className="space-y-3 mb-8">
                    {industry.solutions.map((solution, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <p>{solution}</p>
                      </div>
                    ))}
                  </div>

                  <Button asChild size="lg" className="gap-2">
                    <Link href="/contact">
                      Discuss Your Requirements
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "order-1" : "order-2"}>
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-border/40">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-16">
                      <Image
                        src={industry.icon}
                        alt={industry.name}
                        width={250}
                        height={250}
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

      {/* Other Industries */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Our SAP expertise extends to many other industries. Whatever your sector, we can help you implement, optimize, and support SAP solutions tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col items-center">
              <Image src="/images/industries/education.png" alt="Education" width={60} height={60} className="mb-4" />
              <h3 className="font-medium text-center">Education</h3>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col items-center">
              <Image src="/images/industries/pharmaceutical.png" alt="Pharmaceuticals" width={60} height={60} className="mb-4" />
              <h3 className="font-medium text-center">Pharmaceuticals</h3>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col items-center">
              <Image src="/images/industries/hospitality.png" alt="Hospitality" width={60} height={60} className="mb-4" />
              <h3 className="font-medium text-center">Hospitality</h3>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col items-center">
              <Image src="/images/industries/agriculture.png" alt="Agriculture" width={60} height={60} className="mb-4" />
              <h3 className="font-medium text-center">Agriculture</h3>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col items-center">
              <Image src="/images/industries/logistics.png" alt="Logistics" width={60} height={60} className="mb-4" />
              <h3 className="font-medium text-center">Logistics</h3>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col items-center">
              <Image src="/images/industries/realstate.png" alt="Real Estate" width={60} height={60} className="mb-4" />
              <h3 className="font-medium text-center">Real Estate</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-hero text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Discuss Your Industry-Specific Needs
              </h2>
              <p className="text-lg text-white/80 mb-0">
                Contact our team to learn how our SAP solutions can address the unique challenges in your industry.
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
