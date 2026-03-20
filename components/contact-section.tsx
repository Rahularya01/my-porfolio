"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Container from "@/components/ui/container";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  company: z.string().max(0).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
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
          message: "Message sent! I'll get back to you soon.",
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
    <section id="contact" className="bg-white py-32 selection:bg-black/10 selection:text-black">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 font-display text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl font-light text-zinc-500">
            Have a project or idea? I&apos;m open to new opportunities, collaborations,
            or a quick tech chat.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 sm:p-10"
          >
            <h3 className="mb-6 font-display text-2xl font-medium text-zinc-900">Get in Touch</h3>
            <p className="mb-10 text-base font-light leading-relaxed text-zinc-500">
              Whether it&apos;s a product build or joining your team, I bring 5+
              years of full-stack experience. Let&apos;s ship something great.
            </p>

            <InfoRow
              icon={<Mail size={20} strokeWidth={1.5} />}
              title="Email"
              value="aryarahul819@gmail.com"
              href="mailto:aryarahul819@gmail.com"
            />
            <InfoRow
              icon={<Phone size={20} strokeWidth={1.5} />}
              title="Phone"
              value="+91 70093 91495"
              href="tel:+917009391495"
            />
            <InfoRow
              icon={<MapPin size={20} strokeWidth={1.5} />}
              title="Location"
              value="Based in India — Available Worldwide"
            />

            <div className="mt-12 pt-8 border-t border-zinc-200">
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-400">Connect Online</h4>
              <div className="flex gap-4">
                <Social href="https://github.com/Rahularya01" label="GitHub">
                  <Github size={20} strokeWidth={1.5} />
                </Social>
                <Social
                  href="https://linkedin.com/in/rahul-arya-0993841b7"
                  label="LinkedIn"
                >
                  <Linkedin size={20} strokeWidth={1.5} />
                </Social>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-[2rem] border border-zinc-200 bg-white p-8 sm:p-10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("company")}
                className="hidden"
              />

              <div className="grid gap-6 sm:grid-cols-2">
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
                    rows={5}
                    placeholder="Tell me about your project..."
                    {...register("message")}
                    required
                    className={inputClass({ textarea: true })}
                  />
                }
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-black disabled:cursor-not-allowed disabled:opacity-70 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <div aria-live="polite" aria-atomic="true">
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 flex items-center gap-3 rounded-xl border p-4 text-sm ${
                      submitStatus.type === "success"
                        ? "border-emerald-500/20 bg-emerald-50 text-emerald-700"
                        : "border-red-500/20 bg-red-50 text-red-700"
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
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function inputClass({ textarea = false }: { textarea?: boolean } = {}) {
  return [
    "w-full rounded-xl border bg-zinc-50 text-zinc-900 placeholder:text-zinc-400",
    "border-zinc-200 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400",
    "transition-all px-5 py-3.5 text-base font-light",
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
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-zinc-700">
        {label}
      </label>
      {input}
      {error && (
        <span className="mt-2 block text-xs text-red-500">{error}</span>
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
    <div className="mb-8 flex items-start">
      <div className="mr-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-zinc-200 text-zinc-900">
        {icon}
      </div>
      <div>
        <h4 className="mb-1 text-sm font-semibold uppercase tracking-widest text-zinc-400">{title}</h4>
        <Wrap
          {...(href
            ? {
                href,
                target: href.startsWith("http") ? "_blank" : undefined,
                rel: "noopener noreferrer",
              }
            : {})}
          className={`text-base font-light ${
            href ? "text-zinc-700 hover:text-black" : "text-zinc-700"
          } transition-colors`}
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
      className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-400 transition-all hover:border-zinc-400 hover:bg-zinc-50 hover:text-black"
    >
      {children}
    </a>
  );
}
