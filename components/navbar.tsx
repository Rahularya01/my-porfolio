"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className='fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='font-bold text-xl'
          >
            <span className='text-[#fec00c]'>Rahul</span>
            <span className='text-gray-900'>.dev</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-[#fec00c]"
                    : "text-gray-700 hover:text-[#fec00c]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className='hidden md:block'>
            <Button onClick={() => scrollToSection("#contact")}>
              Let's Talk
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className='md:hidden p-2'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden border-t border-gray-200'
          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left ${
                    activeSection === item.href.substring(1)
                      ? "text-[#fec00c]"
                      : "text-gray-700 hover:text-[#fec00c]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className='pt-4'>
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className='w-full'
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
