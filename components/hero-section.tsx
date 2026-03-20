"use client";

import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Container from "@/components/ui/container";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center bg-black pt-20 overflow-hidden selection:bg-white/20"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 bg-grid-white opacity-60" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]" />
      
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
              </span>
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-10 font-display text-6xl font-medium leading-[0.95] tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-9xl"
          >
            Digital products <br />
            <span className="text-zinc-600 font-light">done right.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-10 max-w-xl text-lg md:text-xl font-light leading-relaxed text-zinc-400"
          >
            I&apos;m Rahul, a full-stack developer specialized in Next.js and Nest.js, 
            crafting high-performance web applications with precision and purpose.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4 items-center">
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-all hover:bg-zinc-200"
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
          </motion.div>
        </motion.div>
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
