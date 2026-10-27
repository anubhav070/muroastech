import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cloud,
  GraduationCap,
  HeartPulse,
  Layers3,
  Lightbulb,
  MonitorSmartphone,
  Play,
  Rocket,
  School,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  Target,
  Users,
  Utensils,
  Workflow,
} from "lucide-react";

import { Button } from "../components/ui/button";

/* ------------------------------ DATA ------------------------------ */

const heroFeatures = [
  { icon: BrainCircuit, title: "AI & Machine Learning", text: "Smarter Automation" },
  { icon: MonitorSmartphone, title: "Modern Web & Mobile", text: "Scalable Applications" },
  { icon: Cloud, title: "Cloud & DevOps", text: "Reliable & Secure" },
  { icon: Lightbulb, title: "Product Innovation", text: "Real Business Impact" },
];

const trusted = [
  { icon: School, label: "Schools" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: ShoppingCart, label: "Retail & E-commerce" },
  { icon: Store, label: "MSMEs" },
  { icon: Rocket, label: "Startups" },
];

const aboutPoints = [
  { icon: BrainCircuit, title: "Innovation", text: "AI at the core" },
  { icon: Layers3, title: "Scalability", text: "Built for growth" },
  { icon: ShieldCheck, title: "Reliability", text: "Secure & trusted" },
  { icon: Target, title: "Real Impact", text: "Solving real problems" },
];

const products = [
  {
    title: "School ERP System",
    description: "Complete school management solution with AI-powered analytics.",
    icon: GraduationCap,
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    path: "/products",
  },
  {
    title: "Clinic Management",
    description: "Patient management, appointment booking and AI-based insights.",
    icon: HeartPulse,
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    path: "/products",
  },
  {
    title: "Restaurant Management",
    description: "Online ordering, menu & KOT management with real-time analytics.",
    icon: Utensils,
    gradient: "from-orange-400 via-amber-500 to-red-500",
    path: "/products",
  },
  {
    title: "AI & ML Solutions",
    description: "Custom AI models and data solutions tailored to your business.",
    icon: BrainCircuit,
    gradient: "from-violet-600 via-indigo-600 to-blue-500",
    path: "/ai-solutions",
  },
];

// NOTE: replace with your real numbers before going live.
const stats = [
  { icon: Briefcase, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Star, value: "99%", label: "Client Satisfaction" },
  { icon: Clock, value: "3+", label: "Years of Experience" },
];

const advantages = [
  { icon: Sparkles, title: "AI-First Approach", text: "We use AI to solve real business problems.", tint: "bg-violet-500" },
  { icon: BookOpen, title: "Product-Led Growth", text: "Scalable software products for multiple industries.", tint: "bg-blue-600" },
  { icon: Workflow, title: "End-to-End Expertise", text: "From idea to deployment and ongoing support.", tint: "bg-emerald-500" },
  { icon: ShieldCheck, title: "Long-Term Partnership", text: "We grow with our clients and their success.", tint: "bg-orange-500" },
];

const process = [
  { number: "01", title: "Understand Your Goals", text: "We analyze your requirements" },
  { number: "02", title: "Plan & Design", text: "Strategize the best solution" },
  { number: "03", title: "Develop & Test", text: "Build with modern technologies" },
  { number: "04", title: "Deploy & Scale", text: "Launch and provide ongoing support" },
];

// NOTE: use only real, approved client testimonials here.
const testimonials = [
  {
    quote: "MUROAS delivered an amazing solution for our business. Their team is professional and highly skilled.",
    name: "Rahul Sharma",
    role: "Founder, Sabzify",
  },
  {
    quote: "Excellent support and on-time delivery. The system has really improved our operations.",
    name: "Dr. Priya Mehta",
    role: "Clinic Director",
  },
  {
    quote: "Great technical expertise in AI and modern technologies. Highly recommended!",
    name: "Amit Patil",
    role: "School Administrator",
  },
];

/* ------------------------------ PAGE ------------------------------ */

