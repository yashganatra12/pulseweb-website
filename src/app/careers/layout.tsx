import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Join Our Team",
  description:
    "Join PulseWeb Technologies! We're hiring React Developers and Business Development Executives (freshers welcome). Build your career with a fast-growing IT company in Rajkot, Gujarat.",
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
  ],
  openGraph: {
    title: "Careers | PulseWeb Technologies",
    description:
      "We're hiring! Join PulseWeb Technologies as a React Developer or Business Development Executive. Freshers welcome.",
    url: "https://pulseweb.co.in/careers",
  },
  alternates: {
    canonical: "https://pulseweb.co.in/careers",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
