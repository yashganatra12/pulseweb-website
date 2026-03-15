"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  Search,
  Cloud,
  Code2,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Layers,
  Database,
  Monitor,
  Cpu,
  BarChart3,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  MagneticButton,
} from "@/components/animations/MotionWrapper";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "We build fast, responsive, and SEO-optimized websites using the latest frameworks. From corporate websites to complex web applications, our developers craft solutions that perform beautifully across all devices and browsers.",
    features: [
      "Custom website design & development",
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "API development & integration",
      "CMS solutions (WordPress, Strapi, Sanity)",
      "Performance optimization & Core Web Vitals",
    ],
    tech: ["React", "Next.js", "Vue.js", "Node.js", "TypeScript", "Tailwind CSS"],
    color: "from-purple-500 to-blue-500",
    bgColor: "bg-purple-500/5",
    borderColor: "border-purple-500/20",
    textColor: "text-purple-400",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Deliver exceptional mobile experiences with native and cross-platform apps. We build apps that users love — with smooth animations, offline support, and native device integration.",
    features: [
      "iOS & Android native development",
      "Cross-platform (React Native, Flutter)",
      "App Store & Play Store deployment",
      "Push notifications & real-time features",
      "Wearable & IoT device integration",
      "App performance monitoring & analytics",
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/5",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful isn't enough — we design interfaces that convert. Our design team combines stunning aesthetics with intuitive user flows, backed by user research and data-driven decisions.",
    features: [
      "User research & persona development",
      "Wireframing & prototyping (Figma)",
      "Design systems & component libraries",
      "Usability testing & A/B testing",
      "Brand identity & visual design",
      "Motion design & micro-interactions",
    ],
    tech: ["Figma", "Adobe XD", "Framer", "Lottie", "Storybook", "Maze"],
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-pink-500/5",
    borderColor: "border-pink-500/20",
    textColor: "text-pink-400",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "Launch and scale your online store with powerful e-commerce solutions. From product catalogs to checkout flows, we build stores that maximize conversions and customer lifetime value.",
    features: [
      "Custom e-commerce development",
      "Shopify & WooCommerce solutions",
      "Payment gateway integration (Stripe, Razorpay)",
      "Inventory & order management systems",
      "Multi-vendor marketplace development",
      "Conversion rate optimization (CRO)",
    ],
    tech: ["Shopify", "WooCommerce", "Stripe", "Next.js", "Medusa", "Saleor"],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/5",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-400",
  },
  {
    icon: Search,
    title: "SEO & Performance Optimization",
    description:
      "Dominate search rankings and deliver lightning-fast experiences. We combine technical SEO expertise with performance engineering to drive organic traffic and reduce bounce rates.",
    features: [
      "Technical SEO audits & implementation",
      "Core Web Vitals optimization",
      "Keyword research & content strategy",
      "Local SEO & Google Business Profile",
      "Schema markup & structured data",
      "Performance monitoring & reporting",
    ],
    tech: [
      "Google Analytics",
      "Search Console",
      "Ahrefs",
      "Lighthouse",
      "GTmetrix",
      "Screaming Frog",
    ],
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-500/5",
    borderColor: "border-green-500/20",
    textColor: "text-green-400",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Scale confidently with enterprise-grade cloud infrastructure. We design, deploy, and manage cloud solutions that handle millions of users with 99.9% uptime and automated operations.",
    features: [
      "Cloud architecture (AWS, Azure, GCP)",
      "CI/CD pipeline setup & automation",
      "Docker & Kubernetes orchestration",
      "Infrastructure as Code (Terraform)",
      "24/7 monitoring & incident response",
      "Cost optimization & auto-scaling",
    ],
    tech: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Datadog"],
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/5",
    borderColor: "border-cyan-500/20",
    textColor: "text-cyan-400",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Need something unique? We build custom software solutions tailored to your exact business processes — from internal tools and CRMs to complex automation platforms.",
    features: [
      "Business process automation",
      "Custom CRM & ERP development",
      "Admin dashboards & analytics tools",
      "Third-party API integrations",
      "Legacy system modernization",
      "Microservices architecture",
    ],
    tech: ["Python", "Go", "PostgreSQL", "GraphQL", "Redis", "RabbitMQ"],
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/5",
    borderColor: "border-violet-500/20",
    textColor: "text-violet-400",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Grow your brand with full-stack digital marketing strategies. From paid campaigns to organic content, we leverage data and creativity to drive measurable business results.",
    features: [
      "Google Ads & Meta Ads management",
      "Social media marketing & management",
      "Content marketing & copywriting",
      "Email marketing & automation",
      "Influencer marketing campaigns",
      "Analytics, reporting & ROI tracking",
    ],
    tech: [
      "Google Ads",
      "Meta Business",
      "Mailchimp",
      "HubSpot",
      "Hootsuite",
      "Canva",
    ],
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/5",
    borderColor: "border-yellow-500/20",
    textColor: "text-yellow-400",
  },
];

