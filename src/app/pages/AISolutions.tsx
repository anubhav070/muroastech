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
  ArrowUpRight,
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  CheckCircle2,
  Clock,
  Cog,
  Cpu,
  Database,
  Eye,
  Factory,
  FileText,
  GraduationCap,
  HeartPulse,
  Landmark,
  LayoutGrid,
  Lock,
  MessageSquare,
  Network,
  Plug,
  Plus,
  ScanText,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

import { Button } from "../components/ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

type IconType = React.ComponentType<{ className?: string }>;

/* ------------------------------ DATA ------------------------------ */

const heroWords = [
  { t: "Turn" }, { t: "Your" }, { t: "Business" }, { t: "Challenges" }, { t: "Into" },
  { t: "Intelligent", a: true }, { t: "Solutions", a: true },
];

const heroFeatures = [
  { icon: BrainCircuit, title: "AI & Machine Learning", text: "Custom models for real use cases" },
  { icon: Workflow, title: "Intelligent Automation", text: "Reduce manual work" },
  { icon: ChartNoAxesCombined, title: "Predictive Analytics", text: "Data-driven decisions" },
  { icon: ScanText, title: "Document Intelligence", text: "Extract, process and understand" },
  { icon: Plug, title: "AI Integrations", text: "Connect with your existing tools" },
];

const facts = [
  { icon: Cog, value: "6", label: "AI Service Areas" },
  { icon: LayoutGrid, value: "6", label: "Industries Covered" },
  { icon: Workflow, value: "5", label: "Step Delivery Process" },
  { icon: Clock, value: "24h", label: "Response Time" },
];

const offers = [
  { icon: Bot, tint: "bg-blue-50 text-blue-600", title: "Custom AI Solutions", text: "AI models and applications built around your specific business challenges.", tags: ["LLM Integration", "RAG", "Custom Models"] },
  { icon: Cog, tint: "bg-violet-50 text-violet-600", title: "Business Automation", text: "Automate repetitive processes and improve operational efficiency.", tags: ["Workflow Automation", "RPA", "AI Agents"] },
  { icon: ChartNoAxesCombined, tint: "bg-emerald-50 text-emerald-600", title: "Predictive Analytics", text: "Turn your data into actionable insights and dependable forecasts.", tags: ["Forecasting", "Data Modeling", "Insights"] },
  { icon: FileText, tint: "bg-rose-50 text-rose-500", title: "Document Intelligence", text: "Extract, classify and understand data from documents and images.", tags: ["OCR", "Data Extraction", "Summarization"] },
  { icon: MessageSquare, tint: "bg-sky-50 text-sky-600", title: "AI Assistants & Chatbots", text: "Intelligent chatbots and virtual assistants for faster, better support.", tags: ["Chatbots", "Knowledge Base", "LLM Apps"] },
  { icon: Network, tint: "bg-orange-50 text-orange-500", title: "AI Integrations", text: "Add AI to your existing web and mobile applications through clean APIs.", tags: ["API Integration", "Cloud Deployment", "MLOps"] },
];

const explorer = [
  {
    key: "Document Intelligence", icon: ScanText,
    problem: "Teams spend hours typing data from forms, bills and reports.",
    solution: "OCR and language models read each document, pull out the key fields and flag anything unclear for a human to review.",
    benefits: ["Less manual data entry", "Fewer typing errors", "Faster turnaround"],
    flow: [{ icon: FileText, label: "Scanned documents" }, { icon: ScanText, label: "OCR + AI extraction" }, { icon: Database, label: "Structured data" }],
  },
  {
    key: "Predictive Analytics", icon: ChartNoAxesCombined,
    problem: "Decisions rely on guesswork while valuable data sits unused.",
    solution: "Models learn from your own history to forecast demand, sales or risk, so you can plan ahead with confidence.",
    benefits: ["Better stock and capacity planning", "Early warning on risks", "Clearer, data-backed decisions"],
    flow: [{ icon: Database, label: "Historical data" }, { icon: BrainCircuit, label: "Forecast model" }, { icon: ChartNoAxesCombined, label: "Actionable forecast" }],
  },
  {
    key: "AI Assistants", icon: MessageSquare,
    problem: "Customers and staff ask the same questions again and again.",
    solution: "An assistant trained on your own knowledge answers instantly and hands over to a person when it should.",
    benefits: ["Instant answers, any time", "Lighter load on your team", "Consistent, accurate replies"],
    flow: [{ icon: Database, label: "Your knowledge base" }, { icon: Bot, label: "LLM + retrieval" }, { icon: MessageSquare, label: "Instant answers" }],
  },
  {
    key: "Automation", icon: Workflow,
    problem: "Approvals, reports and follow-ups eat up the working day.",
    solution: "Connected workflows trigger, route and complete routine tasks automatically, with rules and AI making the simple calls.",
    benefits: ["Hours saved every week", "Fewer missed follow-ups", "Teams focus on real work"],
    flow: [{ icon: Plug, label: "Trigger event" }, { icon: Cog, label: "Rules + AI decision" }, { icon: CheckCircle2, label: "Task completed" }],
  },
];

