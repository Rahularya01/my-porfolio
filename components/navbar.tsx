"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  // Track section in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((i) => i.href.slice(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      if (current) setActiveSection(current);

      const scrolled =
        window.scrollY / (document.body.scrollHeight - window.innerHeight) || 0;
      setProgress(Math.min(1, Math.max(0, scrolled)));
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse glow tracking (for subtle parallax light)
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={shouldReduceMotion ? false : { y: -32, opacity: 0 }}
      animate={shouldReduceMotion ? {} : { y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 140, damping: 18 }}
      className="fixed top-0 inset-x-0 z-50"
      style={
        {
          "--mx": `${mousePos.x}px`,
          "--my": `${mousePos.y}px`,
        } as React.CSSProperties
      }
    >
      {/* Scroll progress */}
      <div
        className="pointer-events-none h-[2px] bg-gradient-to-r from-yellow-400/80 via-amber-300/80 to-yellow-400/80"
        style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Glassy dark bar with glow + border accent */}
        <div className="relative mt-3">
          {/* Soft cursor glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(600px circle at var(--mx) var(--my), rgba(253, 224, 71, 0.08), transparent 40%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,1))",
            }}
          />
          <div className="relative flex h-16 items-center justify-between rounded-2xl border border-zinc-800/60 bg-gradient-to-b from-zinc-900/70 to-zinc-950/70 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
            {/* Neon edge */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl [mask:linear-gradient(black,transparent_30%)]">
              <div className="h-full w-full rounded-2xl ring-1 ring-inset ring-yellow-500/15" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/10 via-yellow-300/5 to-yellow-500/10 blur-[10px]" />
            </div>

            {/* Brand */}
            <motion.button
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { rotateX: 8, rotateY: -8, translateZ: 6 }
              }
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative ml-3 select-none"
              onClick={() => scrollToSection("#home")}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="font-black tracking-tight text-xl">
                <span className="text-yellow-400">Rahul</span>
                <span className="text-zinc-50">.dev</span>
              </div>
              <div className="absolute -inset-2 -z-10 rounded-xl bg-yellow-400/0 blur-lg transition-opacity" />
            </motion.button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              <NavLinks
                items={navItems}
                active={activeSection}
                onClick={scrollToSection}
              />
            </div>

            {/* CTA */}
            <div className="hidden md:block mr-2">
              <Magnetic>
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="relative group border border-yellow-500/20 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-50 hover:text-yellow-300"
                >
                  <span className="relative z-10">Let’s Talk</span>
                  <span className="pointer-events-none absolute inset-0 rounded-md bg-yellow-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                </Button>
              </Magnetic>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden p-3 text-zinc-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
              className="mx-4 mt-2 overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl"
            >
              <motion.div
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {
                    transition: { staggerChildren: 0.04, staggerDirection: -1 },
                  },
                  show: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                  },
                }}
                className="px-2 pt-2 pb-3"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    variants={{
                      hidden: { y: 8, opacity: 0 },
                      show: { y: 0, opacity: 1 },
                    }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left rounded-lg px-3 py-2 text-base font-medium transition-all hover:bg-zinc-900 ${
                      activeSection === item.href.slice(1)
                        ? "text-yellow-300"
                        : "text-zinc-300 hover:text-yellow-300"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="pt-2">
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full border border-yellow-500/20 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-50 hover:text-yellow-300"
                  >
                    Let’s Talk
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ---------- Desktop Nav with 3D & Active Pill ---------- */

function NavLinks({
  items,
  active,
  onClick,
}: {
  items: { href: string; label: string }[];
  active: string; // e.g. "home"
  onClick: (href: string) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // When mouse leaves the whole nav, revert to the active section smoothly
  return (
    <div
      className="relative flex items-center gap-1 rounded-xl bg-zinc-950/30 p-1 ring-1 ring-inset ring-zinc-800/60"
      style={{ perspective: 800 }}
      onMouseLeave={() => setHovered(null)}
    >
      {items.map((item) => {
        const isCurrent = hovered
          ? hovered === item.href // while hovering, follow hover
          : active === item.href.slice(1); // otherwise follow active

        return (
          <Magnetic key={item.href} intensity={10}>
            <motion.button
              onMouseEnter={() => setHovered(item.href)}
              onClick={() => onClick(item.href)}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { rotateX: 6, rotateY: -6, translateZ: 4 }
              }
              transition={{ type: "spring", stiffness: 210, damping: 18 }}
              className={`relative whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium outline-none transition-colors
                ${isCurrent ? "text-yellow-300" : "text-zinc-300 hover:text-yellow-300"}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* ONE shared layoutId. This element “teleports” smoothly between items */}
              {isCurrent && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-b from-yellow-500/20 to-yellow-500/10 ring-1 ring-inset ring-yellow-500/25 shadow-[0_6px_18px_rgba(234,179,8,0.18)]"
                />
              )}
              {item.label}
            </motion.button>
          </Magnetic>
        );
      })}
    </div>
  );
}
/* ---------- Tiny Magnetic Wrapper ---------- */

function Magnetic({
  children,
  intensity = 6,
}: {
  children: React.ReactNode;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      const tx = (mx / (r.width / 2)) * intensity;
      const ty = (my / (r.height / 2)) * intensity;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.transform = `translate3d(0,0,0)`;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [intensity]);

  return <div ref={ref}>{children}</div>;
}
