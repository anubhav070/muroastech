import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  CheckCircle2,
  Clock,
  Cloud,
  Cog,
  Code2,
  Cpu,
  GraduationCap,
  HeartPulse,
  KeyRound,
  Layers3,
  LayoutGrid,
  Lightbulb,
  LifeBuoy,
  MonitorSmartphone,
  Network,
  Package,
  Plus,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Utensils,
} from "lucide-react";

import { Button } from "../components/ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------ DATA ------------------------------ */

const heroWords = [
  { t: "Powerful" }, { t: "Software" }, { t: "Products" }, { t: "for" }, { t: "a" },
  { t: "Smarter", a: true }, { t: "Tomorrow", a: true },
];

const heroFeatures = [
  { icon: Network, title: "Real Business Problems", text: "Practical Solutions" },
  { icon: Cog, title: "AI-Powered", text: "Intelligence" },
  { icon: Layers3, title: "Scalable", text: "Architecture" },
  { icon: ShieldCheck, title: "Secure & Reliable", text: "Infrastructure" },
];

const facts = [
  { icon: LayoutGrid, value: "4", label: "Product Lines" },
  { icon: Store, value: "3", label: "Industries Served" },
  { icon: MonitorSmartphone, value: "2", label: "Platforms: Web & Mobile" },
  { icon: Clock, value: "24h", label: "Response Time" },
];

const products = [
  {
    id: "school", icon: GraduationCap, short: "School ERP", title: "School ERP",
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    text: "Complete school management with AI-powered analytics and automation.",
    points: ["Student & Staff Management", "Exams, Fees & Attendance", "AI-Powered Reports"],
    modules: ["Student & staff management", "Attendance tracking", "Exams & report cards", "Fee collection & receipts", "Timetable & notices", "Parent communication"],
    forWho: "Schools, coaching institutes and academies",
    kpis: [["Attendance", "94%"], ["Fees Collected", "₹8.4L"], ["Students", "1,248"]],
    bars: [45, 62, 54, 78, 66, 88, 74, 92],
    cta: { label: "Request a Demo", to: "/contact" },
  },
  {
    id: "clinic", icon: HeartPulse, short: "Clinic Management", title: "Clinic Management",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    text: "Patient management with appointment booking, records and AI-based insights.",
    points: ["Appointment Booking", "Patient Records & History", "AI Health Analytics"],
    modules: ["Online appointment booking", "Patient records & visit history", "Billing & prescriptions", "Doctor & staff portal", "Reminders & follow-ups", "AI-assisted insights"],
    forWho: "Clinics, polyclinics and small hospitals",
    kpis: [["Appointments", "86"], ["Patients", "2,340"], ["Wait Time", "-32%"]],
    bars: [30, 48, 60, 52, 70, 64, 82, 90],
    cta: { label: "Request a Demo", to: "/contact" },
  },
  {
    id: "restaurant", icon: Utensils, short: "Restaurant", title: "Restaurant Management",
    gradient: "from-orange-400 via-amber-500 to-red-500",
    text: "Online ordering, menu and KOT management with real-time analytics.",
    points: ["Menu & Order Management", "Kitchen Operations (KOT)", "AI Demand Forecasting"],
    modules: ["QR menu & online ordering", "KOT & kitchen workflow", "Table & billing management", "Inventory & recipe costing", "Delivery integration", "Sales & demand analytics"],
    forWho: "Restaurants, cafes and cloud kitchens",
    kpis: [["Orders Today", "312"], ["Avg. Ticket", "₹486"], ["Table Turnover", "+18%"]],
    bars: [55, 40, 72, 68, 86, 60, 94, 80],
    cta: { label: "Request a Demo", to: "/contact" },
  },
  {
    id: "ai", icon: BrainCircuit, short: "AI & ML", title: "AI & ML Solutions",
    gradient: "from-violet-600 via-indigo-600 to-blue-500",
    text: "Custom AI models and data solutions for specific business needs.",
    points: ["Predictive Analytics", "Document Intelligence", "Custom AI Integrations"],
    modules: ["Predictive analytics", "Document intelligence", "AI assistants & chatbots", "Process automation", "Custom ML models", "API integrations"],
    forWho: "Any business with data and repetitive work",
    kpis: [["Predictions", "1,245"], ["Automation", "86%"], ["Data Sources", "12"]],
    bars: [35, 55, 45, 70, 60, 85, 75, 95],
    cta: { label: "Explore AI Solutions", to: "/ai-solutions" },
  },
];

