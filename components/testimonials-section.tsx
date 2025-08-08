"use client";

import { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Manmohan Yadav",
    position: "Founder",
    company: "Confidential",
    image: "/api/placeholder/60/60",
    rating: 5,
    testimonial:
      "I had a great experience working with Rahul on a project involving Next.js, Node.js, TypeScript, and Tailwind CSS. He was professional, responsive, and delivered high-quality work throughout. Rahul understood requirements clearly and implemented features efficiently with clean, scalable code. Communication was smooth and deadlines were met. Highly recommended!",
    project: "Full Stack Web App",
  },
  {
    name: "Jakub",
    position: "CTO",
    company: "Stealth Startup",
    image: "/api/placeholder/60/60",
    rating: 5,
    testimonial:
      "I had a pleasant experience working with Rahul. He managed to deliver the work within a few days without any mistakes. Would love to collaborate again!",
    project: "Web Platform Optimization",
  },
  {
    name: "Ahmed",
    position: "Technical Lead",
    company: "GlobalTech",
    image: "/api/placeholder/60/60",
    rating: 5,
    testimonial:
      "The project was completed professionally by Rahul and ahead of schedule. His skill and knowledge in development are truly impressive.",
    project: "Dashboard Development",
  },
  {
    name: "Jack",
    position: "Product Owner",
    company: "Freelance Client",
    image: "/api/placeholder/60/60",
    rating: 5,
    testimonial:
      "Rahul is very kind and completed the project successfully. He responded immediately to all my messages and never caused delays. He's a great person to work with. Thank you!",
    project: "Landing Page Build",
  },
  {
    name: "Gari",
    position: "Business Consultant",
    company: "US Based Client",
    image: "/api/placeholder/60/60",
    rating: 5,
    testimonial:
      "Rahul is a gem! His attention to detail and commitment to the project were outstanding. He handled all feedback with professionalism and delivered everything as promised. Would definitely work again!",
    project: "Custom Admin Panel",
  },
  {
    name: "Sophia Lee",
    position: "UX Lead",
    company: "DesignMotion",
    image: "/api/placeholder/60/60",
    rating: 5,
    testimonial:
      "Rahul is the kind of developer every team wants. He communicates clearly, adapts quickly to feedback, and brings a strong sense of ownership. The final product exceeded our expectations both in design and performance.",
    project: "Interactive Web App",
  },
];

export default function TestimonialsSection() {
  const reduce = useReducedMotion();

  // subtle cursor-reactive background glow
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 140, damping: 18 });
  const sy = useSpring(my, { stiffness: 140, damping: 18 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, mx, my]);

  const glowX = useTransform(sx, (v) => v * 80);
  const glowY = useTransform(sy, (v) => v * 60);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-100"
    >
      {/* aurora & grain */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-40 blur-3xl opacity-70"
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(700px 400px at 20% 20%, rgba(254,192,12,0.10), transparent 60%), radial-gradient(700px 400px at 80% 25%, rgba(255,255,255,0.05), transparent 60%)",
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
        {/* header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            Don’t just take my word for it—here’s what collaborators say about
            working together.
          </p>
        </motion.div>

        {/* cards grid */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} delay={i * 0.06} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* stats banner */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 rounded-2xl border border-yellow-500/20 bg-zinc-950/70 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur"
        >
          <h3 className="mb-2 text-2xl font-bold">Ready to work together?</h3>
          <p className="mb-6 text-zinc-400">
            Join the list of satisfied clients and let’s build something
            remarkable.
          </p>
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6 text-sm text-zinc-400">
            <Stat k="50+" v="Projects" />
            <Stat k="98%" v="Satisfaction" />
            <Stat k="5★" v="Avg Rating" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Bits ---------------- */

function TestimonialCard({
  t,
  delay = 0,
}: {
  t: (typeof testimonials)[number];
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  // micro 3D tilt + mouse glow
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

  return (
    <motion.div
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
        className="relative overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur"
      >
        {/* mouse glow */}
        <span
          ref={glow}
          aria-hidden
          className="pointer-events-none absolute h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-2xl opacity-0 transition-opacity"
          style={{ left: "50%", top: "50%" }}
        />

        {/* quote badge */}
        <div className="absolute -top-3 -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-black shadow">
          <Quote size={16} />
        </div>

        {/* rating */}
        <div className="mb-3 flex items-center">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        {/* text */}
        <p className="mb-5 text-sm leading-relaxed text-zinc-300">
          “{t.testimonial}”
        </p>

        {/* project tag */}
        <div className="mb-5">
          <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-300 ring-1 ring-inset ring-yellow-500/20">
            {t.project}
          </span>
        </div>

        {/* person */}
        <div className="flex items-center">
          <Avatar className="mr-4 h-12 w-12">
            <AvatarImage src={t.image} alt={t.name} />
            <AvatarFallback className="bg-yellow-500/10 font-semibold text-yellow-400">
              {t.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="text-sm font-semibold">{t.name}</h4>
            <p className="text-xs text-zinc-400">{t.position}</p>
            <p className="text-xs font-medium text-yellow-300">{t.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-yellow-400">{k}</div>
      <div>{v}</div>
    </div>
  );
}
