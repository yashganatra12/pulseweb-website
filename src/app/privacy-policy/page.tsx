"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, Server, Bell, UserCheck, Globe, Mail } from "lucide-react";
import { FadeIn, TextReveal } from "@/components/animations/MotionWrapper";

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "When you use our website or contact us, we may collect the following types of information:",
      "**Personal Information:** Name, email address, phone number, company name, and any other details you provide through our contact form or email communications.",
      "**Usage Data:** We automatically collect information about how you interact with our website, including your IP address, browser type, operating system, referring URLs, pages visited, and the dates and times of your visits.",
      "**Cookies & Tracking:** We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can manage your cookie preferences through your browser settings.",
    ],
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: [
      "We use the information we collect for the following purposes:",
      "To respond to your inquiries and provide customer support.",
      "To send you project proposals, quotes, and relevant communications you have requested.",
      "To improve our website, services, and user experience.",
      "To analyze website traffic and usage patterns to optimize performance.",
      "To comply with legal obligations and protect our rights.",
      "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
    ],
  },
  {
    icon: Shield,
    title: "Data Protection & Security",
    content: [
      "We take the security of your personal data seriously and implement appropriate technical and organizational measures to protect it against unauthorized access, alteration, disclosure, or destruction.",
      "All data transmitted through our contact forms is encrypted using SSL/TLS encryption.",
      "Access to personal data is restricted to authorized personnel only.",
      "We regularly review and update our security practices to ensure the highest level of protection.",
      "While we strive to protect your personal information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.",
    ],
  },
  {
    icon: Server,
    title: "Data Storage & Retention",
    content: [
      "Your personal data is stored on secure servers and is retained only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.",
      "Contact form submissions are retained for up to 2 years to facilitate ongoing communication and project discussions.",
      "Website analytics data is retained in an anonymized format and does not personally identify you.",
      "You may request deletion of your personal data at any time by contacting us at info@pulseweb.com.",
    ],
  },
  {
    icon: Globe,
    title: "Third-Party Services",
    content: [
      "Our website may use the following third-party services:",
      "**Analytics:** We use website analytics tools to understand how visitors interact with our site. These tools may collect anonymized usage data.",
      "**Email Services:** When you submit our contact form, your information is processed through secure email delivery services.",
      "**Hosting:** Our website is hosted on reliable cloud infrastructure with industry-standard security measures.",
      "We do not share your personal information with third parties except as necessary to provide our services or as required by law.",
    ],
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    content: [
      "You have the following rights regarding your personal data:",
      "**Right to Access:** You can request a copy of the personal data we hold about you.",
      "**Right to Correction:** You can request correction of any inaccurate or incomplete data.",
      "**Right to Deletion:** You can request deletion of your personal data, subject to legal obligations.",
      "**Right to Object:** You can object to the processing of your personal data for certain purposes.",
      "**Right to Withdraw Consent:** Where processing is based on consent, you may withdraw it at any time.",
      "To exercise any of these rights, please contact us at info@pulseweb.com.",
    ],
  },
  {
    icon: Bell,
    title: "Updates to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. Any updates will be posted on this page with a revised effective date.",
      "We encourage you to review this policy periodically to stay informed about how we protect your data.",
      "Continued use of our website after any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
      "**Email:** info@pulseweb.com",
      "**Phone:** +91-9426258442",
      "**Address:** Mordern Building, Cenal Road, Rajkot - 360 001, Gujarat, India",
    ],
  },
];

function renderText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={i} className="text-white font-semibold">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <TextReveal>
            <div className="text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Legal
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-6">
                Privacy <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Your privacy matters to us. This policy explains how PulseWeb
                Technologies collects, uses, and protects your personal
                information.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Effective Date: January 1, 2025 &bull; Last Updated: March 1, 2025
              </p>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Content */}
      <section className="pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <FadeIn key={section.title}>
                  <motion.div
                    whileHover={{ scale: 1.005 }}
                    className="p-8 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <h2 className="text-xl font-bold text-white pt-1.5">
                        {index + 1}. {section.title}
                      </h2>
                    </div>
                    <div className="space-y-3 pl-14">
                      {section.content.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-sm text-gray-400 leading-relaxed"
                        >
                          {renderText(paragraph)}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
