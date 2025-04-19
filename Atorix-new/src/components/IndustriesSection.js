"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

// Industry data
const industriesData = [
  { name: "Healthcare", icon: "/images/industries/healthcare.png" },
  { name: "Manufacturing", icon: "/images/industries/manufacture.png" },
  { name: "Finance", icon: "/images/industries/finance.png" },
  { name: "Energy", icon: "/images/industries/Energy.png" },
  { name: "Education", icon: "/images/industries/education.png" },
  { name: "Retail", icon: "/images/industries/retail.png" },
  { name: "Automotive", icon: "/images/industries/automotive.png" },
  { name: "Hospitality", icon: "/images/industries/hospitality.png" },
  { name: "Pharmaceuticals", icon: "/images/industries/pharmaceutical.png" },
  { name: "Real Estate", icon: "/images/industries/realstate.png" },
  { name: "Logistics", icon: "/images/industries/logistics.png" },
  { name: "Agriculture", icon: "/images/industries/agriculture.png" },
];

// Industry Card Component
function IndustryCard({ name, icon }) {
  const { theme } = useTheme();

  return (
    <Link href="/industries" className="group">
      <div className="rounded-xl p-6 shadow-sm border border-border/40 transition-all duration-300 hover:border-primary/30 hover:shadow-md group-hover:bg-primary/5 flex flex-col items-center dark:hover:bg-primary/10 images-cards">
        <div className="mb-4 w-16 h-16 flex items-center justify-center image-container white-bg-cards">
          <Image
            src={icon}
            alt={name}
            width={60}
            height={60}
            className={`w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-all ${theme === 'dark' ? 'brightness-125 contrast-110' : ''}`}
          />
        </div>
        <h3 className="font-medium text-center group-hover:text-primary transition-colors">
          {name}
        </h3>
      </div>
    </Link>
  );
}

export default function IndustriesSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Industries We Serve
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We deliver tailored SAP solutions for diverse industries, empowering businesses
            to overcome unique challenges and drive innovation.
          </p>
        </div>

        {/* Industries grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          {industriesData.map((industry, index) => (
            <IndustryCard
              key={index}
              name={industry.name}
              icon={industry.icon}
            />
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center mt-8">
          <Button asChild size="lg" className="gap-2">
            <Link href="/industries">
              Explore All Industries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
