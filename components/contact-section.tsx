"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  // honeypot
  company: z.string().max(0).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const onSubmit = async (formData: ContactFormData) => {
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent! I’ll get back to you soon.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to send. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-100"
    >
      {/* aurora + grain background */}
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
        <Header />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info Card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative rounded-2xl border border-zinc-800/70 bg-zinc-950/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-yellow-500/10" />
            <h3 className="mb-6 text-2xl font-bold">Get in Touch</h3>
            <p className="mb-8 text-zinc-400">
              Whether it’s a product build or joining your team, I bring 5+
              years of full-stack experience. Let’s ship something great.
            </p>

            <InfoRow
              icon={<Mail size={20} />}
              title="Email"
              value="aryarahul819@gmail.com"
              href="mailto:aryarahul819@gmail.com"
            />
            <InfoRow
              icon={<Phone size={20} />}
              title="Phone"
              value="+91 70093 91495"
              href="tel:+917009391495"
            />
            <InfoRow
              icon={<MapPin size={20} />}
              title="Location"
              value="Based in India — Available Worldwide"
            />

            <div className="mt-8">
              <h4 className="mb-3 font-semibold">Connect Online</h4>
              <div className="flex gap-3">
                <Social href="https://github.com/Rahularya01" label="GitHub">
                  <Github size={18} />
                </Social>
                <Social
                  href="https://linkedin.com/in/rahul-arya-0993841b7"
                  label="LinkedIn"
                >
                  <Linkedin size={18} />
                </Social>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl border border-zinc-800/70 bg-zinc-950/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-yellow-500/10" />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("company")}
                className="hidden"
              />

              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  label="Name"
                  id="name"
                  error={errors.name?.message}
                  input={
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      {...register("name")}
                      required
                      className={inputClass()}
                    />
                  }
                />
                <Field
                  label="Email"
                  id="email"
                  error={errors.email?.message}
                  input={
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      {...register("email")}
                      required
                      className={inputClass()}
                    />
                  }
                />
              </div>

              <Field
                label="Subject"
                id="subject"
                error={errors.subject?.message}
                input={
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project inquiry"
                    {...register("subject")}
                    required
                    className={inputClass()}
                  />
                }
              />

              <Field
                label="Message"
                id="message"
                error={errors.message?.message}
                input={
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell me about your project..."
                    {...register("message")}
                    required
                    className={inputClass({ textarea: true })}
                  />
                }
              />

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="group w-full items-center justify-center gap-2 border border-yellow-500/20 bg-zinc-900/70 text-zinc-50 hover:bg-zinc-900 hover:text-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {/* live region for status */}
              <div aria-live="polite" aria-atomic="true">
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-3 flex items-center gap-3 rounded-lg border p-4 text-sm ${
                      submitStatus.type === "success"
                        ? "border-green-500/30 bg-green-500/10 text-green-300"
                        : "border-red-500/30 bg-red-500/10 text-red-300"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle size={18} />
                    ) : (
                      <AlertCircle size={18} />
                    )}
                    <span className="font-medium">{submitStatus.message}</span>
                  </motion.div>
                )}
              </div>

              <p className="pt-2 text-center text-xs text-zinc-500">
                By submitting, you agree to be contacted back about your
                inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- bits ---------------- */

function Header() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <h2 className="mb-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-300 bg-clip-text text-transparent">
          Let’s Work Together
        </span>
      </h2>
      <p className="mx-auto max-w-3xl text-zinc-400">
        Have a project or idea? I’m open to new opportunities, collaborations,
        or a quick tech chat.
      </p>
    </motion.div>
  );
}

function inputClass({ textarea = false }: { textarea?: boolean } = {}) {
  return [
    "w-full rounded-lg border bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-500",
    "border-zinc-800 focus:border-yellow-400/60 focus:ring-2 focus:ring-yellow-400/20",
    "transition-colors px-4 py-3",
    textarea ? "resize-none" : "",
  ].join(" ");
}

function Field({
  label,
  id,
  error,
  input,
}: {
  label: string;
  id: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-zinc-300"
      >
        {label}
      </label>
      {input}
      {error && (
        <span className="mt-1 block text-sm text-red-400">{error}</span>
      )}
    </div>
  );
}

function InfoRow({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const Wrap = href ? "a" : "div";
  return (
    <div className="mb-5 flex items-center">
      <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 ring-1 ring-yellow-500/20">
        <span className="text-yellow-400">{icon}</span>
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <Wrap
          {...(href
            ? {
                href,
                target: href.startsWith("http") ? "_blank" : undefined,
                rel: "noopener noreferrer",
              }
            : {})}
          className={`${
            href ? "hover:text-yellow-300" : ""
          } text-zinc-400 transition-colors`}
        >
          {value}
        </Wrap>
      </div>
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
      className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900/60 text-zinc-300 ring-1 ring-inset ring-zinc-800 transition-colors hover:text-yellow-300"
    >
      <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-yellow-500/0 blur-lg transition-opacity group-hover:opacity-40" />
      {children}
    </a>
  );
}
