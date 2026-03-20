"use client";

import { Code, Database, Smartphone, Zap } from "lucide-react";
import { motion } from "framer-motion";
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
    <section id="about" className="bg-white py-32 selection:bg-black/10 selection:text-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 font-display text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl">
            About Me
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl font-light leading-relaxed text-zinc-500">
            I&apos;m a passionate full-stack developer with 5+ years of
            experience building scalable web and mobile apps. I turn complex
            requirements into fast, elegant interfaces with robust backends.
          </p>
        </motion.div>

        <div className="mb-24 grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-8 font-display text-2xl font-medium text-zinc-900">My Journey</h3>
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 h-full w-px bg-zinc-200" />
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 sm:p-10"
          >
            <h3 className="mb-8 font-display text-2xl font-medium text-zinc-900">Quick Facts</h3>
            <div className="space-y-4">
              <Fact label="Experience" value="5+ Years" />
              <Fact label="Projects Completed" value="50+" />
              <Fact label="Technologies" value="20+" />
              <Fact label="Location" value="Available Worldwide" />
            </div>
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center font-display text-2xl font-medium text-zinc-900"
          >
            What I Do
          </motion.h3>
          <div className="grid gap-8 md:grid-cols-2">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-[2.5rem] border border-zinc-200 bg-white p-10 transition-all hover:border-zinc-300 hover:bg-zinc-50"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-zinc-900 transition-transform group-hover:scale-110">
                    <skill.icon className="text-white" size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="mb-4 font-display text-2xl font-medium text-zinc-900">
                      {skill.title}
                    </h4>
                    <p className="mb-6 text-base font-light leading-relaxed text-zinc-500">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-600 transition-colors group-hover:bg-zinc-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-4">
      <span className="text-sm font-light text-zinc-500">{label}</span>
      <span className="text-sm font-medium text-zinc-900">{value}</span>
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
    <div className="relative mb-10 pl-6 last:mb-0">
      <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-zinc-900" />
      <div className="absolute left-[-8px] top-1 h-4 w-4 rounded-full bg-zinc-900/10 animate-pulse" />
      <h4 className="mb-2 font-display text-lg font-medium text-zinc-900">{title}</h4>
      <p className="text-base font-light leading-relaxed text-zinc-500">{children}</p>
    </div>
  );
}
