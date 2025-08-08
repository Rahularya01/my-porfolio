"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Code, Database, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Zustand",
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Express, PostgreSQL, MongoDB",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
    ],
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
  const reduce = useReducedMotion();

  // cursor parallax (-1..1)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 140, damping: 18, mass: 0.25 });
  const sy = useSpring(my, { stiffness: 140, damping: 18, mass: 0.25 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, mx, my]);

  // background drift
  const bgX = useTransform(sx, (v) => v * 40);
  const bgY = useTransform(sy, (v) => v * 30);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-100"
    >
      {/* aurora / glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-32 blur-3xl opacity-70"
        style={{
          x: bgX,
          y: bgY,
          background:
            "radial-gradient(600px 360px at 20% 20%, rgba(254,192,12,0.10), transparent 60%), radial-gradient(600px 360px at 80% 30%, rgba(255,255,255,0.05), transparent 60%)",
        }}
      />
      {/* grain + vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,transparent,rgba(0,0,0,0.55))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            I&apos;m a passionate full-stack developer with 5+ years of
            experience building scalable web and mobile apps. I turn complex
            requirements into fast, elegant interfaces with robust backends.
          </p>
        </motion.div>

        {/* Top grid: Journey + Quick Facts */}
        <div className="mb-16 grid items-start gap-10 lg:grid-cols-2">
          {/* Journey timeline with glow rail */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-6 text-2xl font-bold">My Journey</h3>
            <div className="relative pl-6">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-yellow-400/60 via-yellow-500/30 to-transparent" />
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

          {/* Quick Facts glass card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <GlassPanel>
              <h3 className="mb-6 text-2xl font-bold">Quick Facts</h3>
              <div className="space-y-4">
                <Fact label="Experience" value="5+ Years" />
                <Fact label="Projects Completed" value="50+" />
                <Fact label="Technologies" value="20+" />
                <Fact label="Location" value="Available Worldwide" />
              </div>
            </GlassPanel>
          </motion.div>
        </div>

        {/* Skills grid — 3D tilt cards with animated border */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="mb-12 text-center text-2xl font-bold">What I Do</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, i) => (
              <TiltCard key={skill.title} delay={0.1 + i * 0.06}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10 ring-1 ring-yellow-500/20">
                    <skill.icon className="text-yellow-400" size={32} />
                  </div>
                  <h4 className="mb-2 text-xl font-semibold">{skill.title}</h4>
                  <p className="mb-4 text-zinc-400">{skill.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-900/60 px-3 py-1 text-sm text-zinc-300 ring-1 ring-inset ring-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------- Bits ------- */

function GlassPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl border border-zinc-800/70 bg-zinc-950/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur">
      {/* subtle edge glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-yellow-500/10" />
      {children}
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-zinc-800/60 bg-zinc-900/40 px-4 py-3 text-sm">
      <span className="text-zinc-400">{label}</span>
      <span className="font-medium text-zinc-100">{value}</span>
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
    <div className="group relative mb-6 pl-6 last:mb-0">
      <div className="absolute left-[-6px] top-1.5 h-3 w-3 rounded-full bg-yellow-400 ring-4 ring-yellow-500/20 transition-transform group-hover:scale-110" />
      <h4 className="mb-1 font-semibold">{title}</h4>
      <p className="text-zinc-400">{children}</p>
    </div>
  );
}

function TiltCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current!;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      el.style.transform = `rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(
        px * 8
      ).toFixed(2)}deg) translateZ(0)`;
    };
    const leave = () =>
      (el.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)");
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [reduce]);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="relative rounded-2xl p-[1px]"
    >
      {/* animated border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[conic-gradient(from_var(--a),rgba(254,192,12,0.15),transparent_35%,rgba(254,192,12,0.15))] [animation:spin_6s_linear_infinite] [--a:0deg]" />
      <style>{`@keyframes spin { to { --a: 360deg; } }`}</style>

      <div
        ref={ref}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className="relative rounded-2xl border border-zinc-800/70 bg-zinc-950/70 p-6 backdrop-blur"
      >
        {children}
      </div>
    </motion.div>
  );
}
