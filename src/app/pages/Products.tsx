import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Box,
  ChartNoAxesCombined,
  CheckCircle2,
  Cog,
  Cpu,
  GraduationCap,
  HeartPulse,
  Layers3,
  Lightbulb,
  Network,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Target,
  Users,
  Utensils,
} from "lucide-react";

import { Button } from "../components/ui/button";

/* ------------------------------ DATA ------------------------------ */

const heroFeatures = [
  { icon: Network, title: "Real Business Problems", text: "Practical Solutions" },
  { icon: Cog, title: "AI-Powered", text: "Intelligence" },
  { icon: Layers3, title: "Scalable", text: "Architecture" },
  { icon: ShieldCheck, title: "Secure & Reliable", text: "Infrastructure" },
];

const featured = [
  {
    id: "school-erp",
    icon: GraduationCap,
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    title: "School ERP",
    text: "Complete school management solution with AI-powered analytics and automation.",
    points: ["Student & Staff Management", "Exams, Fees & Attendance", "AI-Powered Reports"],
    href: "/products",
  },
  {
    id: "clinic",
    icon: HeartPulse,
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    title: "Clinic Management",
    text: "Patient management system with appointment booking, medical records and AI-based insights.",
    points: ["Appointment Booking", "Patient Records & History", "AI Health Analytics"],
    href: "/products",
  },
  {
    id: "restaurant",
    icon: Utensils,
    gradient: "from-orange-400 via-amber-500 to-red-500",
    title: "Restaurant Management",
    text: "Online ordering, menu & KOT management with real-time analytics and inventory tracking.",
    points: ["Menu & Order Management", "Kitchen Operations (KOT)", "AI Demand Forecasting"],
    href: "/products",
  },
  {
    id: "ai-ml",
    icon: BrainCircuit,
    gradient: "from-violet-600 via-indigo-600 to-blue-500",
    title: "AI & ML Solutions",
    text: "Custom AI models and data solutions for specific business needs across industries.",
    points: ["Predictive Analytics", "Document Intelligence", "Custom AI Integrations"],
    href: "/ai-solutions",
  },
];

// NOTE: replace with your real numbers before going live.
const stats = [
  { icon: Box, value: "10+", label: "Software Products" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Star, value: "99%", label: "Client Satisfaction" },
  { icon: ChartNoAxesCombined, value: "3+", label: "Years of Product Development" },
];

const categories = [
  { icon: GraduationCap, tint: "bg-blue-50 text-blue-600", title: "Education", text: "School ERP, learning platforms and academic management tools." },
  { icon: HeartPulse, tint: "bg-rose-50 text-rose-500", title: "Healthcare", text: "Clinic management, patient care and hospital automation solutions." },
  { icon: Store, tint: "bg-orange-50 text-orange-500", title: "Retail & E-commerce", text: "Ordering, inventory and business management platforms." },
  { icon: Cog, tint: "bg-violet-50 text-violet-600", title: "Business Tools", text: "Custom software products tailored for MSMEs and enterprises." },
];

const purpose = [
  { icon: Target, tint: "bg-emerald-50 text-emerald-600", title: "Real Problems", text: "Designed around actual business needs." },
  { icon: Cpu, tint: "bg-blue-50 text-blue-600", title: "AI-Powered", text: "Intelligent features that create real value." },
  { icon: Layers3, tint: "bg-violet-50 text-violet-600", title: "Scalable", text: "Built to grow with your business." },
  { icon: ShieldCheck, tint: "bg-orange-50 text-orange-500", title: "Secure & Reliable", text: "Your data and business are safe with us." },
];

const process = [
  { title: "Understand", text: "Market Needs" },
  { title: "Plan & Design", text: "Product Strategy" },
  { title: "Develop", text: "& Test" },
  { title: "Launch", text: "& Optimize" },
  { title: "Scale", text: "& Grow" },
];

/* ------------------------------ PAGE ------------------------------ */

