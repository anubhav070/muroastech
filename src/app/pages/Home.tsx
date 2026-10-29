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
  BookOpen,
  Briefcase,
  BrainCircuit,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cloud,
  Code2,
  Database,
  Globe,
  GraduationCap,
  HeartPulse,
  Layers3,
  Lightbulb,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Phone,
  Play,
  Plus,
  Rocket,
  School,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Store,
  Target,
  TrendingUp,
  Users,
  Utensils,
  Workflow,
  X,
} from "lucide-react";

import { Button } from "../components/ui/button";

/* --------------------------- CONTACT INFO --------------------------- */

const PHONE_DISPLAY = "+91 84591 61017";
const PHONE_LINK = "tel:+918459161017";
const WHATSAPP_LINK = `https://wa.me/918459161017?text=${encodeURIComponent(
  "Hi MUROAS, I'd like to know more about your products and services.",
)}`;

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------ DATA ------------------------------ */

const heroWords = [
  { t: "Building" }, { t: "Intelligent" }, { t: "Software" }, { t: "Products" },
  { t: "for" }, { t: "a" }, { t: "Smarter", a: true }, { t: "Tomorrow", a: true },
];

const heroPoints = ["Free consultation", "Problem-first approach", "Scalable architecture"];

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

const techStack = ["Flutter", "Dart", "Firebase", "Laravel", "Python", "Node.js", "React", "MySQL", "TensorFlow", "REST APIs", "Cloud Hosting", "Figma"];

const aboutPoints = [
  { icon: BrainCircuit, title: "Innovation", text: "AI at the core" },
  { icon: Layers3, title: "Scalability", text: "Built for growth" },
  { icon: ShieldCheck, title: "Reliability", text: "Secure & trusted" },
  { icon: Target, title: "Real Impact", text: "Solving real problems" },
];

const services = [
  { icon: BrainCircuit, title: "AI & ML Solutions", text: "Custom models, predictive analytics and AI assistants built around your own data.", tags: ["Prediction", "Chatbots", "Automation"], tint: "from-violet-500 to-indigo-600" },
  { icon: Smartphone, title: "Mobile App Development", text: "Cross-platform Flutter apps for Android and iOS with smooth, native-like performance.", tags: ["Flutter", "Firebase", "Play Store"], tint: "from-sky-500 to-blue-600" },
  { icon: Globe, title: "Web Development", text: "Fast, responsive websites and web apps built with React, Laravel and Node.js.", tags: ["React", "Laravel", "Node.js"], tint: "from-cyan-500 to-teal-600" },
  { icon: Code2, title: "Custom Software & ERP", text: "Tailored management, billing and ERP systems that fit the way your business works.", tags: ["ERP", "Billing", "Dashboards"], tint: "from-emerald-500 to-green-600" },
  { icon: Cloud, title: "Cloud & DevOps", text: "Secure deployment, monitoring and scaling on modern cloud infrastructure.", tags: ["Deployment", "Security", "Monitoring"], tint: "from-orange-500 to-amber-600" },
  { icon: PenTool, title: "UI/UX Design", text: "Clean, intuitive interfaces designed around how your users actually work.", tags: ["Research", "Prototypes", "Design systems"], tint: "from-pink-500 to-rose-600" },
];

const showcase = [
  {
    key: "School ERP",
    icon: GraduationCap,
    points: ["Student, staff and class management", "Attendance, exams and report cards", "Fee collection with reminders", "Parent communication in one place"],
    kpis: [["Attendance", "94%"], ["Fees Collected", "₹8.4L"], ["Students", "1,248"]],
    bars: [45, 62, 54, 78, 66, 88, 74, 92],
  },
  {
    key: "Clinic Management",
    icon: HeartPulse,
    points: ["Online appointment booking", "Patient records and visit history", "Billing and prescriptions", "AI-assisted insights for doctors"],
    kpis: [["Appointments", "86"], ["Patients", "2,340"], ["Wait Time", "-32%"]],
    bars: [30, 48, 60, 52, 70, 64, 82, 90],
  },
  {
    key: "Restaurant POS",
    icon: Utensils,
    points: ["QR menu and online ordering", "KOT and kitchen workflow", "Table and billing management", "Sales and demand analytics"],
    kpis: [["Orders Today", "312"], ["Avg. Ticket", "₹486"], ["Table Turnover", "+18%"]],
    bars: [55, 40, 72, 68, 86, 60, 94, 80],
  },
];

