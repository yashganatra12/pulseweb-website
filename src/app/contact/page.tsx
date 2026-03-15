"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import {
  FadeIn,
  SlideIn,
  TextReveal,
  StaggerContainer,
  StaggerItem,
  MagneticButton,
} from "@/components/animations/MotionWrapper";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by scope. A standard website takes 4-8 weeks, a mobile app 8-16 weeks, and complex platforms 3-6 months. We'll provide a detailed timeline in our proposal.",
  },
  {
    q: "What's your pricing model?",
    a: "We offer both fixed-price and time & materials models. Most projects start with a discovery phase to define scope, then we provide a transparent, detailed quote.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Absolutely. All projects include 30 days of free bug-fix support. We also offer monthly maintenance plans for ongoing updates, monitoring, and optimization.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Yes! We frequently augment in-house teams. Our developers integrate seamlessly with your workflows, tools, and communication channels.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "We specialize in React, Next.js, Node.js, React Native, Flutter, Python, AWS, and more. We choose the best stack for each project's unique needs.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We're happy to sign NDAs before discussing any project details. Your ideas and business information are always treated with strict confidentiality.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      // Store in Firebase
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      // Send email notification
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/15 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <TextReveal>
            <div className="text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Contact Us
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-3 mb-6">
                Let&apos;s Build Something
                <br />
                <span className="text-gradient">Amazing Together</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Ready to bring your idea to life? Drop us a message and our team
                will get back to you within 24 hours.
              </p>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <SlideIn direction="left">
                <h2 className="text-2xl font-bold mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email Us",
                      lines: ["info@pulseweb.com"],
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      lines: ["+91-6351563390"],
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      lines: [
                        "PulseWeb Technologies",
                        "Mordern Building, Cenal Road",
                        "Rajkot - 360 001, Gujarat, India",
                      ],
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      lines: [
                        "Mon - Fri: 9:00 AM - 7:00 PM",
                        "Sat: 10:00 AM - 4:00 PM",
                      ],
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ x: 4 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {item.title}
                          </h4>
                          {item.lines.map((line) => (
                            <p
                              key={line}
                              className="text-sm text-gray-400"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Social */}
                <div className="mt-8">
                  <h4 className="font-semibold text-white mb-3">Follow Us</h4>
                  <div className="flex gap-3">
                    {[
                      { label: "Li", bg: "hover:bg-blue-700" },
                      { label: "Ig", bg: "hover:bg-pink-600" },
                      { label: "X", bg: "hover:bg-black" },
                    ].map((s) => (
                      <motion.div
                        key={s.label}
                        whileHover={{ y: -3, scale: 1.1 }}
                        className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white ${s.bg} transition-colors cursor-pointer text-xs font-bold`}
                      >
                        {s.label}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SlideIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <SlideIn direction="right">
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
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
                        Message Sent!
                      </h3>
                      <p className="text-gray-400 mb-6">
                        Thank you for reaching out. We&apos;ll get back to you
                        within 24 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="px-6 py-2 border border-primary/30 text-primary rounded-full text-sm font-medium hover:bg-primary/5 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold mb-2">
                        Tell Us About Your Project
                      </h3>
                      <p className="text-sm text-gray-500 mb-6">
                        Fill out the form below and we&apos;ll get back to you
                        within 24 hours with a free consultation.
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
                            placeholder="+91 63515 63390"
                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1.5">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm text-gray-400 mb-1.5">
                            Service Required *
                          </label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-border rounded-xl text-gray-400 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                          >
                            <option value="">Select a service</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                            <option value="SEO & Marketing">SEO & Marketing</option>
                            <option value="Cloud & DevOps">Cloud & DevOps</option>
                            <option value="Custom Software">Custom Software</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-1.5">
                            Project Budget
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#0a0a0a] border border-border rounded-xl text-gray-400 focus:outline-none focus:border-primary/50 transition-colors text-sm"
                          >
                            <option value="">Select your budget</option>
                            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                            <option value="$50,000+">$50,000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">
                          Project Details *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project idea, goals, timeline, and any specific requirements..."
                          className="w-full px-4 py-3 bg-[#0a0a0a] border border-border rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
                        />
                      </div>

                      <MagneticButton>
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="w-full py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors flex items-center justify-center gap-2 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 size={20} className="animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={20} />
                              Send Message
                            </>
                          )}
                        </button>
                      </MagneticButton>

                      <p className="text-xs text-gray-600 text-center">
                        By submitting, you agree to our Privacy Policy. We&apos;ll
                        never share your information.
                      </p>
                    </>
                  )}
                </motion.form>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                FAQs
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
                Common <span className="text-gradient">Questions</span>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <motion.details
                  whileHover={{ scale: 1.005 }}
                  className="group rounded-2xl bg-surface border border-border hover:border-primary/20 transition-all overflow-hidden"
                >
                  <summary className="px-6 py-5 cursor-pointer text-white font-medium flex items-center justify-between list-none">
                    <span className="flex items-center gap-3">
                      <MessageSquare
                        size={18}
                        className="text-primary flex-shrink-0"
                      />
                      {faq.q}
                    </span>
                    <span className="text-gray-500 group-open:rotate-45 transition-transform text-xl">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed pl-12">
                    {faq.a}
                  </div>
                </motion.details>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
