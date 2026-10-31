import { useEffect, useRef, useState } from "react";
import ceoImage from "../../imports/ceo.png";
import { Link } from "react-router";
import {
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
  Box,
  BrainCircuit,
  ChevronDown,
  Clock,
  Code2,
  Compass,
  Eye,
  Gem,
  Handshake,
  Layers3,
  Lightbulb,
  Lock,
  MapPin,
  Quote,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";

import { Button } from "../components/ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------ DATA ------------------------------ */

const heroWords = [
  { t: "We" }, { t: "Build" }, { t: "Technology" }, { t: "That" },
  { t: "Moves", a: true }, { t: "Businesses", a: true }, { t: "Forward.", a: true },
];

const keywords = ["Innovation", "Integrity", "Impact", "Craft", "Trust", "Growth", "Responsibility", "Curiosity"];

const snapshot = [
  { label: "Company", value: "MUROAS Tech Innovation Pvt Ltd" },
  { label: "Headquarters", value: "Pune, Maharashtra, India" },
  { label: "Focus", value: "AI-first software products" },
  { label: "Serves", value: "Education · Healthcare · Retail · MSMEs" },
  { label: "Approach", value: "Product-led and problem-first" },
];

const missionPoints = [
  { icon: Target, title: "Start with the problem", text: "Every product begins with a real need, never with a trend." },
  { icon: Handshake, title: "Make technology accessible", text: "Powerful software that any business can adopt and afford." },
  { icon: Rocket, title: "Deliver lasting value", text: "Products that keep working and growing long after launch." },
];

const visionPoints = [
  { icon: Compass, title: "Global reach, local understanding", text: "Solutions that respect how each market and industry works." },
  { icon: ShieldCheck, title: "AI people can trust", text: "Intelligent systems that are useful, safe and explainable." },
  { icon: Layers3, title: "A product family for every industry", text: "A growing suite of connected products across sectors." },
];

const values = [
  { icon: Lightbulb, title: "Innovation with Purpose", text: "We explore new ideas, but only ship what genuinely helps people." },
  { icon: Handshake, title: "Customer Success", text: "Our work is only successful when our customers' businesses grow." },
  { icon: Scale, title: "Integrity & Transparency", text: "Honest timelines, clear communication and no hidden surprises." },
  { icon: BookOpen, title: "Continuous Learning", text: "We stay curious, share what we learn and keep raising the bar." },
  { icon: Gem, title: "Quality & Craft", text: "Clean code, thoughtful design and attention to every detail." },
  { icon: ShieldCheck, title: "Responsible Technology", text: "Privacy, safety and fairness are built in from the very start." },
];

// Founder photo comes from src/imports/ceo.png (imported at the top). Set `photo: ""` to show initials instead.
// NOTE: this message is a DRAFT written for you. Edit it so it sounds like her, and confirm title + spelling.
const founder = {
  name: "Shrawani Pande",
  role: "Founder",
  photo: ceoImage,
  message: [
    "MUROAS began with a simple belief: technology should make people's work lighter, not harder. Behind every screen we build there is a teacher, a doctor or a shop owner who depends on it every single day, and that responsibility shapes every decision we make.",
    "We are an AI-first company, but we never chase technology for its own sake. We listen first, build what genuinely helps and keep improving with honest feedback from the people who use our products.",
    "To our clients, partners and everyone who has trusted a young company with real problems: thank you. We will keep earning that trust through quality, honesty and support that does not end at launch.",
  ],
  promises: ["Honest communication", "Quality you can trust", "Support beyond launch"],
};

const pillars = [
  { n: "01", title: "Problem-First", text: "We spend time understanding your workflow before writing a single line of code." },
  { n: "02", title: "AI Where It Counts", text: "We add intelligence only where it creates real, measurable value." },
  { n: "03", title: "Built to Last", text: "Scalable architecture and clean engineering that grows with you." },
  { n: "04", title: "Partnership, Not Projects", text: "We stay involved after launch and grow alongside our clients." },
];

const milestones = [
  { title: "The Idea", text: "MUROAS began with a simple belief: modern technology, especially AI, should solve everyday problems in education, healthcare, retail and beyond." },
  { title: "Building & Learning", text: "A small team with a big vision. We built our first products, learned from early clients and sharpened how we work." },
  { title: "Launching Products", text: "We turned lessons into products: School ERP, Clinic Management, Restaurant Management and custom AI solutions." },
  { title: "Growing Our Impact", text: "Expanding our product portfolio, strengthening our technology and helping more businesses automate and grow." },
  { title: "The Road Ahead", text: "Becoming a trusted AI-first product company, with a family of intelligent products that make a meaningful difference." },
];

const whatWeDo = [
  { icon: BrainCircuit, title: "AI & ML Solutions", text: "Custom models, predictive analytics, document intelligence and AI assistants.", to: "/ai-solutions", tint: "from-violet-500 to-indigo-600" },
  { icon: Box, title: "Software Products", text: "Ready-to-deploy School, Clinic and Restaurant management platforms.", to: "/products", tint: "from-sky-500 to-blue-600" },
  { icon: Code2, title: "Custom Development", text: "Web, mobile and ERP systems built exactly around your business.", to: "/contact", tint: "from-emerald-500 to-teal-600" },
];

const commitments = [
  { icon: Lock, title: "Security & Privacy", text: "Your data is protected with sound engineering practices and handled only for the purpose you intend." },
  { icon: Sparkles, title: "Responsible AI", text: "Humans stay in the loop. We design AI to assist decisions, with review and clear limits." },
  { icon: Star, title: "Quality & Reliability", text: "Testing, monitoring and maintenance so your product works when you need it." },
  { icon: Handshake, title: "Transparent Partnership", text: "Clear scope, honest updates and a team that picks up the phone." },
];

// NOTE: replace with your real numbers before going live.
const stats = [
  { icon: Box, value: "10+", label: "Software Products" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Clock, value: "3+", label: "Years of Experience" },
  { icon: Star, value: "99%", label: "Client Satisfaction" },
];

/* --------------------------- ANIMATION HELPERS --------------------------- */

function Reveal({ children, delay = 0, className, x = 0 }: { children: React.ReactNode; delay?: number; className?: string; x?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: x ? 0 : 28, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
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
    const c = animate(0, target, { duration: 1.8, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
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
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
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

/* ------------------------------ PAGE ------------------------------ */

export function About() {
  const reduce = useReducedMotion();

  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const spotlight = useMotionTemplate`radial-gradient(460px circle at ${mx}px ${my}px, rgba(99,102,241,0.16), transparent 70%)`;

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const tlRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: tl } = useScroll({ target: tlRef, offset: ["start 75%", "end 60%"] });
  const tlScale = useSpring(tl, { stiffness: 90, damping: 24 });

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <motion.div aria-hidden="true" style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />

      {/* HERO */}
      <section
        className="relative isolate bg-gradient-to-br from-[#f4f8ff] via-[#e9f1ff] to-[#dfe3ff] pt-28 lg:pt-32"
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

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <motion.span initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex rounded-full border border-blue-300 bg-white/70 px-3 py-1.5 text-[10px] font-extrabold tracking-[1.5px] text-blue-700 backdrop-blur">
              ABOUT MUROAS
            </motion.span>

            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0f1a35] sm:text-5xl lg:text-[56px]">
              {heroWords.map((w, i) => (
                <motion.span
                  key={i}
                  initial={reduce ? false : { opacity: 0, y: 36, rotateX: -45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.65, delay: 0.15 + i * 0.07, ease: EASE }}
                  className={`mr-[0.25em] inline-block ${w.a ? "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" : ""}`}
                >
                  {w.t}
                </motion.span>
              ))}
            </h1>

            <motion.p initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
              MUROAS Tech Innovation is an AI-first product company from Pune. We turn real-world problems into
              intelligent, reliable software, so that businesses of every size can work smarter and grow with confidence.
            </motion.p>

            <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.6 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#story">
                <Button className="group h-12 w-full rounded-md bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto">
                  Our Story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#founder">
                <Button variant="outline" className="h-12 w-full rounded-md border-blue-500 bg-white/60 px-6 font-semibold text-blue-700 backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto">
                  Founder's Desk
                </Button>
              </a>
            </motion.div>
          </div>

          <OrbitVisual />
        </div>

        {/* floating stats card */}
        <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 lg:px-10">
          <Reveal>
            <div className="grid grid-cols-2 gap-6 rounded-2xl border border-white bg-white/85 px-6 py-6 shadow-[0_12px_40px_rgba(37,99,235,0.12)] backdrop-blur-xl lg:grid-cols-4">
              {stats.map(({ icon: Icon, value, label }, i) => (
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
          <motion.a href="#who" aria-label="Scroll down" animate={reduce ? undefined : { y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="mx-auto mt-5 hidden w-fit text-blue-400 lg:block">
            <ChevronDown className="h-6 w-6" />
          </motion.a>
        </div>
      </section>

      {/* KEYWORD MARQUEE */}
      <div className="overflow-hidden border-b border-slate-100 bg-white py-5">
        <motion.div className="flex w-max gap-10" animate={reduce ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
          {[...keywords, ...keywords].map((k, i) => (
            <span key={i} className="flex shrink-0 items-center gap-10 text-2xl font-extrabold tracking-tight text-blue-100 sm:text-3xl">
              {k} <Sparkles className="h-5 w-5 text-blue-300" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* WHO WE ARE */}
      <section id="who" className="scroll-mt-24 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <Reveal>
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#0f1a35] sm:text-4xl">
              A product company built around people, not just code.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-slate-600">
              <p>
                MUROAS Tech Innovation Pvt Ltd is a product-focused technology company based in Pune, India.
                We design and build AI-driven software for education, healthcare, retail and growing businesses,
                from school and clinic management to restaurant platforms and custom AI solutions.
              </p>
              <p>
                We believe the best technology is the kind you barely notice: it simply makes work easier. That belief
                guides how we listen to our customers, how we design our products and how we support them long after launch.
              </p>
              <p>
                Whether you run a school, a clinic, a restaurant or a startup, our goal is the same: give you software
                that fits your workflow, grows with your business and earns your trust every day.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <TiltCard>
              <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-6 shadow-xl shadow-blue-900/5">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
                <p className="relative text-xs font-extrabold tracking-[2px] text-blue-700">COMPANY SNAPSHOT</p>
                <dl className="relative mt-4 divide-y divide-blue-100">
                  {snapshot.map(({ label, value }) => (
                    <div key={label} className="py-3">
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</dt>
                      <dd className="mt-0.5 text-sm font-bold text-[#0f1a35]">{value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="relative mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500"><MapPin className="h-4 w-4 text-blue-600" /> Proudly made in India</p>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>OUR PURPOSE</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f1a35] sm:text-4xl">Where we are going, and why</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <PurposeCard
              tag="OUR MISSION"
              icon={Target}
              statement="To build intelligent, reliable software that solves real problems and puts modern technology within reach of every business, from a neighbourhood clinic to a growing enterprise."
              points={missionPoints}
              gradient="from-blue-700 via-blue-600 to-indigo-600"
            />
            <PurposeCard
              tag="OUR VISION"
              icon={Eye}
              statement="To become a globally recognised AI-first product company, trusted for technology that is useful, responsible and built to last."
              points={visionPoints}
              gradient="from-indigo-700 via-violet-600 to-blue-600"
              delay={0.15}
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal className="max-w-2xl">
            <Eyebrow>CORE VALUES</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f1a35] sm:text-4xl">The principles behind every decision</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">Values are only real when they shape what we do on an ordinary Tuesday. These are the six we hold ourselves to.</p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 0.1}>
                <TiltCard className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-2xl hover:shadow-blue-900/10">
                    <span className="absolute right-4 top-1 text-7xl font-black text-slate-100 transition-colors group-hover:text-blue-100">{String(i + 1).padStart(2, "0")}</span>
                    <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="relative mt-5 text-lg font-extrabold">{title}</h3>
                    <p className="relative mt-2 text-sm leading-6 text-slate-600">{text}</p>
                    <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-600 to-indigo-500 transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER'S DESK */}
      <section id="founder" className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <motion.div aria-hidden="true" animate={reduce ? undefined : { scale: [1, 1.2, 1] }} transition={{ duration: 9, repeat: Infinity }} className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-300/25 blur-3xl" />
        <motion.div aria-hidden="true" animate={reduce ? undefined : { scale: [1.2, 1, 1.2] }} transition={{ duration: 11, repeat: Infinity }} className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-violet-300/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>FROM THE FOUNDER'S DESK</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f1a35] sm:text-4xl">A note from the person who started it</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">Why we built MUROAS, and the promise we make to everyone who works with us.</p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="grid items-center gap-10 overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-900/10 sm:p-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
              <FounderPortrait />

              <div className="relative">
                <Quote className="h-12 w-12 fill-blue-100 text-blue-300" />
                <div className="mt-3 space-y-4 font-serif text-lg italic leading-8 text-slate-700 sm:text-xl sm:leading-9">
                  {founder.message.map((p, i) => (
                    <motion.p key={i} initial={reduce ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.15, duration: 0.6 }}>
                      {p}
                    </motion.p>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {founder.promises.map((p, i) => (
                    <motion.span key={p} initial={reduce ? false : { opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.1 }} className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-700">
                      ✓ {p}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <p className="text-xl font-extrabold text-[#0f1a35]">{founder.name}</p>
                  <p className="text-sm text-slate-500">{founder.role}, MUROAS Tech Innovation</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal className="max-w-2xl">
            <Eyebrow>HOW WE WORK</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f1a35] sm:text-4xl">What sets us apart</h2>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ n, title, text }, i) => (
              <Reveal key={n} delay={i * 0.08} className="bg-white">
                <div className="group h-full p-7 transition-colors duration-300 hover:bg-blue-600">
                  <p className="text-4xl font-black text-blue-600 transition-colors group-hover:text-white/90">{n}</p>
                  <h3 className="mt-4 text-lg font-extrabold transition-colors group-hover:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 transition-colors group-hover:text-blue-100">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="story" className="scroll-mt-24 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>OUR JOURNEY</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#0f1a35] sm:text-4xl">From an idea to a growing technology company</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              We began as a small team with a big vision. Every step since has been about learning from real customers and building something better.
            </p>
            <Link to="/products" className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
              See what we have built <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div ref={tlRef} className="relative pl-10">
            <div className="absolute bottom-2 left-[15px] top-2 w-0.5 rounded bg-blue-100" />
            <motion.div style={{ scaleY: reduce ? 1 : tlScale }} className="absolute bottom-2 left-[15px] top-2 w-0.5 origin-top rounded bg-gradient-to-b from-blue-600 to-indigo-500" />
            <div className="space-y-8">
              {milestones.map(({ title, text }, i) => (
                <Reveal key={title} x={40}>
                  <div className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg">
                    <span className="absolute -left-[34px] top-5 grid h-8 w-8 place-items-center rounded-full border-4 border-slate-50 bg-blue-600 text-[11px] font-extrabold text-white">{i + 1}</span>
                    <h3 className="text-base font-extrabold text-[#0f1a35]">{title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>WHAT WE DO</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f1a35] sm:text-4xl">Three ways we create value</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whatWeDo.map(({ icon: Icon, title, text, to, tint }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <Link to={to} className="group relative block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10">
                  <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${tint} opacity-10 transition-all duration-500 group-hover:scale-150 group-hover:opacity-20`} />
                  <div className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${tint} text-white shadow-lg`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="relative mt-5 text-xl font-extrabold">{title}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Reveal className="max-w-2xl">
            <Eyebrow>OUR COMMITMENTS</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f1a35] sm:text-4xl">What you can always count on</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {commitments.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 2) * 0.1}>
                <div className="group flex h-full gap-5 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold">{title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 lg:px-10">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 px-6 py-14 text-center text-white shadow-2xl shadow-blue-700/25 sm:px-12">
            <motion.div aria-hidden="true" animate={reduce ? undefined : { scale: [1, 1.25, 1], opacity: [0.1, 0.22, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -left-10 -top-20 h-72 w-72 rounded-full bg-white blur-3xl" />
            <motion.div aria-hidden="true" animate={reduce ? undefined : { scale: [1.2, 1, 1.2], opacity: [0.18, 0.08, 0.18] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-violet-300 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <span className="text-[11px] font-extrabold tracking-[2px] text-blue-100">LET'S BUILD A SMARTER TOMORROW</span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Have a problem worth solving? Let's talk.</h2>
              <p className="mt-3 text-base leading-7 text-blue-100">Whether you want a product, a custom solution or a conversation about AI, our door is open.</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/contact">
                  <Button className="group h-12 w-full rounded-md bg-white px-7 font-bold text-blue-700 transition-all hover:-translate-y-0.5 hover:bg-blue-50 sm:w-auto">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/career">
                  <Button variant="outline" className="h-12 w-full rounded-md border-white/50 bg-white/10 px-7 font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20 hover:text-white sm:w-auto">
                    Join Our Journey
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

/* --------------------------- SUB-COMPONENTS --------------------------- */

function PurposeCard({
  tag, icon: Icon, statement, points, gradient, delay = 0,
}: {
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  statement: string;
  points: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }[];
  gradient: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <Reveal delay={delay}>
      <motion.div whileHover={reduce ? undefined : { y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 22 }} className={`relative h-full overflow-hidden rounded-3xl bg-gradient-to-br ${gradient} p-8 text-white shadow-2xl shadow-blue-900/20 sm:p-10`}>
        <Icon className="absolute -right-6 -top-6 h-48 w-48 text-white/[0.08]" />
        <motion.div aria-hidden="true" animate={reduce ? undefined : { scale: [1, 1.2, 1] }} transition={{ duration: 7, repeat: Infinity }} className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-extrabold tracking-[2px]">
            <Icon className="h-4 w-4" /> {tag}
          </span>
          <p className="mt-5 text-xl font-bold leading-9 sm:text-2xl sm:leading-10">{statement}</p>
          <ul className="mt-8 space-y-4">
            {points.map(({ icon: PIcon, title, text }, i) => (
              <motion.li key={title} initial={reduce ? false : { opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }} className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15"><PIcon className="h-5 w-5" /></span>
                <span>
                  <span className="block text-sm font-extrabold">{title}</span>
                  <span className="block text-sm leading-6 text-white/80">{text}</span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Reveal>
  );
}

function FounderPortrait() {
  const reduce = useReducedMotion();
  const initials = founder.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <motion.div aria-hidden="true" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -inset-4 rounded-[2.25rem] border-2 border-dashed border-blue-200" />
      <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-blue-500 to-indigo-600 opacity-30 blur-xl" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 shadow-2xl">
        {founder.photo ? (
          <img src={founder.photo} alt={founder.name} className="h-full w-full object-cover object-top" />
        ) : (
          <div className="grid h-full w-full place-items-center">
            <span className="text-8xl font-black text-white/90">{initials}</span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-white">
          <p className="text-lg font-extrabold">{founder.name}</p>
          <p className="text-sm text-blue-100">{founder.role}, MUROAS</p>
        </div>
      </div>
    </div>
  );
}

function OrbitVisual() {
  const reduce = useReducedMotion();
  const sats = [
    { icon: Target, label: "Mission", pos: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" },
    { icon: Eye, label: "Vision", pos: "bottom-[14%] left-[3%]" },
    { icon: Gem, label: "Values", pos: "bottom-[14%] right-[3%]" },
  ];
  return (
    <motion.div initial={reduce ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3, ease: EASE }} className="relative mx-auto aspect-square w-full max-w-[400px]">
      <div className="absolute inset-8 rounded-full bg-blue-400/25 blur-3xl" />
      <motion.div animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-dashed border-blue-300">
        {sats.map(({ icon: Icon, label, pos }) => (
          <div key={label} className={`absolute ${pos}`}>
            <motion.div animate={reduce ? undefined : { rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="flex items-center gap-2 rounded-full border border-blue-100 bg-white py-2 pl-2 pr-4 shadow-xl shadow-blue-900/10">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white"><Icon className="h-4 w-4" /></span>
              <span className="text-xs font-bold text-[#0f1a35]">{label}</span>
            </motion.div>
          </div>
        ))}
      </motion.div>
      <motion.div animate={reduce ? undefined : { rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute inset-[18%] rounded-full border border-blue-200" />
      <div className="absolute inset-[30%] grid place-items-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-600/40">
        {!reduce && <span className="absolute inset-0 rounded-full bg-blue-400/40 motion-safe:animate-ping" style={{ animationDuration: "3s" }} />}
        <div className="relative text-center">
          <BrainCircuit className="mx-auto h-12 w-12" />
          <p className="mt-1 text-sm font-extrabold tracking-wide">MUROAS</p>
        </div>
      </div>
    </motion.div>
  );
}