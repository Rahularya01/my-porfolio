"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/container";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const bounds = element.getBoundingClientRect();
        return bounds.top <= 120 && bounds.bottom >= 120;
      });

      if (currentSection) setActiveSection(currentSection);
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
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030303]/75 backdrop-blur-2xl border-b border-white/[0.06] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <Container>
        <div className="flex h-14 items-center justify-between">
          <button
            className="group relative px-2 py-1 text-left"
            onClick={() => scrollToSection("#home")}
            aria-label="Go to top"
          >
            <span className="font-display text-2xl font-black tracking-tight text-white">
              Rahul<span className="text-zinc-500 transition-colors group-hover:text-white">.</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex rounded-full border border-white/[0.08] bg-white/[0.02] p-1 backdrop-blur-xl shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-white shadow-[0_4px_20px_rgba(255,255,255,0.2)]" />
                  )}
                  <span className={`relative z-10 ${isActive ? "text-black" : "text-zinc-400 hover:text-white"}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => scrollToSection("#contact")}
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-all hover:bg-zinc-200 md:inline-block hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          >
            Let&apos;s Talk
          </button>

          <button
            onClick={() => setIsOpen((state) => !state)}
            className="rounded-full border border-white/[0.08] bg-white/[0.02] p-2 text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <div className="border-b border-white/[0.06] bg-[#030303]/90 backdrop-blur-2xl px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-lg transition-colors ${
                    isActive
                      ? "bg-white text-black font-medium"
                      : "text-zinc-400 hover:bg-white/[0.03] hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => scrollToSection("#contact")}
              className="mt-4 w-full rounded-xl bg-white px-4 py-3 text-lg font-medium text-black shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
