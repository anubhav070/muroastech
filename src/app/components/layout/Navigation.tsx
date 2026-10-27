import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Logo } from "../Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "AI Solutions", path: "/ai-solutions" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Career", path: "/career" },
  { name: "Insights", path: "/insights" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On every page change: close the mobile menu and start from the top
  // (skipped when the URL has a #hash, so in-page anchors keep working).
  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (!location.hash) window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname, location.hash]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex h-[76px] items-center justify-between gap-5">
          {/* Logo */}
          <Link
            to="/"
            aria-label="MUROAS Tech Innovation home"
            className="flex shrink-0 items-center gap-3"
          >
            <div className="h-10 w-10 [&_svg]:h-full [&_svg]:w-full">
              <Logo />
            </div>

            <span className="text-base font-extrabold leading-tight tracking-tight text-slate-950 sm:text-lg">
              MUROAS
              <span className="block text-[10px] font-semibold tracking-wide text-slate-500 sm:text-xs">
                Tech Innovation
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={`relative flex h-[76px] items-center whitespace-nowrap text-[13px] font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] w-full rounded-t-full bg-blue-600 transition-transform duration-200 ${
                    isActive(link.path) ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="hidden shrink-0 lg:block">
            <Link to="/contact">
              <Button className="h-11 rounded-md bg-blue-600 px-5 text-sm font-bold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-slate-800 transition-colors hover:bg-slate-50 lg:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive(link.path) ? "page" : undefined}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive(link.path)
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link to="/contact" className="mt-3 px-2">
                <Button className="h-11 w-full rounded-md bg-blue-600 font-bold text-white hover:bg-blue-700">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}