"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Blog posts data
const blogPosts = [
  {
    id: "sap-s4hana-migration-guide",
    title: "The Complete Guide to SAP S/4HANA Migration",
    description: "Learn about the challenges, benefits, and best practices for migrating to SAP S/4HANA from legacy ERP systems.",
    date: "April 15, 2025",
    author: "John Anderson",
    authorRole: "SAP Implementation Expert",
    image: "/images/web-dev.svg",
    category: "Implementation",
    readTime: "8 min read",
  },
  {
    id: "digital-transformation-sap",
    title: "Digital Transformation with SAP: Success Stories",
    description: "Explore how businesses across various industries have achieved digital transformation success with SAP solutions.",
    date: "April 10, 2025",
    author: "Sarah Williams",
    authorRole: "Digital Transformation Specialist",
    image: "/images/app.svg",
    category: "Digital Transformation",
    readTime: "6 min read",
  },
  {
    id: "sap-integration-best-practices",
    title: "Best Practices for SAP Integration",
    description: "Discover the most effective approaches for integrating SAP with other business systems to create a unified technology ecosystem.",
    date: "April 5, 2025",
    author: "Michael Chen",
    authorRole: "Integration Specialist",
    image: "/images/hosting.svg",
    category: "Integration",
    readTime: "7 min read",
  },
  {
    id: "sap-support-maintenance",
    title: "Essential SAP Support and Maintenance Tips",
    description: "Learn how to keep your SAP systems running at peak performance with these expert maintenance tips and strategies.",
    date: "March 28, 2025",
    author: "Emily Patel",
    authorRole: "SAP Support Manager",
    image: "/images/consultation.svg",
    category: "Support",
    readTime: "5 min read",
  },
  {
    id: "future-of-sap-cloud",
    title: "The Future of SAP in the Cloud",
    description: "Explore the evolving landscape of SAP cloud solutions and how they're shaping the future of enterprise resource planning.",
    date: "March 20, 2025",
    author: "Robert Lee",
    authorRole: "Cloud Solutions Architect",
    image: "/images/web-dev.svg",
    category: "Cloud",
    readTime: "9 min read",
  },
  {
    id: "sap-security-best-practices",
    title: "SAP Security: Best Practices for 2025",
    description: "Stay ahead of security threats with our comprehensive guide to SAP security best practices in 2025.",
    date: "March 15, 2025",
    author: "Jennifer Adams",
    authorRole: "Security Specialist",
    image: "/images/app.svg",
    category: "Security",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            SAP Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            Blog & Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Expert insights, best practices, and industry trends to help you maximize your SAP investment and transform your business.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="border-b border-border/60 py-6">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/blog" className="font-medium">All Posts</Link>
            </Button>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/blog?category=implementation" className="text-muted-foreground hover:text-primary">Implementation</Link>
            </Button>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/blog?category=integration" className="text-muted-foreground hover:text-primary">Integration</Link>
            </Button>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/blog?category=support" className="text-muted-foreground hover:text-primary">Support</Link>
            </Button>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/blog?category=cloud" className="text-muted-foreground hover:text-primary">Cloud</Link>
            </Button>
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/blog?category=security" className="text-muted-foreground hover:text-primary">Security</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/20 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-300 mb-4">
                {blogPosts[0].category}
              </div>
              <h2 className="text-3xl font-bold mb-4">
                <Link href={`/blog/${blogPosts[0].id}`} className="hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-6">
                {blogPosts[0].description}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {blogPosts[0].author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{blogPosts[0].author}</p>
                  <p className="text-sm text-muted-foreground">{blogPosts[0].date} · {blogPosts[0].readTime}</p>
                </div>
              </div>
              <Button asChild className="gap-2">
                <Link href={`/blog/${blogPosts[0].id}`}>
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[16/9] relative rounded-xl overflow-hidden border border-border/40">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="bg-card rounded-xl overflow-hidden border border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/20 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-300">
                      {post.category}
                    </div>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/60">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Stay updated with the latest SAP insights, trends, and best practices delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md border border-input bg-background flex-grow focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
                <Button type="submit" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
