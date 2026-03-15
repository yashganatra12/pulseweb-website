import { Metadata } from "next";

const siteUrl = "https://pulsewebtechnologies.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "About Us", item: `${siteUrl}/about` },
  ],
};

export const metadata: Metadata = {
  title: "About PulseWeb Technologies — Our Story, Team & Mission",
  description:
    "Learn about PulseWeb Technologies — a passionate team of 10+ developers and designers in Rajkot, Gujarat, India, building cutting-edge web and mobile solutions since 2020. Discover our story, values, and tech stack.",
  keywords: [
    "about PulseWeb Technologies",
    "IT company Rajkot",
    "web development company Gujarat",
    "software development team India",
    "tech startup Rajkot",
    "company culture IT",
    "web agency about us",
    "PulseWeb team",
    "React developers India",
    "full stack developers Gujarat",
    "best IT company in Rajkot",
  ],
  openGraph: {
    title: "About Us | PulseWeb Technologies",
    description:
      "Meet PulseWeb Technologies — a team of passionate builders creating digital products that make a real impact since 2020.",
    url: `${siteUrl}/about`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "About PulseWeb Technologies" }],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutLayout({
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
