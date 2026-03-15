import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read PulseWeb Technologies' terms of service. Understand the terms and conditions for using our web development, app development, and digital marketing services.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pulsewebtechnologies.com/terms-of-service",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
