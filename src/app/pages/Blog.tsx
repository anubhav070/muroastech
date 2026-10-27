import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Box,
  BrainCircuit,
  Briefcase,
  Building2,
  ChartNoAxesCombined,
  Code2,
  FileText,
  Laptop,
  LayoutGrid,
  Lightbulb,
  Package,
  Sparkles,
} from "lucide-react";

import { Button } from "../components/ui/button";

/* ------------------------------ DATA ------------------------------ */

type Topic = "ai-ml" | "product" | "technology" | "business" | "case-study" | "industry";

interface Post {
  id: string; // must match the id your BlogPost page looks up
  title: string;
  excerpt: string;
  tag: string;
  topic: Topic;
  author: string;
  role?: string;
  date: string;
  readTime: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
}

// NOTE: these are the sample articles from the design. Replace them with your real articles.
const posts: Post[] = [
  {
    id: "ai-transforming-business-operations",
    title: "How AI is Transforming Real Business Operations",
    excerpt:
      "Exploring practical use cases of AI in education, healthcare, retail and MSMEs, and how businesses can implement AI safely and effectively.",
    tag: "AI & ML",
    topic: "ai-ml",
    author: "Anubhav Pratap Singh",
    role: "Founder, MUROAS",
    date: "Oct 20, 2026",
    readTime: "8 min read",
    gradient: "from-sky-400 via-blue-600 to-indigo-900",
    icon: BrainCircuit,
  },
  {
    id: "idea-to-product-development-approach",
    title: "From Idea to Product: Our Development Approach",
    excerpt: "A behind-the-scenes look at how we turn ideas into scalable software products.",
    tag: "Product Building",
    topic: "product",
    author: "MUROAS Team",
    date: "Oct 15, 2026",
    readTime: "6 min read",
    gradient: "from-slate-400 via-sky-500 to-blue-600",
    icon: Laptop,
  },
  {
    id: "case-study-ai-school-erp",
    title: "Case Study: AI-Powered School ERP",
    excerpt: "How an AI-driven school management system improved efficiency and reduced manual work.",
    tag: "Case Study",
    topic: "case-study",
    author: "MUROAS Team",
    date: "Oct 10, 2026",
    readTime: "5 min read",
    gradient: "from-blue-300 via-slate-500 to-slate-700",
    icon: Building2,
  },
  {
    id: "top-ai-trends-2026",
    title: "Top AI Trends to Watch in 2026",
    excerpt: "Key trends in artificial intelligence, machine learning and automation that will shape the next wave of innovation.",
    tag: "Technology",
    topic: "technology",
    author: "Anubhav Pratap Singh",
    date: "Oct 05, 2026",
    readTime: "7 min read",
    gradient: "from-cyan-400 via-blue-700 to-indigo-950",
    icon: Sparkles,
  },
  {
    id: "scalable-flutter-apps",
    title: "Best Practices for Building Scalable Flutter Apps",
    excerpt: "Tips and practices we follow while building high-performance Flutter applications.",
    tag: "Development",
    topic: "product",
    author: "MUROAS Team",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    gradient: "from-slate-700 via-slate-800 to-blue-900",
    icon: Code2,
  },
  {
    id: "cloud-infrastructure-ai-apps",
    title: "Cloud Infrastructure for Modern AI Applications",
    excerpt: "How we design and deploy cloud infrastructure for secure and scalable AI solutions.",
    tag: "Technology",
    topic: "technology",
    author: "Anubhav Pratap Singh",
    date: "Sep 20, 2026",
    readTime: "7 min read",
    gradient: "from-sky-400 via-blue-600 to-indigo-800",
    icon: Box,
  },
  {
    id: "msmes-use-ai-to-grow",
    title: "How MSMEs Can Use AI to Grow Faster",
    excerpt: "Practical ways small and medium businesses can use AI to improve efficiency and reach more customers.",
    tag: "Business",
    topic: "business",
    author: "MUROAS Team",
    date: "Sep 12, 2026",
    readTime: "5 min read",
    gradient: "from-emerald-300 via-teal-500 to-blue-600",
    icon: ChartNoAxesCombined,
  },
  {
    id: "beginners-guide-llms",
    title: "A Beginner's Guide to Large Language Models",
    excerpt: "A simple introduction to LLMs, their use cases and how businesses can get started.",
    tag: "Guides",
    topic: "ai-ml",
    author: "Anubhav Pratap Singh",
    date: "Sep 05, 2026",
    readTime: "6 min read",
    gradient: "from-stone-300 via-slate-400 to-slate-600",
    icon: Lightbulb,
  },
];

