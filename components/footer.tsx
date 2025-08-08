import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300 relative overflow-hidden">
      {/* Subtle gradient & texture */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-transparent to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="font-extrabold text-2xl mb-4 tracking-tight">
              <span className="text-yellow-400">Rahul</span>
              <span className="text-zinc-100">.dev</span>
            </div>
            <p className="text-zinc-400 mb-6 max-w-sm leading-relaxed">
              Full Stack Developer passionate about crafting modern, scalable
              web applications that make an impact.
            </p>
            <div className="flex space-x-3">
              <SocialLink href="https://github.com/rahul" label="GitHub">
                <Github size={18} />
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/rahul" label="LinkedIn">
                <Linkedin size={18} />
              </SocialLink>
              <SocialLink href="mailto:rahul@example.com" label="Email">
                <Mail size={18} />
              </SocialLink>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-zinc-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Experience", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-zinc-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-zinc-100">
              Services
            </h3>
            <ul className="space-y-2 text-zinc-400">
              {[
                "Web Development",
                "Mobile Development",
                "UI/UX Design",
                "API Development",
                "DevOps & Deployment",
                "Technical Consulting",
              ].map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © {currentYear} Rahul. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500 flex items-center">
            Made with <Heart size={14} className="text-yellow-400 mx-1" /> and
            lots of coffee
          </p>
        </div>
      </div>
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
      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-yellow-500 hover:text-yellow-400 transition-colors"
    >
      {children}
    </a>
  );
}
