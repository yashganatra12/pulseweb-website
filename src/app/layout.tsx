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

const siteUrl = "https://pulseweb.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PulseWeb Technologies | Web & App Development Company in Rajkot",
    template: "%s | PulseWeb Technologies",
  },
  description:
    "PulseWeb Technologies is a leading web & app development company in Rajkot, Gujarat. We deliver custom websites, mobile apps, UI/UX design, e-commerce solutions, SEO, and digital marketing services to startups and businesses worldwide.",
  keywords: [
    "web development company Rajkot",
    "app development company Gujarat",
    "mobile app development India",
    "React development services",
    "Next.js development company",
    "Flutter app development",
    "UI/UX design agency",
    "custom web application development",
    "e-commerce website development",
    "digital marketing services Rajkot",
    "SEO services India",
    "IT company Rajkot Gujarat",
    "website design and development",
    "software development company",
    "PulseWeb Technologies",
    "best web development company in India",
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
    title: "PulseWeb Technologies | Web & App Development Company in Rajkot",
    description:
      "We build stunning websites, powerful mobile apps, and scalable digital solutions. Transform your business with PulseWeb Technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseWeb Technologies | Web & App Development Company",
    description:
      "Custom web & app development, UI/UX design, and digital marketing solutions. Based in Rajkot, serving clients worldwide.",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "PulseWeb Technologies",
      url: siteUrl,
      email: "info@pulseweb.com",
      telephone: "+91-6351563390",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mordern Building, Cenal Road",
        addressLocality: "Rajkot",
        addressRegion: "Gujarat",
        postalCode: "360001",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/company/pulseweb-technologies",
        "https://www.instagram.com/pulseweb.technologies",
        "https://twitter.com/pulsewebtech",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "PulseWeb Technologies",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "PulseWeb Technologies",
      description:
        "Web & App Development Company offering custom websites, mobile apps, UI/UX design, and digital marketing services.",
      url: siteUrl,
      telephone: "+91-6351563390",
      email: "info@pulseweb.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mordern Building, Cenal Road",
        addressLocality: "Rajkot",
        addressRegion: "Gujarat",
        postalCode: "360001",
        addressCountry: "IN",
      },
      priceRange: "$$",
      openingHours: "Mo-Sa 09:00-18:00",
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "State", name: "Gujarat" },
        { "@type": "City", name: "Rajkot" },
      ],
      serviceType: [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "E-Commerce Development",
        "SEO Services",
        "Digital Marketing",
      ],
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
