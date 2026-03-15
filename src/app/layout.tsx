import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://pulsewebtechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "PulseWeb Technologies | Best Web & App Development Company in Rajkot, Gujarat",
    template: "%s | PulseWeb Technologies",
  },
  description:
    "PulseWeb Technologies is a top-rated web development & mobile app development company in Rajkot, Gujarat, India. We build custom websites, React & Next.js web apps, Flutter & React Native mobile apps, e-commerce stores, SaaS products, UI/UX design, SEO, and digital marketing solutions for startups and enterprises worldwide.",
  keywords: [
    "web development company Rajkot",
    "website development company in Gujarat",
    "best web development company India",
    "app development company Gujarat",
    "mobile app development India",
    "mobile app development company Rajkot",
    "React development services",
    "Next.js development company",
    "Flutter app development",
    "React Native app development",
    "UI/UX design agency Rajkot",
    "custom web application development",
    "e-commerce website development India",
    "digital marketing services Rajkot",
    "SEO services India",
    "IT company Rajkot Gujarat",
    "website design and development",
    "software development company India",
    "PulseWeb Technologies",
    "affordable web development services",
    "startup web development",
    "business website development",
    "responsive web design",
    "progressive web app development",
    "full stack development services",
    "Node.js development",
    "TypeScript development",
    "Tailwind CSS developer",
    "cloud hosting services",
    "AWS deployment services",
    "API development and integration",
    "SaaS development company",
    "cross-platform app development",
    "hire web developers India",
    "website development services near me",
    "custom software development Rajkot",
    "ecommerce development company Gujarat",
  ],
  authors: [{ name: "PulseWeb Technologies", url: siteUrl }],
  creator: "PulseWeb Technologies",
  publisher: "PulseWeb Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "PulseWeb Technologies",
    title:
      "PulseWeb Technologies | Best Web & App Development Company in Rajkot",
    description:
      "We build stunning websites, powerful mobile apps, and scalable digital solutions. Custom web development, app development, UI/UX design, and digital marketing. Transform your business with PulseWeb Technologies.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "PulseWeb Technologies — Web & App Development Company in Rajkot, Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pulsewebtech",
    creator: "@pulsewebtech",
    title: "PulseWeb Technologies | Web & App Development Company",
    description:
      "Custom web & app development, UI/UX design, and digital marketing solutions. Based in Rajkot, serving clients worldwide.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Technology",
  other: {
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "PulseWeb Technologies",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
      },
      image: `${siteUrl}/og-image.png`,
      email: "info@pulsewebtechnologies.com",
      telephone: "+91-6351563390",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Modern Building, Canal Road",
        addressLocality: "Rajkot",
        addressRegion: "Gujarat",
        postalCode: "360001",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/company/pulseweb-technologies",
        "https://www.instagram.com/pulseweb.technologies",
        "https://x.com/pulsewebtech",
      ],
      founder: {
        "@type": "Person",
        name: "PulseWeb Technologies Team",
      },
      foundingDate: "2020",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 10,
        maxValue: 50,
      },
      knowsAbout: [
        "Web Development",
        "Mobile App Development",
        "React",
        "Next.js",
        "Flutter",
        "React Native",
        "Node.js",
        "UI/UX Design",
        "E-Commerce Development",
        "SEO",
        "Digital Marketing",
        "Cloud & DevOps",
        "SaaS Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "PulseWeb Technologies",
      description:
        "Best Web & App Development Company in Rajkot, Gujarat, India",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "PulseWeb Technologies",
      description:
        "PulseWeb Technologies is a leading web & app development company in Rajkot, Gujarat offering custom website development, mobile app development, UI/UX design, e-commerce solutions, SEO, and digital marketing services.",
      url: siteUrl,
      telephone: "+91-6351563390",
      email: "info@pulsewebtechnologies.com",
      image: `${siteUrl}/og-image.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Modern Building, Canal Road",
        addressLocality: "Rajkot",
        addressRegion: "Gujarat",
        postalCode: "360001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "22.3039",
        longitude: "70.8022",
      },
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "16:00",
        },
      ],
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "State", name: "Gujarat" },
        { "@type": "City", name: "Rajkot" },
        { "@type": "City", name: "Ahmedabad" },
        { "@type": "City", name: "Surat" },
        { "@type": "City", name: "Vadodara" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web & App Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Website Development",
              description:
                "Professional website design and development using React, Next.js, and modern technologies.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
              description:
                "Cross-platform and native mobile app development using Flutter and React Native.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design",
              description:
                "User interface and user experience design for web and mobile applications.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-Commerce Development",
              description:
                "Scalable e-commerce solutions with payment integration and inventory management.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO & Digital Marketing",
              description:
                "Search engine optimization, Google Ads, social media marketing, and content marketing services.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud & DevOps",
              description:
                "Cloud infrastructure setup, deployment, and DevOps automation on AWS, GCP, and Azure.",
            },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "47",
        bestRating: "5",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "PulseWeb Technologies",
      url: siteUrl,
      serviceType: [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "E-Commerce Development",
        "SEO Services",
        "Digital Marketing",
        "SaaS Development",
        "Cloud & DevOps",
      ],
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
