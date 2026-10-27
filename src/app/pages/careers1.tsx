import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpen,
  Box,
  BrainCircuit,
  Briefcase,
  ChartNoAxesCombined,
  Clock,
  Cog,
  Heart,
  Laptop,
  Layers3,
  Lightbulb,
  MapPin,
  Rocket,
  Settings2,
  Star,
  Target,
  Users,
} from "lucide-react";

import { Button } from "../components/ui/button";

/* ------------------------------ DATA ------------------------------ */

const heroFeatures = [
  { icon: Cog, title: "Work on Real Products", text: "Not just client projects" },
  { icon: BookOpen, title: "Learn & Grow", text: "Mentorship and learning" },
  { icon: Layers3, title: "Modern Tech Stack", text: "AI, Cloud, Web & Mobile" },
  { icon: Target, title: "Make an Impact", text: "Solve real-world problems" },
];

// NOTE: replace with your real numbers before going live.
const stats = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Settings2, value: "3+", label: "Years of Innovation" },
  { icon: Box, value: "10+", label: "Products in Development" },
  { icon: Clock, value: "99%", label: "Learning Focused" },
];

const perks = [
  { icon: Rocket, tint: "bg-blue-50 text-blue-600", title: "Work on AI Products", text: "Build real software products using modern technologies." },
  { icon: BookOpen, tint: "bg-indigo-50 text-indigo-600", title: "Continuous Learning", text: "Access to courses, mentorship and skill development." },
  { icon: Users, tint: "bg-violet-50 text-violet-600", title: "Collaborative Team", text: "Work with passionate and talented people." },
  { icon: Laptop, tint: "bg-sky-50 text-sky-600", title: "Flexible Work", text: "Hybrid work options and work-life balance." },
  { icon: ChartNoAxesCombined, tint: "bg-emerald-50 text-emerald-600", title: "Career Growth", text: "Clear growth path and leadership opportunities." },
  { icon: Heart, tint: "bg-pink-50 text-pink-500", title: "Positive Culture", text: "Open communication and a supportive environment." },
];

// NOTE: list only roles you are actually hiring for.
const jobs = [
  {
    title: "Flutter Developer",
    type: "Full Time",
    experience: "1-3 Years",
    text: "Build and maintain cross-platform mobile applications using Flutter.",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "AI/ML Engineer",
    type: "Full Time",
    experience: "1-3 Years",
    text: "Develop and deploy machine learning models for real-world applications.",
    tags: ["Python", "Machine Learning", "LLMs"],
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    experience: "1-3 Years",
    text: "Build scalable backend systems and APIs for our products.",
    tags: ["Node.js", "Python", "MySQL"],
  },
  {
    title: "Product Designer",
    type: "Internship",
    experience: "0-1 Year",
    text: "Design intuitive user experiences for web and mobile products.",
    tags: ["UI/UX", "Figma", "Prototyping"],
  },
];

const process = [
  { title: "Apply", text: "Submit your application online" },
  { title: "Screening", text: "Review of your profile and skills" },
  { title: "Technical Round", text: "Problem solving and technical discussion" },
  { title: "Interview", text: "Discussion with our team" },
  { title: "Offer", text: "Welcome to MUROAS!" },
];

const life = [
  { icon: Users, gradient: "from-sky-300 via-blue-400 to-indigo-600", caption: "Team" },
  { icon: Laptop, gradient: "from-cyan-300 via-sky-400 to-blue-600", caption: "Workspace" },
  { icon: Lightbulb, gradient: "from-indigo-300 via-violet-400 to-purple-600", caption: "Collaboration" },
  { icon: Rocket, gradient: "from-blue-300 via-blue-500 to-indigo-700", caption: "Ideas · Build · Products · Create · Impact" },
];

/* ------------------------------ PAGE ------------------------------ */

