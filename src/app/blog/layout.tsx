import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Web Development Tips, Trends & Insights",
  description:
    "Read the latest articles on web development, React, Next.js, mobile app trends, UI/UX design tips, SEO strategies, and tech industry insights from PulseWeb Technologies.",
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
  ],
  openGraph: {
    title: "Blog | PulseWeb Technologies",
    description:
      "Tips, tutorials, and insights on web development, mobile apps, UI/UX design, and the latest tech trends.",
    url: "https://pulseweb.co.in/blog",
  },
  alternates: {
    canonical: "https://pulseweb.co.in/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