const products = [
  { title: "School ERP System", description: "Complete school management solution with AI-powered analytics.", icon: GraduationCap, gradient: "from-sky-400 via-blue-500 to-indigo-600", path: "/products" },
  { title: "Clinic Management", description: "Patient management, appointment booking and AI-based insights.", icon: HeartPulse, gradient: "from-emerald-400 via-teal-500 to-cyan-600", path: "/products" },
  { title: "Restaurant Management", description: "Online ordering, menu & KOT management with real-time analytics.", icon: Utensils, gradient: "from-orange-400 via-amber-500 to-red-500", path: "/products" },
  { title: "AI & ML Solutions", description: "Custom AI models and data solutions tailored to your business.", icon: BrainCircuit, gradient: "from-violet-600 via-indigo-600 to-blue-500", path: "/ai-solutions" },
];

// NOTE: replace with your real numbers before going live.
const stats = [
  { icon: Briefcase, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Star, value: "99%", label: "Client Satisfaction" },
  { icon: Clock, value: "3+", label: "Years of Experience" },
];

const flow = [
  { icon: Database, title: "Your Data", text: "Sales, customers, records and operations" },
  { icon: BrainCircuit, title: "AI & ML Layer", text: "Models find patterns and predict outcomes" },
  { icon: TrendingUp, title: "Better Decisions", text: "Clear insights your team can act on" },
];
const outcomes = ["Less manual work", "Faster decisions", "Fewer errors", "Happier customers", "Room to scale"];

const industries = [
  { icon: GraduationCap, title: "Education", text: "School ERP, learning platforms and academic analytics.", tint: "bg-blue-50 text-blue-600" },
  { icon: HeartPulse, title: "Healthcare", text: "Clinic workflows, patient records and appointment automation.", tint: "bg-rose-50 text-rose-500" },
  { icon: ShoppingCart, title: "Retail & E-commerce", text: "Ordering, inventory, billing and demand forecasting.", tint: "bg-orange-50 text-orange-500" },
  { icon: Utensils, title: "Restaurants & Hospitality", text: "POS, KOT, online orders and customer loyalty tools.", tint: "bg-amber-50 text-amber-600" },
  { icon: Building2, title: "Construction & Real Estate", text: "Project tracking, site reporting and ERP workflows.", tint: "bg-slate-100 text-slate-600" },
  { icon: Rocket, title: "Startups & MSMEs", text: "MVPs, custom tools and scalable products on a smart budget.", tint: "bg-violet-50 text-violet-600" },
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
  { quote: "MUROAS delivered an amazing solution for our business. Their team is professional and highly skilled.", name: "Rahul Sharma", role: "Founder, Sabzify" },
  { quote: "Excellent support and on-time delivery. The system has really improved our operations.", name: "Dr. Priya Mehta", role: "Clinic Director" },
  { quote: "Great technical expertise in AI and modern technologies. Highly recommended!", name: "Amit Patil", role: "School Administrator" },
];

// NOTE: sample articles, keep them in sync with your Insights page.
const articles = [
  { tag: "AI & ML", title: "How AI is Transforming Real Business Operations", text: "Practical use cases of AI for education, healthcare, retail and MSMEs.", time: "8 min read", gradient: "from-sky-400 via-blue-600 to-indigo-900", icon: BrainCircuit },
  { tag: "Product Building", title: "From Idea to Product: Our Development Approach", text: "A behind-the-scenes look at how we turn ideas into scalable software.", time: "6 min read", gradient: "from-slate-400 via-sky-500 to-blue-600", icon: Layers3 },
  { tag: "Technology", title: "Top AI Trends to Watch in 2026", text: "Key trends in AI, machine learning and automation shaping what comes next.", time: "7 min read", gradient: "from-cyan-400 via-blue-700 to-indigo-950", icon: Sparkles },
];