const heroFeatures = [
  { icon: Building2, title: "Industry Insights", text: "Trends and market updates" },
  { icon: Code2, title: "Technical Guides", text: "Learn from our expertise" },
  { icon: Briefcase, title: "Use Cases", text: "Real-world applications" },
  { icon: Package, title: "Product Updates", text: "What we're building" },
];

const filters: { key: Topic | "all"; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "all", label: "All Posts", icon: LayoutGrid },
  { key: "ai-ml", label: "AI & ML", icon: BrainCircuit },
  { key: "product", label: "Product Building", icon: Box },
  { key: "technology", label: "Technology", icon: Laptop },
  { key: "business", label: "Business & Growth", icon: ChartNoAxesCombined },
  { key: "case-study", label: "Case Studies", icon: FileText },
];

const categories: { key: Topic; label: string; icon: React.ComponentType<{ className?: string }>; tint: string }[] = [
  { key: "ai-ml", label: "AI & Machine Learning", icon: BrainCircuit, tint: "bg-blue-50 text-blue-600" },
  { key: "product", label: "Product Development", icon: Box, tint: "bg-pink-50 text-pink-500" },
  { key: "business", label: "Business & Growth", icon: ChartNoAxesCombined, tint: "bg-orange-50 text-orange-500" },
  { key: "case-study", label: "Case Studies", icon: FileText, tint: "bg-emerald-50 text-emerald-600" },
  { key: "technology", label: "Technology Trends", icon: Laptop, tint: "bg-violet-50 text-violet-600" },
  { key: "industry", label: "Industry Insights", icon: Lightbulb, tint: "bg-purple-50 text-purple-600" },
];

/* ------------------------------ PAGE ------------------------------ */

