"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Users,
  Target,
  Heart,
  Award,
  TrendingUp,
  Globe2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  SlideIn,
  TextReveal,
  MagneticButton,
} from "@/components/animations/MotionWrapper";

const values = [
  {
    icon: Zap,
    title: "Innovation",
    desc: "We stay on the cutting edge, constantly exploring new technologies and methodologies to deliver the best solutions.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Reliability",
    desc: "Our code is thoroughly tested, our deployments are zero-downtime, and our support is always there when you need it.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Heart,
    title: "Passion",
    desc: "We genuinely love what we do. That passion shows in every pixel, every line of code, and every client interaction.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Target,
    title: "Results-Driven",
    desc: "Beautiful doesn't matter if it doesn't perform. We measure success by the real business impact we deliver.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We work as an extension of your team — transparent, communicative, and always aligned with your vision.",
    color: "from-purple-500 to-blue-500",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We don't ship 'good enough'. Every project gets our best — clean code, stunning design, and bulletproof quality.",
    color: "from-violet-500 to-purple-500",
  },
];

const milestones = [
  { year: "2020", title: "Founded", desc: "PulseWeb Technologies started with a team of 5 passionate developers in a small office in Noida." },
  { year: "2021", title: "First Major Client", desc: "Secured our first enterprise client and grew the team to 15 members. Launched 25+ projects." },
  { year: "2022", title: "Expansion", desc: "Opened our second office, grew to 30+ team members, and started serving international clients." },
  { year: "2023", title: "100 Projects", desc: "Hit the milestone of 100 delivered projects with a 98% client satisfaction rate." },
  { year: "2024", title: "Awards & Recognition", desc: "Recognized as a Top Web Development Company. Team grew to 40+ specialists." },
  { year: "2025", title: "Global Reach", desc: "150+ projects completed, serving clients across 15+ countries. Team of 10+ and growing." },
];

const stats = [
  { value: "150+", label: "Projects Delivered", icon: TrendingUp },
  { value: "10+", label: "Team Members", icon: Users },
  { value: "15+", label: "Countries Served", icon: Globe2 },
  { value: "98%", label: "Client Satisfaction", icon: Award },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <TextReveal>
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-3 mb-6">
                We&apos;re Building the
                <br />
                <span className="text-gradient">Future of Digital</span>
              </h1>
              <p className="text-xl text-gray-400">
                PulseWeb Technologies is a team of 10+ passionate developers,
                designers, and digital strategists united by one mission: to
                transform businesses through exceptional digital experiences.
              </p>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={stat.label}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="text-center p-6 rounded-2xl bg-surface border border-border"
                  >
                    <Icon size={24} className="text-primary mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                From a Small Team to a{" "}
                <span className="text-gradient">Global Impact</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  PulseWeb Technologies was born in 2020 from a simple belief:
                  every business, regardless of size, deserves access to
                  world-class digital solutions. What started as a team of 5
                  developers working from a small office in Noida has grown into
                  a 10+ member powerhouse serving clients across 15+ countries.
                </p>
                <p>
                  We saw how many businesses struggled with outdated websites,
                  clunky apps, and ineffective digital strategies. So we
                  assembled a team of the best developers and designers, and
                  PulseWeb was born with a mission to democratize great digital
                  experiences.
                </p>
                <p>
                  Today, we&apos;ve delivered 150+ successful projects — from
                  startup MVPs to enterprise-grade platforms. Our work has
                  generated millions in revenue for our clients, and we&apos;re
                  just getting started.
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl rotate-3" />
                <div className="relative rounded-3xl bg-surface border border-border p-8">
                  <div className="space-y-6">
                    {milestones.map((m, i) => (
                      <motion.div
                        key={m.year}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">
                            {m.year.slice(2)}
                          </div>
                          {i < milestones.length - 1 && (
                            <div className="w-px h-full bg-border mt-2" />
                          )}
                        </div>
                        <div className="pb-6">
                          <h4 className="font-semibold text-white">
                            {m.title}
                          </h4>
                          <p className="text-sm text-gray-400">{m.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                What <span className="text-gradient">Drives</span> Us
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                These core values guide every decision we make, every project we
                deliver, and every relationship we build.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="p-7 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-all h-full"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-5`}
                    >
                      <Icon size={26} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {v.desc}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Tech Stack
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                Technologies We <span className="text-gradient">Master</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "React", "Next.js", "Vue.js", "Angular", "React Native", "Flutter",
              "Node.js", "Python", "Go", "TypeScript", "GraphQL", "PostgreSQL",
              "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "Terraform",
              "Figma", "Tailwind CSS", "Firebase", "Stripe", "Vercel", "GitHub Actions",
            ].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="px-4 py-3 rounded-xl bg-surface border border-border hover:border-primary/20 text-center text-sm text-gray-300 font-medium transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Let&apos;s discuss how PulseWeb can help bring your digital vision
              to life.
            </p>
            <MagneticButton className="inline-block">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full text-lg"
              >
                Get In Touch
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
