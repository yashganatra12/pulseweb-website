import { Metadata } from "next";

const siteUrl = "https://pulsewebtechnologies.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: `${siteUrl}/portfolio` },
  ],
};

export const metadata: Metadata = {
  title: "Web & App Development Portfolio — Projects & Case Studies",
  description:
    "Browse PulseWeb Technologies' portfolio of 150+ successful projects — e-commerce platforms, healthcare apps, fintech dashboards, SaaS tools, and more. See real results from our web and app development work.",
  keywords: [
    "web development portfolio",
    "app development case studies",
    "PulseWeb projects",
    "e-commerce website examples",
    "mobile app portfolio India",
    "React project showcase",
    "Next.js website examples",
    "Flutter app examples",
    "SaaS development portfolio",
    "UI/UX design portfolio",
    "best web development projects",
    "startup app development case studies",
    "website development portfolio India",
  ],
  openGraph: {
    title: "Portfolio — Projects & Case Studies | PulseWeb Technologies",
    description:
      "Explore our portfolio of 150+ successful projects — web apps, mobile apps, e-commerce, and SaaS solutions.",
    url: `${siteUrl}/portfolio`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "PulseWeb Technologies Portfolio" }],
  },
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
};

export default function PortfolioLayout({
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
