import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Web, App & Digital Solutions",
  description:
    "Explore PulseWeb Technologies' services: custom web development, mobile app development, UI/UX design, e-commerce solutions, SEO optimization, cloud & DevOps, and digital marketing in Rajkot, Gujarat.",
  keywords: [
    "web development services",
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
  ],
  openGraph: {
    title: "Services | PulseWeb Technologies",
    description:
      "Custom web & app development, UI/UX design, SEO, and digital marketing services to grow your business.",
    url: "https://pulseweb.co.in/services",
  },
  alternates: {
    canonical: "https://pulseweb.co.in/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