const categories = [
  { icon: GraduationCap, tint: "bg-blue-50 text-blue-600", title: "Education", text: "School ERP, learning platforms and academic management tools." },
  { icon: HeartPulse, tint: "bg-rose-50 text-rose-500", title: "Healthcare", text: "Clinic management, patient care and hospital automation." },
  { icon: Store, tint: "bg-orange-50 text-orange-500", title: "Retail & Hospitality", text: "Ordering, inventory and restaurant management platforms." },
  { icon: Cog, tint: "bg-violet-50 text-violet-600", title: "Business Tools", text: "Custom software tailored for MSMEs and enterprises." },
];

// NOTE: keep this list limited to what every product really includes.
const included = [
  { icon: KeyRound, title: "Role-Based Access", text: "The right people see the right information." },
  { icon: Cloud, title: "Secure Cloud Hosting", text: "Reliable hosting with regular backups." },
  { icon: MonitorSmartphone, title: "Web & Mobile Access", text: "Use it from any device, wherever you are." },
  { icon: ChartNoAxesCombined, title: "Reports & Analytics", text: "Clear dashboards that support better decisions." },
  { icon: Cog, title: "Customisation", text: "Adapted to your workflow, not the other way round." },
  { icon: LifeBuoy, title: "Support & Updates", text: "Help after launch and steady improvements." },
];

const process = [
  { title: "Understand", text: "Your needs and workflow" },
  { title: "Plan & Design", text: "Scope, screens and strategy" },
  { title: "Develop & Test", text: "Build with modern tools" },
  { title: "Launch & Onboard", text: "Go live and train your team" },
  { title: "Support & Scale", text: "Improve as you grow" },
];

const faqs = [
  { q: "Can the product be customised for our business?", a: "Yes. Our products are built to be adapted. Tell us about your workflow and we will configure or extend the product to fit it." },
  { q: "Will you train our team?", a: "Yes. We help you get started with onboarding and guidance so your staff are comfortable from the first day." },
  { q: "Is our data safe?", a: "We use secure engineering practices, role-based access and regular backups. We are happy to walk you through data handling before you decide." },
  { q: "Does it work on mobile?", a: "Our products are designed to be used on the web and on mobile, so you can manage things from wherever you are." },
  { q: "How do pricing and demos work?", a: "Pricing depends on the product, the modules you need and your size. Request a demo and we will show you the product and share a clear quote." },
];

/* --------------------------- ANIMATION HELPERS --------------------------- */

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const [n, setN] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || reduce || !match) return;
    const c = animate(0, target, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!match) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{n}{match[2]}</span>;
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[2px] text-blue-700">
      <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} className="h-0.5 w-8 origin-left rounded-full bg-blue-600" />
      {children}
    </span>
  );
}

function SectionHead({ label, title, sub, center = false }: { label: string; title: string; sub?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow>{label}</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0f1a35] sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-base leading-7 text-slate-600">{sub}</p>}
    </Reveal>
  );
}

/* ------------------------------ PAGE ------------------------------ */