export function Blog() {
  const [active, setActive] = useState<Topic | "all">("all");
  const [email, setEmail] = useState("");

  const featured = posts[0];
  const side = posts.slice(1, 4);
  const recent = posts.slice(4, 8);
  const filtered = posts.filter((p) => p.topic === active);
  const activeLabel = filters.find((f) => f.key === active)?.label ?? categories.find((c) => c.key === active)?.label;

  const selectTopic = (key: Topic | "all") => {
    setActive(key);
    document.getElementById("articles")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to your newsletter service / backend (email state holds the value).
    console.log("Subscribe:", email);
  };

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
              INSIGHTS
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0f1a35] sm:text-5xl lg:text-[54px]">
              Ideas, Knowledge and Innovation for a{" "}
              <span className="text-blue-600">Smarter Tomorrow</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-700 sm:text-lg">
              Explore our latest articles, industry insights, technical guides and
              real-world use cases. Stay updated with AI, technology and product
              development trends.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#articles">
                <Button className="h-12 w-full rounded-md bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 sm:w-auto">
                  Explore Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#subscribe">
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-md border-blue-500 bg-white/60 px-6 font-semibold text-blue-700 hover:bg-blue-50 sm:w-auto"
                >
                  Subscribe to Updates
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

      {/* FILTER TABS */}
      <section className="px-5 py-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto rounded-xl bg-slate-100/80 p-3">
          {filters.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              aria-pressed={active === key}
              onClick={() => selectTopic(key)}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-semibold transition-colors ${
                active === key
                  ? "border border-blue-500 bg-white text-blue-700 shadow-sm"
                  : "text-slate-700 hover:bg-white/70"
              }`}
            >
              <Icon className="h-5 w-5" />
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* ARTICLES */}
      <div id="articles" className="scroll-mt-24">
        {active === "all" ? (
          <>
            {/* FEATURED */}
            <section className="py-6">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <Label>FEATURED ARTICLE</Label>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
                  Our Latest Insights
                </h2>

                <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
                  <Link
                    to={`/insights/${featured.id}`}
                    className="group rounded-xl border border-slate-100 bg-white p-3 shadow-[0_4px_20px_rgba(15,26,53,0.07)]"
                  >
                    <Thumb post={featured} className="h-56 sm:h-64" big />
                    <div className="px-2 pb-2 pt-4">
                      <h3 className="text-xl font-extrabold group-hover:text-blue-700">{featured.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{featured.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <Author post={featured} />
                        <Meta post={featured} stacked />
                      </div>
                    </div>
                  </Link>

                  <div className="space-y-4">
                    {side.map((post) => (
                      <Link
                        key={post.id}
                        to={`/insights/${post.id}`}
                        className="group flex gap-4 rounded-xl border border-slate-100 bg-white p-3 shadow-[0_4px_20px_rgba(15,26,53,0.07)]"
                      >
                        <Thumb post={post} className="h-28 w-32 shrink-0 sm:w-40" />
                        <div className="min-w-0 flex-1">
                          <Tag>{post.tag}</Tag>
                          <h3 className="mt-1.5 text-sm font-extrabold leading-snug group-hover:text-blue-700">
                            {post.title}
                          </h3>
                          <p className="mt-1 text-xs leading-4 text-slate-500">{post.excerpt}</p>
                          <div className="mt-2 flex items-center justify-between gap-2">
                            <Author post={post} small />
                            <Meta post={post} />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* CATEGORIES */}
            <section className="py-6">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <Label>POPULAR TOPICS</Label>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
                      Explore by Category
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => selectTopic("all")}
                    className="hidden shrink-0 items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 sm:inline-flex"
                  >
                    View All Articles <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                  {categories.map(({ key, label, icon: Icon, tint }) => {
                    const count = posts.filter((p) => p.topic === key).length;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => selectTopic(key)}
                        className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 text-left shadow-[0_4px_20px_rgba(15,26,53,0.06)] transition-shadow hover:shadow-lg"
                      >
                        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${tint}`}>
                          <Icon className="h-6 w-6" />
                        </span>
                        <span>
                          <span className="block text-[11px] font-extrabold leading-tight">{label}</span>
                          <span className="mt-0.5 block text-[11px] text-slate-500">
                            {count > 0 ? `${count} ${count === 1 ? "Article" : "Articles"}` : "Coming soon"}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* RECENT */}
            <section className="py-6">
              <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <Label>RECENT ARTICLES</Label>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
                      Latest from Our Blog
                    </h2>
                  </div>
                </div>
                <PostGrid items={recent} />
              </div>
            </section>
          </>
        ) : (
          <section className="py-6">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
              <Label>FILTERED ARTICLES</Label>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0f1a35] sm:text-3xl">
                {activeLabel}
              </h2>
              {filtered.length > 0 ? (
                <PostGrid items={filtered} />
              ) : (
                <p className="mt-6 rounded-xl bg-slate-50 p-6 text-sm text-slate-600">
                  No articles in this category yet. More coming soon.
                </p>
              )}
              <button
                type="button"
                onClick={() => selectTopic("all")}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
              >
                Back to all posts <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </section>
        )}
      </div>

      {/* NEWSLETTER */}
      <section id="subscribe" className="scroll-mt-24 px-5 py-10 sm:px-8 lg:px-10">
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-6 overflow-hidden rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 p-7 text-white sm:p-9 lg:flex-row lg:items-center">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-xl">
            <span className="text-[11px] font-extrabold tracking-[2px] text-blue-100">STAY UPDATED</span>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Get the Latest Insights in Your Inbox</h2>
            <p className="mt-2 text-sm text-blue-100">
              Subscribe to our newsletter for new articles, product updates and technology insights.
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="relative flex w-full max-w-lg flex-col gap-2 rounded-lg bg-white p-1.5 sm:flex-row lg:w-[480px]"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              aria-label="Email address"
              className="min-w-0 flex-1 rounded-md px-3 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
            <Button type="submit" className="h-10 rounded-md bg-blue-600 px-5 text-sm font-semibold text-white hover:bg-blue-700">
              Subscribe <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
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

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-md border border-blue-400 bg-white px-2 py-0.5 text-[10px] font-semibold text-blue-700">
      {children}
    </span>
  );
}

// Replace the gradient with <img src={post.image} className="h-full w-full object-cover" /> once you have cover images.
function Thumb({ post, className = "", big = false }: { post: Post; className?: string; big?: boolean }) {
  const Icon = post.icon;
  return (
    <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${post.gradient} ${className}`}>
      <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border border-white/20" />
      <Icon className={`absolute text-white/30 ${big ? "right-8 top-8 h-28 w-28" : "right-3 top-3 h-12 w-12"}`} />
      {big && (
        <span className="absolute -bottom-0 left-4 translate-y-1/2 rounded-md bg-blue-600 px-3 py-1 text-[11px] font-bold text-white shadow">
          {post.tag}
        </span>
      )}
    </div>
  );
}

function Initials({ name, small = false }: { name: string; small?: boolean }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 font-extrabold text-white ${
        small ? "h-6 w-6 text-[9px]" : "h-10 w-10 text-xs"
      }`}
    >
      {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
    </span>
  );
}