const faqs = [
  { q: "What kind of software do you build?", a: "We build AI-powered products and custom software: school, clinic and restaurant management systems, mobile apps, web platforms, ERP and automation tools tailored to your workflow." },
  { q: "How long does a project take?", a: "It depends on scope. A focused MVP can be ready much sooner than a full ERP. After a short discovery call we share a clear plan with milestones so you know what to expect." },
  { q: "How does pricing work?", a: "Pricing depends on features, platforms and support needs. Share your requirements and we'll send a transparent quote, with no obligation." },
  { q: "Can you add AI to our existing software?", a: "Yes. We can integrate AI features such as predictions, document processing and chat assistants into your current web or mobile applications through APIs." },
  { q: "Do you provide support after launch?", a: "Yes. We help with deployment, monitoring, fixes and new features so your product keeps improving after it goes live." },
  { q: "Which technologies do you work with?", a: "Flutter, React, Laravel, Node.js, Python, Firebase and MySQL, along with machine learning tools and cloud hosting, chosen to fit your product." },
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
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function HeroItem({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function Float({ children, className, delay = 0, amount = 8 }: { children: React.ReactNode; className?: string; delay?: number; amount?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      animate={reduce ? undefined : { y: [0, -amount, 0] }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
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

/** 3D tilt that follows the mouse. */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 20 });
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

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500"
    />
  );
}

/* ------------------------- FLOATING CONTACT (one corner) ------------------------- */

function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const show = window.setTimeout(() => setHint(true), 4000);
    const hide = window.setTimeout(() => setHint(false), 11000);
    return () => { window.clearTimeout(show); window.clearTimeout(hide); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  const options = [
    { icon: Phone, label: "Call Now", sub: PHONE_DISPLAY, href: PHONE_LINK, bg: "bg-[#0f1a35]" },
    { icon: MessageCircle, label: "WhatsApp", sub: "Chat instantly", href: WHATSAPP_LINK, bg: "bg-emerald-500", external: true },
    { icon: CalendarCheck, label: "Free Consultation", sub: "Send us your requirement", to: "/contact", bg: "bg-blue-600" },
  ];

  return (
    <div ref={ref} className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:right-6">
      <AnimatePresence>
        {open &&
          options.map((o, i) => {
            const inner = (
              <>
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white ${o.bg}`}>
                  <o.icon className="h-5 w-5" />
                </span>
                <span className="pr-2">
                  <span className="block text-xs font-extrabold text-slate-900">{o.label}</span>
                  <span className="block text-[11px] text-slate-500">{o.sub}</span>
                </span>
              </>
            );
            const cls = "flex items-center gap-3 rounded-full border border-slate-100 bg-white p-1.5 pr-3 shadow-xl transition-transform hover:scale-105";
            return (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.9 }}
                transition={{ duration: 0.25, delay: (options.length - 1 - i) * 0.05 }}
              >
                {"to" in o && o.to ? (
                  <Link to={o.to} className={cls} onClick={() => setOpen(false)}>{inner}</Link>
                ) : (
                  <a href={o.href} className={cls} {...(o.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{inner}</a>
                )}
              </motion.div>
            );
          })}
      </AnimatePresence>

      <AnimatePresence>
        {hint && !open && (
          <motion.button
            type="button"
            onClick={() => { setHint(false); setOpen(true); }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-3 right-16 whitespace-nowrap rounded-full bg-[#0f1a35] px-4 py-2 text-xs font-bold text-white shadow-xl"
          >
            Need help? Talk to us 👋
          </motion.button>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        onClick={() => { setOpen((o) => !o); setHint(false); }}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-600/40 transition-transform hover:scale-110 active:scale-95"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-blue-500/50 motion-safe:animate-ping" />}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "phone"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="relative"
          >
            {open ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}

/* ------------------------------ PAGE ------------------------------ */

export function Home() {
  const reduce = useReducedMotion();
  const [start, setStart] = useState(0);
  const [tab, setTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const visible = [0, 1, 2].map((i) => testimonials[(start + i) % testimonials.length]);

  // hero spotlight + parallax
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(99,102,241,0.16), transparent 70%)`;
  const { scrollY } = useScroll();
  const blobY = useTransform(scrollY, [0, 700], [0, 140]);

  const active = showcase[tab];

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <ScrollProgress />

      {/* HERO */}
      <section
        className="relative isolate bg-gradient-to-br from-[#f4f8ff] via-[#e9f1ff] to-[#dfe3ff] pt-28 lg:pt-32"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set(e.clientX - r.left);
          my.set(e.clientY - r.top);
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(#b8c4f5_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        />
        {!reduce && <motion.div aria-hidden="true" style={{ background: spotlight }} className="pointer-events-none absolute inset-0 -z-10" />}
        <motion.div
          aria-hidden="true"
          style={{ y: blobY }}
          animate={reduce ? undefined : { x: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[520px] w-[520px] rounded-full bg-violet-300/35 blur-[110px]"
        />
        <motion.div
          aria-hidden="true"
          animate={reduce ? undefined : { x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/4 top-10 -z-10 h-72 w-72 rounded-full bg-blue-300/30 blur-[90px]"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-8 sm:px-8 lg:grid-cols-2 lg:px-10">
          <div className="relative z-10">
            <HeroItem>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white/70 px-3 py-1.5 text-[10px] font-extrabold tracking-[1.5px] text-blue-700 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                AI-FIRST TECHNOLOGY COMPANY
              </span>
            </HeroItem>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0f1a35] sm:text-5xl lg:text-[56px]">
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

            <HeroItem delay={0.75}>
              <p className="mt-6 max-w-lg text-base leading-7 text-slate-700 sm:text-lg">
                We design and build AI-powered software products that help businesses
                automate, analyze and grow with modern technology.
              </p>
            </HeroItem>

            <HeroItem delay={0.85} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact">
                <Button className="group h-12 w-full rounded-md bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 sm:w-auto">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="h-12 w-full rounded-md border-blue-500 bg-white/60 px-6 font-semibold text-blue-700 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto">
                  Explore Our Products
                </Button>
              </Link>
            </HeroItem>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {heroPoints.map((p, i) => (
                <HeroItem key={p} delay={1 + i * 0.1}>
                  <span className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" /> {p}
                  </span>
                </HeroItem>
              ))}
            </div>
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

      {/* TRUSTED BY + TECH MARQUEE */}
      <section className="px-5 py-6 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-xl bg-slate-100/80 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[10px] font-bold leading-4 tracking-[1.5px] text-slate-600">
              TRUSTED BY<br />BUSINESSES & INSTITUTIONS
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {trusted.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2 text-sm font-semibold text-slate-800 transition-all hover:-translate-y-0.5 hover:text-blue-700">
                  <Icon className="h-6 w-6" /> {label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-6 max-w-7xl">
          <p className="text-center text-[10px] font-bold tracking-[2px] text-slate-400">TECHNOLOGIES WE BUILD WITH</p>
          <div className="mt-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex w-max gap-3"
              animate={reduce ? undefined : { x: ["0%", "-50%"] }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            >
              {[...techStack, ...techStack].map((t, i) => (
                <span key={i} className="shrink-0 rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-bold text-slate-700 shadow-sm">
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <Reveal>
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
              <button type="button" className="absolute bottom-5 right-5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-xl transition-transform hover:scale-105">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600 text-white">
                  <Play className="h-4 w-4 fill-current" />
                </span>
                <span className="text-left">
                  <span className="block text-xs font-bold text-slate-900">Watch Our Story</span>
                  <span className="block text-[11px] text-slate-500">2 min</span>
                </span>
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Pill>ABOUT MUROAS</Pill>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0f1a35] sm:text-4xl">Engineering the Future with AI</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              MUROAS Tech Innovation is a product-focused technology company building AI-driven
              software solutions for education, healthcare, retail and MSMEs. Our mission is to
              create intelligent products that solve real-world problems and make technology
              accessible to every business.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              We start from the problem, not the technology. That means listening first, building
              something simple that works, and improving it with real feedback.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {aboutPoints.map(({ icon: Icon, title, text }) => (
                <div key={title} className="group">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-600 transition-all group-hover:-translate-y-1 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm font-bold">{title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{text}</p>
                </div>
              ))}
            </div>

            <Link to="/about" className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
              Learn More About Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead label="WHAT WE DO" title="End-to-End Technology Services" sub="From the first idea to a live product, everything you need under one roof." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text, tags, tint }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.1}>
                <TiltCard className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-2xl hover:shadow-blue-900/10">
                    <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${tint} opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20`} />
                    <div className={`relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${tint} text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="relative mt-5 text-lg font-extrabold">{title}</h3>
                    <p className="relative mt-2 text-sm leading-6 text-slate-600">{text}</p>
                    <div className="relative mt-4 flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <span key={t} className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-700">{t}</span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE (interactive) */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead label="SEE IT IN ACTION" title="Products Built for Your Daily Workflow" sub="Pick a product to see what it helps you manage." />

          <Reveal className="mt-6 flex flex-wrap gap-2">
            {showcase.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setTab(i)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-colors ${tab === i ? "text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
              >
                {tab === i && (
                  <motion.span layoutId="showcaseTab" className="absolute inset-0 rounded-full bg-blue-600 shadow-lg shadow-blue-600/30" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
                <s.icon className="relative h-4 w-4" />
                <span className="relative">{s.key}</span>
              </button>
            ))}
          </Reveal>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/60 p-6 shadow-sm sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid items-center gap-8 lg:grid-cols-2"
              >
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0f1a35]">{active.key}</h3>
                  <ul className="mt-5 space-y-3">
                    {active.points.map((p, i) => (
                      <motion.li key={p} initial={reduce ? false : { opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.08 }} className="flex items-center gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="h-5 w-5 shrink-0 fill-blue-600 text-white" /> {p}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to="/products"><Button className="h-11 rounded-md bg-blue-600 px-5 font-semibold text-white hover:bg-blue-700">View Details <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                    <Link to="/contact"><Button variant="outline" className="h-11 rounded-md border-blue-500 px-5 font-semibold text-blue-700 hover:bg-blue-50">Request a Demo</Button></Link>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-xl shadow-blue-900/10">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-extrabold">{active.key} Dashboard</p>
                    <span className="text-[10px] text-slate-400">Illustrative preview</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {active.kpis.map(([l, v], i) => (
                      <motion.div key={l} initial={reduce ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.1 }} className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                        <p className="text-[10px] text-slate-500">{l}</p>
                        <p className="mt-1 text-base font-extrabold text-[#0f1a35]">{v}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 flex h-32 items-end gap-2 rounded-lg bg-blue-50/60 p-3">
                    {active.bars.map((h, i) => (
                      <motion.span key={i} className="flex-1 origin-bottom rounded-t bg-gradient-to-t from-blue-600 to-indigo-400" style={{ height: `${h}%` }} initial={reduce ? false : { scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.6, delay: 0.3 + i * 0.05, ease: EASE }} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead label="OUR PRODUCTS" title="Powerful Products for Real Business Needs" linkText="View All Products" linkTo="/products" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(({ title, description, icon: Icon, gradient, path }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <article className="group h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-2xl hover:shadow-blue-900/10">
                    <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${gradient}`}>
                      <div className="absolute -right-6 -top-8 h-32 w-32 rounded-full border border-white/25 transition-transform duration-700 group-hover:scale-125" />
                      <Icon className="absolute right-5 top-5 h-16 w-16 text-white/35 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                      <div className="absolute inset-x-5 bottom-0 flex h-16 items-end gap-1.5">
                        {[40, 65, 50, 85, 60, 95, 75].map((h, idx) => (
                          <motion.span key={idx} className="flex-1 origin-bottom rounded-t bg-white/40" style={{ height: `${h}%` }} initial={reduce ? false : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 + idx * 0.06, ease: EASE }} />
                        ))}
                      </div>
                      <span className="absolute -bottom-4 left-4 grid h-9 w-9 place-items-center rounded-lg bg-white text-blue-600 shadow-md">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="p-5 pt-7">
                      <h3 className="text-base font-extrabold">{title}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{description}</p>
                      <Link to={path} className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-700">
                        View Details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-5 pb-12 sm:px-8 lg:px-10">
        <Reveal>
          <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-6 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 px-6 py-6 text-white shadow-xl shadow-blue-600/20 lg:grid-cols-4">
            {!reduce && (
              <motion.div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent" animate={{ left: ["-40%", "130%"] }} transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }} />
            )}
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div key={label} className={`relative flex items-center justify-center gap-4 ${i > 0 ? "lg:border-l lg:border-white/20" : ""}`}>
                <Icon className="h-9 w-9 text-white/90" strokeWidth={1.5} />
                <div>
                  <p className="text-2xl font-extrabold leading-none"><CountUp value={value} /></p>
                  <p className="mt-1 text-xs text-blue-100">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* DATA → DECISIONS (dark) */}
      <section className="px-5 pb-14 sm:px-8 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0b1530] px-6 py-12 text-white sm:px-10">
          <motion.div aria-hidden="true" animate={reduce ? undefined : { scale: [1, 1.2, 1] }} transition={{ duration: 9, repeat: Infinity }} className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
          <motion.div aria-hidden="true" animate={reduce ? undefined : { scale: [1.2, 1, 1.2] }} transition={{ duration: 11, repeat: Infinity }} className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-violet-600/25 blur-3xl" />

          <Reveal className="relative mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-extrabold tracking-[2px] text-blue-300">HOW AI HELPS YOUR BUSINESS</span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">From Data to Decisions</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Most businesses already have valuable data. We turn it into predictions, automation and clear insights your team can use every day.
            </p>
          </Reveal>

          <div className="relative mt-10 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {flow.map(({ icon: Icon, title, text }, i) => (
              <FlowStep key={title} index={i} icon={Icon} title={title} text={text} reduce={!!reduce} />
            ))}
          </div>

          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            {outcomes.map((o, i) => (
              <motion.span key={o} initial={reduce ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1 }} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-blue-100 backdrop-blur">
                ✓ {o}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="pb-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead label="INDUSTRIES" title="Solutions That Fit Your Industry" sub="Every industry has its own workflows. We design software around them." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, title, text, tint }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.08}>
                <div className="group flex h-full items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-[0_4px_20px_rgba(15,26,53,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${tint}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead label="WHY CHOOSE MUROAS" title="More Than Just a Technology Company" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, text, tint }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="group flex h-full items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-[0_4px_20px_rgba(15,26,53,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-900/10">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110 ${tint}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold">{title}</p>
                    <p className="mt-1 text-xs leading-4 text-slate-500">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead label="OUR PROCESS" title="A Simple & Transparent Approach" />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.12}>
                <div className="group flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-extrabold text-white shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-110">{step.number}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-extrabold leading-tight">{step.title}</p>
                    <p className="mt-1 text-xs leading-4 text-slate-500">{step.text}</p>
                  </div>
                  {index < process.length - 1 && (
                    <motion.span className="mt-3 hidden shrink-0 text-blue-500 lg:block" animate={reduce ? undefined : { x: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}>
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal className="flex items-end justify-between gap-4">
            <div>
              <SectionLabel>CLIENT TESTIMONIALS</SectionLabel>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">What Our Clients Say</h2>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" aria-label="Previous testimonial" onClick={() => setStart((start - 1 + testimonials.length) % testimonials.length)} className="grid h-9 w-9 place-items-center rounded-full border border-blue-200 bg-white text-blue-600 transition-all hover:scale-110 hover:bg-blue-600 hover:text-white">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button type="button" aria-label="Next testimonial" onClick={() => setStart((start + 1) % testimonials.length)} className="grid h-9 w-9 place-items-center rounded-full border border-blue-200 bg-white text-blue-600 transition-all hover:scale-110 hover:bg-blue-600 hover:text-white">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {visible.map((t, i) => (
              <motion.article
                key={`${start}-${t.name}`}
                initial={reduce ? false : { opacity: 0, y: 16, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
                whileHover={reduce ? undefined : { y: -4 }}
                className="flex gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-extrabold text-white">
                  {t.name.replace("Dr. ", "").split(" ").map((w) => w[0]).join("")}
                </div>
                <div className="min-w-0">
                  <p className="text-xs leading-5 text-slate-600">“{t.quote}”</p>
                  <div className="mt-3 flex items-end justify-between gap-2">
                    <div>
                      <p className="text-xs font-extrabold">{t.name}</p>
                      <p className="text-[11px] text-slate-500">{t.role}</p>
                    </div>
                    <div className="flex shrink-0">
                      {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS TEASER */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHead label="INSIGHTS" title="Ideas Worth Reading" sub="Practical thoughts on AI, product building and technology." linkText="View All Articles" linkTo="/insights" />
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {articles.map(({ tag, title, text, time, gradient, icon: Icon }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <Link to="/insights" className="group block h-full overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(15,26,53,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10">
                  <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${gradient}`}>
                    <Icon className="absolute right-4 top-4 h-16 w-16 text-white/30 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" />
                    <span className="absolute bottom-3 left-3 rounded-md bg-blue-600 px-2.5 py-1 text-[10px] font-bold text-white">{tag}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-extrabold leading-snug group-hover:text-blue-700">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{text}</p>
                    <p className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                      {time}
                      <span className="flex items-center gap-1 font-bold text-blue-700">Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">Questions? We Have Answers</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
            </p>
            <Link to="/contact" className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
              Ask Us Anything <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                      <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600">
                        <Plus className="h-4 w-4" />
                      </motion.span>
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

      {/* FINAL CTA */}
      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <Reveal>
          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 p-7 text-white shadow-2xl shadow-blue-700/25 sm:p-9 lg:flex-row lg:items-center">
            <motion.div aria-hidden="true" animate={reduce ? undefined : { scale: [1, 1.25, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="relative">
              <span className="text-[11px] font-extrabold tracking-[2px] text-blue-100">LET'S BUILD SOMETHING AMAZING</span>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Turn Your Ideas Into Real Solutions</h2>
              <p className="mt-2 text-sm text-blue-100">Get in touch with us for a free consultation and let's build something impactful together.</p>
            </div>
            <Link to="/contact" className="relative w-full shrink-0 sm:w-auto">
              <Button className="group h-12 w-full rounded-md bg-white px-6 font-bold text-blue-700 transition-all hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* the ONLY place with call / WhatsApp: one corner */}
      <FloatingContact />
    </main>
  );
}

/* --------------------------- SUB-COMPONENTS --------------------------- */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-blue-300 px-3 py-1 text-[10px] font-extrabold tracking-[1.5px] text-blue-700">{children}</span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-extrabold tracking-[1.6px] text-blue-700">
      <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE }} className="h-0.5 w-6 origin-left rounded-full bg-blue-600" />
      {children}
    </span>
  );
}

function SectionHead({ label, title, sub, linkText, linkTo }: { label: string; title: string; sub?: string; linkText?: string; linkTo?: string }) {
  return (
    <Reveal className="flex items-end justify-between gap-4">
      <div>
        <SectionLabel>{label}</SectionLabel>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">{title}</h2>
        {sub && <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{sub}</p>}
      </div>
      {linkText && linkTo && (
        <Link to={linkTo} className="group hidden shrink-0 items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 sm:inline-flex">
          {linkText} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </Reveal>
  );
}

function FlowStep({ index, icon: Icon, title, text, reduce }: { index: number; icon: React.ComponentType<{ className?: string }>; title: string; text: string; reduce: boolean }) {
  return (
    <>
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2, ease: EASE }}
        className="relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur"
      >
        <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30">
          {!reduce && <span className="absolute inset-0 rounded-2xl bg-blue-400/40 motion-safe:animate-ping" style={{ animationDuration: "2.6s" }} />}
          <Icon className="relative h-8 w-8" />
        </div>
        <h3 className="mt-4 text-base font-extrabold">{title}</h3>
        <p className="mt-1 text-xs leading-5 text-slate-300">{text}</p>
      </motion.div>

      {index < 2 && (
        <div className="relative mx-auto hidden h-px w-16 bg-white/20 lg:block">
          {!reduce && (
            <motion.span className="absolute -top-1 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" animate={{ left: ["0%", "100%"] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: index * 0.6 }} />
          )}
        </div>
      )}
    </>
  );
}

function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, x: 40, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
      className="relative mx-auto w-full max-w-[580px] pb-6 pt-14 lg:pt-16"
    >
      <div className="absolute inset-10 rounded-full bg-blue-400/20 blur-3xl" />

      <Float className="absolute left-4 top-0 z-20 sm:left-10" amount={7}>
        <div className="flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-indigo-50 text-indigo-600"><BrainCircuit className="h-5 w-5" /></div>
          <div>
            <p className="text-xs font-bold">AI-Powered Insights</p>
            <p className="text-[10px] text-slate-500">Turn Your Data Into Decisions</p>
          </div>
        </div>
      </Float>

      <Float className="absolute -left-1 bottom-10 z-20 hidden sm:block" delay={1.2} amount={6}>
        <div className="flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-emerald-600"><TrendingUp className="h-5 w-5" /></div>
          <div>
            <p className="text-xs font-bold">Smarter Automation</p>
            <p className="text-[10px] text-slate-500">Less manual work</p>
          </div>
        </div>
      </Float>

      <div className="relative mr-10 rounded-xl border-[6px] border-slate-800 bg-white p-2 shadow-2xl shadow-blue-900/20 sm:mr-14">
        <div className="grid grid-cols-[52px_1fr] gap-2 sm:grid-cols-[70px_1fr]">
          <div className="space-y-1.5 rounded-md bg-[#0f1a35] p-2 text-[8px] text-white/60">
            <div className="mb-2 flex items-center gap-1 font-bold text-white"><Layers3 className="h-3 w-3" /> MUROAS</div>
            {["Dashboard", "Analytics", "Projects", "Reports", "Settings"].map((item, i) => (
              <div key={item} className={`rounded px-1.5 py-1 ${i === 0 ? "bg-blue-600 text-white" : ""}`}>{item}</div>
            ))}
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-bold text-slate-800">Business Overview</p>
            <div className="mt-1.5 grid grid-cols-3 gap-1.5">
              {[["Total Users", "1,248", "+13%"], ["Active Products", "342", "+6%"], ["Revenue", "₹12,480", "+13%"]].map(([l, v, g], i) => (
                <motion.div key={l} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.12, duration: 0.5 }} className="rounded-md border border-slate-100 p-1.5">
                  <p className="text-[7px] text-slate-500">{l}</p>
                  <p className="text-[10px] font-extrabold">{v} <span className="text-[7px] font-bold text-emerald-600">{g}</span></p>
                </motion.div>
              ))}
            </div>

            <div className="mt-1.5 grid grid-cols-[1.5fr_1fr] gap-1.5">
              <div className="rounded-md border border-slate-100 p-1.5">
                <p className="text-[8px] font-bold">Growth Overview</p>
                <svg viewBox="0 0 200 80" className="mt-1 w-full" role="img" aria-label="Growth chart">
                  <motion.path d="M0 70 L20 55 L40 62 L60 40 L85 48 L110 28 L135 36 L160 14 L200 8 L200 80 L0 80 Z" fill="#2563eb" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 1.8, duration: 0.8 }} />
                  <motion.path d="M0 70 L20 55 L40 62 L60 40 L85 48 L110 28 L135 36 L160 14 L200 8" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 1.4, ease: "easeInOut" }} />
                </svg>
              </div>
              <div className="rounded-md border border-slate-100 p-1.5">
                <p className="text-[8px] font-bold">Recent Activity</p>
                {["New user registered", "Model training completed", "New cloud project"].map((a, i) => (
                  <motion.div key={a} initial={reduce ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 + i * 0.2, duration: 0.4 }} className="mt-1 flex items-center gap-1">
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

      <Float className="absolute -right-1 bottom-0 z-10" delay={0.8} amount={10}>
        <div className="w-[118px] rounded-[22px] border-[5px] border-slate-900 bg-white p-2 shadow-2xl sm:w-[140px]">
          <p className="text-[8px] font-bold text-slate-800">Good Morning, Anubhav</p>
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            {[BrainCircuit, Workflow, Layers3, ShieldCheck].map((Icon, i) => (
              <div key={i} className="grid h-10 place-items-center rounded-lg bg-indigo-50 text-indigo-600"><Icon className="h-4 w-4" /></div>
            ))}
          </div>
          <p className="mt-2 text-[8px] font-bold">Latest Products</p>
          <div className="mt-1 space-y-1"><div className="h-3 rounded bg-slate-100" /><div className="h-3 w-4/5 rounded bg-slate-100" /></div>
        </div>
      </Float>
    </motion.div>
  );
}