export function Products() {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(440px circle at ${mx}px ${my}px, rgba(99,102,241,0.16), transparent 70%)`;

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const procRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: pp } = useScroll({ target: procRef, offset: ["start 80%", "end 55%"] });
  const procScale = useSpring(pp, { stiffness: 90, damping: 24 });

  const active = products[tab];

  const openDetails = (i: number) => {
    setTab(i);
    document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <motion.div aria-hidden="true" style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />

      {/* HERO */}
      <section
        className="relative isolate bg-gradient-to-br from-[#f4f8ff] via-[#e9f1ff] to-[#dfe0ff] pt-28 lg:pt-32"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set(e.clientX - r.left);
          my.set(e.clientY - r.top);
        }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(#b8c4f5_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        {!reduce && <motion.div aria-hidden="true" style={{ background: spotlight }} className="pointer-events-none absolute inset-0 -z-10" />}
        <motion.div aria-hidden="true" animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[500px] w-[500px] rounded-full bg-violet-300/35 blur-[110px]" />
        <motion.div aria-hidden="true" animate={reduce ? undefined : { x: [0, -30, 0], y: [0, 40, 0] }} transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute left-1/3 top-10 -z-10 h-64 w-64 rounded-full bg-blue-300/30 blur-[90px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-8 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <motion.span initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white/70 px-3 py-1.5 text-[10px] font-extrabold tracking-[1.5px] text-blue-700 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> OUR PRODUCTS
            </motion.span>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0f1a35] sm:text-5xl lg:text-[54px]">
              {heroWords.map((w, i) => (
                <motion.span
                  key={i}
                  initial={reduce ? false : { opacity: 0, y: 34, rotateX: -40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.07, ease: EASE }}
                  className={`mr-[0.25em] inline-block ${w.a ? "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" : ""}`}
                >
                  {w.t}
                </motion.span>
              ))}
            </h1>

            <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.6 }} className="mt-6 max-w-lg text-base leading-7 text-slate-700 sm:text-lg">
              Ready-to-use software for schools, clinics and restaurants, plus custom AI solutions.
              Designed around real workflows, built to grow with your business.
            </motion.p>

            <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact">
                <Button className="group h-12 w-full rounded-md bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto">
                  Get a Product Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="#featured">
                <Button variant="outline" className="h-12 w-full rounded-md border-blue-500 bg-white/60 px-6 font-semibold text-blue-700 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto">
                  Explore All Products
                </Button>
              </a>
            </motion.div>

            <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {["Customisable to your workflow", "Web & mobile access", "Support after launch"].map((p) => (
                <span key={p} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" /> {p}
                </span>
              ))}
            </motion.div>
          </div>

          <HeroVisual />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 pb-10 pt-4 sm:px-8 lg:grid-cols-4 lg:px-10">
          {heroFeatures.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="group flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-blue-600 shadow-sm transition-all group-hover:-translate-y-1 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/25">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{title}</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FACTS */}
      <section className="px-5 py-8 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 rounded-2xl border border-slate-100 bg-white px-6 py-6 shadow-[0_8px_30px_rgba(15,26,53,0.07)] lg:grid-cols-4">
            {facts.map(({ icon: Icon, value, label }, i) => (
              <div key={label} className={`flex items-center justify-center gap-4 ${i > 0 ? "lg:border-l lg:border-slate-200" : ""}`}>
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600"><Icon className="h-6 w-6" /></span>
                <div>
                  <p className="text-2xl font-extrabold leading-none text-[#0f1a35]"><CountUp value={value} /></p>
                  <p className="mt-1 text-xs text-slate-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="featured" className="scroll-mt-24 py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead center label="FEATURED PRODUCTS" title="Software That Fits the Way You Work" sub="Four product lines, each built around a real industry workflow." />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(({ id, icon: Icon, gradient, title, text, points }, i) => (
              <Reveal key={id} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-3 transition-shadow hover:shadow-2xl hover:shadow-blue-900/10">
                    <div className={`relative h-32 overflow-hidden rounded-xl bg-gradient-to-br ${gradient}`}>
                      <div className="absolute -right-6 -top-8 h-32 w-32 rounded-full border border-white/25 transition-transform duration-700 group-hover:scale-125" />
                      <Icon className="absolute right-4 top-4 h-14 w-14 text-white/30 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                      <div className="absolute inset-x-4 bottom-0 flex h-14 items-end gap-1.5">
                        {[40, 65, 50, 85, 60, 95, 75].map((h, k) => (
                          <motion.span key={k} className="flex-1 origin-bottom rounded-t bg-white/35" style={{ height: `${h}%` }} initial={reduce ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 + k * 0.06, ease: EASE }} />
                        ))}
                      </div>
                      <span className="absolute bottom-2 left-2 grid h-8 w-8 place-items-center rounded-lg bg-white text-blue-600 shadow"><Icon className="h-4 w-4" /></span>
                    </div>

                    <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
                      <h3 className="text-lg font-extrabold">{title}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
                      <ul className="mt-4 flex-1 space-y-2">
                        {points.map((p) => (
                          <li key={p} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="h-4 w-4 shrink-0 fill-blue-600 text-white" /> {p}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <Button onClick={() => openDetails(i)} className="h-9 w-full rounded-md bg-blue-600 px-2 text-xs font-semibold text-white hover:bg-blue-700">
                          View Details <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </Button>
                        <Link to="/contact">
                          <Button variant="outline" className="h-9 w-full rounded-md border-blue-400 px-2 text-xs font-semibold text-blue-700 hover:bg-blue-50">
                            Request Demo
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="showcase" className="scroll-mt-24 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead center label="PRODUCT DETAILS" title="See What's Inside Each Product" sub="Choose a product to explore its modules and who it's built for." />

          <Reveal className="mt-8 flex flex-wrap justify-center gap-2">
            {products.map((p, i) => (
              <button key={p.id} type="button" onClick={() => setTab(i)} className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-colors ${tab === i ? "text-white" : "bg-white text-slate-700 shadow-sm hover:bg-blue-50"}`}>
                {tab === i && <motion.span layoutId="productTab" className="absolute inset-0 rounded-full bg-blue-600 shadow-lg shadow-blue-600/30" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                <p.icon className="relative h-4 w-4" />
                <span className="relative">{p.short}</span>
              </button>
            ))}
          </Reveal>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div key={active.id} initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0f1a35]">{active.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{active.text}</p>
                  <p className="mt-4 text-[11px] font-extrabold tracking-[2px] text-blue-600">KEY MODULES</p>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {active.modules.map((m, i) => (
                      <motion.li key={m} initial={reduce ? false : { opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.07 }} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="h-5 w-5 shrink-0 fill-blue-600 text-white" /> {m}
                      </motion.li>
                    ))}
                  </ul>
                  <p className="mt-5 flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2.5 text-xs font-semibold text-blue-800">
                    <Users className="h-4 w-4 shrink-0" /> Built for: {active.forWho}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to={active.cta.to}>
                      <Button className="group h-11 rounded-md bg-blue-600 px-5 font-semibold text-white hover:bg-blue-700">
                        {active.cta.label} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-gradient-to-br from-white to-blue-50/70 p-5 shadow-xl shadow-blue-900/10">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-extrabold">{active.title} Dashboard</p>
                    <span className="text-[10px] text-slate-400">Illustrative preview</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {active.kpis.map(([l, v], i) => (
                      <motion.div key={l} initial={reduce ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.1 }} className="rounded-lg border border-slate-100 bg-white p-3">
                        <p className="text-[10px] text-slate-500">{l}</p>
                        <p className="mt-1 text-base font-extrabold text-[#0f1a35]">{v}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 flex h-32 items-end gap-2 rounded-lg bg-blue-50/80 p-3">
                    {active.bars.map((h, i) => (
                      <motion.span key={i} className="flex-1 origin-bottom rounded-t bg-gradient-to-t from-blue-600 to-indigo-400" style={{ height: `${h}%` }} initial={reduce ? false : { scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.6, delay: 0.3 + i * 0.05, ease: EASE }} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* more solutions */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { icon: Package, title: "Inventory Management System", text: "Real-time stock tracking, billing and multi-location support.", to: "/products/inventory-system", cta: "View product" },
              { icon: Code2, title: "Custom Software", text: "Need something specific? We build it around your workflow.", to: "/contact", cta: "Discuss your idea" },
            ].map(({ icon: Icon, title, text, to, cta }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <Link to={to} className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white"><Icon className="h-7 w-7" /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-extrabold tracking-[1.5px] text-slate-400">ALSO AVAILABLE</p>
                    <h3 className="text-base font-extrabold">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                  </div>
                  <span className="hidden items-center gap-1 text-xs font-bold text-blue-700 sm:flex">{cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead label="PRODUCT CATEGORIES" title="Built for the Industries We Know" sub="Products designed with the language, rules and routines of each sector." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(({ icon: Icon, tint, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-900/10">
                  <div className={`grid h-16 w-16 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${tint}`}><Icon className="h-7 w-7" /></div>
                  <h3 className="mt-5 text-base font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="px-5 pb-16 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 text-white shadow-2xl shadow-blue-700/25 sm:p-12">
          <motion.div aria-hidden="true" animate={reduce ? undefined : { scale: [1, 1.2, 1], opacity: [0.1, 0.22, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white blur-3xl" />
          <Reveal className="relative max-w-2xl">
            <span className="text-[11px] font-extrabold tracking-[2px] text-blue-100">BUILT WITH PURPOSE</span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">What every product includes</h2>
            <p className="mt-3 text-base leading-7 text-blue-100">The essentials that make our products dependable for everyday use.</p>
          </Reveal>
          <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.1}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/20">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/20 transition-transform group-hover:scale-110 group-hover:rotate-6"><Icon className="h-5 w-5" /></span>
                  <div>
                    <h3 className="text-base font-extrabold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-blue-100">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead center label="OUR PROCESS" title="From Idea to a Product You Can Rely On" sub="A clear path so you always know what happens next." />
          <div ref={procRef} className="relative mt-14">
            <div className="absolute left-[10%] right-[10%] top-6 hidden h-0.5 rounded bg-blue-100 lg:block" />
            <motion.div style={{ scaleX: reduce ? 1 : procScale }} className="absolute left-[10%] right-[10%] top-6 hidden h-0.5 origin-left rounded bg-gradient-to-r from-blue-600 to-indigo-500 lg:block" />
            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {process.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.1} className="text-center">
                  <div className="group">
                    <span className={`mx-auto grid h-12 w-12 place-items-center rounded-full border-4 border-white text-sm font-extrabold text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${i % 2 === 0 ? "bg-blue-600 shadow-blue-600/30" : "bg-indigo-600 shadow-indigo-600/30"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-sm font-extrabold">{step.title}</h3>
                    <p className="mx-auto mt-1.5 max-w-[190px] text-xs leading-5 text-slate-500">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0f1a35]">Questions about our products</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Can't find your answer? Ask us and we will respond within 24 hours.</p>
            <Link to="/contact" className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
              Talk to our team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={f.q} delay={i * 0.05}>
                  <div className={`overflow-hidden rounded-xl border bg-white transition-colors ${isOpen ? "border-blue-300 shadow-md" : "border-slate-200"}`}>
                    <button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                      <span className="text-sm font-bold text-slate-900">{f.q}</span>
                      <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600"><Plus className="h-4 w-4" /></motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}>
                          <p className="px-5 pb-5 text-sm leading-6 text-slate-600">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-14 sm:px-8 lg:px-10">
        <Reveal>
          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 p-8 text-white shadow-2xl shadow-blue-700/25 sm:p-10 lg:flex-row lg:items-center">
            <motion.div aria-hidden="true" animate={reduce ? undefined : { scale: [1, 1.25, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 7, repeat: Infinity }} className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="relative max-w-2xl">
              <span className="text-[11px] font-extrabold tracking-[2px] text-blue-100">LET'S BUILD A SMARTER TOMORROW</span>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Interested in Our Products?</h2>
              <p className="mt-2 text-sm leading-6 text-blue-100">Get in touch for a live demo and see how our products can help your business.</p>
            </div>
            <Link to="/contact" className="relative w-full shrink-0 sm:w-auto">
              <Button className="group h-12 w-full rounded-md bg-white px-6 font-bold text-blue-700 transition-all hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto">
                Get a Free Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

/* --------------------------- SUB-COMPONENTS --------------------------- */

function HeroVisual() {
  const reduce = useReducedMotion();
  return (
    <motion.div initial={reduce ? false : { opacity: 0, x: 40, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.25, ease: EASE }} className="relative mx-auto w-full max-w-[580px] pb-6 pt-16 lg:pt-20">
      <div className="absolute inset-10 rounded-full bg-blue-400/20 blur-3xl" />

      <motion.div animate={reduce ? undefined : { y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute right-0 top-0 z-20">
        <div className="flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-50 text-indigo-600"><Sparkles className="h-5 w-5" /></div>
          <div>
            <p className="text-xs font-bold leading-tight">AI-Powered Products</p>
            <p className="text-[10px] text-slate-500">Built for real impact</p>
          </div>
        </div>
      </motion.div>

      <motion.div animate={reduce ? undefined : { y: [0, -8, 0] }} transition={{ duration: 6, delay: 1.2, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-1 bottom-12 z-20 hidden sm:block">
        <div className="flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-emerald-600"><Lightbulb className="h-5 w-5" /></div>
          <div>
            <p className="text-xs font-bold">Made for your workflow</p>
            <p className="text-[10px] text-slate-500">Customisable modules</p>
          </div>
        </div>
      </motion.div>

      <div className="relative mr-10 rounded-xl border-[6px] border-slate-800 bg-white p-2 shadow-2xl shadow-blue-900/20 sm:mr-14">
        <div className="grid grid-cols-[52px_1fr] gap-2 sm:grid-cols-[70px_1fr]">
          <div className="space-y-1.5 rounded-md bg-[#0f1a35] p-2 text-[8px] text-white/60">
            <div className="mb-2 flex items-center gap-1 font-bold text-white"><Cpu className="h-3 w-3" /> MUROAS</div>
            {["Dashboard", "Analytics", "Orders", "Customers", "Products", "Reports", "Settings"].map((item, i) => (
              <div key={item} className={`rounded px-1.5 py-1 ${i === 0 ? "bg-blue-600 text-white" : ""}`}>{item}</div>
            ))}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-extrabold text-slate-900">Dashboard</p>
            <div className="mt-1.5 grid grid-cols-4 gap-1">
              {[["Total Users", "12,480"], ["Total Orders", "842"], ["Revenue", "₹8,24,000"], ["Active Today", "320"]].map(([l, v], i) => (
                <motion.div key={l} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }} className="rounded-md border border-slate-100 p-1.5">
                  <p className="text-[7px] text-slate-500">{l}</p>
                  <p className="text-[10px] font-extrabold">{v}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-1.5 grid grid-cols-[1.6fr_1fr] gap-1.5">
              <div className="rounded-md border border-slate-100 p-1.5">
                <p className="text-[8px] font-bold">Revenue Overview</p>
                <svg viewBox="0 0 220 90" className="mt-1 w-full" role="img" aria-label="Revenue chart">
                  <motion.path d="M0 80 L30 55 L55 65 L85 40 L115 50 L145 22 L175 30 L220 6 L220 90 L0 90 Z" fill="#2563eb" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 1.9, duration: 0.8 }} />
                  <motion.path d="M0 80 L30 55 L55 65 L85 40 L115 50 L145 22 L175 30 L220 6" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 1.4, ease: "easeInOut" }} />
                </svg>
              </div>
              <div className="rounded-md border border-slate-100 p-1.5">
                <p className="text-[8px] font-bold">Recent Activity</p>
                {["New user registered", "Order placed", "Payment received", "Product updated"].map((a, i) => (
                  <motion.div key={a} initial={reduce ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 + i * 0.2, duration: 0.4 }} className="mt-1 flex items-center gap-1">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                    <span className="truncate text-[7px] text-slate-600">{a}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto -mt-0.5 mr-6 h-2 rounded-b-xl bg-slate-300 sm:mr-10" />

      <motion.div animate={reduce ? undefined : { y: [0, -10, 0] }} transition={{ duration: 6, delay: 0.8, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-1 bottom-0 z-10">
        <div className="w-[118px] rounded-[22px] border-[5px] border-slate-900 bg-white p-2 shadow-2xl sm:w-[138px]">
          <p className="text-[8px] font-bold text-slate-800">Good Morning</p>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {["Orders", "Products", "Analytics", "Customers"].map((l) => (
              <div key={l} className="grid h-10 place-items-center rounded-lg bg-indigo-50 text-[7px] font-semibold text-indigo-700">{l}</div>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-1.5 rounded-lg bg-blue-50 p-1.5">
            <Lightbulb className="h-4 w-4 shrink-0 text-blue-600" />
            <span className="text-[7px] font-semibold text-slate-700">AI Assistant</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}