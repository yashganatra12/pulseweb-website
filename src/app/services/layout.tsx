import { Metadata } from "next";

const siteUrl = "https://pulsewebtechnologies.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
  ],
};

export const metadata: Metadata = {
  title: "Web Development, App Development & Digital Marketing Services",
  description:
    "Explore PulseWeb Technologies' services: custom website development, mobile app development (Flutter & React Native), UI/UX design, e-commerce solutions, SEO optimization, cloud & DevOps, and digital marketing in Rajkot, Gujarat, India.",
  keywords: [
    "web development services",
    "website development services India",
    "mobile app development services",
    "UI/UX design services Rajkot",
    "e-commerce development India",
    "SEO optimization services",
    "cloud hosting and DevOps",
    "digital marketing agency Gujarat",
    "React development services",
    "Next.js web development",
    "Flutter app development India",
    "custom software development",
    "progressive web app development",
    "API development services",
    "responsive website design",
    "web development company services",
  ],
  openGraph: {
    title: "Our Services — Web, App & Digital Solutions | PulseWeb Technologies",
    description:
      "Custom web development, mobile app development, UI/UX design, SEO, and digital marketing services to grow your business.",
    url: `${siteUrl}/services`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "PulseWeb Technologies Services" }],
  },
  alternates: {
    canonical: `${siteUrl}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