export function Products() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate bg-gradient-to-br from-[#f4f8ff] via-[#e9f1ff] to-[#dfe0ff] pt-28 lg:pt-32">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[500px] w-[500px] rounded-full bg-violet-300/30 blur-[110px]" />
        <div className="pointer-events-none absolute left-1/3 top-10 -z-10 h-64 w-64 rounded-full bg-blue-300/25 blur-[90px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-8 sm:px-8 lg:grid-cols-2 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex rounded-full border border-blue-300 bg-white/70 px-3 py-1.5 text-[10px] font-extrabold tracking-[1.5px] text-blue-700">
              OUR PRODUCTS
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0f1a35] sm:text-5xl lg:text-[54px]">
              Powerful Software Products for a{" "}
              <span className="text-blue-600">Smarter Tomorrow</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-700 sm:text-lg">
              We build AI-powered software products that help businesses automate
              operations, make better decisions and achieve real growth. Designed for
              real-world use, built for scale.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact">
                <Button className="h-12 w-full rounded-md bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 sm:w-auto">
                  Get a Product Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#featured">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-md border-blue-500 bg-white/60 px-6 font-semibold text-blue-700 hover:bg-blue-50 sm:w-auto"
                >
                  Explore All Products
                </Button>
              </a>
            </div>
          </motion.div>

          <HeroVisual />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 pb-10 pt-4 sm:px-8 lg:grid-cols-4 lg:px-10">
          {heroFeatures.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{title}</p>
                <p className="mt-0.5 text-[11px] text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="featured" className="scroll-mt-24 py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Label>OUR PRODUCTS</Label>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
                Featured Products
              </h2>
            </div>
            <Link
              to="/contact"
              className="hidden shrink-0 items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 sm:inline-flex"
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map(({ id, icon: Icon, gradient, title, text, points, href }) => (
              <article
                key={id}
                className="flex flex-col rounded-xl border border-slate-100 bg-white p-3 shadow-[0_4px_20px_rgba(15,26,53,0.07)]"
              >
                <div className={`relative h-32 overflow-hidden rounded-lg bg-gradient-to-br ${gradient}`}>
                  <div className="absolute -right-6 -top-8 h-32 w-32 rounded-full border border-white/25" />
                  <Icon className="absolute right-4 top-4 h-14 w-14 text-white/30" />
                  <div className="absolute inset-x-4 bottom-0 flex h-14 items-end gap-1.5">
                    {[40, 65, 50, 85, 60, 95, 75].map((h, i) => (
                      <span key={i} className="flex-1 rounded-t bg-white/35" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <span className="absolute bottom-2 left-2 grid h-8 w-8 place-items-center rounded-lg bg-white text-blue-600 shadow">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
                  <h3 className="text-lg font-extrabold">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>

                  <ul className="mt-4 flex-1 space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="h-4 w-4 shrink-0 fill-blue-600 text-white" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <Link to={href}>
                      <Button className="h-9 w-full rounded-md bg-blue-600 px-2 text-xs font-semibold text-white hover:bg-blue-700">
                        View Details <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button
                        variant="outline"
                        className="h-9 w-full rounded-md border-blue-400 px-2 text-xs font-semibold text-blue-700 hover:bg-blue-50"
                      >
                        Live Demo
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-5 pb-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 px-6 py-6 text-white lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className={`flex items-center justify-center gap-4 ${i > 0 ? "lg:border-l lg:border-white/20" : ""}`}
            >
              <Icon className="h-9 w-9 text-white/90" strokeWidth={1.5} />
              <div>
                <p className="text-2xl font-extrabold leading-none">{value}</p>
                <p className="mt-1 text-xs text-blue-100">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Label>PRODUCT CATEGORIES</Label>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
            Explore Our Product Categories
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(({ icon: Icon, tint, title, text }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-[0_4px_20px_rgba(15,26,53,0.06)]"
              >
                <div className={`grid h-16 w-16 shrink-0 place-items-center rounded-full ${tint}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-extrabold">{title}</p>
                  <p className="mt-1 text-xs leading-4 text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT WITH PURPOSE */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Label>WHY OUR PRODUCTS</Label>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
            Built with Purpose
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {purpose.map(({ icon: Icon, tint, title, text }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-[0_4px_20px_rgba(15,26,53,0.06)]"
              >
                <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${tint}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-extrabold">{title}</p>
                  <p className="mt-1 text-xs leading-4 text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Label>OUR PROCESS</Label>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
            From Idea to Product
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <div key={step.title} className="flex items-center gap-3">
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-sm font-extrabold text-white ${
                    index % 2 === 0 ? "bg-blue-600" : "bg-indigo-600"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-extrabold leading-tight">{step.title}</p>
                  <p className="text-sm font-semibold leading-tight text-slate-700">{step.text}</p>
                </div>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-blue-500 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-10 sm:px-8 lg:px-10">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 p-7 text-white sm:p-9 lg:flex-row lg:items-center">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <span className="text-[11px] font-extrabold tracking-[2px] text-blue-100">
              LET'S BUILD A SMARTER TOMORROW
            </span>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Interested in Our Products?</h2>
            <p className="mt-2 text-sm text-blue-100">
              Get in touch with our team for a live demo and see how our products can help your business.
            </p>
          </div>
          <Link to="/contact" className="relative w-full shrink-0 sm:w-auto">
            <Button className="h-12 w-full rounded-md bg-white px-6 font-bold text-blue-700 hover:bg-blue-50 sm:w-auto">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

/* --------------------------- SUB-COMPONENTS --------------------------- */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-extrabold tracking-[1.6px] text-blue-700">
      <span className="h-0.5 w-6 rounded-full bg-blue-600" />
      {children}
    </span>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[580px] pb-6 pt-16 lg:pt-20">
      <div className="absolute inset-10 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute right-0 top-0 z-20 flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2.5 shadow-xl">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-50 text-indigo-600">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-bold leading-tight">AI-Powered Products</p>
          <p className="text-[10px] text-slate-500">Built for real impact</p>
        </div>
      </div>

      {/* laptop */}
      <div className="relative mr-10 rounded-xl border-[6px] border-slate-800 bg-white p-2 shadow-2xl shadow-blue-900/20 sm:mr-14">
        <div className="grid grid-cols-[52px_1fr] gap-2 sm:grid-cols-[70px_1fr]">
          <div className="space-y-1.5 rounded-md bg-[#0f1a35] p-2 text-[8px] text-white/60">
            <div className="mb-2 flex items-center gap-1 font-bold text-white">
              <Cpu className="h-3 w-3" /> MUROAS
            </div>
            {["Dashboard", "Analytics", "Orders", "Customers", "Products", "Reports", "Settings"].map((item, i) => (
              <div key={item} className={`rounded px-1.5 py-1 ${i === 0 ? "bg-blue-600 text-white" : ""}`}>
                {item}
              </div>
            ))}
          </div>

          <div className="min-w-0">
            <p className="text-xs font-extrabold text-slate-900">Dashboard</p>
            <div className="mt-1.5 grid grid-cols-4 gap-1">
              {[
                ["Total Users", "12,480"],
                ["Total Orders", "842"],
                ["Revenue", "₹8,24,000"],
                ["Active Today", "320"],
              ].map(([l, v]) => (
                <div key={l} className="rounded-md border border-slate-100 p-1.5">
                  <p className="text-[7px] text-slate-500">{l}</p>
                  <p className="text-[10px] font-extrabold">{v}</p>
                </div>
              ))}
            </div>

            <div className="mt-1.5 grid grid-cols-[1.6fr_1fr] gap-1.5">
              <div className="rounded-md border border-slate-100 p-1.5">
                <p className="text-[8px] font-bold">Revenue Overview</p>
                <svg viewBox="0 0 220 90" className="mt-1 w-full" role="img" aria-label="Revenue chart">
                  <path d="M0 80 L30 55 L55 65 L85 40 L115 50 L145 22 L175 30 L220 6 L220 90 L0 90 Z" fill="#2563eb" opacity="0.1" />
                  <path
                    d="M0 80 L30 55 L55 65 L85 40 L115 50 L145 22 L175 30 L220 6"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="rounded-md border border-slate-100 p-1.5">
                <p className="text-[8px] font-bold">Recent Activity</p>
                {["New user registered", "Order placed", "Payment received", "Product updated"].map((a) => (
                  <div key={a} className="mt-1 flex items-center gap-1">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                    <span className="truncate text-[7px] text-slate-600">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto -mt-0.5 mr-6 h-2 rounded-b-xl bg-slate-300 sm:mr-10" />

      {/* phone */}
      <div className="absolute -right-1 bottom-0 z-10 w-[118px] rounded-[22px] border-[5px] border-slate-900 bg-white p-2 shadow-2xl sm:w-[138px]">
        <p className="text-[8px] font-bold text-slate-800">Good Morning</p>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {["Orders", "Products", "Analytics", "Customers"].map((l) => (
            <div key={l} className="grid h-10 place-items-center rounded-lg bg-indigo-50 text-[7px] font-semibold text-indigo-700">
              {l}
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-blue-50 p-1.5">
          <Lightbulb className="h-4 w-4 shrink-0 text-blue-600" />
          <span className="text-[7px] font-semibold text-slate-700">AI Assistant</span>
        </div>
      </div>
    </div>
  );
}