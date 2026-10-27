import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Box,
  Clock,
  Cog,
  Cpu,
  ChartNoAxesCombined,
  Factory,
  FileText,
  GraduationCap,
  HeartPulse,
  Landmark,
  LayoutGrid,
  MessageSquare,
  Network,
  Plug,
  ScanText,
  ShoppingCart,
  Sparkles,
  Star,
  Users,
  Workflow,
} from "lucide-react";

import { Button } from "../components/ui/button";

/* ------------------------------ DATA ------------------------------ */

const heroFeatures = [
  { icon: BrainCircuit, title: "AI & Machine Learning", text: "Custom models for real use cases" },
  { icon: Workflow, title: "Intelligent Automation", text: "Reduce manual work" },
  { icon: ChartNoAxesCombined, title: "Predictive Analytics", text: "Data-driven decisions" },
  { icon: ScanText, title: "Document Intelligence", text: "Extract, process and understand" },
  { icon: Plug, title: "AI Integrations", text: "Connect with your existing tools" },
];

// NOTE: replace with your real numbers before going live.
const stats = [
  { icon: Box, value: "50+", label: "AI Projects" },
  { icon: Users, value: "10+", label: "Industries Served" },
  { icon: Star, value: "99%", label: "Client Satisfaction" },
  { icon: Clock, value: "3+", label: "Years of Experience" },
];

const offers = [
  {
    icon: Bot,
    tint: "bg-blue-50 text-blue-600",
    title: "Custom AI Solutions",
    text: "Build AI models and applications for your specific business challenges.",
    tags: ["LLM Integration", "RAG", "Custom Models"],
  },
  {
    icon: Cog,
    tint: "bg-violet-50 text-violet-600",
    title: "Business Automation",
    text: "Automate repetitive processes and improve operational efficiency.",
    tags: ["Workflow Automation", "RPA", "AI Agents"],
  },
  {
    icon: ChartNoAxesCombined,
    tint: "bg-emerald-50 text-emerald-600",
    title: "Predictive Analytics",
    text: "Turn your data into actionable insights and accurate predictions.",
    tags: ["Forecasting", "Data Modeling", "Insights"],
  },
  {
    icon: FileText,
    tint: "bg-rose-50 text-rose-500",
    title: "Document Intelligence",
    text: "Extract, classify and understand data from documents and images.",
    tags: ["OCR", "Data Extraction", "Summarization"],
  },
  {
    icon: MessageSquare,
    tint: "bg-sky-50 text-sky-600",
    title: "AI Assistants & Chatbots",
    text: "Create intelligent chatbots and virtual assistants for better support.",
    tags: ["Chatbots", "Knowledge Base", "LLM Apps"],
  },
  {
    icon: Network,
    tint: "bg-orange-50 text-orange-500",
    title: "AI Integrations",
    text: "Integrate AI into your existing web and mobile applications.",
    tags: ["API Integration", "Cloud Deployment", "MLOps"],
  },
];

const industries = [
  { icon: GraduationCap, title: "Education", text: "Smart learning platforms, content generation, student analytics.", gradient: "from-sky-300 to-blue-600" },
  { icon: HeartPulse, title: "Healthcare", text: "Patient data insights, document processing and care automation.", gradient: "from-cyan-300 to-teal-600" },
  { icon: ShoppingCart, title: "Retail & E-commerce", text: "Demand forecasting, recommendation systems and inventory optimization.", gradient: "from-amber-300 to-orange-600" },
  { icon: Factory, title: "Manufacturing", text: "Predictive maintenance, quality inspection and process analytics.", gradient: "from-slate-400 to-slate-700" },
  { icon: Landmark, title: "Finance & FinTech", text: "Fraud detection, risk analysis and automated compliance.", gradient: "from-blue-300 to-indigo-700" },
  { icon: LayoutGrid, title: "Other Industries", text: "Custom AI solutions for startups, MSMEs and enterprises.", gradient: "from-indigo-300 to-violet-600" },
];

const process = [
  { title: "Understand Your Goals", text: "We analyze your business requirements and data." },
  { title: "Design The Solution", text: "Choose the right AI approach and create a roadmap." },
  { title: "Develop & Test", text: "Build, train and test models with real data." },
  { title: "Deploy & Integrate", text: "Launch the solution and integrate with your systems." },
  { title: "Support & Improve", text: "Monitor performance and continuously improve." },
];

// NOTE: these are sample case studies from the design. Use only real, verifiable results.
const cases = [
  {
    tag: "Education",
    icon: GraduationCap,
    gradient: "from-blue-400 to-indigo-700",
    title: "AI-Powered Learning Platform",
    text: "Personalized learning paths and content recommendations.",
    metrics: [["40%", "Better Engagement"], ["60%", "Time Saved"]],
  },
  {
    tag: "Healthcare",
    icon: HeartPulse,
    gradient: "from-cyan-400 to-teal-700",
    title: "Medical Document Analysis",
    text: "Automated extraction and classification of medical reports.",
    metrics: [["70%", "Faster Processing"], ["95%", "Accuracy"]],
  },
  {
    tag: "Retail",
    icon: ShoppingCart,
    gradient: "from-amber-400 to-orange-700",
    title: "Demand Forecasting System",
    text: "AI-driven demand prediction and inventory optimization.",
    metrics: [["30%", "Lower Stockouts"], ["25%", "Higher Efficiency"]],
  },
  {
    tag: "Manufacturing",
    icon: Factory,
    gradient: "from-slate-500 to-slate-800",
    title: "Quality Inspection with AI",
    text: "Automated defect detection using computer vision.",
    metrics: [["90%", "Accuracy"], ["50%", "Reduced Manual Work"]],
  },
];

