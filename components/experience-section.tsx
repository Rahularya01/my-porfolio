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
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Sticky Cards",
    position: "Full Stack Developer",
    period: "Aug 2025 – Present",
    location: "Remote",
    description: [
      "Built and scaled a loyalty platform using Next.js, React, and Node.js with server-side rendering and efficient routing.",
      "Integrated Firebase and AWS for real-time messaging, secure authentication, and cloud storage.",
      "Designed responsive, mobile-friendly UIs using TailwindCSS with performance optimizations for Core Web Vitals.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Firebase",
      "AWS",
      "TailwindCSS",
    ],
  },
  {
    company: "Uptechunt",
    position: "Full Stack Developer",
    period: "Feb 2023 – Present",
    location: "Remote",
    description: [
      "Built and scaled a freelance platform using Next.js, React, and Node.js with server-side rendering and efficient routing.",
      "Integrated Firebase and AWS for real-time messaging, secure authentication, and cloud storage.",
      "Designed responsive, mobile-friendly UIs using TailwindCSS with performance optimizations for Core Web Vitals.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Firebase",
      "AWS",
      "TailwindCSS",
    ],
  },
  {
    company: "Cercling",
    position: "Senior Front-End Developer",
    period: "Jan 2022 – Jan 2023",
    location: "Remote",
    description: [
      "Led front-end development for a SaaS analytics dashboard using React and Next.js.",
      "Collaborated with product managers to deliver user-centric features, boosting retention by 30%.",
      "Improved application speed and SEO through code-splitting and advanced optimizations.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Vercel"],
  },
  {
    company: "Freelance Projects",
    position: "React/React Native Developer",
    period: "May 2020 – Dec 2021",
    location: "Remote",
    description: [
      "Delivered 10+ responsive web and mobile apps across healthcare, e-commerce, and education sectors.",
      "Built cross-platform mobile apps with React Native and deployed on Play Store and App Store.",
      "Managed the entire development lifecycle including wireframing, coding, testing, and deployment.",
    ],
    technologies: ["React", "React Native", "Expo", "Firebase", "MongoDB"],
  },
  {
    company: "Dippers Logistics",
    position: "Full Stack Developer",
    period: "Jul 2019 – Apr 2020",
    location: "Gurgaon, HR",
    description: [
      "Developed logistic dashboards using React and Express for real-time tracking and delivery insights.",
      "Integrated REST APIs and Google Maps for dynamic order visualization.",
      "Collaborated with teams to convert logistics workflows into scalable interfaces and backend services.",
    ],
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "REST API",
      "Google Maps API",
    ],
  },
];

export default function ExperienceSection() {
  const reduce = useReducedMotion();

  // mouse parallax (-1..1)
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

  // scroll-linked glow
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowX = useTransform(sx, (v) => `${50 + v * 8}%`); // slight mouse drift

  return (
    <section
      id="experience"
      className="relative bg-zinc-950 py-24 text-zinc-100 overflow-hidden"
    >
      {/* Background aurora + grain */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-40 blur-3xl opacity-70"
        style={{
          x: useTransform(sx, (v) => v * 40),
          y: useTransform(sy, (v) => v * 30),
          background:
            "radial-gradient(700px 380px at 20% 20%, rgba(254,192,12,0.10), transparent 60%), radial-gradient(700px 380px at 80% 30%, rgba(255,255,255,0.05), transparent 60%)",
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
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            A journey through my professional growth and the impact I&apos;ve
            made at various organizations.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Central rail */}
          <div className="pointer-events-none absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-px bg-zinc-800/70" />
          {/* Rail glow that scrolls & follows mouse a bit */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute top-0 h-28 w-40 -translate-x-1/2 rounded-full blur-2xl"
            style={{
              left: glowX,
              y: glowY,
              background:
                "radial-gradient(120px 60px at 50% 50%, rgba(254,192,12,0.18), transparent 70%)",
            }}
          />

          <div className="space-y-14">
            {experiences.map((exp, i) => {
              const flip = i % 2 !== 0;
              return (
                <motion.div
                  key={exp.company + i}
                  initial={reduce ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative flex items-stretch ${flip ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2">
                    <motion.span
                      className="block h-3 w-3 rounded-full bg-yellow-400 ring-4 ring-yellow-500/20 shadow-[0_0_0_2px_rgba(255,255,255,0.05)]"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${flip ? "md:pl-12" : "md:pr-12"}`}
                  >
                    <TiltCard>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="mb-1 text-xl font-bold">
                            {exp.position}
                          </h3>
                          <div className="mb-2 flex items-center font-semibold text-yellow-300">
                            <Building2 size={16} className="mr-2" />
                            {exp.company}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                            <span className="inline-flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {exp.period}
                            </span>
                            <span className="inline-flex items-center">
                              <MapPin size={14} className="mr-1" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <ul className="mb-4 mt-4 space-y-2">
                        {exp.description.map((d, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-zinc-300"
                          >
                            <span className="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                            {d}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-300 ring-1 ring-inset ring-yellow-500/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </TiltCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Bits ---------- */

function TiltCard({ children }: { children: React.ReactNode }) {
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
    <div className="relative rounded-2xl p-[1px]">
      {/* animated border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[conic-gradient(from_var(--a),rgba(254,192,12,0.15),transparent_35%,rgba(254,192,12,0.15))] [animation:spin_6s_linear_infinite] [--a:0deg]" />
      <style>{`@keyframes spin { to { --a: 360deg; } }`}</style>

      <div
        ref={ref}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className="relative rounded-2xl border border-zinc-800/70 bg-zinc-950/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur"
      >
        {children}
      </div>
    </div>
  );
}
