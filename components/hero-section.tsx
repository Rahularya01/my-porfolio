"use client";

import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import Container from "@/components/ui/container";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center bg-[#030303] pt-20 overflow-hidden selection:bg-white/20"
    >
      {/* Ambient glowing gradient mesh blobs (static) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.06)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.04)_0%,transparent_70%)] blur-[90px]" />
      </div>

      {/* Background patterns */}
      <div className="absolute inset-0 z-0 bg-grid-white opacity-20" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(3,3,3,0.2),#030303_85%)]" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-zinc-400 backdrop-blur-md shadow-inner">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
              </span>
              Available for new projects
            </span>
          </div>

          <h1 className="mt-10 font-display text-5xl font-black leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl">
            Digital products <br />
            <span className="bg-gradient-to-r from-zinc-500 via-zinc-400 to-white bg-clip-text text-transparent font-light italic pr-4">
              done right.
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-lg md:text-xl font-light leading-relaxed text-zinc-400">
            I&apos;m Rahul, a full-stack developer specialized in Next.js and Nest.js, 
            crafting high-performance web applications with precision and purpose.
          </p>

          <div className="mt-12 flex flex-wrap gap-4 items-center">
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
            >
              Start a project
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </button>
            
            <div className="flex items-center gap-2 ml-2">
              <Social href="https://github.com/Rahularya01" label="GitHub">
                <Github size={18} strokeWidth={1.5} />
              </Social>
              <Social
                href="https://linkedin.com/in/rahul-arya-0993841b7"
                label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </Social>
              <Social href="mailto:aryarahul819@gmail.com" label="Email">
                <Mail size={18} strokeWidth={1.5} />
              </Social>
            </div>
          </div>
        </div>
      </Container>
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
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-transparent text-zinc-500 transition-all hover:border-white/20 hover:text-white"
    >
      {children}
    </a>
  );
}
