"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";

export default function GetDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    interests: [],
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => {
        const updatedInterests = checked
          ? [...prev.interests, value]
          : prev.interests.filter(interest => interest !== value);

        return { ...prev, interests: updatedInterests };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        interests: [],
        message: "",
      });

      // Scroll to top to show the success message
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {submitted && (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-6 rounded-lg mb-8 shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Thank You for Your Interest!</h3>
                  <p className="mb-4">We've received your demo request and will be in touch shortly.</p>
                  <p className="text-sm">A confirmation email has been sent to your inbox with details about next steps.</p>
                </div>
              )}

              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Request a Demo
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Experience SAP Excellence in Action
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                See how our SAP solutions can transform your business processes and drive efficiency. Fill out the form to schedule a personalized demo.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Personalized demonstration tailored to your industry</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Live Q&A with our SAP experts</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">Detailed insights into features and functionality</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">No obligation consultation with implementation experts</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg bg-card border border-border/40 p-8">
              <h2 className="text-2xl font-bold mb-6">Schedule Your Demo</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                {/* Role */}
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium">
                    Your Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="" disabled>Select your role</option>
                    <option value="C-Level Executive">C-Level Executive</option>
                    <option value="IT Manager">IT Manager</option>
                    <option value="Business Analyst">Business Analyst</option>
                    <option value="Department Head">Department Head</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Consultant">Consultant</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Interested in */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Interested in <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="sap-implementation"
                        name="interests"
                        value="SAP Implementation"
                        checked={formData.interests.includes("SAP Implementation")}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label htmlFor="sap-implementation" className="ml-2 text-sm">
                        SAP Implementation
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="sap-support"
                        name="interests"
                        value="SAP Support"
                        checked={formData.interests.includes("SAP Support")}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label htmlFor="sap-support" className="ml-2 text-sm">
                        SAP Support
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="sap-migration"
                        name="interests"
                        value="SAP Migration"
                        checked={formData.interests.includes("SAP Migration")}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label htmlFor="sap-migration" className="ml-2 text-sm">
                        SAP Migration
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="sap-integration"
                        name="interests"
                        value="SAP Integration"
                        checked={formData.interests.includes("SAP Integration")}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label htmlFor="sap-integration" className="ml-2 text-sm">
                        SAP Integration
                      </label>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Tell us about your specific requirements or questions"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full gap-2"
                  size="lg"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Request Demo
                      <Send className="h-4 w-4" />
                    </>
                  )}
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

      {/* Demo Process Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How Our Demo Process Works</h2>
            <p className="text-lg text-muted-foreground">
              We've designed our demo process to be informative, efficient, and tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-sm border border-border/40 relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-6">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Submit Request</h3>
              <p className="text-muted-foreground">Fill out the form with your details and requirements. Our team will review your submission and prepare for the next steps.</p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border/40 relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-6">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation Call</h3>
              <p className="text-muted-foreground">We'll schedule a brief discovery call to understand your specific needs and challenges, ensuring our demo addresses your key concerns.</p>
            </div>

            <div className="bg-card rounded-xl p-8 shadow-sm border border-border/40 relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-6">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Demo</h3>
              <p className="text-muted-foreground">Our experts will provide a comprehensive demonstration tailored to your business, followed by Q&A and discussion of potential next steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our demo process and SAP solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 border border-border/40">
              <h3 className="text-lg font-semibold mb-2">How long does the demo typically last?</h3>
              <p className="text-muted-foreground">
                Our demos typically last 60-90 minutes, including time for questions and discussion. We can adjust the timing based on your availability.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border/40">
              <h3 className="text-lg font-semibold mb-2">Who should attend the demo?</h3>
              <p className="text-muted-foreground">
                We recommend including key stakeholders such as IT leadership, department heads who will use the system, and decision-makers in the demo session.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border/40">
              <h3 className="text-lg font-semibold mb-2">Is there any cost for the demo?</h3>
              <p className="text-muted-foreground">
                No, our demos are completely free of charge and come with no obligation to purchase. We believe in demonstrating the value of our solutions.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border/40">
              <h3 className="text-lg font-semibold mb-2">Can the demo be customized to our industry?</h3>
              <p className="text-muted-foreground">
                Absolutely! We specialize in industry-specific implementations and will tailor the demo to showcase relevant features and use cases for your sector.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
