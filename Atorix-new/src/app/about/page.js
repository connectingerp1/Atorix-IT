"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Target, Award, BarChart, MapPin } from "lucide-react";

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: "John Anderson",
      position: "CEO & Founder",
      image: "/images/about/pt1.webp",
    },
    {
      name: "Sarah Williams",
      position: "CTO",
      image: "/images/about/pt2.webp",
    },
    {
      name: "Michael Chen",
      position: "Director of Operations",
      image: "/images/about/pt3.webp",
    },
    {
      name: "Emily Patel",
      position: "Head of SAP Solutions",
      image: "/images/about/pt4.webp",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We're SAP Experts Dedicated to Your Success
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mb-8">
                Founded in 2010, Atorix IT Solutions has grown to become one of the leading SAP implementation and support providers. We help businesses transform their operations with customized SAP solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/web-dev.svg"
                  alt="Atorix IT Team Working"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 border-b border-border/60">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses with tailored SAP solutions that drive digital transformation, optimize operations, and deliver measurable business value.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the most trusted SAP partner, recognized for our technical excellence, industry insights, and commitment to client success.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Our Values</h2>
              <p className="text-muted-foreground">
                Excellence, integrity, innovation, and partnership are the core values that guide our work and relationships with clients, partners, and employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Partner You Can Trust for SAP Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With over a decade of experience implementing and supporting SAP solutions, we have built a reputation for technical excellence, industry knowledge, and customer satisfaction.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Expert Team</h3>
                    <p className="text-muted-foreground">Our consultants are certified SAP professionals with years of hands-on implementation experience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Proven Methodology</h3>
                    <p className="text-muted-foreground">Our implementation approach minimizes risk and ensures successful outcomes, on time and within budget.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Industry Specialization</h3>
                    <p className="text-muted-foreground">We have deep knowledge across multiple industries, enabling us to deliver tailored solutions that address specific business challenges.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium">Customer Satisfaction</h3>
                    <p className="text-muted-foreground">Our 95% client retention rate speaks to our commitment to building lasting partnerships based on trust and results.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-4 md:space-y-6">
                  <div className="aspect-square relative overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/web-developer.svg"
                      alt="SAP Consulting"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square relative overflow-hidden rounded-lg shadow-md bg-primary/10 flex items-center justify-center">
                    <BarChart className="h-16 w-16 text-primary/80" />
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6 mt-8 sm:mt-16">
                  <div className="aspect-square relative overflow-hidden rounded-lg shadow-md bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                    <Award className="h-16 w-16 text-primary/80" />
                  </div>
                  <div className="aspect-square relative overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/images/consultation.svg"
                      alt="SAP Support"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Meet Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Experts Behind Our Success
            </h2>
            <p className="text-lg text-muted-foreground">
              Our leadership team brings decades of combined experience in SAP implementation, consulting, and support. We're passionate about helping businesses leverage technology to drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Global Presence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serving Clients Around the World
            </h2>
            <p className="text-lg text-muted-foreground">
              With offices in key locations and a team of remote experts, we provide localized support with global capabilities to businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">India</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Office #101, First Floor, Sai Square IT Park, Cochin, India, 682037
              </p>
              <p className="text-muted-foreground">
                Phone: +91 98765 43210
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">United States</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                350 Tech Square, Suite 200, Boston, MA 02139, USA
              </p>
              <p className="text-muted-foreground">
                Phone: +1 (555) 123-4567
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Germany</h3>
              </div>
              <p className="text-muted-foreground mb-3">
                Hauptstraße 78, 10117 Berlin, Germany
              </p>
              <p className="text-muted-foreground">
                Phone: +49 30 12345678
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact us today to discuss how our SAP solutions can help your business grow.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
