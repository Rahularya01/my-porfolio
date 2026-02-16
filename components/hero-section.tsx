"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "React Native",
  "Docker",
];

const stats = [
  { value: "5+", label: "Years experience" },
  { value: "50+", label: "Delivered projects" },
  { value: "98%", label: "Client satisfaction" },
];

export default function HeroSection() {
  const reduce = useReducedMotion();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-zinc-950 px-4 pb-16 pt-28 text-zinc-100 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 540px at 10% 12%, rgba(250,204,21,0.12), transparent 55%), radial-gradient(750px 460px at 92% 10%, rgba(125,211,252,0.14), transparent 50%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs tracking-wide text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for freelance and full-time roles
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-7xl">
            Building reliable products
            <span className="mt-2 block bg-gradient-to-r from-amber-300 via-yellow-300 to-sky-300 bg-clip-text text-transparent">
              that feel premium to use
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300 sm:text-xl">
            I&apos;m Rahul, a full-stack developer focused on modern web apps with
            crisp UI, clean architecture, and performance-first engineering.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="group border border-amber-300/25 bg-slate-900/80 text-slate-50 hover:bg-slate-900 hover:text-amber-200"
            >
              Start a project
              <ArrowDownRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("projects")}
              className="border-slate-600 bg-slate-900/50 text-slate-100 hover:bg-slate-900 hover:text-sky-200"
            >
              See case studies
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Social href="https://github.com/Rahularya01" label="GitHub">
              <Github size={20} />
            </Social>
            <Social
              href="https://linkedin.com/in/rahul-arya-0993841b7"
              label="LinkedIn"
            >
              <Linkedin size={20} />
            </Social>
            <Social href="mailto:aryarahul819@gmail.com" label="Email">
              <Mail size={20} />
            </Social>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-3xl border border-slate-700/50 bg-slate-950/70 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.5)] backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.16em] text-slate-400">
                Current focus
              </p>
              <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-200">
                2026
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-bold text-slate-100 sm:text-3xl">
              Product engineering
              <span className="block text-sky-200">for growth teams</span>
            </h2>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-3"
                >
                  <div className="text-2xl font-black text-amber-200">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm text-slate-300">Core toolkit</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            aria-hidden
            className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-amber-300/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-sky-300/25 blur-3xl"
          />
        </motion.div>
      </div>

      <motion.button
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.5 }}
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-slate-700/60 bg-slate-900/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-300 transition-colors hover:text-amber-200"
      >
        Scroll
      </motion.button>
    </section>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-300 transition-all hover:border-sky-300/50 hover:text-sky-200"
    >
      {children}
    </a>
  );
}
