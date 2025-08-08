/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const reduce = useReducedMotion();

  // Cursor → smoothed -1..1
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 140, damping: 18, mass: 0.2 });
  const sy = useSpring(my, { stiffness: 140, damping: 18, mass: 0.2 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, mx, my]);

  // Scroll parallax
  const { scrollYProgress } = useScroll();
  const layerSlow = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const layerMid = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const layerFast = useTransform(scrollYProgress, [0, 1], [0, 24]);

  // Mouse parallax
  const p1x = useTransform(sx, (v) => v * 30);
  const p1y = useTransform(sy, (v) => v * 30);
  const p2x = useTransform(sx, (v) => v * -20);
  const p2y = useTransform(sy, (v) => v * -18);
  const titleX = useTransform(sx, (v) => v * -6);
  const titleY = useTransform(sy, (v) => v * -4);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 text-zinc-100"
    >
      {/* BACKGROUND: nebula layers */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ y: layerSlow }}
      >
        {/* deep glow */}
        <motion.div
          className="absolute -top-40 -left-40 h-[60vh] w-[60vw] blur-3xl opacity-60"
          style={{
            x: p1x,
            y: p1y,
            background:
              "radial-gradient(closest-side, rgba(254,192,12,0.10), rgba(255,255,255,0.03), transparent 70%)",
          }}
        />
        {/* aurora ribbon */}
        <motion.div
          className="absolute right-[-20vw] top-[-10vh] h-[120vh] w-[80vw] blur-3xl opacity-40"
          style={{
            x: p2x,
            y: p2y,
            background:
              "conic-gradient(from 220deg at 50% 50%, rgba(254,192,12,0.10), rgba(255,255,255,0.05), rgba(254,192,12,0.10))",
          }}
        />
        {/* faint vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,transparent,rgba(0,0,0,0.5))]" />
        {/* subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
          }}
        />
      </motion.div>

      {/* CURSOR SPOTLIGHT */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-32 blur-2xl"
        style={{
          x: useTransform(sx, (v) => v * 120),
          y: useTransform(sy, (v) => v * 90),
          background:
            "radial-gradient(450px 280px at 50% 50%, rgba(254,192,12,0.14), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />

      {/* CONTENT GRID */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        {/* LEFT: copy */}
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800/70 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-300 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/80" />
            India • Remote • Available
          </motion.div>

          <motion.h1
            className="mt-5 font-black leading-[1.05]"
            style={{ x: titleX, y: titleY }}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <span className="block text-4xl sm:text-5xl lg:text-7xl">
              I build fast, elegant products
            </span>
            <span className="relative mt-2 block text-3xl sm:text-4xl lg:text-6xl">
              with <Wordmark>Next.js</Wordmark> & <Wordmark>Node</Wordmark>
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-zinc-400"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            I’m Rahul — Full-Stack Developer focused on performance, developer
            experience, and motion. Let’s turn your idea into something people
            actually enjoy using.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-col gap-3 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Magnetic>
              <Button
                onClick={() => scrollTo("contact")}
                size="lg"
                className="group relative border border-yellow-500/20 bg-zinc-900/70 text-zinc-50 hover:bg-zinc-900 hover:text-yellow-300"
              >
                <span className="relative z-10">Let’s talk</span>
                <span className="pointer-events-none absolute inset-0 rounded-md bg-yellow-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                onClick={() => scrollTo("projects")}
                size="lg"
                variant="outline"
                className="border-zinc-700 bg-zinc-900/40 text-zinc-100 hover:bg-zinc-900 hover:text-yellow-300"
              >
                View projects
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-5"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
          >
            <Social href="https://github.com/Rahularya01" label="GitHub">
              <Github size={22} />
            </Social>
            <Social
              href="https://linkedin.com/in/rahul-arya-0993841b7"
              label="LinkedIn"
            >
              <Linkedin size={22} />
            </Social>
            <Social href="mailto:aryarahul819@gmail.com" label="Email">
              <Mail size={22} />
            </Social>
          </motion.div>
        </div>

        {/* RIGHT: floating chips panel */}
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <Panel />
        </motion.div>
      </div>

      {/* marquee-ish ticker for motion balance */}
      <Ticker
        items={[
          "Next.js",
          "TypeScript",
          "React",
          "Node.js",
          "PostgreSQL",
          "MongoDB",
          "Tailwind",
          "Docker",
          "RabbitMQ",
          "R3F (optional)",
        ]}
        y={layerMid}
      />

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About"
        className="group absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-yellow-300 transition-colors"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        style={{ y: layerFast }}
      >
        <ChevronDown className="size-8 animate-bounce group-hover:translate-y-1 transition-transform" />
      </motion.button>
    </section>
  );
}

/* ---------- Bits ---------- */

function Wordmark({ children }: { children: React.ReactNode }) {
  // glossy gradient + moving highlight
  return (
    <span className="relative inline-block bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [mask:linear-gradient(115deg,transparent,white,transparent)]"
        style={{
          background:
            "linear-gradient(115deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 65%)",
        }}
      />
    </span>
  );
}

function Magnetic({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const el = ref.current!;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${mx * 0.08}px, ${my * 0.08}px, 0)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = "translate3d(0,0,0)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <div ref={ref} className="inline-block will-change-transform">
      {children}
    </div>
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
      className="group relative rounded-full p-2 text-zinc-400 transition-colors hover:text-yellow-300"
    >
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-yellow-500/0 blur-lg transition-opacity group-hover:opacity-40" />
      {children}
    </a>
  );
}

function Panel() {
  // Glass panel with floating chips (parallax drift)
  return (
    <div className="relative aspect-[5/6] w-full select-none">
      <div className="absolute inset-0 -rotate-1 rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 ring-1 ring-zinc-800/70" />
      <div className="relative z-10 h-full rounded-3xl border border-zinc-800/60 bg-zinc-950/80 p-6 backdrop-blur">
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="text-sm text-zinc-400">Portfolio</div>
            <div className="mt-1 text-3xl font-black tracking-tight text-zinc-100">
              Rahul.dev
            </div>
            <div className="mt-1 text-zinc-400">
              Full-Stack • React • Next.js
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              "API Design",
              "Animations",
              "Perf",
              "DX",
              "Microservices",
              "Testing",
            ].map((t, i) => (
              <FloatingChip key={t} i={i}>
                {t}
              </FloatingChip>
            ))}
          </div>
        </div>
      </div>
      {/* floating lights */}
      <motion.div
        aria-hidden
        className="absolute -left-6 top-10 h-28 w-28 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(254,192,12,0.22), transparent 60%)",
        }}
        initial={{ opacity: 0.6, y: 8 }}
        animate={{ opacity: 0.9, y: -8 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 3.2 }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-4 bottom-6 h-32 w-32 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(254,192,12,0.16), transparent 60%)",
        }}
        initial={{ opacity: 0.5, y: -6 }}
        animate={{ opacity: 0.85, y: 6 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 2.6 }}
      />
    </div>
  );
}

function FloatingChip({
  children,
  i,
}: {
  children: React.ReactNode;
  i: number;
}) {
  return (
    <motion.div
      className="rounded-lg border border-zinc-800/60 bg-zinc-900/40 px-3 py-2 text-sm text-zinc-300"
      initial={{ y: 0, opacity: 0.95 }}
      animate={{ y: [0, -6, 0], opacity: [0.95, 1, 0.95] }}
      transition={{
        duration: 3 + (i % 3) * 0.4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: i * 0.15,
      }}
    >
      {children}
    </motion.div>
  );
}

function Ticker({ items, y }: { items: string[]; y: any }) {
  return (
    <motion.div className="relative z-10 mt-14" style={{ y }}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950" />
      <div className="overflow-hidden whitespace-nowrap py-3 text-zinc-500">
        <div className="animate-[ticker_22s_linear_infinite] inline-block">
          {items.concat(items).map((t, i) => (
            <span key={i} className="mx-6 text-sm tracking-wider">
              • {t}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </motion.div>
  );
}
