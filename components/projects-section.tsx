"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Uptechunt Freelance Platform",
    description:
      "Production-grade freelance platform with auth, jobs, messaging, and realtime updates.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
    features: ["Realtime Chat", "RBAC", "SSG & SSR", "Responsive"],
    liveUrl: "https://uptechunt.com",
    category: "Full Stack",
  },
  {
    title: "PRP Job Search Platform",
    description:
      "Jobs platform connecting professionals with employers across Australia.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Firebase"],
    features: ["Job Listings", "Employer Panel", "Secure Auth", "Responsive"],
    liveUrl: "https://propertyrecruitmentpartners.com.au/",
    category: "Full Stack",
  },
  {
    title: "Temp Elite Healthcare Hiring",
    description:
      "Staffing dashboard for hospitals/clinics with live order tracking and admin panel.",
    technologies: ["React", "Express.js", "MongoDB", "REST API"],
    features: ["Admin Dashboard", "Live Tracking", "Maps", "Auth"],
    liveUrl: "https://www.tempelite.com/",
    category: "Full Stack",
  },
  {
    title: "Repsen – AI Startup Assistant",
    description:
      "AI assistant for launch kits, PR, emails, and social content. Built for speed.",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Tailwind CSS",
      "MongoDB",
    ],
    features: ["AI Kits", "Blocks Editor", "Dashboard", "Tone Rewriting"],
    liveUrl: "https://repsen.io",
    category: "AI SaaS",
  },
  {
    title: "Antef – Solution Platform",
    description:
      "Company site for a digital solutions provider with services and contact flows.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Company Pages", "Service CTAs", "Forms", "Responsive"],
    liveUrl: "https://www.antef.in/",
    category: "Web App",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal site with smooth motion, dark mode, and SEO best practices.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    features: ["Dark Mode", "Animations", "SEO", "Mobile First"],
    githubUrl: "https://github.com/Rahularya01/my-porfolio",
    category: "Frontend",
  },
];

export default function ProjectsSection() {
  const reduce = useReducedMotion();
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  // background micro-aurora (no perf hit)
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-100"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-40 blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(700px 400px at 15% 15%, rgba(254,192,12,0.10), transparent 60%), radial-gradient(700px 400px at 85% 25%, rgba(255,255,255,0.05), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-zinc-400">
            Modern, scalable builds focused on performance, UX, and
            maintainability.
          </p>
        </motion.div>

        {/* Filter bar */}
        <FilterBar
          categories={categories}
          active={active}
          onChange={setActive}
        />

        {/* Grid */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid gap-8 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} p={p} delay={i * 0.04} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 rounded-2xl border border-yellow-500/20 bg-zinc-950/70 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur"
        >
          <h3 className="mb-2 text-xl font-bold">Got an ambitious idea?</h3>
          <p className="mb-4 text-zinc-400">
            Let’s build something fast, beautiful, and reliable.
          </p>
          <Button className="border border-yellow-500/20 bg-zinc-900/70 text-zinc-50 hover:bg-zinc-900 hover:text-yellow-300">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Components ---------------- */

function FilterBar({
  categories,
  active,
  onChange,
}: {
  categories: string[];
  active: string;
  onChange: (c: string) => void;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative flex items-center gap-1 rounded-xl bg-zinc-950/50 p-1 ring-1 ring-inset ring-zinc-800/70 backdrop-blur">
        {categories.map((c) => {
          const selected = active === c;
          return (
            <motion.button
              key={c}
              onClick={() => onChange(c)}
              className={`relative whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                selected
                  ? "text-yellow-300"
                  : "text-zinc-300 hover:text-yellow-300"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-b from-yellow-500/20 to-yellow-500/10 ring-1 ring-inset ring-yellow-500/25 shadow-[0_6px_18px_rgba(234,179,8,0.18)]"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              {c}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function ProjectCard({
  p,
  delay = 0,
}: {
  p: {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    liveUrl?: string;
    githubUrl?: string;
    category: string;
  };
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  // micro 3D + glow
  useEffect(() => {
    if (reduce) return;
    const el = ref.current!;
    const g = glow.current!;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      el.style.transform = `rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(
        px * 10
      ).toFixed(2)}deg) translateZ(0)`;
      g.style.opacity = "1";
      g.style.left = `${((px + 1) / 2) * 100}%`;
      g.style.top = `${((py + 1) / 2) * 100}%`;
    };
    const onLeave = () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
      g.style.opacity = "0";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce]);

  const open = (url?: string) => url && window.open(url, "_blank");

  return (
    <motion.div
      layout
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay }}
      className="relative rounded-2xl p-[1px]"
    >
      {/* animated conic border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[conic-gradient(from_var(--a),rgba(254,192,12,0.18),transparent_35%,rgba(254,192,12,0.18))] [animation:spin_6s_linear_infinite] [--a:0deg]" />
      <style>{`@keyframes spin { to { --a: 360deg; } }`}</style>

      <div
        ref={ref}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className="relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/70 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur"
      >
        {/* mouse glow */}
        <span
          ref={glow}
          aria-hidden
          className="pointer-events-none absolute h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-2xl opacity-0 transition-opacity"
          style={{ left: "50%", top: "50%" }}
        />

        {/* header */}
        <div className="relative border-b border-zinc-800/60 bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-transparent p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
              {p.category}
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10 ring-1 ring-yellow-500/20">
              <div className="h-4 w-4 rounded-md bg-yellow-500/40" />
            </div>
          </div>
          <h3 className="text-xl font-bold">{p.title}</h3>
        </div>

        {/* body */}
        <div className="p-6">
          <p className="mb-6 text-sm leading-relaxed text-zinc-400">
            {p.description}
          </p>

          <Section title="Key Features">
            {p.features.map((f) => (
              <Badge key={f} tone="neutral">
                {f}
              </Badge>
            ))}
          </Section>

          <Section title="Technologies">
            {p.technologies.map((t) => (
              <Badge key={t} tone="yellow">
                {t}
              </Badge>
            ))}
          </Section>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {p.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => open(p.liveUrl)}
                className="flex items-center gap-2 border-yellow-500/20 bg-zinc-900/70 text-zinc-50 hover:bg-zinc-900 hover:text-yellow-300"
              >
                <ExternalLink size={14} />
                Live
              </Button>
            )}
            {p.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => open(p.githubUrl)}
                className="flex items-center gap-2 border-zinc-700 bg-zinc-900/40 text-zinc-100 hover:bg-zinc-900 hover:text-yellow-300"
              >
                <Github size={14} />
                Source
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h4 className="mb-3 text-sm font-semibold text-zinc-100">{title}</h4>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "yellow";
}) {
  const styles =
    tone === "yellow"
      ? "bg-yellow-500/10 text-yellow-300 ring-yellow-500/20"
      : "bg-zinc-900/60 text-zinc-300 ring-zinc-800";
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs ring-1 ring-inset ${styles}`}
    >
      {children}
    </span>
  );
}