function Author({ post, small = false }: { post: Post; small?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2">
      <Initials name={post.author} small={small} />
      <span className="min-w-0">
        <span className={`block truncate font-bold ${small ? "text-[11px]" : "text-xs"}`}>{post.author}</span>
        {post.role && <span className="block text-[11px] text-slate-500">{post.role}</span>}
      </span>
    </span>
  );
}

function Meta({ post, stacked = false }: { post: Post; stacked?: boolean }) {
  return (
    <span className={`shrink-0 text-[11px] text-slate-500 ${stacked ? "text-right" : "text-right"}`}>
      <span className="block">{post.date}</span>
      <span className="block">{post.readTime}</span>
    </span>
  );
}

function PostGrid({ items }: { items: Post[] }) {
  return (
    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((post) => (
        <Link
          key={post.id}
          to={`/insights/${post.id}`}
          className="group flex flex-col rounded-xl border border-slate-100 bg-white p-3 shadow-[0_4px_20px_rgba(15,26,53,0.07)] transition-shadow hover:shadow-lg"
        >
          <div className={`relative h-28 overflow-hidden rounded-lg bg-gradient-to-br ${post.gradient}`}>
            <post.icon className="absolute right-3 top-3 h-12 w-12 text-white/30" />
            <span className="absolute bottom-2 left-2 rounded-md bg-blue-600/90 px-2.5 py-1 text-[10px] font-bold text-white">
              {post.tag}
            </span>
          </div>
          <div className="flex flex-1 flex-col px-1 pb-1 pt-3">
            <h3 className="text-sm font-extrabold leading-snug group-hover:text-blue-700">{post.title}</h3>
            <p className="mt-2 flex-1 text-xs leading-5 text-slate-500">{post.excerpt}</p>
            <div className="mt-3 flex items-center justify-between gap-2">
              <Author post={post} small />
              <Meta post={post} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[580px] pb-6 pt-16 lg:pt-20">
      <div className="absolute inset-10 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute right-0 top-0 z-20 flex items-center gap-3 rounded-xl bg-white/95 px-3 py-2.5 shadow-xl">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-50 text-indigo-600">
          <ChartNoAxesCombined className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-bold leading-tight">Knowledge Drives Innovation</p>
          <p className="text-[10px] text-slate-500">Stay ahead with the latest in technology.</p>
        </div>
      </div>

      {/* laptop */}
      <div className="relative mr-16 rounded-xl border-[6px] border-slate-800 bg-white p-2 shadow-2xl shadow-blue-900/20 sm:mr-24">
        <div className="grid grid-cols-[48px_1fr] gap-2 sm:grid-cols-[62px_1fr]">
          <div className="space-y-1.5 rounded-md bg-[#0f1a35] p-2 text-[8px] text-white/60">
            <div className="mb-2 font-bold text-white">MUROAS</div>
            {["Overview", "Articles", "Topics", "Saved", "Settings"].map((item, i) => (
              <div key={item} className={`rounded px-1.5 py-1 ${i === 0 ? "bg-blue-600 text-white" : ""}`}>
                {item}
              </div>
            ))}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-extrabold">Insights</p>
            <p className="mt-1 text-[8px] font-bold text-slate-600">Latest Articles</p>
            <div className="mt-1 grid grid-cols-3 gap-1.5">
              {["from-blue-500 to-indigo-700", "from-sky-400 to-blue-700", "from-slate-400 to-slate-700"].map((g) => (
                <div key={g} className="rounded-md border border-slate-100 p-1">
                  <div className={`h-10 rounded bg-gradient-to-br ${g}`} />
                  <div className="mt-1 h-1.5 rounded bg-slate-200" />
                  <div className="mt-1 h-1.5 w-2/3 rounded bg-slate-100" />
                </div>
              ))}
            </div>
            <div className="mt-2 space-y-1">
              <div className="h-2 rounded bg-slate-100" />
              <div className="h-2 w-4/5 rounded bg-slate-100" />
              <div className="h-2 w-3/5 rounded bg-slate-100" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto -mt-0.5 mr-12 h-2 rounded-b-xl bg-slate-300 sm:mr-20" />

      {/* books */}
      <div className="absolute -right-2 bottom-6 z-10 w-[150px] space-y-1.5 sm:w-[190px]">
        {[
          ["Artificial Intelligence", "bg-indigo-900"],
          ["Product Development", "bg-blue-800"],
          ["Technology Trends", "bg-slate-800"],
        ].map(([t, c], i) => (
          <div
            key={t}
            className={`rounded-md px-3 py-2.5 text-[10px] font-bold text-white shadow-lg ${c}`}
            style={{ marginLeft: `${i % 2 === 0 ? 0 : 14}px` }}
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}