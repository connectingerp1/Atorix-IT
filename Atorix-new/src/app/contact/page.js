"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Clock, Send, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (optional field)
    if (formData.phone && !/^[+\d\s\-()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorField = document.querySelector("[aria-invalid='true']");
      if (firstErrorField) {
        firstErrorField.focus();
      }
      return;
    }

    setSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            Get in Touch with Our SAP Experts
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Have questions about our SAP services or want to discuss your project? Our team is ready to help you find the perfect solution for your business needs.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out to us using any of the contact methods below. We'll get back to you as quickly as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Office</h3>
                    <p className="text-muted-foreground">
                      Office #101, First Floor, Sai Square IT Park, Cochin, India, 682037
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-primary">
                      info@atorixit.com
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      For general inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-primary">
                      +91 98765 43210
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Mon-Fri from 9am to 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl shadow-lg border border-border/40 p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-6 rounded-lg mb-6 flex items-start">
                    <div className="rounded-full bg-green-100 dark:bg-green-800 p-1 mr-3 flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                    </div>
                    <div>
                      <p className="font-medium">Thank you for your message!</p>
                      <p className="text-sm mt-1">We have received your inquiry and will get back to you shortly.</p>
                    </div>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        aria-invalid={errors.name ? 'true' : 'false'}
                        className={`w-full px-4 py-2 rounded-md border ${
                          errors.name ? 'border-red-500 dark:border-red-400' : 'border-input'
                        } bg-background focus:border-primary focus:ring-1 focus:ring-primary`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm flex items-center mt-1">
                          <AlertCircle className="h-3.5 w-3.5 mr-1" />
                          {errors.name}
                        </p>
                      )}
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
                        aria-invalid={errors.email ? 'true' : 'false'}
                        className={`w-full px-4 py-2 rounded-md border ${
                          errors.email ? 'border-red-500 dark:border-red-400' : 'border-input'
                        } bg-background focus:border-primary focus:ring-1 focus:ring-primary`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm flex items-center mt-1">
                          <AlertCircle className="h-3.5 w-3.5 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        aria-invalid={errors.phone ? 'true' : 'false'}
                        className={`w-full px-4 py-2 rounded-md border ${
                          errors.phone ? 'border-red-500 dark:border-red-400' : 'border-input'
                        } bg-background focus:border-primary focus:ring-1 focus:ring-primary`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm flex items-center mt-1">
                          <AlertCircle className="h-3.5 w-3.5 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      className={`w-full px-4 py-2 rounded-md border ${
                        errors.message ? 'border-red-500 dark:border-red-400' : 'border-input'
                      } bg-background focus:border-primary focus:ring-1 focus:ring-primary resize-none`}
                      placeholder="Tell us about your project or inquiry"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm flex items-center mt-1">
                        <AlertCircle className="h-3.5 w-3.5 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full sm:w-auto gap-2"
                      size="lg"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <div className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </div>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold">Our Location</h2>
            <p className="text-muted-foreground mt-2">Find us on the map</p>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg border border-border/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3890367924605!2d76.31562741458544!3d9.990033292848807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d14a1269a53%3A0xb7f2a37ccbb37b78!2sInfoPark%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1649928837952!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Atorix IT Solutions Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Here are some common questions about our services. If you don't find what you're looking for, feel free to contact us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold mb-2">What SAP services do you offer?</h3>
              <p className="text-muted-foreground">
                We offer a full range of SAP services including implementation, support, integration, migration, upgrade, and specialized consulting for specific industries.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold mb-2">How long does an SAP implementation take?</h3>
              <p className="text-muted-foreground">
                Implementation timelines vary based on project scope, but typically range from 3-12 months. We use accelerated methodologies to minimize disruption.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold mb-2">Do you provide post-implementation support?</h3>
              <p className="text-muted-foreground">
                Yes, we offer comprehensive post-implementation support services to ensure your SAP systems continue to run smoothly and efficiently.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <h3 className="text-lg font-semibold mb-2">What industries do you specialize in?</h3>
              <p className="text-muted-foreground">
                We have expertise across multiple industries including manufacturing, healthcare, retail, finance, energy, and more. Our solutions are tailored to specific industry needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
