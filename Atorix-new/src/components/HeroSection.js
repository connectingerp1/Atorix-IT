"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  // Add scroll animation for the "Scroll Down" button
  useEffect(() => {
    const handleScrollDown = () => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        window.scrollTo({
          top: servicesSection.offsetTop - 100,
          behavior: "smooth",
        });
      }
    };

    const scrollButton = document.getElementById("scroll-down-button");
    if (scrollButton) {
      scrollButton.addEventListener("click", handleScrollDown);
    }

    return () => {
      if (scrollButton) {
        scrollButton.removeEventListener("click", handleScrollDown);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0">
        <div className="absolute inset-0 bg-grain opacity-30" />
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-14 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Best SAP S4 HANA Implementation Partner
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              <span className="text-foreground">
                Transform Your Business with{" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-hero">
                Atorix IT Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
              Atorix IT Solutions delivers robust, business process solutions with unrivaled
              experience in SAP implementation, support, and integration services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" asChild className="px-8 gap-2 bg-gradient-hero hover:shadow-lg">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary/20 hover:border-primary"
              >
                <Link href="/services">Our Services</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center text-sm text-muted-foreground">
              <div className="flex -space-x-2 mr-3">
                <div className="h-8 w-8 rounded-full bg-primary-foreground border border-border flex items-center justify-center">
                  <span className="text-xs font-medium">100+</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-primary-foreground border border-border flex items-center justify-center">
                  <span className="text-xs font-medium">5★</span>
                </div>
              </div>
              <span>Trusted by 100+ businesses with 5-star ratings</span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl transform rotate-3 scale-95"></div>
              <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-2xl shadow-xl"></div>
              <Image
                src="/images/web-dev.svg"
                alt="SAP Implementation"
                width={500}
                height={400}
                className="relative z-10 animate-float object-contain"
                priority
              />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-20 -left-6 h-24 w-24 rounded-full bg-blue-500/10 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 -right-6 h-32 w-32 rounded-full bg-blue-600/10 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            id="scroll-down-button"
            aria-label="Scroll down"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
