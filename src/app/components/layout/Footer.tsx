import { Link } from "react-router";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Logo } from "../Logo";

// Keep contact details in one place so every page stays consistent.
const EMAIL = "astechinnovation@gmail.com";
const PHONE_DISPLAY = "+91 8459161017";
const PHONE_LINK = "tel:+918459161017";

// TODO: put your real profile URLs here. Icons with an empty URL are not clickable.
const socials = [
  { name: "LinkedIn", icon: Linkedin, href: "" },
  { name: "Twitter", icon: Twitter, href: "" },
  { name: "Instagram", icon: Instagram, href: "" },
  { name: "YouTube", icon: Youtube, href: "" },
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "AI Solutions", path: "/ai-solutions" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Career", path: "/career" },
  { name: "Insights", path: "/insights" },
];

const productLinks = [
  { name: "School ERP", path: "/products" },
  { name: "Clinic Management", path: "/products" },
  { name: "Restaurant Management", path: "/products" },
  { name: "AI & ML Solutions", path: "/ai-solutions" },
  { name: "Custom Software", path: "/contact" },
];

const linkClass = "text-sm text-slate-300 transition-colors hover:text-white";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08101f] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Company */}
          <div>
            <Link to="/" aria-label="MUROAS Tech Innovation home" className="flex items-center gap-3">
              <div className="h-11 w-11 [&_svg]:h-full [&_svg]:w-full">
                <Logo />
              </div>
              <span className="text-lg font-extrabold leading-tight">
                MUROAS
                <span className="block text-xs font-medium text-slate-300">Tech Innovation</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-300">
              Engineering the future with innovative AI-powered software products.
            </p>

            <div className="mt-5 flex items-center gap-5">
              {socials.map(({ name, icon: Icon, href }) =>
                href ? (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="text-slate-300 transition-colors hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ) : (
                  <span key={name} aria-label={name} className="text-slate-300">
                    <Icon className="h-5 w-5" />
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className={linkClass}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-sm font-bold">Our Products</h3>
            <ul className="mt-5 space-y-3">
              {productLinks.map((l) => (
                <li key={l.name}>
                  <Link to={l.path} className={linkClass}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold">Contact Us</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-slate-300" />
                <a href={`mailto:${EMAIL}`} className={`${linkClass} break-all`}>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-slate-300" />
                <a href={PHONE_LINK} className={linkClass}>
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-slate-300" />
                <span className="text-sm text-slate-300">Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-slate-400 sm:px-8 md:flex-row lg:px-10">
          <p>© {currentYear} MUROAS Tech Innovation Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* These pages need to be added to your router (see notes). */}
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-white/20" aria-hidden="true" />
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}