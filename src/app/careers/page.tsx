"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Users,
  Heart,
  Zap,
  Coffee,
  GraduationCap,
  Send,
  Code2,
  TrendingUp,
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

const perks = [
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    desc: "Access to courses, conferences, and mentorship from senior developers. We invest in your growth.",
  },
  {
    icon: Coffee,
    title: "Flexible Work",
    desc: "Hybrid work culture with flexible hours. We trust you to deliver — wherever you work best.",
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Health insurance, mental wellness support, and regular team activities to keep you at your best.",
  },
  {
    icon: Zap,
    title: "Latest Tech Stack",
    desc: "Work with cutting-edge technologies — React, Next.js, Flutter, AWS, and more. No legacy systems here.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    desc: "Small, agile teams where your ideas matter. No bureaucracy — just great people building great products.",
  },
  {
    icon: TrendingUp,
    title: "Career Progression",
    desc: "Clear growth paths with regular reviews. Many of our leads started as freshers with us.",
  },
];

const openings = [
  {
    id: "react-developer",
    title: "React Developer",
    type: "Full-Time",
    experience: "Fresher",
    location: "Rajkot, Gujarat",
    mode: "On-Site / Hybrid",
    icon: Code2,
    gradient: "from-purple-600 to-blue-600",
    bgColor: "bg-purple-500/5",
    borderColor: "border-purple-500/20",
    textColor: "text-purple-400",
    description:
      "We're looking for a passionate React Developer to join our frontend team. You'll work on real client projects from day one — building modern, responsive web applications using React, Next.js, and TypeScript.",
    responsibilities: [
      "Build responsive and performant user interfaces using React and Next.js",
      "Collaborate with designers to implement pixel-perfect UI from Figma mockups",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and learn from senior developers",
      "Work with RESTful APIs and integrate third-party services",
      "Optimize web applications for performance and SEO",
      "Stay updated with the latest frontend technologies and best practices",
    ],
    requirements: [
      "Bachelor's degree in Computer Science, IT, or related field (or equivalent)",
      "Strong understanding of HTML, CSS, and JavaScript fundamentals",
      "Knowledge of React.js and component-based architecture",
      "Familiarity with Git version control",
      "Understanding of responsive design principles",
      "Eagerness to learn and grow in a fast-paced environment",
      "Good communication and teamwork skills",
    ],
    niceToHave: [
      "Experience with Next.js or TypeScript",
      "Knowledge of Tailwind CSS or styled-components",
      "Personal projects or contributions to open source",
      "Familiarity with REST APIs and state management (Redux, Zustand)",
      "Basic understanding of Node.js",
    ],
  },
  {
    id: "business-development-executive",
    title: "Business Development Executive",
    type: "Full-Time",
    experience: "Fresher",
    location: "Rajkot, Gujarat",
    mode: "On-Site",
    icon: TrendingUp,
    gradient: "from-orange-600 to-red-600",
    bgColor: "bg-orange-500/5",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-400",
    description:
      "We're looking for an energetic Business Development Executive to help us grow our client base. You'll identify new business opportunities, build relationships with potential clients, and help convert leads into long-term partnerships.",
    responsibilities: [
      "Research and identify potential clients in target markets (startups, SMEs, enterprises)",
      "Generate leads through cold outreach, LinkedIn, email campaigns, and networking",
      "Understand client requirements and present PulseWeb's services effectively",
      "Prepare compelling proposals, presentations, and quotes for prospective clients",
      "Maintain and update CRM with leads, follow-ups, and deal status",
      "Collaborate with the technical team to create accurate project estimates",
      "Build long-term relationships with clients to drive repeat business and referrals",
      "Attend industry events, webinars, and meetups to represent PulseWeb",
    ],
    requirements: [
      "Bachelor's degree in Business, Marketing, Communications, or related field",
      "Excellent verbal and written communication skills in English",
      "Strong interpersonal skills and a confident, professional demeanor",
      "Self-motivated with a results-oriented mindset",
      "Proficiency in MS Office / Google Workspace",
      "Willingness to learn about web & app development services",
      "Ability to handle rejection and stay persistent",
    ],
    niceToHave: [
      "Experience with CRM tools (HubSpot, Salesforce, or similar)",
      "Knowledge of digital marketing and social media",
      "Understanding of IT services and web/app development industry",
      "Any prior internship or experience in sales or business development",
      "Familiarity with LinkedIn Sales Navigator or outreach tools",
    ],
  },
];

