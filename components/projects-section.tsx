"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built with modern technologies for optimal performance.",
    image: "/api/placeholder/600/400",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    features: [
      "Payment Integration",
      "Real-time Updates",
      "Admin Dashboard",
      "Responsive Design",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rahul/ecommerce-platform",
    category: "Full Stack",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with drag-and-drop functionality, real-time collaboration, and team management features.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    features: [
      "Drag & Drop",
      "Real-time Collaboration",
      "Team Management",
      "File Attachments",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rahul/task-manager",
    category: "Web App",
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "D3.js", "Weather API", "Mapbox", "Vuex"],
    features: [
      "Location Detection",
      "Interactive Maps",
      "Data Visualization",
      "Historical Data",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rahul/weather-dashboard",
    category: "Frontend",
  },
  {
    title: "Social Media API",
    description:
      "A robust REST API for a social media platform with authentication, real-time messaging, and content moderation features.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    features: [
      "JWT Authentication",
      "Real-time Messaging",
      "Content Moderation",
      "Rate Limiting",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rahul/social-api",
    category: "Backend",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website with smooth animations, dark mode toggle, and optimized performance.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    features: [
      "Smooth Animations",
      "Dark Mode",
      "SEO Optimized",
      "Performance Focused",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rahul/portfolio",
    category: "Frontend",
  },
  {
    title: "Mobile Banking App",
    description:
      "A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Firebase", "Plaid API", "TypeScript"],
    features: [
      "Biometric Auth",
      "Transaction History",
      "Budget Tracking",
      "Push Notifications",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/rahul/banking-app",
    category: "Mobile",
  },
];

const categories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Web App",
  "Mobile",
];

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='projects' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
            Featured Projects
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            A showcase of my recent work and side projects. Each project
            represents a unique challenge and demonstrates different aspects of
            my skill set.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className='bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group'
            >
              <div className='relative overflow-hidden'>
                <div className='aspect-video bg-gradient-to-br from-[#fec00c]/20 to-[#fec00c]/5 flex items-center justify-center'>
                  <div className='text-gray-400 text-sm'>Project Preview</div>
                </div>
                <div className='absolute top-4 left-4'>
                  <span className='px-3 py-1 bg-[#fec00c] text-black text-xs rounded-full font-medium'>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 mb-4 text-sm leading-relaxed'>
                  {project.description}
                </p>

                <div className='mb-4'>
                  <h4 className='text-sm font-semibold text-gray-900 mb-2'>
                    Key Features:
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className='px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded'
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-gray-900 mb-2'>
                    Technologies:
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 bg-[#fec00c]/10 text-[#fec00c] text-xs rounded-full font-medium'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex gap-3'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='flex items-center gap-2'
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </Button>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='flex items-center gap-2'
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github size={14} />
                    Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='text-center mt-12'
        >
          <Button
            variant='outline'
            size='lg'
            onClick={() => window.open("https://github.com/rahul", "_blank")}
            className='flex items-center gap-2'
          >
            <Github size={20} />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