/* ------------------------------ PAGE ------------------------------ */

export function AISolutions() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate bg-gradient-to-br from-[#f4f8ff] via-[#e9f1ff] to-[#e0e0ff] pt-28 lg:pt-32">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[500px] w-[500px] rounded-full bg-violet-300/30 blur-[110px]" />
        <div className="pointer-events-none absolute left-1/3 top-10 -z-10 h-64 w-64 rounded-full bg-blue-300/25 blur-[90px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-8 sm:px-8 lg:grid-cols-2 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex rounded-full border border-blue-300 bg-white/70 px-3 py-1.5 text-[10px] font-extrabold tracking-[1.5px] text-blue-700">
              AI SOLUTIONS
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0f1a35] sm:text-5xl lg:text-[54px]">
              Turn Your Business Challenges Into{" "}
              <span className="text-blue-600">Intelligent Solutions</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-700 sm:text-lg">
              We design and build AI-powered solutions that help businesses automate
              processes, make better decisions and create real value using modern
              technologies.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact">
                <Button className="h-12 w-full rounded-md bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 sm:w-auto">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#solutions">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-md border-blue-500 bg-white/60 px-6 font-semibold text-blue-700 hover:bg-blue-50 sm:w-auto"
                >
                  Explore Our Solutions
                </Button>
              </a>
            </div>
          </motion.div>

          <DashboardVisual />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 pb-10 pt-4 sm:px-8 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
          {heroFeatures.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-blue-600 shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{title}</p>
                <p className="mt-0.5 text-[10px] leading-4 text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="px-5 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 rounded-xl bg-slate-100/80 px-6 py-6 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className={`flex items-center justify-center gap-4 ${i > 0 ? "lg:border-l lg:border-slate-200" : ""}`}
            >
              <Icon className="h-9 w-9 text-blue-600" strokeWidth={1.5} />
              <div>
                <p className="text-2xl font-extrabold leading-none text-[#0f1a35]">{value}</p>
                <p className="mt-1 text-xs text-slate-500">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section id="solutions" className="scroll-mt-24 py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Heading
            label="OUR AI SOLUTIONS"
            title="What We Offer"
            sub="End-to-end AI solutions tailored to your business goals and industry needs."
            linkText="View All Solutions"
            linkTo="/products"
          />

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offers.map(({ icon: Icon, tint, title, text, tags }) => (
              <Link
                key={title}
                to="/contact"
                className="group rounded-xl border border-slate-100 bg-white p-5 shadow-[0_4px_20px_rgba(15,26,53,0.06)] transition-shadow hover:shadow-lg"
              >
                <div className="flex gap-4">
                  <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl ${tint}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-extrabold">{title}</h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="mt-1.5 text-xs leading-5 text-slate-500">{text}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Heading
            label="INDUSTRIES WE SERVE"
            title="AI Solutions Across Industries"
            sub="We work with businesses and institutions across different sectors to solve real-world problems."
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {industries.map(({ icon: Icon, title, text, gradient }) => (
              <article key={title} className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(15,26,53,0.06)]">
                <div className={`relative h-20 bg-gradient-to-br ${gradient}`}>
                  <Icon className="absolute right-3 top-3 h-10 w-10 text-white/30" />
                  <div className="absolute inset-x-3 bottom-0 flex h-9 items-end gap-1">
                    {[45, 70, 55, 90, 65, 80].map((h, i) => (
                      <span key={i} className="flex-1 rounded-t bg-white/30" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-blue-600" />
                    <h3 className="text-xs font-extrabold">{title}</h3>
                  </div>
                  <p className="mt-2 text-[11px] leading-4 text-slate-500">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Heading
            label="OUR PROCESS"
            title="A Simple & Transparent Approach"
            sub="From understanding your goals to deployment and ongoing support."
          />

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <div key={step.title} className="flex items-start gap-3">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-extrabold text-white ${
                    index === process.length - 1 ? "bg-violet-600" : "bg-blue-600"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-extrabold leading-tight">{step.title}</p>
                  <p className="mt-1 text-[11px] leading-4 text-slate-500">{step.text}</p>
                </div>
                {index < process.length - 1 && (
                  <ArrowRight className="mt-3 hidden h-4 w-4 shrink-0 text-blue-500 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Heading
            label="FEATURED CASE STUDIES"
            title="Real Results with AI"
            sub="See how our AI solutions have helped businesses achieve measurable impact."
            linkText="View All Case Studies"
            linkTo="/insights"
          />

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cases.map(({ tag, icon: Icon, gradient, title, text, metrics }) => (
              <article key={title} className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(15,26,53,0.06)]">
                <div className={`relative h-28 bg-gradient-to-br ${gradient}`}>
                  <Icon className="absolute right-4 top-4 h-14 w-14 text-white/25" />
                  <span className="absolute -bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-slate-800 shadow">
                    <Icon className="h-3 w-3 text-blue-600" />
                    {tag}
                  </span>
                </div>
                <div className="p-4 pt-6">
                  <h3 className="text-sm font-extrabold">{title}</h3>
                  <p className="mt-1.5 text-[11px] leading-4 text-slate-500">{text}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {metrics.map(([value, label]) => (
                      <div key={label}>
                        <p className="text-xl font-extrabold text-[#0f1a35]">{value}</p>
                        <p className="text-[10px] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-10 sm:px-8 lg:px-10">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-violet-600 p-7 text-white sm:p-9 lg:flex-row lg:items-center">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <span className="text-[11px] font-extrabold tracking-[2px] text-blue-100">
              LET'S BUILD TOGETHER
            </span>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Ready to Explore AI for Your Business?</h2>
            <p className="mt-2 text-sm text-blue-100">
              Get in touch with our team for a free consultation and let's discuss how AI can create value for your business.
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

function Heading({
  label,
  title,
  sub,
  linkText,
  linkTo,
}: {
  label: string;
  title: string;
  sub: string;
  linkText?: string;
  linkTo?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <span className="inline-flex items-center gap-2 text-[10px] font-extrabold tracking-[1.6px] text-blue-700">
          <span className="h-0.5 w-6 rounded-full bg-blue-600" />
          {label}
        </span>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">{title}</h2>
        <p className="mt-2 text-sm text-slate-600">{sub}</p>
      </div>
      {linkText && linkTo && (
        <Link
          to={linkTo}
          className="hidden shrink-0 items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 sm:inline-flex"
        >
          {linkText} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[580px] pb-4 pt-16 lg:pt-20">
      <div className="absolute inset-10 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute left-2 top-0 z-20 flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2.5 shadow-xl sm:left-8">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-50 text-indigo-600">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-bold">AI-Powered Insights</p>
          <p className="text-[10px] text-slate-500">Turn your data into opportunities</p>
        </div>
      </div>

      <div className="absolute -right-1 top-6 z-20 hidden items-center gap-3 rounded-xl bg-white/95 px-3 py-2.5 shadow-xl sm:flex">
        <ChartNoAxesCombined className="h-5 w-5 text-blue-600" />
        <div>
          <p className="text-xs font-bold">Smarter</p>
          <p className="text-[10px] text-slate-500">Business Growth</p>
        </div>
      </div>

      <div className="relative rounded-2xl border border-white bg-white/95 p-2.5 shadow-2xl shadow-blue-900/15">
        <div className="grid grid-cols-[56px_1fr] gap-2 sm:grid-cols-[78px_1fr]">
          <div className="space-y-1.5 rounded-lg bg-[#0f1a35] p-2 text-[8px] text-white/60">
            <div className="mb-2 flex items-center gap-1 font-bold text-white">
              <Cpu className="h-3 w-3" /> MUROAS
            </div>
            {["Dashboard", "AI Models", "Workflows", "Data", "Insights", "Reports", "Settings"].map((item, i) => (
              <div key={item} className={`rounded px-1.5 py-1 ${i === 0 ? "bg-blue-600 text-white" : ""}`}>
                {item}
              </div>
            ))}
          </div>

          <div className="min-w-0">
            <p className="text-xs font-extrabold text-slate-900">AI Analytics Dashboard</p>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {[
                ["Total Data", "25,480", "+12%"],
                ["Predictions", "1,245", "+18%"],
                ["Automation", "86%", "+24%"],
              ].map(([l, v, g]) => (
                <div key={l} className="rounded-lg border border-slate-100 p-2">
                  <p className="text-[8px] text-slate-500">{l}</p>
                  <p className="text-xs font-extrabold">
                    {v} <span className="text-[8px] font-bold text-emerald-600">{g}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-2 grid grid-cols-[1.6fr_1fr] gap-1.5">
              <div className="rounded-lg border border-slate-100 p-2">
                <p className="text-[9px] font-bold">Business Insights</p>
                <svg viewBox="0 0 220 90" className="mt-1 w-full" role="img" aria-label="Business insights chart">
                  <path d="M0 78 L25 60 L45 68 L70 40 L95 52 L120 24 L145 38 L170 12 L195 30 L220 8 L220 90 L0 90 Z" fill="#2563eb" opacity="0.1" />
                  <path
                    d="M0 78 L25 60 L45 68 L70 40 L95 52 L120 24 L145 38 L170 12 L195 30 L220 8"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="rounded-lg border border-slate-100 p-2">
                <p className="text-[9px] font-bold">Recent Activity</p>
                {["Model trained", "Automation triggered", "New data source", "Report generated"].map((a) => (
                  <div key={a} className="mt-1 flex items-center gap-1">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                    <span className="truncate text-[8px] text-slate-600">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}