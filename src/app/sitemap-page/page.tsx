"use client";

import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Users,
  FolderOpen,
  BookOpen,
  GraduationCap,
  Mail,
  Shield,
  FileText,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
} from "@/components/animations/MotionWrapper";

const sitemapSections = [
  {
    title: "Main Pages",
    icon: Home,
    gradient: "from-purple-600 to-blue-600",
    links: [
      {
        label: "Home",
        href: "/",
        desc: "Welcome to PulseWeb Technologies — your digital growth partner.",
      },
      {
        label: "Services",
        href: "/services",
        desc: "Explore our full range of web, app, and digital services.",
      },
      {
        label: "About Us",
        href: "/about",
        desc: "Our story, mission, values, and the tech stack we work with.",
      },
      {
        label: "Portfolio",
        href: "/portfolio",
        desc: "Browse our completed projects and case studies.",
      },
      {
        label: "Contact",
        href: "/contact",
        desc: "Get in touch for a free project consultation.",
      },
    ],
  },
  {
    title: "Careers",
    icon: GraduationCap,
    gradient: "from-orange-600 to-red-600",
    links: [
      {
        label: "Careers Overview",
        href: "/careers",
        desc: "Join our team — current openings and company perks.",
      },
    ],
  },
  {
    title: "Blog",
    icon: BookOpen,
    gradient: "from-green-600 to-teal-600",
    links: [
      {
        label: "All Blog Posts",
        href: "/blog",
        desc: "Read our latest articles on web development, design, and tech trends.",
      },
      {
        label: "The Future of Web Development in 2026",
        href: "/blog/future-of-web-development-2026",
        desc: "Trends shaping the future — AI, edge computing, and more.",
      },
      {
        label: "Why Next.js for Enterprise Web Apps",
        href: "/blog/why-nextjs-enterprise-web-apps",
        desc: "How Next.js powers scalable, high-performance enterprise applications.",
      },
      {
        label: "Complete Guide to Mobile App Development",
        href: "/blog/complete-guide-mobile-app-development-2026",
        desc: "Native vs cross-platform — everything you need to know.",
      },
      {
        label: "UI/UX Design Principles That Convert",
        href: "/blog/ui-ux-design-principles-that-convert",
        desc: "Design strategies that turn visitors into customers.",
      },
      {
        label: "E-Commerce Website Development Guide",
        href: "/blog/ecommerce-website-development-complete-guide",
        desc: "Build a profitable online store — platforms, features, and strategies.",
      },
      {
        label: "SEO Strategies for 2026",
        href: "/blog/seo-strategies-ranking-higher-2026",
        desc: "Proven SEO tactics to rank higher on Google.",
      },
      {
        label: "Why Every Business Needs a Website",
        href: "/blog/why-every-business-needs-website-2026",
        desc: "The business case for having a professional online presence.",
      },
    ],
  },
  {
    title: "Legal",
    icon: Shield,
    gradient: "from-indigo-600 to-purple-600",
    links: [
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        desc: "How we collect, use, and protect your personal data.",
      },
      {
        label: "Terms of Service",
        href: "/terms-of-service",
        desc: "Rules and guidelines for using our website and services.",
      },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <TextReveal>
            <div className="text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Navigation
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-6">
                Site <span className="text-gradient">Map</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                A complete overview of all pages on the PulseWeb Technologies
                website. Find what you&apos;re looking for quickly.
              </p>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-10">
            {sitemapSections.map((section) => {
              const Icon = section.icon;
              return (
                <StaggerItem key={section.title}>
                  <FadeIn>
                    <div className="rounded-2xl bg-surface border border-border overflow-hidden">
                      {/* Section Header */}
                      <div className="px-8 py-5 border-b border-border flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-br ${section.gradient} flex items-center justify-center`}
                        >
                          <Icon size={18} className="text-white" />
                        </div>
                        <h2 className="text-lg font-bold text-white">
                          {section.title}
                        </h2>
                        <span className="text-xs text-gray-500 ml-auto">
                          {section.links.length}{" "}
                          {section.links.length === 1 ? "page" : "pages"}
                        </span>
                      </div>

                      {/* Links */}
                      <div className="divide-y divide-border">
                        {section.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="group flex items-center justify-between px-8 py-4 hover:bg-white/[0.02] transition-colors"
                          >
                            <div>
                              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors">
                                {link.label}
                              </span>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {link.desc}
                              </p>
                            </div>
                            <ArrowRight
                              size={16}
                              className="text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-4"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
