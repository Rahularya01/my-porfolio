"use client";

import { Building2, Calendar, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Container from "@/components/ui/container";

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
    technologies: ["Next.js", "Nest.js", "React", "Node.js", "Firebase", "AWS", "TailwindCSS"],
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
    technologies: ["Next.js", "Nest.js", "React", "Node.js", "Firebase", "AWS", "TailwindCSS"],
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
    technologies: ["React", "Express.js", "MongoDB", "REST API", "Google Maps API"],
  },
];

export default function ExperienceSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="experience" className="relative bg-zinc-950 py-32 overflow-hidden selection:bg-white/20">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 bg-grid-white opacity-40" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_70%)]" />
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Work Experience
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl font-light text-zinc-400">
            A journey through my professional growth and the impact I&apos;ve
            made at various organizations.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-px" />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            {experiences.map((exp, i) => {
              const flip = i % 2 !== 0;
              return (
                <motion.div
                  key={exp.company + i}
                  variants={itemVariants}
                  className={`relative flex items-stretch ${
                    flip ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="absolute left-6 top-6 md:left-1/2 md:-translate-x-1/2 z-10">
                    <span className="block h-4 w-4 rounded-full border-[3px] border-black bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.1)]" />
                  </div>

                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${
                      flip ? "md:pl-16" : "md:pr-16 md:text-right"
                    }`}
                  >
                    <div className="rounded-[2rem] border border-white/10 bg-black p-8 sm:p-10 transition-all hover:border-white/30 hover:bg-zinc-900/40">
                      <div
                        className={`flex flex-col gap-4 mb-6 ${
                          flip ? "" : "md:items-end"
                        }`}
                      >
                        <div className={flip ? "" : "md:text-right"}>
                          <h3 className="mb-2 font-display text-2xl font-medium text-white">
                            {exp.position}
                          </h3>
                          <div className={`mb-4 flex items-center font-medium text-zinc-300 ${flip ? "" : "md:justify-end"}`}>
                            <Building2 size={18} className="mr-2 text-zinc-500" />
                            {exp.company}
                          </div>
                          <div className={`flex flex-wrap items-center gap-4 text-sm text-zinc-500 ${flip ? "" : "md:justify-end"}`}>
                            <span className="inline-flex items-center">
                              <Calendar size={16} className="mr-2" />
                              {exp.period}
                            </span>
                            <span className="inline-flex items-center">
                              <MapPin size={16} className="mr-2" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <ul className="mb-8 space-y-3 text-left">
                        {exp.description.map((d, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-base font-light leading-relaxed text-zinc-400"
                          >
                            <span className="mt-2.5 mr-4 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/30" />
                            {d}
                          </li>
                        ))}
                      </ul>

                      <div className={`flex flex-wrap gap-2 ${flip ? "" : "md:justify-end"}`}>
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
