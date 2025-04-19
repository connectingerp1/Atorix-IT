"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cta opacity-90 dark:opacity-80"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with SAP?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Our team of SAP experts is ready to help you implement, optimize, or migrate
              your SAP systems for maximum efficiency and ROI.
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <p className="text-white/90">Customized SAP solutions tailored to your specific industry and business needs</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <p className="text-white/90">Expert team with deep SAP knowledge and implementation experience</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <p className="text-white/90">Comprehensive support and maintenance services to keep your systems running smoothly</p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-white text-[hsl(var(--brand-purple))] hover:bg-white/90 border-0"
              >
                <Link href="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-blue-500 hover:bg-white/10"
              >
                <Link href="/get-demo" className="flex items-center">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Get a Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="bg-white dark:bg-background rounded-xl p-8 shadow-xl">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Get in Touch with Our Team
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background resize-none"
                  placeholder="Tell us about your requirements"
                ></textarea>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Submit
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                By submitting this form, you agree to our{" "}
                <Link href="/privacy" className="underline underline-offset-2 hover:text-primary">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