export function Home() {
  const [start, setStart] = useState(0);
  const visible = [0, 1, 2].map((i) => testimonials[(start + i) % testimonials.length]);

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate bg-gradient-to-br from-[#f4f8ff] via-[#e9f1ff] to-[#dfe3ff] pt-28 lg:pt-32">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[520px] w-[520px] rounded-full bg-violet-300/30 blur-[110px]" />
        <div className="pointer-events-none absolute left-1/3 top-10 -z-10 h-64 w-64 rounded-full bg-blue-300/25 blur-[90px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-8 sm:px-8 lg:grid-cols-2 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative z-10"
          >
            <span className="inline-flex items-center rounded-full border border-blue-300 bg-white/70 px-3 py-1.5 text-[10px] font-extrabold tracking-[1.5px] text-blue-700">
              AI-FIRST TECHNOLOGY COMPANY
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0f1a35] sm:text-5xl lg:text-[56px]">
              Building Intelligent Software Products for a{" "}
              <span className="text-blue-600">Smarter Tomorrow</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-700 sm:text-lg">
              We design and build AI-powered software products that help businesses
              automate, analyze and grow with modern technology.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact">
                <Button className="h-12 w-full rounded-md bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 sm:w-auto">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/products">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-md border-blue-500 bg-white/60 px-6 font-semibold text-blue-700 hover:bg-blue-50 sm:w-auto"
                >
                  Explore Our Products
                </Button>
              </Link>
            </div>
          </motion.div>

          <HeroVisual />
        </div>

        {/* hero feature strip */}
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 pb-10 pt-4 sm:px-8 lg:grid-cols-4 lg:px-10">
          {heroFeatures.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-blue-600 shadow-sm">
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

      {/* TRUSTED BY */}
      <section className="px-5 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-xl bg-slate-100/80 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[10px] font-bold leading-4 tracking-[1.5px] text-slate-600">
            TRUSTED BY
            <br />
            BUSINESSES & INSTITUTIONS
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {trusted.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <Icon className="h-6 w-6" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          {/* Replace this block with <img src="/office.jpg" .../> if you have a real office photo */}
          <div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 via-sky-100 to-slate-300 shadow-lg sm:h-[340px]">
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-500/30 to-transparent" />
            <div className="relative flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-600 text-white shadow-lg">
                <BrainCircuit className="h-8 w-8" />
              </div>
              <div>
                <p className="text-3xl font-extrabold leading-none text-[#0f1a35]">MUROAS</p>
                <p className="mt-1 text-base font-medium text-slate-700">Tech Innovation</p>
              </div>
            </div>
            <button
              type="button"
              className="absolute bottom-5 right-5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-white">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span className="text-left">
                <span className="block text-xs font-bold text-slate-900">Watch Our Story</span>
                <span className="block text-[11px] text-slate-500">2 min</span>
              </span>
            </button>
          </div>

          <div>
            <Pill>ABOUT MUROAS</Pill>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0f1a35] sm:text-4xl">
              Engineering the Future with AI
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              MUROAS Tech Innovation is a product-focused technology company building
              AI-driven software solutions for education, healthcare, retail and MSMEs.
              Our mission is to create intelligent products that solve real-world
              problems and make technology accessible to every business.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {aboutPoints.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm font-bold">{title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{text}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
            >
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <SectionLabel>OUR PRODUCTS</SectionLabel>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
                Powerful Products for Real Business Needs
              </h2>
            </div>
            <Link
              to="/products"
              className="hidden shrink-0 items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 sm:inline-flex"
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(({ title, description, icon: Icon, gradient, path }) => (
              <article
                key={title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className={`relative h-36 bg-gradient-to-br ${gradient}`}>
                  <div className="absolute -right-6 -top-8 h-32 w-32 rounded-full border border-white/25" />
                  <div className="absolute -bottom-10 left-10 h-32 w-32 rounded-full border border-white/20" />
                  <Icon className="absolute right-5 top-5 h-16 w-16 text-white/35" />
                  <div className="absolute inset-x-5 bottom-0 flex h-16 items-end gap-1.5">
                    {[40, 65, 50, 85, 60, 95, 75].map((h, i) => (
                      <span key={i} className="flex-1 rounded-t bg-white/40" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <span className="absolute -bottom-4 left-4 grid h-9 w-9 place-items-center rounded-lg bg-white text-blue-600 shadow-md">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-5 pt-7">
                  <h3 className="text-base font-extrabold">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
                  <Link
                    to={path}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-700"
                  >
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-5 pb-12 sm:px-8 lg:px-10">
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

      {/* WHY CHOOSE */}
      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel>WHY CHOOSE MUROAS</SectionLabel>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
            More Than Just a Technology Company
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, text, tint }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-[0_4px_20px_rgba(15,26,53,0.06)]"
              >
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white ${tint}`}>
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
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel>OUR PROCESS</SectionLabel>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
            A Simple & Transparent Approach
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.number} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-extrabold text-white">
                  {step.number}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-extrabold leading-tight">{step.title}</p>
                  <p className="mt-1 text-xs leading-4 text-slate-500">{step.text}</p>
                </div>
                {index < process.length - 1 && (
                  <ArrowRight className="mt-3 hidden h-5 w-5 shrink-0 text-blue-500 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <SectionLabel>CLIENT TESTIMONIALS</SectionLabel>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
                What Our Clients Say
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => setStart((start - 1 + testimonials.length) % testimonials.length)}
                className="grid h-9 w-9 place-items-center rounded-full border border-blue-200 bg-white text-blue-600 hover:bg-blue-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => setStart((start + 1) % testimonials.length)}
                className="grid h-9 w-9 place-items-center rounded-full border border-blue-200 bg-white text-blue-600 hover:bg-blue-50"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {visible.map((t) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="flex gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-extrabold text-white">
                  {t.name
                    .replace("Dr. ", "")
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div className="min-w-0">
                  <p className="text-xs leading-5 text-slate-600">“{t.quote}”</p>
                  <div className="mt-3 flex items-end justify-between gap-2">
                    <div>
                      <p className="text-xs font-extrabold">{t.name}</p>
                      <p className="text-[11px] text-slate-500">{t.role}</p>
                    </div>
                    <div className="flex shrink-0">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-10 sm:px-8 lg:px-10">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 p-7 text-white sm:p-9 lg:flex-row lg:items-center">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <span className="text-[11px] font-extrabold tracking-[2px] text-blue-100">
              LET'S BUILD SOMETHING AMAZING
            </span>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Turn Your Ideas Into Real Solutions</h2>
            <p className="mt-2 text-sm text-blue-100">
              Get in touch with us for a free consultation and let's build something impactful together.
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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-blue-300 px-3 py-1 text-[10px] font-extrabold tracking-[1.5px] text-blue-700">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-extrabold tracking-[1.6px] text-blue-700">
      <span className="h-0.5 w-6 rounded-full bg-blue-600" />
      {children}
    </span>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[580px] pb-6 pt-14 lg:pt-16">
      <div className="absolute inset-10 rounded-full bg-blue-400/20 blur-3xl" />

      {/* floating insight card */}
      <div className="absolute left-4 top-0 z-20 flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2.5 shadow-xl sm:left-10">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-50 text-indigo-600">
          <BrainCircuit className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-bold">AI-Powered Insights</p>
          <p className="text-[10px] text-slate-500">Turn Your Data Into Decisions</p>
        </div>
      </div>

      {/* laptop */}
      <div className="relative mr-10 rounded-xl border-[6px] border-slate-800 bg-white p-2 shadow-2xl shadow-blue-900/20 sm:mr-14">
        <div className="grid grid-cols-[52px_1fr] gap-2 sm:grid-cols-[70px_1fr]">
          <div className="space-y-1.5 rounded-md bg-[#0f1a35] p-2 text-[8px] text-white/60">
            <div className="mb-2 flex items-center gap-1 font-bold text-white">
              <Layers3 className="h-3 w-3" /> MUROAS
            </div>
            {["Dashboard", "Analytics", "Projects", "Reports", "Settings"].map((item, i) => (
              <div key={item} className={`rounded px-1.5 py-1 ${i === 0 ? "bg-blue-600 text-white" : ""}`}>
                {item}
              </div>
            ))}
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-bold text-slate-800">Business Overview</p>
            <div className="mt-1.5 grid grid-cols-3 gap-1.5">
              {[
                ["Total Users", "1,248", "+13%"],
                ["Active Products", "342", "+6%"],
                ["Revenue", "₹12,480", "+13%"],
              ].map(([l, v, g]) => (
                <div key={l} className="rounded-md border border-slate-100 p-1.5">
                  <p className="text-[7px] text-slate-500">{l}</p>
                  <p className="text-[10px] font-extrabold">
                    {v} <span className="text-[7px] font-bold text-emerald-600">{g}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-1.5 grid grid-cols-[1.5fr_1fr] gap-1.5">
              <div className="rounded-md border border-slate-100 p-1.5">
                <p className="text-[8px] font-bold">Growth Overview</p>
                <svg viewBox="0 0 200 80" className="mt-1 w-full" role="img" aria-label="Growth chart">
                  <path
                    d="M0 70 L20 55 L40 62 L60 40 L85 48 L110 28 L135 36 L160 14 L200 8 L200 80 L0 80 Z"
                    fill="#2563eb"
                    opacity="0.1"
                  />
                  <path
                    d="M0 70 L20 55 L40 62 L60 40 L85 48 L110 28 L135 36 L160 14 L200 8"
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
                {["New user registered", "Model training completed", "New cloud project"].map((a) => (
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
      <div className="absolute -right-1 bottom-0 z-10 w-[118px] rounded-[22px] border-[5px] border-slate-900 bg-white p-2 shadow-2xl sm:w-[140px]">
        <p className="text-[8px] font-bold text-slate-800">Good Morning, Anubhav</p>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {[BrainCircuit, Workflow, Layers3, ShieldCheck].map((Icon, i) => (
            <div key={i} className="grid h-10 place-items-center rounded-lg bg-indigo-50 text-indigo-600">
              <Icon className="h-4 w-4" />
            </div>
          ))}
        </div>
        <p className="mt-2 text-[8px] font-bold">Latest Products</p>
        <div className="mt-1 space-y-1">
          <div className="h-3 rounded bg-slate-100" />
          <div className="h-3 w-4/5 rounded bg-slate-100" />
        </div>
      </div>
    </div>
  );
}