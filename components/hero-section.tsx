"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center bg-white pt-16'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className='text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I&apos;m <span className='text-[#fec00c]'>Rahul</span>
          </motion.h1>

          <motion.div
            className='text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-8'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className='block mb-2'>Full Stack Developer</span>
            <span className='text-lg sm:text-xl text-gray-500'>
              Crafting fast, scalable apps with React, Next.js & Node.js
            </span>
          </motion.div>

          <motion.p
            className='text-lg text-gray-600 mb-12 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            With 5+ years of experience, I specialize in building user-centric
            web and mobile apps from the ground up—blending beautiful UI with
            robust backend logic. Let&apos;s turn ideas into polished digital
            products.
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={scrollToContact}
              size='lg'
              className='text-lg px-8 py-3'
            >
              Get In Touch
            </Button>
            <Button
              onClick={scrollToAbout}
              variant='outline'
              size='lg'
              className='text-lg px-8 py-3'
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            className='flex justify-center space-x-6 mb-16'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a
              href='https://github.com/Rahularya01'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-[#fec00c] transition-colors'
            >
              <Github size={24} />
            </a>
            <a
              href='https://linkedin.com/in/rahul-arya-0993841b7'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-[#fec00c] transition-colors'
            >
              <Linkedin size={24} />
            </a>
            <a
              href='mailto:aryarahul819@gmail.com'
              className='text-gray-600 hover:text-[#fec00c] transition-colors'
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <button
            onClick={scrollToAbout}
            className='text-gray-400 hover:text-[#fec00c] transition-colors animate-bounce'
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
