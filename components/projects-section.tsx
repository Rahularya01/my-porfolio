"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
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
    <section id="projects" className="bg-white py-32 selection:bg-black/10 selection:text-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-500">
            Modern, scalable builds focused on performance, UX, and
            maintainability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mb-16 flex flex-wrap items-center justify-center gap-2"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "bg-zinc-900 text-white"
                  : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900"
              }`}
            >
              {c}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2"
        >
          {filtered.map((p, index) => (
            <ProjectCard key={p.title} p={p} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-10 text-center sm:p-16"
        >
          <h3 className="mb-4 font-display text-3xl font-medium text-zinc-900 sm:text-4xl">
            Got an ambitious idea?
          </h3>
          <p className="mb-8 text-lg text-zinc-500">
            Let&apos;s build something fast, beautiful, and reliable.
          </p>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full bg-zinc-900 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-black hover:scale-105 active:scale-95"
          >
            Get In Touch
          </button>
        </motion.div>
      </Container>
    </section>
  );
}

function ProjectCard({
  p,
  index,
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
  index: number;
}) {
  const open = (url?: string) => url && window.open(url, "_blank");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white transition-all hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50"
    >
      <div className="border-b border-zinc-100 bg-zinc-50 p-8 transition-colors group-hover:bg-zinc-100/50">
        <div className="mb-4 flex items-center justify-between">
          <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600">
            {p.category}
          </span>
        </div>
        <h3 className="font-display text-2xl font-medium text-zinc-900">{p.title}</h3>
      </div>

      <div className="p-8">
        <p className="mb-8 text-base leading-relaxed text-zinc-500">
          {p.description}
        </p>

        <div className="mb-8">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Key Features
          </h4>
          <div className="flex flex-wrap gap-2">
            {p.features.map((f) => (
              <span
                key={f}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {p.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-100">
          {p.liveUrl && (
            <button
              onClick={() => open(p.liveUrl)}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-xs font-medium text-white transition-all hover:bg-black"
            >
              <ExternalLink size={16} />
              Visit Live
            </button>
          )}
          {p.githubUrl && (
            <button
              onClick={() => open(p.githubUrl)}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-transparent px-5 py-2.5 text-xs font-medium text-zinc-900 transition-all hover:bg-zinc-50"
            >
              <Github size={16} />
              Source Code
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
