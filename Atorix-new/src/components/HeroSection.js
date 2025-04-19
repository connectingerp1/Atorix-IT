"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import LogoSphere from "@/components/ui/LogoSphere";

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
    <section className="relative overflow-hidden min-h-[90vh]">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-background to-primary/5" />

        {/* Modern geometric pattern */}
        <div className="absolute inset-0">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="opacity-20"
          >
            {/* Pattern definition */}
            <defs>
              <pattern
                id="modern-grid"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(15)"
              >
                {/* Horizontal lines */}
                <line
                  x1="0"
                  y1="10"
                  x2="20"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  className="text-primary"
                />

                {/* Vertical lines */}
                <line
                  x1="10"
                  y1="0"
                  x2="10"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  className="text-primary"
                />

                {/* Intersection dots */}
                <circle
                  cx="10"
                  cy="10"
                  r="0.8"
                  fill="currentColor"
                  className="text-primary"
                />
              </pattern>

              {/* Second pattern with different scale */}
              <pattern
                id="modern-grid-large"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                {/* Horizontal lines */}
                <line
                  x1="0"
                  y1="20"
                  x2="40"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  className="text-primary/50"
                />

                {/* Vertical lines */}
                <line
                  x1="20"
                  y1="0"
                  x2="20"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  className="text-primary/50"
                />

                {/* Stylish plus at intersection */}
                <path
                  d="M 18,20 L 22,20 M 20,18 L 20,22"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary/70"
                />
              </pattern>

              {/* Decorative geometric elements */}
              <pattern
                id="decorative-elements"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                {/* Squares */}
                <rect
                  x="10"
                  y="10"
                  width="10"
                  height="10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary/30"
                />

                {/* Circles */}
                <circle
                  cx="80"
                  cy="80"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary/30"
                />

                {/* Triangles */}
                <path
                  d="M 50,20 L 60,35 L 40,35 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary/30"
                />
              </pattern>
            </defs>

            {/* Apply patterns */}
            <rect width="100%" height="100%" fill="url(#modern-grid)" />
            <rect width="100%" height="100%" fill="url(#modern-grid-large)" />
            <rect width="100%" height="100%" fill="url(#decorative-elements)" />
          </svg>
        </div>

        {/* Subtle diagonal lines */}
        <div className="absolute inset-0 opacity-10">
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-primary"
            />
            <line
              x1="25"
              y1="0"
              x2="100"
              y2="75"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-primary"
            />
            <line
              x1="50"
              y1="0"
              x2="100"
              y2="50"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-primary"
            />
            <line
              x1="75"
              y1="0"
              x2="100"
              y2="25"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-primary"
            />
            <line
              x1="0"
              y1="25"
              x2="75"
              y2="100"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-primary"
            />
            <line
              x1="0"
              y1="50"
              x2="50"
              y2="100"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-primary"
            />
            <line
              x1="0"
              y1="75"
              x2="25"
              y2="100"
              stroke="currentColor"
              strokeWidth="0.2"
              className="text-primary"
            />
          </svg>
        </div>

        {/* Noise/grain texture */}
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
              <span className="text-blue-600 dark:text-blue-400">
                Atorix IT Solutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
              Atorix IT Solutions delivers robust, business process solutions
              with unrivaled experience in SAP implementation, support, and
              integration services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                asChild
                className="px-8 gap-2 bg-gradient-hero hover:shadow-lg"
              >
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
              <div className="flex -space-x-0 mr-2">
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

          {/* Right Column - Logo with 3D Rotation */}
          <div className="relative">
            <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
              {/* Decorative background elements for logo */}

              {/* Circular glowing background for logo */}
              <div className="absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-xl"></div>
              <div
                className="absolute w-[280px] h-[280px] md:w-[470px] md:h-[470px] rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>

              {/* Logo with 3D rotation */}
              <div className="relative z-10 animate-rotate-3d-object">
                <div className="w-[250px] h-[250px] md:w-[600px] md:h-[600px] relative">
                  <LogoSphere />
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div
              className="absolute top-20 left-14 h-24 w-24 rounded-full bg-blue-500/10 animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-24 right-16 h-32 w-32 rounded-full bg-blue-600/10 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
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