export default function CareersPage() {
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
                Careers
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-3 mb-6">
                Build Your Career at
                <br />
                <span className="text-gradient">PulseWeb</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join a team of passionate builders creating digital products
                that make a real impact. We&apos;re growing fast and looking for
                talented people to grow with us.
              </p>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Why Join Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                More Than Just a <span className="text-gradient">Job</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                At PulseWeb, you won&apos;t just write code or close deals —
                you&apos;ll build products used by thousands and grow alongside
                a team that genuinely cares.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <StaggerItem key={perk.title}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-all h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{perk.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {perk.desc}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Open Positions */}
      <section className="pb-28 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Open Positions
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                Current <span className="text-gradient">Openings</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We&apos;re looking for talented freshers who are eager to learn,
                grow, and make an impact from day one.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {openings.map((job) => {
              const Icon = job.icon;
              return (
                <FadeIn key={job.id}>
                  <motion.div
                    whileHover={{ scale: 1.005 }}
                    className={`rounded-3xl ${job.bgColor} border ${job.borderColor} overflow-hidden`}
                  >
                    {/* Job Header */}
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${job.gradient} flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon size={28} className="text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 mb-4">
                            {[
                              { icon: Briefcase, text: job.type },
                              { icon: GraduationCap, text: job.experience },
                              { icon: MapPin, text: job.location },
                              { icon: Clock, text: job.mode },
                            ].map((tag) => {
                              const TagIcon = tag.icon;
                              return (
                                <span
                                  key={tag.text}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
                                >
                                  <TagIcon size={12} />
                                  {tag.text}
                                </span>
                              );
                            })}
                          </div>
                          <p className="text-gray-400 leading-relaxed">
                            {job.description}
                          </p>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold text-white mb-4">
                          What You&apos;ll Do
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {job.responsibilities.map((item) => (
                            <motion.div
                              key={item}
                              whileHover={{ x: 4 }}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle2
                                size={16}
                                className={`${job.textColor} flex-shrink-0 mt-0.5`}
                              />
                              <span className="text-sm text-gray-300">
                                {item}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Requirements */}
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold text-white mb-4">
                          What We&apos;re Looking For
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {job.requirements.map((item) => (
                            <motion.div
                              key={item}
                              whileHover={{ x: 4 }}
                              className="flex items-start gap-2"
                            >
                              <CheckCircle2
                                size={16}
                                className="text-green-400 flex-shrink-0 mt-0.5"
                              />
                              <span className="text-sm text-gray-300">
                                {item}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Nice to Have */}
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold text-white mb-4">
                          Nice to Have
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.niceToHave.map((item) => (
                            <span
                              key={item}
                              className={`px-3 py-1.5 text-xs rounded-full ${job.bgColor} ${job.textColor} border ${job.borderColor}`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Apply CTA */}
                      <div className="mt-10 pt-8 border-t border-white/5">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                          <p className="text-sm text-gray-500">
                            Send your resume to{" "}
                            <a
                              href="mailto:info@pulseweb.com"
                              className="text-primary hover:underline"
                            >
                              info@pulseweb.com
                            </a>{" "}
                            with subject &ldquo;{job.title} — Application&rdquo;
                          </p>
                          <MagneticButton>
                            <a
                              href={`mailto:info@pulseweb.com?subject=${encodeURIComponent(job.title + " — Application")}`}
                              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${job.gradient} text-white font-semibold rounded-full`}
                            >
                              <Send size={16} />
                              Apply Now
                            </a>
                          </MagneticButton>
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

      {/* Don't See a Fit? */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Don&apos;t See Your Role?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                We&apos;re always looking for talented people. Send us your
                resume and tell us how you&apos;d contribute to PulseWeb — we&apos;d
                love to hear from you.
              </p>
              <MagneticButton className="inline-block">
                <a
                  href="mailto:info@pulseweb.com?subject=Open Application — PulseWeb Technologies"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full text-lg"
                >
                  Send Your Resume
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </MagneticButton>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
