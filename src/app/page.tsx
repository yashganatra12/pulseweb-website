"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  Search,
  Cloud,
  Star,
  ChevronRight,
  Sparkles,
  Code2,
  Megaphone,
} from "lucide-react";
import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
  TextReveal,
  MagneticButton,
  SlideIn,
} from "@/components/animations/MotionWrapper";
import ParticleField from "@/components/animations/ParticleField";
import {
  ShopFlowMockup,
  HealthPulseMockup,
  FinDashMockup,
} from "@/components/ProjectMockup";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Custom websites & web apps built with React, Next.js & Node.js.",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native & cross-platform mobile apps for iOS and Android.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces designed with your users in mind.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Scalable online stores with seamless payment integration.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    desc: "Boost visibility with technical SEO & data-driven strategies.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Scalable infrastructure on AWS, Azure & GCP with 99.9% uptime.",
    color: "from-cyan-500 to-blue-500",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "ShopFlow",
    content:
      "PulseWeb transformed our outdated website into a conversion machine. Sales increased by 340% within three months.",
  },
  {
    name: "David Chen",
    company: "HealthPulse",
    content:
      "From concept to App Store, PulseWeb delivered our health app in record time. Our users absolutely love it.",
  },
  {
    name: "Emily Rodriguez",
    company: "FinDash",
    content:
      "The analytics dashboard handles millions of data points seamlessly. Their technical expertise is unmatched.",
  },
];

export default function Home() {
  return (
    <>
      <ParticleField />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Gradient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px]"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[128px]"
          />
        </div>

        {/* Animated rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-[600px] h-[600px] border border-white/[0.03] rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[800px] border border-white/[0.02] rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute w-[1000px] h-[1000px] border border-white/[0.015] rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TextReveal>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-sm text-gray-300">
                Trusted by 150+ Businesses Worldwide
              </span>
              <ChevronRight size={14} className="text-gray-500" />
            </motion.div>
          </TextReveal>

          <TextReveal delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.9] mb-6 tracking-tight">
              We Build Digital
              <br />
              <span className="text-gradient">Experiences</span> That
              <br />
              <span className="text-gradient-warm">Drive Growth</span>
            </h1>
          </TextReveal>

          <TextReveal delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              From stunning websites to powerful mobile apps, PulseWeb
              Technologies transforms your ideas into pixel-perfect,
              high-performance digital products.
            </p>
          </TextReveal>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-primary text-white font-semibold rounded-full flex items-center gap-2 animate-pulse-glow text-lg"
                >
                  Start Your Project
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 border border-white/10 text-white font-semibold rounded-full hover:border-white/30 transition-all flex items-center gap-2 text-lg"
                >
                  <Play size={20} />
                  View Our Work
                </Link>
              </MagneticButton>
            </div>
          </FadeIn>

          {/* Stats */}
          <StaggerContainer className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "10+", label: "Team Members" },
              { value: "5+", label: "Years Experience" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-3xl md:text-5xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                Services That <span className="text-gradient">Power</span> Your
                Business
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                End-to-end digital solutions designed to elevate your brand and
                accelerate growth.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group p-7 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-colors h-full"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}
                    >
                      <Icon size={26} className="text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn delay={0.3} className="text-center mt-12">
            <MagneticButton className="inline-block">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary font-semibold rounded-full hover:bg-primary/5 transition-colors"
              >
                View All Services
                <ArrowRight size={18} />
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">
                Featured Work
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                Projects We&apos;re{" "}
                <span className="text-gradient">Proud Of</span>
              </h2>
            </div>
          </FadeIn>

          {/* Project 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <SlideIn direction="left">
              <FloatingElement distance={10}>
                <ShopFlowMockup gradient="from-purple-600/90 to-blue-600/90" />
              </FloatingElement>
            </SlideIn>
            <SlideIn direction="right">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                E-Commerce Platform
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                ShopFlow — Smart Online Marketplace
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Built a full-featured e-commerce platform with AI-powered product
                recommendations, real-time inventory management, and seamless
                Stripe payment integration. Resulted in 340% increase in online
                sales within the first quarter.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/20"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </SlideIn>
          </div>

          {/* Project 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <SlideIn direction="left" className="order-2 lg:order-1">
              <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">
                Mobile Application
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                HealthPulse — Fitness & Wellness App
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Cross-platform health tracking app with wearable device sync,
                AI-based workout recommendations, calorie tracking, and sleep
                analysis. Reached 100K+ downloads in the first 6 months with
                4.8★ App Store rating.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React Native", "Firebase", "TensorFlow Lite", "HealthKit"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </SlideIn>
            <SlideIn direction="right" className="order-1 lg:order-2">
              <FloatingElement distance={10} duration={7}>
                <HealthPulseMockup gradient="from-green-600/90 to-teal-600/90" />
              </FloatingElement>
            </SlideIn>
          </div>

          {/* Project 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <FloatingElement distance={10} duration={8}>
                <FinDashMockup gradient="from-orange-600/90 to-red-600/90" />
              </FloatingElement>
            </SlideIn>
            <SlideIn direction="right">
              <span className="text-orange-400 text-xs font-semibold uppercase tracking-widest">
                SaaS Dashboard
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                FinDash — Real-Time Financial Analytics
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Real-time financial analytics dashboard processing 1M+ data points
                with sub-second load times. Features interactive charts,
                automated reporting, and predictive insights powered by machine
                learning.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Python", "PostgreSQL", "D3.js", "TensorFlow"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </SlideIn>
          </div>

          <FadeIn delay={0.2} className="text-center mt-16">
            <MagneticButton className="inline-block">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-full"
              >
                View All Projects
                <ArrowRight size={18} />
              </Link>
            </MagneticButton>
          </FadeIn>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Client Love
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                What Our <span className="text-gradient">Clients</span> Say
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-all h-full flex flex-col"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-500">{t.company}</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-purple-900" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

              <motion.div
                animate={{ x: ["-50%", "50%"], opacity: [0, 0.1, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />

              <div className="relative z-10 py-20 px-8 sm:px-16 text-center">
                <TextReveal>
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
                    Ready to Transform Your
                    <br />
                    Digital Presence?
                  </h2>
                </TextReveal>
                <TextReveal delay={0.1}>
                  <p className="text-purple-200 text-lg max-w-2xl mx-auto mb-8">
                    Join 150+ businesses that trust PulseWeb Technologies to
                    build, scale, and succeed in the digital world.
                  </p>
                </TextReveal>
                <FadeIn delay={0.2}>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <MagneticButton>
                      <Link
                        href="/contact"
                        className="group px-8 py-4 bg-white text-primary font-semibold rounded-full flex items-center gap-2 text-lg"
                      >
                        Get Your Free Quote
                        <ArrowRight
                          size={20}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </MagneticButton>
                    <MagneticButton>
                      <Link
                        href="/portfolio"
                        className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:border-white/60 transition-colors"
                      >
                        View Case Studies
                      </Link>
                    </MagneticButton>
                  </div>
                </FadeIn>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
