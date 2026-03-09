import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Values",
  description:
    "Learn about PulseWeb Technologies — a passionate team of 10+ developers and designers in Rajkot, Gujarat, building cutting-edge web and mobile solutions since 2020.",
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
  ],
  openGraph: {
    title: "About Us | PulseWeb Technologies",
    description:
      "Meet PulseWeb Technologies — a team of passionate builders creating digital products that make a real impact since 2020.",
    url: "https://pulseweb.co.in/about",
  },
  alternates: {
    canonical: "https://pulseweb.co.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
