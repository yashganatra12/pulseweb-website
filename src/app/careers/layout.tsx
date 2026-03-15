import { Metadata } from "next";

const siteUrl = "https://pulsewebtechnologies.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Careers", item: `${siteUrl}/careers` },
  ],
};

const jobPostingsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "JobPosting",
      title: "React Developer",
      description:
        "We're looking for a passionate React Developer to join our frontend team. You'll work on real client projects from day one — building modern, responsive web applications using React, Next.js, and TypeScript.",
      datePosted: "2026-01-15",
      validThrough: "2026-12-31",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "PulseWeb Technologies",
        sameAs: siteUrl,
        logo: `${siteUrl}/og-image.png`,
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Modern Building, Canal Road",
          addressLocality: "Rajkot",
          addressRegion: "Gujarat",
          postalCode: "360001",
          addressCountry: "IN",
        },
      },
      experienceRequirements: "Entry level / Fresher",
      skills: "React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS",
      industry: "Information Technology",
      applicantLocationRequirements: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "JobPosting",
      title: "Business Development Executive",
      description:
        "We're looking for an energetic Business Development Executive to help us grow our client base. You'll identify new business opportunities, build relationships with potential clients, and help convert leads into long-term partnerships.",
      datePosted: "2026-01-15",
      validThrough: "2026-12-31",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "PulseWeb Technologies",
        sameAs: siteUrl,
        logo: `${siteUrl}/og-image.png`,
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Modern Building, Canal Road",
          addressLocality: "Rajkot",
          addressRegion: "Gujarat",
          postalCode: "360001",
          addressCountry: "IN",
        },
      },
      experienceRequirements: "Entry level / Fresher",
      skills: "Business Development, Sales, Communication, CRM, Lead Generation",
      industry: "Information Technology",
      applicantLocationRequirements: {
        "@type": "Country",
        name: "India",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Careers at PulseWeb Technologies — Join Our Team in Rajkot",
  description:
    "Join PulseWeb Technologies! We're hiring React Developers and Business Development Executives (freshers welcome). Build your career with a fast-growing web & app development company in Rajkot, Gujarat.",
  keywords: [
    "careers at PulseWeb",
    "React developer jobs Rajkot",
    "fresher IT jobs Gujarat",
    "web developer jobs India",
    "business development executive jobs",
    "IT company careers Rajkot",
    "frontend developer openings",
    "fresher software developer jobs",
    "tech jobs Gujarat",
    "startup jobs India",
    "PulseWeb Technologies careers",
    "junior developer openings",
    "hiring React developers Rajkot",
    "fresher jobs IT company Gujarat",
  ],
  openGraph: {
    title: "Careers — Join Our Team | PulseWeb Technologies",
    description:
      "We're hiring! Join PulseWeb Technologies as a React Developer or Business Development Executive. Freshers welcome.",
    url: `${siteUrl}/careers`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Careers at PulseWeb Technologies" }],
  },
  alternates: {
    canonical: `${siteUrl}/careers`,
  },
};

export default function CareersLayout({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingsJsonLd) }}
      />
      {children}
    </>
  );
}
