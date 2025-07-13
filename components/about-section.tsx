"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Database, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Flutter, Progressive Web Apps",
    technologies: ["React Native", "Flutter", "PWA", "Expo", "Firebase"],
  },
  {
    icon: Zap,
    title: "DevOps & Cloud",
    description: "AWS, Docker, CI/CD, Kubernetes",
    technologies: ["AWS", "Docker", "CI/CD", "Kubernetes", "Terraform"],
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='about' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
            About Me
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            I'm a passionate full-stack developer with 5+ years of experience
            building modern web applications. I love turning complex problems
            into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              My Journey
            </h3>
            <div className='space-y-4 text-gray-600'>
              <p>
                Started my journey as a curious developer who loved to
                experiment with new technologies. Over the years, I've had the
                privilege of working with startups and established companies,
                helping them build scalable and user-friendly applications.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest industry trends. When I'm not coding,
                you'll find me contributing to open source projects or exploring
                new frameworks and tools.
              </p>
              <p>
                My goal is to create digital experiences that not only look
                great but also solve real problems and make people's lives
                easier.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='bg-gray-50 rounded-2xl p-8'
          >
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Quick Facts
            </h3>
            <div className='space-y-4'>
              <div>
                <span className='font-semibold text-gray-900'>Experience:</span>
                <span className='text-gray-600 ml-2'>5+ Years</span>
              </div>
              <div>
                <span className='font-semibold text-gray-900'>
                  Projects Completed:
                </span>
                <span className='text-gray-600 ml-2'>50+</span>
              </div>
              <div>
                <span className='font-semibold text-gray-900'>
                  Technologies:
                </span>
                <span className='text-gray-600 ml-2'>20+</span>
              </div>
              <div>
                <span className='font-semibold text-gray-900'>Location:</span>
                <span className='text-gray-600 ml-2'>Available Worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className='text-2xl font-bold text-gray-900 text-center mb-12'>
            What I Do
          </h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className='text-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#fec00c] hover:shadow-lg transition-all duration-300'
              >
                <div className='inline-flex items-center justify-center w-16 h-16 bg-[#fec00c]/10 rounded-full mb-4'>
                  <skill.icon className='text-[#fec00c]' size={32} />
                </div>
                <h4 className='text-xl font-semibold text-gray-900 mb-2'>
                  {skill.title}
                </h4>
                <p className='text-gray-600 mb-4'>{skill.description}</p>
                <div className='flex flex-wrap gap-2 justify-center'>
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