const industries = [
  { icon: GraduationCap, title: "Education", text: "Learning analytics, content generation and student insights.", gradient: "from-sky-400 to-blue-600" },
  { icon: HeartPulse, title: "Healthcare", text: "Document processing, patient data insights and care workflows.", gradient: "from-cyan-400 to-teal-600" },
  { icon: ShoppingCart, title: "Retail & E-commerce", text: "Demand forecasting, recommendations and inventory planning.", gradient: "from-amber-400 to-orange-600" },
  { icon: Factory, title: "Manufacturing", text: "Predictive maintenance, quality inspection and process analytics.", gradient: "from-slate-400 to-slate-700" },
  { icon: Landmark, title: "Finance & FinTech", text: "Risk analysis, fraud signals and automated compliance checks.", gradient: "from-blue-400 to-indigo-700" },
  { icon: LayoutGrid, title: "Startups & MSMEs", text: "Practical AI features that fit smaller teams and budgets.", gradient: "from-indigo-400 to-violet-600" },
];

// NOTE: keep only tools you actually use.
const toolkit = ["Python", "TensorFlow", "Scikit-learn", "LLM APIs", "RAG", "OCR", "REST APIs", "Cloud Deployment", "Firebase", "Flutter", "React", "MySQL"];

const process = [
  { title: "Understand Your Goals", text: "We study your business requirements and data." },
  { title: "Design The Solution", text: "We choose the right AI approach and plan a roadmap." },
  { title: "Develop & Test", text: "We build, train and test with real data." },
  { title: "Deploy & Integrate", text: "We launch and connect it to your systems." },
  { title: "Support & Improve", text: "We monitor performance and keep improving." },
];

const principles = [
  { icon: Lock, title: "Data Privacy", text: "Your data is used only for your solution and handled with care." },
  { icon: Users, title: "Human in the Loop", text: "AI assists decisions. People review what matters." },
  { icon: Eye, title: "Transparency", text: "We explain what the system does, and where its limits are." },
  { icon: ShieldCheck, title: "Security First", text: "Secure engineering practices from design to deployment." },
];

// Example scenarios, described qualitatively. Replace with real case studies once you have them.
const scenarios = [
  { tag: "Education", icon: GraduationCap, gradient: "from-blue-400 to-indigo-700", title: "Personalised Learning Support", text: "Recommend practice and learning paths based on each student's progress.", gains: ["More engaged students", "Less manual planning for teachers"] },
  { tag: "Healthcare", icon: HeartPulse, gradient: "from-cyan-400 to-teal-700", title: "Medical Document Processing", text: "Read, classify and extract details from reports and forms for staff review.", gains: ["Faster record handling", "Fewer data-entry mistakes"] },
  { tag: "Retail", icon: ShoppingCart, gradient: "from-amber-400 to-orange-700", title: "Demand Forecasting", text: "Predict what will sell, and when, to plan stock with confidence.", gains: ["Fewer stock-outs", "Less over-stocking"] },
  { tag: "Manufacturing", icon: Factory, gradient: "from-slate-500 to-slate-800", title: "Visual Quality Inspection", text: "Detect defects automatically from images using computer vision.", gains: ["Consistent inspection", "Less repetitive manual checking"] },
];