export function Career() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative isolate bg-gradient-to-br from-[#f4f8ff] via-[#e9f1ff] to-[#dfe0ff] pt-28 lg:pt-32">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[500px] w-[500px] rounded-full bg-violet-300/30 blur-[110px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-8 sm:px-8 lg:grid-cols-2 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex rounded-full border border-blue-300 bg-white/70 px-3 py-1.5 text-[10px] font-extrabold tracking-[1.5px] text-blue-700">
              CAREERS AT MUROAS
            </span>

            <h1 className="mt-6 max-w-md text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0f1a35] sm:text-5xl lg:text-[54px]">
              Build Your Career. Build a{" "}
              <span className="text-blue-600">Smarter Tomorrow.</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-700 sm:text-lg">
              Join MUROAS and work on real-world AI products that solve meaningful
              problems. Grow with a team that believes in innovation, learning and impact.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#openings">
                <Button className="h-12 w-full rounded-md bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 sm:w-auto">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#life">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-md border-blue-500 bg-white/60 px-6 font-semibold text-blue-700 hover:bg-blue-50 sm:w-auto"
                >
                  Life at MUROAS
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Replace this block with <img src="/team.jpg" /> if you have a real team photo */}
          <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 via-sky-100 to-slate-300 shadow-xl sm:h-[360px]">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-600/30 to-transparent" />
            <div className="relative flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-600 text-white shadow-lg">
                <BrainCircuit className="h-8 w-8" />
              </div>
              <div>
                <p className="text-3xl font-extrabold leading-none text-[#0f1a35]">MUROAS</p>
                <p className="mt-1 text-base font-medium text-slate-700">Tech Innovation</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex items-center gap-4 rounded-xl bg-white/95 px-4 py-3 shadow-xl">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-600 text-white">
                <Users className="h-5 w-5" />
              </span>
              <p className="text-[11px] font-bold leading-4 text-slate-800">
                Innovative Team
                <br />
                Meaningful Work
                <br />
                Real Impact
              </p>
              <span className="grid h-7 w-7 place-items-center rounded-full border border-blue-300 text-blue-600">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
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

      {/* STATS */}
      <section className="px-5 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 rounded-xl bg-slate-100/80 px-6 py-5 lg:grid-cols-4">
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

      {/* WHY JOIN */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Label>WHY JOIN MUROAS</Label>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
            More Than Just a Job
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            We offer a supportive environment where you can learn, contribute and grow your career.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {perks.map(({ icon: Icon, tint, title, text }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-[0_4px_20px_rgba(15,26,53,0.06)]"
              >
                <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${tint}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-extrabold">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section id="openings" className="scroll-mt-24 py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Label>OPEN POSITIONS</Label>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
                Current Openings
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Explore exciting opportunities and be part of our growing team.
              </p>
            </div>
            <Link
              to="/contact"
              className="hidden shrink-0 items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 sm:inline-flex"
            >
              View All Positions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {jobs.map(({ title, type, experience, text, tags }) => (
              <article
                key={title}
                className="flex flex-col rounded-xl border border-slate-100 bg-white p-5 shadow-[0_4px_20px_rgba(15,26,53,0.07)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-extrabold">{title}</h3>
                  <span
                    className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold ${
                      type === "Internship"
                        ? "bg-orange-50 text-orange-600"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    {type}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> Pune, Maharashtra
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Briefcase className="h-3.5 w-3.5" /> {experience}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-xs leading-5 text-slate-500">{text}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-700">
                      {t}
                    </span>
                  ))}
                </div>

                <Link to="/contact" className="mt-5 inline-block">
                  <Button
                    variant="outline"
                    className="h-9 rounded-md border-blue-500 px-4 text-xs font-semibold text-blue-700 hover:bg-blue-50"
                  >
                    Apply Now <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Label>OUR HIRING PROCESS</Label>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
            A Simple and Fair Process
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            We keep our hiring process transparent and candidate-friendly.
          </p>

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
                  <p className="mt-0.5 text-[11px] leading-4 text-slate-500">{step.text}</p>
                </div>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden h-4 w-4 shrink-0 text-blue-500 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE AT MUROAS */}
      <section id="life" className="scroll-mt-24 py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Label>LIFE AT MUROAS</Label>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
                A Place to Do Your Best Work
              </h2>
              <p className="mt-2 text-sm text-slate-600">A glimpse of our team, culture and workplace.</p>
            </div>
            <Link
              to="/about"
              className="hidden shrink-0 items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 sm:inline-flex"
            >
              See More Photos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Replace each tile with <img src="/life/1.jpg" className="h-full w-full object-cover" /> for real photos */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {life.map(({ icon: Icon, gradient, caption }) => (
              <div
                key={caption}
                className={`relative flex h-32 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${gradient} shadow-md sm:h-36`}
              >
                <Icon className="h-14 w-14 text-white/40" />
                <span className="absolute bottom-2 left-3 right-3 text-[10px] font-semibold text-white/90">
                  {caption}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-10 sm:px-8 lg:px-10">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 p-7 text-white sm:p-9 lg:flex-row lg:items-center">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="text-[11px] font-extrabold tracking-[2px] text-blue-100">
              READY TO BUILD YOUR FUTURE?
            </span>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Join MUROAS and Be Part of Something Meaningful
            </h2>
            <p className="mt-2 text-sm text-blue-100">
              Explore open positions and help us build AI-powered products for a smarter tomorrow.
            </p>
          </div>
          <a href="#openings" className="relative w-full shrink-0 sm:w-auto">
            <Button className="h-12 w-full rounded-md bg-white px-6 font-bold text-blue-700 hover:bg-blue-50 sm:w-auto">
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
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