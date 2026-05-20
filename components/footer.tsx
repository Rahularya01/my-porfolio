import { Github, Linkedin, Mail } from "lucide-react";
import Container from "@/components/ui/container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-transparent">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="mb-6 font-display text-2xl font-black tracking-tight">
              <span className="text-white">Rahul</span>
              <span className="text-zinc-500">.</span>
            </div>
            <p className="mb-8 max-w-sm text-base font-light leading-relaxed text-zinc-400">
              Full Stack Developer passionate about crafting modern, scalable
              web applications that make an impact. Building with purpose.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/Rahularya01" label="GitHub">
                <Github size={18} strokeWidth={1.5} />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/rahul-arya-0993841b7"
                label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </SocialLink>
              <SocialLink href="mailto:aryarahul819@gmail.com" label="Email">
                <Mail size={18} strokeWidth={1.5} />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "About", "Experience", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-base font-light text-zinc-400 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-zinc-500">Services</h3>
            <ul className="space-y-4 text-base font-light text-zinc-400">
              {[
                "Web Development",
                "Mobile Development",
                "UI/UX Implementation",
                "API Architecture",
                "DevOps & Deployment",
                "Technical Consulting",
              ].map((service) => (
                <li key={service} className="transition-colors hover:text-white cursor-default">{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-sm font-light text-zinc-500">
            &copy; {currentYear} Rahul. All rights reserved.
          </p>
          <p className="text-sm font-light text-zinc-500">
            Crafted with precision & purpose
          </p>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-zinc-400 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
    >
      {children}
    </a>
  );
}
