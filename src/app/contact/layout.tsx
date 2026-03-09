import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch",
  description:
    "Contact PulseWeb Technologies for web development, app development, and digital marketing inquiries. Visit us in Rajkot, Gujarat or reach out via email and phone.",
  keywords: [
    "contact PulseWeb Technologies",
    "web development inquiry",
    "get a quote web development",
    "hire web developers India",
    "IT company contact Rajkot",
    "app development consultation",
    "free project consultation",
    "web development quote",
    "hire React developers",
    "outsource web development India",
  ],
  openGraph: {
    title: "Contact Us | PulseWeb Technologies",
    description:
      "Get in touch with PulseWeb Technologies. Let's discuss your next web or app project.",
    url: "https://pulseweb.co.in/contact",
  },
  alternates: {
    canonical: "https://pulseweb.co.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
