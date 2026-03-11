"use client";

import { useState, useRef } from "react";
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
  Loader2,
  Upload,
  FileText,
  X,
  AlertCircle,
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
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg("File size must be less than 5MB.");
        setStatus("error");
        return;
      }
      const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowed.includes(file.type)) {
        setErrorMsg("Only PDF and Word documents are accepted.");
        setStatus("error");
        return;
      }
      setCvFile(file);
      setErrorMsg("");
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      // Store info in Firebase (no file)
      await addDoc(collection(db, "applications"), {
        ...formData,
        cvName: cvFile?.name || "",
        createdAt: Timestamp.now(),
      });

      // Send email with CV attached
      const emailData = new FormData();
      emailData.append("name", formData.name);
      emailData.append("email", formData.email);
      emailData.append("phone", formData.phone);
      emailData.append("position", formData.position);
      emailData.append("experience", formData.experience);
      emailData.append("message", formData.message);
      if (cvFile) {
        emailData.append("cv", cvFile);
      }

      const res = await fetch("/api/career", {
        method: "POST",
        body: emailData,
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", position: "", experience: "", message: "" });
        setCvFile(null);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Career form error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

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
                            Fill out the application form below to apply for this position.
                          </p>
                          <MagneticButton>
                            <button
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, position: job.title }));
                                document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                              }}
                              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${job.gradient} text-white font-semibold rounded-full`}
                            >
                              <Send size={16} />
                              Apply Now
                            </button>
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

      {/* Application Form */}
      <section id="apply-form" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Apply Now
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                Submit Your <span className="text-gradient">Application</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Interested in joining PulseWeb? Fill out the form below and
                upload your CV. We&apos;ll get back to you soon.
              </p>
            </div>
          </FadeIn>

          <SlideIn direction="left">
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-5 p-8 md:p-10 rounded-3xl bg-surface border border-border"
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for applying. We&apos;ll review your application and
                    get back to you within a few days.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2 border border-primary/30 text-primary rounded-full text-sm font-medium hover:bg-primary/5 transition-colors"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-2">Your Details</h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Fields marked with * are required.
                  </p>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                    >
                      <AlertCircle size={18} className="flex-shrink-0" />
                      {errorMsg}
                    </motion.div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9426258442"
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">
                        Position *
                      </label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#0a0a0a] border border-border rounded-xl text-gray-400 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                      >
                        <option value="">Select a position</option>
                        {openings.map((job) => (
                          <option key={job.id} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      Experience
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-border rounded-xl text-gray-400 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                    >
                      <option value="">Select experience level</option>
                      <option value="Fresher">Fresher</option>
                      <option value="0-1 Years">0-1 Years</option>
                      <option value="1-2 Years">1-2 Years</option>
                      <option value="2-5 Years">2-5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      Upload CV/Resume * (PDF or Word, max 5MB)
                    </label>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                    {cvFile ? (
                      <div className="flex items-center gap-3 px-4 py-3 bg-[#0a0a0a] border border-primary/30 rounded-xl">
                        <FileText size={20} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-white flex-1 truncate">
                          {cvFile.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setCvFile(null);
                            if (fileInputRef.current) fileInputRef.current.value = "";
                          }}
                          className="text-gray-500 hover:text-red-400 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full px-4 py-6 bg-[#0a0a0a] border border-dashed border-border rounded-xl text-gray-500 hover:border-primary/50 hover:text-gray-400 transition-colors flex flex-col items-center gap-2"
                      >
                        <Upload size={24} />
                        <span className="text-sm">Click to upload your CV</span>
                      </button>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">
                      Cover Note
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us why you'd be a great fit for PulseWeb..."
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
                    />
                  </div>

                  <MagneticButton>
                    <button
                      type="submit"
                      disabled={status === "loading" || !cvFile}
                      className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors flex items-center justify-center gap-2 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Submit Application
                        </>
                      )}
                    </button>
                  </MagneticButton>

                  <p className="text-xs text-gray-600 text-center">
                    By submitting, you agree to our Privacy Policy. Your data
                    will only be used for recruitment purposes.
                  </p>
                </>
              )}
            </motion.form>
          </SlideIn>
        </div>
      </section>
    </>
  );
}
