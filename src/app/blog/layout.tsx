import { Metadata } from "next";

const siteUrl = "https://pulsewebtechnologies.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
  ],
};

export const metadata: Metadata = {
  title: "Web Development Blog — Tips, Tutorials & Industry Insights",
  description:
    "Read the latest articles on web development, React, Next.js, mobile app development, Flutter, UI/UX design tips, SEO strategies, and tech industry insights from PulseWeb Technologies.",
  keywords: [
    "web development blog",
    "React tips and tutorials",
    "Next.js blog",
    "mobile app development trends",
    "UI/UX design tips",
    "SEO strategies for websites",
    "tech blog India",
    "JavaScript tutorials",
    "TypeScript best practices",
    "frontend development insights",
    "startup tech blog",
    "PulseWeb Technologies blog",
    "Flutter development blog",
    "Node.js tutorials",
  ],
  openGraph: {
    title: "Blog — Web Development Tips & Insights | PulseWeb Technologies",
    description:
      "Tips, tutorials, and insights on web development, mobile apps, UI/UX design, and the latest tech trends.",
    url: `${siteUrl}/blog`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "PulseWeb Technologies Blog" }],
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default function BlogLayout({
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
