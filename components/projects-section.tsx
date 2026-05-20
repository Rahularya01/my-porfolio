"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Container from "@/components/ui/container";

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
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "MongoDB"],
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

  return (
    <section id="projects" className="relative py-32 overflow-hidden selection:bg-white/20">
      {/* Dynamic Background Light */}
      <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.03)_0%,transparent_70%)] blur-[90px] pointer-events-none" />

      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 font-light">
            Modern, scalable builds focused on performance, UX, and maintainability.
          </p>
        </div>

        <div className="mx-auto mb-16 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                active === c
                  ? "bg-white text-black shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
                  : "bg-white/5 border border-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((p, index) => {
            // Create a staggered layout on medium screens and larger
            const isWide = index % 3 === 0 && active === "All";
            return (
              <ProjectCard
                key={p.title}
                p={p}
                className={isWide ? "md:col-span-2" : ""}
              />
            );
          })}
        </div>

        <div className="mt-24 glass-card rounded-[2.5rem] p-10 text-center sm:p-16">
          <h3 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Got an ambitious idea?
          </h3>
          <p className="mb-8 text-lg text-zinc-400 font-light">
            Let&apos;s build something fast, beautiful, and reliable.
          </p>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          >
            Get In Touch
          </button>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({
  p,
  className = "",
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
  className?: string;
}) {
  const open = (url?: string) => url && window.open(url, "_blank");

  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] glass-card glass-card-hover flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="border-b border-white/[0.05] bg-white/[0.01] p-8 flex items-center justify-between">
          <h3 className="font-display text-2xl font-bold text-white">{p.title}</h3>
          <span className="rounded-full border border-white/[0.08] bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-400">
            {p.category}
          </span>
        </div>

        <div className="p-8">
          <p className="mb-8 text-sm leading-relaxed text-zinc-400 font-light">
            {p.description}
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-3 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                Key Features
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-white/5 border border-white/[0.05] px-3 py-1 text-[11px] text-zinc-300 font-mono"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {p.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/[0.05] bg-white/[0.02] px-3 py-1 text-[11px] text-zinc-300 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 pt-4 flex flex-wrap items-center gap-3 border-t border-white/[0.05]">
        {p.liveUrl && (
          <button
            onClick={() => open(p.liveUrl)}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(255,255,255,0.15)]"
          >
            <ExternalLink size={14} />
            Visit Live
          </button>
        )}
        {p.githubUrl && (
          <button
            onClick={() => open(p.githubUrl)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-2.5 text-xs font-medium text-zinc-300 transition-all hover:bg-white/5 hover:border-white/20"
          >
            <Github size={14} />
            Source Code
          </button>
        )}
      </div>
    </div>
  );
}