const faqs = [
  { q: "Do we need a lot of data to start?", a: "Not always. Many useful solutions, such as chatbots, document reading and automation, work with modest data. We assess what you have in the first discovery step and suggest the right approach." },
  { q: "Is our data safe?", a: "We follow secure engineering practices, limit access and use your data only for your solution. We will always discuss data handling with you before we begin." },
  { q: "How long does an AI project take?", a: "It depends on scope. We usually start with a small proof of concept so you can see real results early, then expand step by step." },
  { q: "Can you add AI to our existing software?", a: "Yes. We can integrate AI features into your current web or mobile applications through APIs, without rebuilding everything." },
  { q: "Will AI replace our staff?", a: "Our goal is to remove repetitive work, not people. We design AI to support your team, with humans reviewing the decisions that matter." },
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

function SectionHead({ label, title, sub, center = false, linkText, linkTo }: { label: string; title: string; sub?: string; center?: boolean; linkText?: string; linkTo?: string }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "flex items-end justify-between gap-4"}>
      <div>
        <Eyebrow>{label}</Eyebrow>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0f1a35] sm:text-4xl">{title}</h2>
        {sub && <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{sub}</p>}
      </div>
      {linkText && linkTo && (
        <Link to={linkTo} className="group hidden shrink-0 items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 sm:inline-flex">
          {linkText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </Reveal>
  );
}

/* ------------------------------ PAGE ------------------------------ */

export function AISolutions() {
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

  const active = explorer[tab];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <motion.div aria-hidden="true" style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />

      {/* HERO */}
      <section
        className="relative isolate bg-gradient-to-br from-[#f4f8ff] via-[#e9f1ff] to-[#e0e0ff] pt-28 lg:pt-32"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set(e.clientX - r.left);
          my.set(e.clientY - r.top);
        }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(#b8c4f5_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        {!reduce && <motion.div aria-hidden="true" style={{ background: spotlight }} className="pointer-events-none absolute inset-0 -z-10" />}
        <motion.div aria-hidden="true" animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[500px] w-[500px] rounded-full bg-violet-300/35 blur-[110px]" />
        <motion.div aria-hidden="true" animate={reduce ? undefined : { x: [0, -30, 0], y: [0, 40, 0] }} transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute left-1/4 top-10 -z-10 h-72 w-72 rounded-full bg-blue-300/30 blur-[90px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-8 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div>
            <motion.span initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white/70 px-3 py-1.5 text-[10px] font-extrabold tracking-[1.5px] text-blue-700 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> AI SOLUTIONS
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
              We design and build AI-powered solutions that help businesses automate processes,
              make better decisions and create real value, using modern and responsible technology.
            </motion.p>

            <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact">
                <Button className="group h-12 w-full rounded-md bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto">
                  Discuss Your Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="#solutions">
                <Button variant="outline" className="h-12 w-full rounded-md border-blue-500 bg-white/60 px-6 font-semibold text-blue-700 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto">
                  Explore Our Solutions
                </Button>
              </a>
            </motion.div>

            <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {["Problem-first approach", "Responsible AI", "Starts with a proof of concept"].map((p) => (
                <span key={p} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" /> {p}
                </span>
              ))}
            </motion.div>
          </div>

          <DashboardVisual />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 pb-10 pt-4 sm:px-8 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
          {heroFeatures.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="group flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-blue-600 shadow-sm transition-all group-hover:-translate-y-1 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/25">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{title}</p>
                  <p className="mt-0.5 text-[10px] leading-4 text-slate-500">{text}</p>
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

      {/* WHAT WE OFFER */}
      <section id="solutions" className="scroll-mt-24 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead center label="WHAT WE OFFER" title="End-to-End AI Solutions" sub="From a first prototype to a production system, we cover every step of bringing AI into your business." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {offers.map(({ icon: Icon, tint, title, text, tags }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.1}>
                <TiltCard className="h-full">
                  <Link to="/contact" className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-2xl hover:shadow-blue-900/10">
                    <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-600 to-violet-500 transition-transform duration-500 group-hover:scale-x-100" />
                    <div className="flex items-start justify-between">
                      <div className={`grid h-14 w-14 place-items-center rounded-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${tint}`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
                    </div>
                    <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {tags.map((tag) => <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-700">{tag}</span>)}
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE EXPLORER */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead center label="HOW IT WORKS" title="See How AI Fits Your Workflow" sub="Pick a capability to see the problem it solves and how data flows through it." />

          <Reveal className="mt-8 flex flex-wrap justify-center gap-2">
            {explorer.map((e, i) => (
              <button key={e.key} type="button" onClick={() => setTab(i)} className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-colors ${tab === i ? "text-white" : "bg-white text-slate-700 shadow-sm hover:bg-blue-50"}`}>
                {tab === i && <motion.span layoutId="aiTab" className="absolute inset-0 rounded-full bg-blue-600 shadow-lg shadow-blue-600/30" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                <e.icon className="relative h-4 w-4" />
                <span className="relative">{e.key}</span>
              </button>
            ))}
          </Reveal>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div key={active.key} initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <p className="text-[11px] font-extrabold tracking-[2px] text-rose-500">THE PROBLEM</p>
                  <p className="mt-1 text-base font-semibold text-slate-800">{active.problem}</p>
                  <p className="mt-5 text-[11px] font-extrabold tracking-[2px] text-blue-600">OUR APPROACH</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{active.solution}</p>
                  <ul className="mt-5 space-y-2.5">
                    {active.benefits.map((b, i) => (
                      <motion.li key={b} initial={reduce ? false : { opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.1 }} className="flex items-center gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="h-5 w-5 shrink-0 fill-blue-600 text-white" /> {b}
                      </motion.li>
                    ))}
                  </ul>
                  <Link to="/contact" className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
                    Discuss this use case <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <FlowDiagram flow={active.flow} reduce={!!reduce} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead label="INDUSTRIES" title="AI That Fits Your Industry" sub="Every sector has its own data, rules and workflows. We design around them." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, title, text, gradient }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.1}>
                <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-900/10">
                  <div className={`relative h-24 overflow-hidden bg-gradient-to-br ${gradient}`}>
                    <Icon className="absolute right-4 top-3 h-14 w-14 text-white/30 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" />
                    <div className="absolute inset-x-4 bottom-0 flex h-12 items-end gap-1.5">
                      {[45, 70, 55, 90, 65, 80, 60].map((h, k) => (
                        <motion.span key={k} className="flex-1 origin-bottom rounded-t bg-white/35" style={{ height: `${h}%` }} initial={reduce ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 + k * 0.05, ease: EASE }} />
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="flex items-center gap-2 text-base font-extrabold"><Icon className="h-4 w-4 text-blue-600" /> {title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead center label="OUR PROCESS" title="A Clear Path From Idea to Impact" sub="A transparent, step-by-step approach so you always know where your project stands." />

          <div ref={procRef} className="relative mt-14">
            <div className="absolute left-[10%] right-[10%] top-6 hidden h-0.5 rounded bg-blue-100 lg:block" />
            <motion.div style={{ scaleX: reduce ? 1 : procScale }} className="absolute left-[10%] right-[10%] top-6 hidden h-0.5 origin-left rounded bg-gradient-to-r from-blue-600 to-violet-500 lg:block" />
            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {process.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.1} className="text-center">
                  <div className="group">
                    <span className={`mx-auto grid h-12 w-12 place-items-center rounded-full border-4 border-slate-50 text-sm font-extrabold text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${i === process.length - 1 ? "bg-violet-600 shadow-violet-600/30" : "bg-blue-600 shadow-blue-600/30"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-sm font-extrabold">{step.title}</h3>
                    <p className="mx-auto mt-1.5 max-w-[200px] text-xs leading-5 text-slate-500">{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOOLKIT */}
      <section className="overflow-hidden py-14">
        <Reveal className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <Eyebrow>OUR TOOLKIT</Eyebrow>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">Modern tools, chosen to fit the problem</h2>
        </Reveal>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div className="flex w-max gap-3" animate={reduce ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }}>
            {[...toolkit, ...toolkit].map((t, i) => (
              <span key={i} className="shrink-0 rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-bold text-slate-700 shadow-sm">{t}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RESPONSIBLE AI */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-8 text-white shadow-2xl shadow-blue-700/25 sm:p-12">
            <motion.div aria-hidden="true" animate={reduce ? undefined : { scale: [1, 1.2, 1], opacity: [0.1, 0.22, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white blur-3xl" />
            <Reveal className="relative max-w-2xl">
              <span className="text-[11px] font-extrabold tracking-[2px] text-blue-100">RESPONSIBLE AI</span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Intelligence you can trust</h2>
              <p className="mt-3 text-base leading-7 text-blue-100">AI should be useful, safe and understandable. These principles guide every solution we build.</p>
            </Reveal>
            <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 0.1}>
                  <div className="group h-full rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/20">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/20 transition-transform group-hover:scale-110 group-hover:rotate-6"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-4 text-base font-extrabold">{title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-blue-100">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead label="USE CASES" title="Where AI Delivers Value" sub="Example scenarios showing what AI can do for different businesses." linkText="Read our insights" linkTo="/insights" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {scenarios.map(({ tag, icon: Icon, gradient, title, text, gains }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-2xl hover:shadow-blue-900/10">
                    <div className={`relative h-28 overflow-hidden bg-gradient-to-br ${gradient}`}>
                      <Icon className="absolute right-4 top-4 h-16 w-16 text-white/25 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" />
                      <span className="absolute -bottom-3 left-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-slate-800 shadow"><Icon className="h-3 w-3 text-blue-600" />{tag}</span>
                    </div>
                    <div className="p-5 pt-6">
                      <h3 className="text-sm font-extrabold">{title}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
                      <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                        {gains.map((g) => (
                          <li key={g} className="flex items-center gap-2 text-xs font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />{g}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0f1a35]">Common questions about AI projects</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Not sure where to start? Tell us your challenge and we will suggest a practical first step.</p>
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
          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-violet-600 p-8 text-white shadow-2xl shadow-blue-700/25 sm:p-10 lg:flex-row lg:items-center">
            <motion.div aria-hidden="true" animate={reduce ? undefined : { scale: [1, 1.25, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 7, repeat: Infinity }} className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="relative max-w-2xl">
              <span className="text-[11px] font-extrabold tracking-[2px] text-blue-100">LET'S BUILD TOGETHER</span>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Ready to Explore AI for Your Business?</h2>
              <p className="mt-2 text-sm leading-6 text-blue-100">Tell us about your challenge. We will help you understand what is possible and the best first step.</p>
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

function FlowDiagram({ flow, reduce }: { flow: { icon: IconType; label: string }[]; reduce: boolean }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-gradient-to-br from-white to-blue-50/70 p-5 shadow-xl shadow-blue-900/10">
      <div className="flex items-center justify-between">
        <p className="text-xs font-extrabold">Example workflow</p>
        <span className="text-[10px] text-slate-400">Illustrative</span>
      </div>

      <div className="mt-5 space-y-2">
        {flow.map(({ icon: Icon, label }, i) => (
          <div key={label}>
            <motion.div initial={reduce ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.2, duration: 0.5, ease: EASE }} className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm">
              <span className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-lg ${i === 1 ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white" : "bg-blue-50 text-blue-600"}`}>
                {i === 1 && !reduce && <span className="absolute inset-0 rounded-lg bg-blue-400/40 motion-safe:animate-ping" style={{ animationDuration: "2.4s" }} />}
                <Icon className="relative h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{["Input", "AI processing", "Output"][i]}</p>
                <p className="text-sm font-bold text-[#0f1a35]">{label}</p>
              </div>
            </motion.div>
            {i < flow.length - 1 && (
              <div className="relative ml-[1.35rem] h-6 w-px bg-blue-200">
                {!reduce && <motion.span className="absolute -left-[3px] h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" animate={{ top: ["0%", "100%"] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: i * 0.4 }} />}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 flex h-16 items-end gap-1.5 rounded-lg bg-blue-50/80 p-2.5">
        {[35, 55, 45, 70, 60, 85, 75, 95].map((h, i) => (
          <motion.span key={i} className="flex-1 origin-bottom rounded-t bg-gradient-to-t from-blue-600 to-indigo-400" style={{ height: `${h}%` }} initial={reduce ? false : { scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.6, delay: 0.7 + i * 0.05, ease: EASE }} />
        ))}
      </div>
    </div>
  );
}

function DashboardVisual() {
  const reduce = useReducedMotion();
  return (
    <motion.div initial={reduce ? false : { opacity: 0, x: 40, scale: 0.96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.9, delay: 0.25, ease: EASE }} className="relative mx-auto w-full max-w-[580px] pb-4 pt-16 lg:pt-20">
      <div className="absolute inset-10 rounded-full bg-blue-400/20 blur-3xl" />

      <motion.div animate={reduce ? undefined : { y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-2 top-0 z-20 sm:left-8">
        <div className="flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-50 text-indigo-600"><Sparkles className="h-5 w-5" /></div>
          <div>
            <p className="text-xs font-bold">AI-Powered Insights</p>
            <p className="text-[10px] text-slate-500">Turn your data into opportunities</p>
          </div>
        </div>
      </motion.div>

      <motion.div animate={reduce ? undefined : { y: [0, -9, 0] }} transition={{ duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-1 top-6 z-20 hidden sm:block">
        <div className="flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur">
          <ChartNoAxesCombined className="h-5 w-5 text-blue-600" />
          <div>
            <p className="text-xs font-bold">Smarter</p>
            <p className="text-[10px] text-slate-500">Business Growth</p>
          </div>
        </div>
      </motion.div>

      <div className="relative rounded-2xl border border-white bg-white/95 p-2.5 shadow-2xl shadow-blue-900/15">
        <div className="grid grid-cols-[56px_1fr] gap-2 sm:grid-cols-[78px_1fr]">
          <div className="space-y-1.5 rounded-lg bg-[#0f1a35] p-2 text-[8px] text-white/60">
            <div className="mb-2 flex items-center gap-1 font-bold text-white"><Cpu className="h-3 w-3" /> MUROAS</div>
            {["Dashboard", "AI Models", "Workflows", "Data", "Insights", "Reports", "Settings"].map((item, i) => (
              <div key={item} className={`rounded px-1.5 py-1 ${i === 0 ? "bg-blue-600 text-white" : ""}`}>{item}</div>
            ))}
          </div>

          <div className="min-w-0">
            <p className="text-xs font-extrabold text-slate-900">AI Analytics Dashboard</p>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {[["Total Data", "25,480", "+12%"], ["Predictions", "1,245", "+18%"], ["Automation", "86%", "+24%"]].map(([l, v, g], i) => (
                <motion.div key={l} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.12, duration: 0.5 }} className="rounded-lg border border-slate-100 p-2">
                  <p className="text-[8px] text-slate-500">{l}</p>
                  <p className="text-xs font-extrabold">{v} <span className="text-[8px] font-bold text-emerald-600">{g}</span></p>
                </motion.div>
              ))}
            </div>

            <div className="mt-2 grid grid-cols-[1.6fr_1fr] gap-1.5">
              <div className="rounded-lg border border-slate-100 p-2">
                <p className="text-[9px] font-bold">Business Insights</p>
                <svg viewBox="0 0 220 90" className="mt-1 w-full" role="img" aria-label="Business insights chart">
                  <motion.path d="M0 78 L25 60 L45 68 L70 40 L95 52 L120 24 L145 38 L170 12 L195 30 L220 8 L220 90 L0 90 Z" fill="#2563eb" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 1.9, duration: 0.8 }} />
                  <motion.path d="M0 78 L25 60 L45 68 L70 40 L95 52 L120 24 L145 38 L170 12 L195 30 L220 8" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 1.4, ease: "easeInOut" }} />
                </svg>
              </div>
              <div className="rounded-lg border border-slate-100 p-2">
                <p className="text-[9px] font-bold">Recent Activity</p>
                {["Model trained", "Automation triggered", "New data source", "Report generated"].map((a, i) => (
                  <motion.div key={a} initial={reduce ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 + i * 0.2, duration: 0.4 }} className="mt-1 flex items-center gap-1">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                    <span className="truncate text-[8px] text-slate-600">{a}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}