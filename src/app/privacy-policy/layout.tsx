import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read PulseWeb Technologies' privacy policy. Learn how we collect, use, and protect your personal information when you use our website and services.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pulsewebtechnologies.com/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
