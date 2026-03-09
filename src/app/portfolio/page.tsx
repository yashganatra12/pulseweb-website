"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import {
  FadeIn,
  TextReveal,
  MagneticButton,
} from "@/components/animations/MotionWrapper";
import {
  ShopFlowMockup,
  HealthPulseMockup,
  FinDashMockup,
  CloudDeskMockup,
  BiteSwiftMockup,
  LegalEaseMockup,
  StyleStudioMockup,
  EduSparkMockup,
} from "@/components/ProjectMockup";

const categories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "E-Commerce",
  "SaaS",
  "UI/UX Design",
];

const projects = [
  {
    id: "shopflow",
    title: "ShopFlow",
    subtitle: "Smart Online Marketplace",
    category: "E-Commerce",
    description:
      "A full-featured e-commerce platform with AI-powered product recommendations, real-time inventory tracking, and seamless checkout. Built for a fashion retailer that saw 340% increase in online sales after launch.",
    challenge:
      "The client's previous platform was slow, had poor mobile UX, and lacked personalization. Cart abandonment was at 78%.",
    solution:
      "We rebuilt the entire platform with Next.js for server-side rendering, implemented AI recommendations using collaborative filtering, and optimized the checkout flow to 3 steps.",
    results: [
      "340% increase in sales",
      "Cart abandonment dropped to 32%",
      "Page load time: 1.2s (from 5.8s)",
      "Mobile conversion up 420%",
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis", "Algolia"],
    gradient: "from-purple-600/90 to-blue-600/90",
  },
  {
    id: "healthpulse",
    title: "HealthPulse",
    subtitle: "Fitness & Wellness App",
    category: "Mobile Apps",
    description:
      "A cross-platform health & fitness tracking app with wearable device sync, AI workout plans, nutrition tracking, and community features. Reached 100K downloads in 6 months.",
    challenge:
      "The health app market is saturated. The client needed an app that stood out with superior UX and intelligent personalization.",
    solution:
      "We built with React Native for cross-platform efficiency, integrated HealthKit/Google Fit APIs, and implemented ML-based workout personalization.",
    results: [
      "100K+ downloads in 6 months",
      "4.8★ App Store rating",
      "42% daily active user rate",
      "Featured by Apple in 'Apps We Love'",
    ],
    tech: ["React Native", "Firebase", "TensorFlow Lite", "HealthKit", "Expo"],
    gradient: "from-green-600/90 to-teal-600/90",
  },
  {
    id: "findash",
    title: "FinDash",
    subtitle: "Real-Time Financial Analytics",
    category: "SaaS",
    description:
      "Enterprise-grade financial analytics dashboard processing 1M+ data points in real-time. Features interactive charts, automated reporting, anomaly detection, and predictive analytics.",
    challenge:
      "The fintech startup needed to process massive datasets in real-time while keeping the interface responsive and intuitive.",
    solution:
      "We implemented WebSocket-based real-time data streaming, D3.js for interactive visualizations, and Python/TensorFlow for predictive modeling.",
    results: [
      "1M+ data points processed",
      "Sub-second load times",
      "$2.5M ARR within first year",
      "99.99% platform uptime",
    ],
    tech: ["React", "Python", "PostgreSQL", "D3.js", "TensorFlow", "WebSocket"],
    gradient: "from-orange-600/90 to-red-600/90",
  },
  {
    id: "clouddesk",
    title: "CloudDesk",
    subtitle: "Project Management Platform",
    category: "SaaS",
    description:
      "A modern project management SaaS with Kanban boards, time tracking, team chat, file sharing, and deep integrations with Slack, GitHub, and Google Workspace.",
    challenge:
      "The client wanted to compete with established tools like Asana and Monday.com with a more developer-friendly approach.",
    solution:
      "We focused on keyboard-first UX, real-time collaboration, and powerful API integrations. Built with Next.js and deployed on AWS with auto-scaling.",
    results: [
      "15K+ active teams",
      "Avg. 23 min daily usage per user",
      "$1.8M seed round raised",
      "Featured on Product Hunt (#2)",
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "AWS", "Socket.io", "Redis"],
    gradient: "from-cyan-600/90 to-blue-600/90",
  },
  {
    id: "biteswift",
    title: "BiteSwift",
    subtitle: "Food Delivery Platform",
    category: "Mobile Apps",
    description:
      "On-demand food delivery app with real-time GPS tracking, intelligent route optimization, multi-vendor support, and an admin dashboard for restaurant partners.",
    challenge:
      "The client needed a reliable, real-time delivery platform that could handle thousands of concurrent orders in a fast-growing market.",
    solution:
      "Built with Flutter for buttery-smooth UX, Go backend for high throughput, and integrated Google Maps for real-time tracking and route optimization.",
    results: [
      "50K+ monthly active users",
      "Avg. delivery time: 28 min",
      "500+ restaurant partners",
      "99.7% order accuracy",
    ],
    tech: ["Flutter", "Go", "Redis", "Google Maps", "PostgreSQL", "Firebase"],
    gradient: "from-pink-600/90 to-purple-600/90",
  },
  {
    id: "legalease",
    title: "LegalEase",
    subtitle: "Legal Practice Management",
    category: "Web Development",
    description:
      "A comprehensive client portal for a leading law firm — featuring document management, e-signatures, appointment scheduling, billing, and secure client communication.",
    challenge:
      "The law firm was drowning in paperwork, manual scheduling, and disconnected tools. They needed a unified platform for their practice.",
    solution:
      "We built a secure, GDPR-compliant portal with role-based access, DocuSign integration, automated billing, and a client-facing dashboard.",
    results: [
      "60% reduction in admin time",
      "100% paperless operations",
      "Client satisfaction up 45%",
      "Revenue per lawyer up 35%",
    ],
    tech: ["React", "Node.js", "AWS S3", "DocuSign API", "Stripe", "PostgreSQL"],
    gradient: "from-yellow-600/90 to-orange-600/90",
  },
  {
    id: "stylestudio",
    title: "StyleStudio",
    subtitle: "Fashion Brand Website",
    category: "UI/UX Design",
    description:
      "Complete brand identity and website redesign for a premium fashion brand. Included logo design, style guide, editorial layout, and an immersive lookbook experience.",
    challenge:
      "The fashion brand's online presence didn't reflect their premium positioning. Their website felt generic and failed to tell their brand story.",
    solution:
      "We created a bold, editorial design with full-screen imagery, smooth scroll animations, and a curated lookbook experience that felt like a digital magazine.",
    results: [
      "Brand perception score +62%",
      "Time on site increased 3.5x",
      "Online inquiries up 280%",
      "Won Awwwards Honorable Mention",
    ],
    tech: ["Next.js", "Framer Motion", "GSAP", "Sanity CMS", "Tailwind CSS"],
    gradient: "from-rose-600/90 to-pink-600/90",
  },
  {
    id: "eduspark",
    title: "EduSpark",
    subtitle: "Online Learning Platform",
    category: "Web Development",
    description:
      "A feature-rich e-learning platform with live classes, course management, quizzes, certificates, and payment integration for an edtech startup targeting K-12 students.",
    challenge:
      "The edtech startup needed a scalable platform that could handle video streaming, real-time quizzes, and thousands of concurrent learners.",
    solution:
      "We built a Next.js platform with WebRTC-based live classes, automated quiz grading, progress tracking, and Razorpay payment integration.",
    results: [
      "25K+ enrolled students",
      "4.7★ rating from parents",
      "92% course completion rate",
      "Featured in TechCrunch India",
    ],
    tech: ["Next.js", "WebRTC", "Node.js", "MongoDB", "Razorpay", "AWS"],
    gradient: "from-indigo-600/90 to-violet-600/90",
  },
];

const mockupComponents: Record<string, React.FC<{ gradient: string }>> = {
  shopflow: ShopFlowMockup,
  healthpulse: HealthPulseMockup,
  findash: FinDashMockup,
  clouddesk: CloudDeskMockup,
  biteswift: BiteSwiftMockup,
  legalease: LegalEaseMockup,
  stylestudio: StyleStudioMockup,
  eduspark: EduSparkMockup,
};

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <TextReveal>
            <div className="text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Our Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-3 mb-6">
                Work That Speaks
                <br />
                <span className="text-gradient">For Itself</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A curated showcase of digital products we&apos;ve built for
                startups, enterprises, and everything in between.
              </p>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === cat
                      ? "bg-primary text-white"
                      : "bg-surface border border-border text-gray-400 hover:text-white hover:border-primary/30"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const MockupComponent = mockupComponents[project.id];
                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer rounded-2xl bg-surface border border-border hover:border-primary/30 overflow-hidden transition-colors group"
                  >
                    <div className="p-6 pb-0">
                      <div className="transform group-hover:scale-[1.02] transition-transform duration-300">
                        {MockupComponent && (
                          <MockupComponent gradient={project.gradient} />
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                            {project.category}
                          </span>
                          <h3 className="text-xl font-bold mt-1">
                            {project.title}{" "}
                            <span className="text-gray-500 font-normal">
                              — {project.subtitle}
                            </span>
                          </h3>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye size={14} className="text-primary" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2.5 py-0.5 text-xs rounded-full bg-white/5 text-gray-500">
                            +{project.tech.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (() => {
          const ModalMockup = mockupComponents[selectedProject.id];
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-surface border border-border rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold mt-1">
                        {selectedProject.title}
                      </h2>
                      <p className="text-gray-500">
                        {selectedProject.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-white text-2xl"
                    >
                      &times;
                    </button>
                  </div>

                  <div className="mb-6 rounded-xl overflow-hidden">
                    {ModalMockup && (
                      <ModalMockup gradient={selectedProject.gradient} />
                    )}
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        The Challenge
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Our Solution
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">
                      Key Results
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProject.results.map((r) => (
                        <div
                          key={r}
                          className="flex items-center gap-2 text-sm text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                          {r}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Like What You See?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let&apos;s create something amazing together. Share your idea and
              get a free project estimate.
            </p>
            <MagneticButton className="inline-block">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full text-lg"
              >
                Start Your Project
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
