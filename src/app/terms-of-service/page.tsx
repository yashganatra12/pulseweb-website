"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  AlertTriangle,
  CreditCard,
  RefreshCw,
  Ban,
  Gavel,
  ShieldCheck,
  Clock,
  Mail,
} from "lucide-react";
import { FadeIn, TextReveal } from "@/components/animations/MotionWrapper";

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the PulseWeb Technologies website (pulseweb.co.in) or engaging our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
      "If you do not agree with any part of these terms, you must not use our website or services. These terms apply to all visitors, users, and clients of PulseWeb Technologies.",
      "We reserve the right to update or modify these terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    icon: Scale,
    title: "Services We Provide",
    content: [
      "PulseWeb Technologies offers a range of digital services including but not limited to:",
      "Custom website design and development, mobile application development (iOS, Android, cross-platform), UI/UX design and prototyping, e-commerce solutions, search engine optimization (SEO), digital marketing services, cloud hosting and deployment, and ongoing website maintenance and support.",
      "The specific scope, timeline, deliverables, and cost of any project will be outlined in a separate project proposal or agreement shared with the client before work begins.",
      "We strive to deliver all projects on time and to the highest quality standards, but timelines may vary based on project complexity and client responsiveness.",
    ],
  },
  {
    icon: CreditCard,
    title: "Payments & Pricing",
    content: [
      "All project pricing will be communicated and agreed upon before the commencement of work. Pricing is based on the scope of work defined in the project proposal.",
      "**Payment Structure:** Unless otherwise agreed, projects typically follow a milestone-based payment structure — an advance payment to begin, progress payments at key milestones, and a final payment upon project completion.",
      "**Late Payments:** Invoices are due within the timeframe specified (typically 7-15 days). Late payments may result in project delays or suspension of services until outstanding amounts are settled.",
      "**Additional Work:** Any work requested beyond the original scope will be quoted separately and must be approved by the client before execution.",
      "All prices are quoted in Indian Rupees (INR) unless otherwise specified. Applicable taxes (GST) will be added as per government regulations.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Intellectual Property",
    content: [
      "**Our IP:** All content on the PulseWeb Technologies website — including text, graphics, logos, design elements, and code — is our intellectual property and is protected by copyright laws. You may not reproduce, distribute, or use any of our content without written permission.",
      "**Client Projects:** Upon full payment, the client receives ownership of the final deliverables (website, app, designs) as specified in the project agreement. PulseWeb retains the right to showcase completed projects in our portfolio unless otherwise agreed.",
      "**Third-Party Assets:** Projects may incorporate third-party libraries, frameworks, fonts, or assets that are subject to their own licenses. We ensure all third-party assets used are properly licensed.",
      "**Source Code:** Source code ownership and transfer terms will be specified in the individual project agreement.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Revisions & Modifications",
    content: [
      "Each project includes a defined number of revision rounds as outlined in the project proposal. The standard revision policy is as follows:",
      "**Design Phase:** Up to 2-3 rounds of design revisions are included. Additional revision rounds will be billed at an agreed hourly rate.",
      "**Development Phase:** Bug fixes and issues related to the agreed scope are handled at no extra cost. Feature changes or additions beyond the original scope are treated as additional work.",
      "**Post-Launch:** We offer a complimentary support period (typically 30 days) after project launch for bug fixes. Extended support and maintenance can be arranged through a separate agreement.",
      "Revision requests should be consolidated and submitted in writing (email) for clarity and efficient implementation.",
    ],
  },
  {
    icon: Ban,
    title: "Termination & Cancellation",
    content: [
      "Either party may terminate a project engagement with written notice, subject to the following conditions:",
      "**Client Cancellation:** If the client cancels a project mid-way, payments made for completed milestones are non-refundable. Work completed up to the point of cancellation will be delivered to the client.",
      "**Our Right to Terminate:** We reserve the right to terminate a project if the client fails to make payments on time, provides insufficient cooperation, or engages in behavior that violates these terms.",
      "**Refund Policy:** Advance payments are non-refundable once work has commenced. Refund eligibility for other payments will be assessed on a case-by-case basis.",
      "Upon termination, each party shall return or destroy any confidential information belonging to the other party.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content: [
      "PulseWeb Technologies provides its services on an \"as is\" basis and makes no warranties, expressed or implied, regarding the results or outcomes of any project.",
      "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services, including but not limited to loss of profits, data, or business opportunities.",
      "Our total liability for any claim arising from our services shall not exceed the total amount paid by the client for the specific project in question.",
      "We are not responsible for any delays or failures caused by factors beyond our reasonable control, including but not limited to natural disasters, internet outages, third-party service failures, or government actions.",
    ],
  },
  {
    icon: Clock,
    title: "Project Timelines & Delivery",
    content: [
      "Project timelines are estimated based on the agreed scope and are shared in the project proposal. While we make every effort to meet deadlines, actual delivery may vary based on:",
      "Complexity of requirements and technical challenges encountered during development.",
      "Timeliness of client feedback, content, and approvals — delays in client responses may shift the project timeline accordingly.",
      "Changes in project scope requested by the client after work has begun.",
      "We will communicate any significant timeline changes proactively and work with the client to find the best path forward.",
    ],
  },
  {
    icon: Gavel,
    title: "Governing Law & Disputes",
    content: [
      "These Terms of Service shall be governed by and construed in accordance with the laws of India.",
      "Any disputes arising from these terms or our services shall first be attempted to be resolved through good-faith negotiation between the parties.",
      "If a dispute cannot be resolved through negotiation, it shall be subject to the exclusive jurisdiction of the courts in Rajkot, Gujarat, India.",
      "Nothing in these terms shall prevent either party from seeking injunctive relief or other equitable remedies in any court of competent jurisdiction.",
    ],
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: [
      "If you have any questions or concerns about these Terms of Service, please reach out to us:",
      "**Email:** info@pulseweb.com",
      "**Phone:** +91-9426258442",
      "**Address:** Mordern Building, Cenal Road, Rajkot - 360 001, Gujarat, India",
      "We are committed to addressing your concerns promptly and transparently.",
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

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[128px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <TextReveal>
            <div className="text-center">
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Legal
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 mb-6">
                Terms of <span className="text-gradient">Service</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Please read these terms carefully before using our website or
                engaging our services. They outline the rules and guidelines for
                working with PulseWeb Technologies.
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
