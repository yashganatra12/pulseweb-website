import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile App Development", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "E-Commerce Solutions", href: "/services" },
    { label: "SEO & Marketing", href: "/services" },
    { label: "Cloud & DevOps", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Case Studies", href: "/portfolio" },
    { label: "Tech Stack", href: "/about" },
    { label: "FAQs", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Sitemap", href: "/sitemap-page" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo size={32} />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none">
                  <span className="text-gradient">Pulse</span>
                  <span className="text-white">Web</span>
                </span>
                <span className="text-[8px] text-gray-500 tracking-[0.2em] uppercase">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
              Transforming businesses through innovative digital solutions. We
              build web apps, mobile apps, and everything in between — with
              passion, precision, and purpose.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { label: "Li" },
                { label: "Ig" },
                { label: "X" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/30 transition-colors cursor-pointer text-xs font-bold"
                >
                  {s.label}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 text-sm">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} PulseWeb Technologies.
            All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Crafted with passion by PulseWeb Technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
