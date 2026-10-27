import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Box,
  CheckCircle2,
  Clock,
  Eye,
  Gem,
  Github,
  Heart,
  Layers3,
  Lightbulb,
  Linkedin,
  MapPin,
  Quote,
  Rocket,
  Star,
  Target,
  Twitter,
  Users,
  Handshake,
} from "lucide-react";

import { Button } from "../components/ui/button";

/* ------------------------------ DATA ------------------------------ */

const heroFeatures = [
  { icon: Layers3, title: "Product-Led Company", text: "Focused on real impact" },
  { icon: BrainCircuit, title: "AI-First Approach", text: "Modern technologies" },
  { icon: Handshake, title: "Customer Success", text: "Built for your growth" },
];

// NOTE: replace with your real numbers before going live.
const stats = [
  { icon: Box, value: "10+", label: "Software Products" },
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Clock, value: "3+", label: "Years of Experience" },
  { icon: Star, value: "99%", label: "Client Satisfaction" },
];

const values = [
  "Innovation in everything we do",
  "Customer success and trust",
  "Continuous learning and growth",
  "Ethical and responsible technology",
  "Long-term thinking and real impact",
];

// NOTE: check these years. Your old About page said "Est. 2026".
const timeline = [
  { year: "2023", title: "The Beginning", text: "MUROAS was founded with a vision to build AI-powered software products." },
  { year: "2024", title: "Building and Learning", text: "Developed our first products and worked with early clients across industries." },
  { year: "2025", title: "Growing Our Impact", text: "Expanded our product portfolio and strengthened our technology and team." },
  { year: "Beyond", title: "A Smarter Future", text: "Continuing to innovate and create solutions that make a meaningful difference." },
];

// NOTE: only the first member is from your real team. Replace the rest with real people, or remove them.
const team = [
  { name: "Anubhav Pratap Singh", role: "Founder & CEO", text: "Passionate about AI and building innovative software products that create real impact.", tone: "from-slate-300 to-slate-400" },
  { name: "Riya Sharma", role: "Product & Strategy", text: "Focused on product design, user experience and business growth.", tone: "from-zinc-300 to-zinc-400" },
  { name: "Karan Mehta", role: "AI/ML Engineer", text: "Works on scalable AI solutions and real-world machine learning applications.", tone: "from-stone-300 to-stone-400" },
  { name: "Aditya Kulkarni", role: "Full Stack Developer", text: "Builds modern web and mobile applications with a focus on performance and scalability.", tone: "from-gray-300 to-gray-400" },
];

const culture = [
  { icon: Users, tint: "bg-violet-50 text-violet-600", title: "Collaborative Team", text: "We work together, share ideas and support each other." },
  { icon: Lightbulb, tint: "bg-emerald-50 text-emerald-600", title: "Continuous Learning", text: "We stay curious and keep learning new technologies." },
  { icon: Rocket, tint: "bg-pink-50 text-pink-500", title: "Build Real Products", text: "We focus on meaningful projects that solve real problems." },
  { icon: Heart, tint: "bg-orange-50 text-orange-500", title: "Supportive Environment", text: "We believe in a positive, fair and growth-oriented work culture." },
];

/* ------------------------------ PAGE ------------------------------ */

