import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio — Projects & Case Studies",
  description:
    "Browse PulseWeb Technologies' portfolio of successful projects — e-commerce platforms, healthcare apps, fintech dashboards, SaaS tools, and more. See how we deliver results.",
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
  ],
  openGraph: {
    title: "Portfolio | PulseWeb Technologies",
    description:
      "Explore our portfolio of 150+ successful projects — web apps, mobile apps, e-commerce, and SaaS solutions.",
    url: "https://pulseweb.co.in/portfolio",
  },
  alternates: {
    canonical: "https://pulseweb.co.in/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
