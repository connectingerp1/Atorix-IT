"use client";

import {
  Settings,
  Users,
  BarChart3,
  Clock,
  ShieldCheck,
  Globe2,
  Workflow,
  HeartHandshake
} from "lucide-react";

// Features data
const features = [
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Customized Solutions",
    description: "We tailor SAP implementations to your specific business needs, ensuring you get maximum value from your investment."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Expert Team",
    description: "Our certified SAP consultants bring years of experience across industries to solve your most complex challenges."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with our advanced SAP analytics and reporting solutions."
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Faster Implementation",
    description: "Our accelerated implementation methodology reduces project timelines and gets you up and running quickly."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure Systems",
    description: "We build robust security protocols into every implementation to protect your valuable business data."
  },
  {
    icon: <Globe2 className="h-8 w-8 text-primary" />,
    title: "Global Support",
    description: "Round-the-clock support for your SAP systems from our team of experts located around the world."
  },
  {
    icon: <Workflow className="h-8 w-8 text-primary" />,
    title: "Process Optimization",
    description: "We streamline your business processes through intelligent automation and SAP best practices."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Long-Term Partnership",
    description: "We're committed to your success beyond implementation with ongoing support and strategic guidance."
  }
];

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300">
      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Capabilities
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine deep SAP expertise with innovation to deliver solutions that
            drive business transformation and create lasting value.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