const processSteps = [
  {
    icon: Headphones,
    title: "Consultation",
    desc: "Free discovery call to understand your vision, goals, and requirements.",
  },
  {
    icon: Layers,
    title: "Proposal",
    desc: "Detailed project plan with timeline, milestones, and transparent pricing.",
  },
  {
    icon: Monitor,
    title: "Design",
    desc: "Wireframes and prototypes reviewed and approved before development.",
  },
  {
    icon: Cpu,
    title: "Development",
    desc: "Agile sprints with weekly demos so you see progress in real-time.",
  },
  {
    icon: Database,
    title: "Testing",
    desc: "Rigorous QA across devices, browsers, and performance benchmarks.",
  },
  {
    icon: BarChart3,
    title: "Launch & Grow",
    desc: "Deployment with ongoing support, monitoring, and optimization.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <TextReveal>
            <div className="text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-3 mb-6">
                Everything You Need to
                <br />
                <span className="text-gradient">Succeed Online</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From design to deployment, from marketing to maintenance — we
                offer comprehensive digital services that cover every aspect of
                your online presence.
              </p>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <FadeIn key={service.title}>
                  <motion.div
                    whileHover={{ scale: 1.005 }}
                    className={`rounded-3xl ${service.bgColor} border ${service.borderColor} p-8 md:p-12`}
                  >
                    <div
                      className={`grid lg:grid-cols-2 gap-10 ${
                        isEven ? "" : "direction-rtl"
                      }`}
                    >
                      <div className={isEven ? "" : "lg:order-2"}>
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                        >
                          <Icon size={30} className="text-white" />
                        </motion.div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                          {service.title}
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.tech.map((t) => (
                            <span
                              key={t}
                              className={`px-3 py-1 text-xs rounded-full ${service.bgColor} ${service.textColor} border ${service.borderColor}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className={isEven ? "" : "lg:order-1"}>
                        <h3 className="text-lg font-semibold mb-4 text-white">
                          What&apos;s Included
                        </h3>
                        <div className="space-y-3">
                          {service.features.map((feature) => (
                            <motion.div
                              key={feature}
                              whileHover={{ x: 4 }}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle2
                                size={18}
                                className={`${service.textColor} flex-shrink-0 mt-0.5`}
                              />
                              <span className="text-gray-300 text-sm">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                How We Work
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                Our Proven <span className="text-gradient">Process</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A streamlined workflow that takes your project from idea to
                launch with complete transparency.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <StaggerItem key={step.title}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-all text-center relative"
                  >
                    <span className="absolute top-4 right-4 text-4xl font-bold text-white/[0.03]">
                      0{index + 1}
                    </span>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let&apos;s discuss how we can help you achieve your goals. Get a
              free consultation and quote today.
            </p>
            <MagneticButton className="inline-block">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full text-lg"
              >
                Get Your Free Quote
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
