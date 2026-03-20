"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Container from "@/components/ui/container";

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
  return (
    <section id="testimonials" className="bg-black py-32 selection:bg-white/20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Client Feedback
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl font-light text-zinc-400">
            Don&apos;t just take my word for it — here&apos;s what
            collaborators say about working together.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 rounded-[2rem] border border-white/10 bg-zinc-950 p-10 text-center sm:p-16"
        >
          <h3 className="mb-4 font-display text-3xl font-medium text-white">
            Ready to work together?
          </h3>
          <p className="mb-10 text-lg font-light text-zinc-400">
            Join the list of satisfied clients and let&apos;s build something
            remarkable.
          </p>
          <div className="mx-auto grid max-w-lg grid-cols-3 gap-8">
            <Stat k="50+" v="Projects" />
            <Stat k="98%" v="Satisfaction" />
            <Stat k="5.0" v="Avg Rating" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-zinc-950 p-8 transition-colors hover:bg-zinc-900/50"
    >
      <div>
        <div className="mb-6 flex items-center gap-1">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-white text-white"
            />
          ))}
        </div>

        <Quote className="mb-4 text-white/20" size={32} />
        
        <p className="mb-8 text-base font-light leading-relaxed text-zinc-300">
          &ldquo;{t.testimonial}&rdquo;
        </p>
      </div>

      <div>
        <div className="mb-6">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-400">
            {t.project}
          </span>
        </div>

        <div className="flex items-center pt-6 border-t border-white/10">
          <Avatar className="mr-4 h-12 w-12 border border-white/10">
            <AvatarImage src={t.image} alt={t.name} />
            <AvatarFallback className="bg-zinc-800 text-sm font-medium text-white">
              {t.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-display text-base font-medium text-white">{t.name}</h4>
            <p className="text-sm font-light text-zinc-500">
              {t.position} · {t.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-3xl font-medium text-white sm:text-4xl">{k}</div>
      <div className="mt-2 text-xs font-medium uppercase tracking-widest text-zinc-500">{v}</div>
    </div>
  );
}
