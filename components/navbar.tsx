"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const bounds = element.getBoundingClientRect();
        return bounds.top <= 120 && bounds.bottom >= 120;
      });

      if (currentSection) setActiveSection(currentSection);

      const scrollRatio =
        window.scrollY / (document.body.scrollHeight - window.innerHeight) || 0;
      setProgress(Math.min(1, Math.max(0, scrollRatio)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={reduce ? {} : { y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className="pointer-events-none h-[2px] bg-gradient-to-r from-amber-400/80 via-sky-300/80 to-amber-400/80"
        style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
      />

      <div className="mx-auto mt-3 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-2xl border border-slate-700/50 bg-slate-950/70 px-3 backdrop-blur-xl shadow-[0_10px_38px_rgba(2,6,23,0.42)]">
          <button
            className="rounded-lg px-3 py-2 text-left"
            onClick={() => scrollToSection("#home")}
            aria-label="Go to top"
          >
            <span className="text-xl font-black tracking-tight text-slate-100">
              Rahul
              <span className="bg-gradient-to-r from-amber-300 to-sky-300 bg-clip-text text-transparent">
                .dev
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 rounded-xl border border-slate-800/70 bg-slate-900/50 p-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-amber-200"
                      : "text-slate-300 hover:text-sky-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-amber-400/15 to-sky-400/15 ring-1 ring-inset ring-slate-600/60"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.label}
                </motion.button>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className="border border-amber-300/25 bg-slate-900/70 text-slate-100 hover:bg-slate-900 hover:text-amber-200"
            >
              Let&apos;s Talk
            </Button>
          </div>

          <button
            onClick={() => setIsOpen((state) => !state)}
            className="rounded-lg p-3 text-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 rounded-2xl border border-slate-700/50 bg-slate-950/90 p-2 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`mb-1 block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                    isActive
                      ? "bg-slate-900 text-amber-200"
                      : "text-slate-300 hover:bg-slate-900 hover:text-sky-200"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="mt-1 w-full border border-amber-300/25 bg-slate-900/70 text-slate-100 hover:bg-slate-900 hover:text-amber-200"
            >
              Let&apos;s Talk
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