export function About() {
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
              ABOUT MUROAS
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0f1a35] sm:text-5xl lg:text-[54px]">
              Building Intelligent Software Products for a{" "}
              <span className="text-blue-600">Better Tomorrow</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-700 sm:text-lg">
              MUROAS Tech Innovation is an AI-first technology company focused on
              building innovative software products that solve real-world problems and
              create long-term value for businesses and communities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#story">
                <Button className="h-12 w-full rounded-md bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 sm:w-auto">
                  Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#team">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-md border-blue-500 bg-white/60 px-6 font-semibold text-blue-700 hover:bg-blue-50 sm:w-auto"
                >
                  Meet Our Team
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Replace this block with <img src="/office.jpg" /> if you have a real office photo */}
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
            <div className="absolute bottom-4 right-4 max-w-[280px] rounded-xl bg-white/95 p-4 shadow-xl">
              <Quote className="h-5 w-5 fill-blue-600 text-blue-600" />
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Technology should solve real problems and create opportunities for a better future.
              </p>
              <p className="mt-2 text-[11px] font-bold">— MUROAS Team</p>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-5 px-5 pb-10 pt-4 sm:grid-cols-3 sm:px-8 lg:px-10">
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

      {/* FOUNDATION */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Label>OUR FOUNDATION</Label>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
            Our Mission, Vision and Values
          </h2>
          <p className="mt-2 text-sm text-slate-600">These principles guide everything we build at MUROAS.</p>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <FoundationCard icon={Target} tint="bg-blue-50 text-blue-600" title="Our Mission">
              <p className="text-sm leading-6 text-slate-600">
                To build intelligent software products that solve real-world problems and
                make technology accessible to every business.
              </p>
            </FoundationCard>

            <FoundationCard icon={Eye} tint="bg-violet-50 text-violet-600" title="Our Vision">
              <p className="text-sm leading-6 text-slate-600">
                To become a globally recognized AI-first product company creating
                innovative solutions for a smarter, more efficient and inclusive world.
              </p>
            </FoundationCard>

            <FoundationCard icon={Gem} tint="bg-indigo-50 text-indigo-600" title="Our Values">
              <ul className="space-y-1.5">
                {values.map((v) => (
                  <li key={v} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="h-4 w-4 shrink-0 fill-blue-600 text-white" />
                    {v}
                  </li>
                ))}
              </ul>
            </FoundationCard>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="scroll-mt-24 py-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr_0.9fr] lg:px-10">
          <div>
            <Label>OUR STORY</Label>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-[#0f1a35] sm:text-3xl">
              From an Idea to a Growing Technology Company
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              MUROAS started with a simple idea: to use modern technology, especially AI,
              to solve real problems in education, healthcare, retail and other industries.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We began as a small team with a big vision, and today we are working on
              innovative software products that help businesses automate processes, make
              better decisions and achieve real growth.
            </p>
            <Link to="/contact" className="mt-5 inline-block">
              <Button className="h-11 rounded-md bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700">
                Our Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="relative space-y-3 pl-6">
            <div className="absolute bottom-4 left-[7px] top-4 w-px bg-blue-200" />
            {timeline.map(({ year, title, text }) => (
              <div key={year} className="relative flex gap-4 rounded-lg bg-slate-50/80 p-3">
                <span className="absolute -left-[22px] top-5 h-3.5 w-3.5 rounded-full border-[3px] border-blue-600 bg-white" />
                <p className="w-12 shrink-0 text-xs font-extrabold text-blue-700">{year}</p>
                <div>
                  <p className="text-xs font-extrabold">{title}</p>
                  <p className="mt-0.5 text-[11px] leading-4 text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Replace this block with <img src="/building.jpg" /> if you have a real photo */}
          <div className="relative h-[280px] overflow-hidden rounded-2xl bg-gradient-to-br from-sky-300 via-blue-500 to-indigo-800 shadow-xl">
            <div className="absolute inset-x-6 bottom-0 flex h-3/4 items-end gap-2">
              {[55, 80, 65, 95, 70].map((h, i) => (
                <span key={i} className="flex-1 rounded-t bg-white/20" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="absolute left-4 top-4 flex items-center gap-2 text-white">
              <BrainCircuit className="h-6 w-6" />
              <span className="text-sm font-extrabold">MUROAS</span>
            </div>
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-bold shadow-lg">
              <MapPin className="h-4 w-4 text-blue-600" />
              Pune, Maharashtra, India
            </span>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="scroll-mt-24 py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Label>OUR TEAM</Label>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
                Meet the People Behind MUROAS
              </h2>
            </div>
            <Link
              to="/career"
              className="hidden shrink-0 items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 sm:inline-flex"
            >
              View All Team Members <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(({ name, role, text, tone }) => (
              <article
                key={name}
                className="rounded-xl border border-slate-100 bg-white p-3 shadow-[0_4px_20px_rgba(15,26,53,0.07)]"
              >
                {/* Replace with <img src="/team/name.jpg" /> for real photos */}
                <div className={`grid h-32 place-items-center rounded-lg bg-gradient-to-b ${tone}`}>
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/80 text-xl font-extrabold text-slate-700">
                    {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                  </span>
                </div>
                <div className="px-1 pb-1 pt-4">
                  <h3 className="text-sm font-extrabold">{name}</h3>
                  <p className="text-xs text-slate-500">{role}</p>
                  <p className="mt-3 text-xs leading-5 text-slate-500">{text}</p>
                  <div className="mt-4 flex items-center gap-4 text-blue-700">
                    <Linkedin className="h-4 w-4" />
                    <Twitter className="h-4 w-4" />
                    <Github className="h-4 w-4 text-slate-800" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Label>OUR CULTURE</Label>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
                A Place to Learn, Build and Grow
              </h2>
            </div>
            <Link
              to="/career"
              className="hidden shrink-0 items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 sm:inline-flex"
            >
              Life at MUROAS <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {culture.map(({ icon: Icon, tint, title, text }) => (
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

      {/* FINAL CTA */}
      <section className="px-5 py-10 sm:px-8 lg:px-10">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 p-7 text-white sm:p-9 lg:flex-row lg:items-center">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <span className="text-[11px] font-extrabold tracking-[2px] text-blue-100">
              LET'S BUILD A SMARTER TOMORROW
            </span>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Be a Part of Our Journey</h2>
            <p className="mt-2 text-sm text-blue-100">
              We are always open to new opportunities, collaborations and talented people
              who want to create real impact through technology.
            </p>
          </div>
          <Link to="/contact" className="relative w-full shrink-0 sm:w-auto">
            <Button className="h-12 w-full rounded-md bg-white px-6 font-bold text-blue-700 hover:bg-blue-50 sm:w-auto">
              Get in Touch
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

function FoundationCard({
  icon: Icon,
  tint,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  tint: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-[0_4px_20px_rgba(15,26,53,0.06)]">
      <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${tint}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <h3 className="mb-2 text-sm font-extrabold">{title}</h3>
        {children}
      </div>
    </div>
  );
}