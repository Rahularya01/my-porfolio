"use client";

import { Code, Database, Smartphone, Zap } from "lucide-react";
import Container from "@/components/ui/container";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Zustand"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Nest.js, Node.js, Express, PostgreSQL, MongoDB",
    technologies: ["Nest.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Expo, PWAs",
    technologies: ["React Native", "Expo", "PWA", "Flutter", "Firebase"],
  },
  {
    icon: Zap,
    title: "Cloud & DevOps",
    description: "AWS, Vercel, CI/CD, Docker",
    technologies: ["AWS", "Vercel", "Docker", "CI/CD", "Git"],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden selection:bg-white/20">
      {/* Subtle section transition background light */}
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.03)_0%,transparent_70%)] blur-[80px] pointer-events-none" />

      <Container>
        <div className="mb-20">
          <h2 className="mb-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            About Me
          </h2>
          <p className="max-w-2xl text-lg md:text-xl font-light leading-relaxed text-zinc-400">
            I turn complex requirements into fast, elegant interfaces with robust backends, bringing precision and design craft to every line of code.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Bento Card 1: My Journey (Timeline) */}
          <div className="lg:col-span-2 glass-card rounded-[2rem] p-8 sm:p-10">
            <h3 className="mb-8 font-display text-2xl font-bold text-white">My Journey</h3>
            <div className="relative pl-8 space-y-8">
              <div className="absolute left-[3px] top-2 h-[calc(100%-16px)] w-px bg-white/10" />
              <TimelineItem title="From curiosity to craft">
                I began exploring modern JavaScript frameworks and shipped 50+
                projects across marketplaces, SaaS dashboards, and mobile apps.
              </TimelineItem>
              <TimelineItem title="Leading frontends, shipping mobile">
                Drove Core Web Vitals wins, delivered React Native apps, and
                collaborated with agile teams to translate business needs into
                scalable code.
              </TimelineItem>
              <TimelineItem title="Relentless refinement">
                Open-source, R&D, and polishing code for clarity, performance,
                and DX. My goal: experiences that delight users and move the
                business.
              </TimelineItem>
            </div>
          </div>

          {/* Bento Card 2: Quick Facts */}
          <div className="glass-card rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="mb-8 font-display text-2xl font-bold text-white">Quick Facts</h3>
              <div className="space-y-4">
                <Fact label="Experience" value="5+ Years" />
                <Fact label="Projects Completed" value="50+" />
                <Fact label="Technologies" value="20+" />
                <Fact label="Location" value="Remote / Global" />
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-zinc-500 font-mono">
              // Available for immediate onboarding
            </div>
          </div>

          {/* Bento Card 3: What I Do (Skills overview) */}
          <div className="lg:col-span-3 grid gap-6 md:grid-cols-2 mt-6">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="group glass-card glass-card-hover rounded-[2rem] p-8 sm:p-10"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-transform group-hover:scale-110">
                    <skill.icon className="text-white" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="mb-3 font-display text-xl font-bold text-white">
                      {skill.title}
                    </h4>
                    <p className="mb-6 text-sm font-light leading-relaxed text-zinc-400">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/5 border border-white/[0.05] px-3 py-1 text-xs text-zinc-300 font-mono transition-colors group-hover:bg-white/10 group-hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/[0.05] bg-white/[0.01] px-5 py-4">
      <span className="text-sm font-light text-zinc-400">{label}</span>
      <span className="text-sm font-bold text-white font-mono">{value}</span>
    </div>
  );
}

function TimelineItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pl-6 last:mb-0">
      <div className="absolute left-[-32px] top-1.5 h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      <h4 className="mb-1 font-display text-lg font-bold text-white">{title}</h4>
      <p className="text-sm font-light leading-relaxed text-zinc-400">{children}</p>
    </div>
  );
}
