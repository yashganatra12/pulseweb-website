import { Metadata } from "next";

const siteUrl = "https://pulsewebtechnologies.com";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a typical web development project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary by scope. A standard website takes 4-8 weeks, a mobile app 8-16 weeks, and complex platforms 3-6 months. We'll provide a detailed timeline in our proposal.",
      },
    },
    {
      "@type": "Question",
      name: "What's your pricing model for web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer both fixed-price and time & materials models. Most projects start with a discovery phase to define scope, then we provide a transparent, detailed quote.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-launch support for websites and apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. All projects include 30 days of free bug-fix support. We also offer monthly maintenance plans for ongoing updates, monitoring, and optimization.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with our existing development team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We frequently augment in-house teams. Our developers integrate seamlessly with your workflows, tools, and communication channels.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does PulseWeb Technologies specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in React, Next.js, Node.js, React Native, Flutter, Python, AWS, and more. We choose the best stack for each project's unique needs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you sign NDAs before discussing projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We're happy to sign NDAs before discussing any project details. Your ideas and business information are always treated with strict confidentiality.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact Us",
      item: `${siteUrl}/contact`,
    },
  ],
};

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote for Web & App Development",
  description:
    "Contact PulseWeb Technologies for custom web development, mobile app development, UI/UX design, and digital marketing services. Get a free project consultation. Visit us in Rajkot, Gujarat or call +91-6351563390.",
  keywords: [
    "contact PulseWeb Technologies",
    "web development inquiry",
    "get a quote web development",
    "hire web developers India",
    "IT company contact Rajkot",
    "app development consultation",
    "free project consultation",
    "web development quote",
    "hire React developers",
    "outsource web development India",
    "website development cost India",
    "mobile app development cost",
  ],
  openGraph: {
    title: "Contact Us — Get a Free Quote | PulseWeb Technologies",
    description:
      "Get in touch with PulseWeb Technologies for your next web or app development project. Free consultation available.",
    url: "https://pulsewebtechnologies.com/contact",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact PulseWeb Technologies",
      },
    ],
  },
  alternates: {
    canonical: "https://pulsewebtechnologies.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
