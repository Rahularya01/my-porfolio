'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Uptechunt Freelance Platform',
    description:
      'A production-grade freelance platform built with Next.js and Node.js, featuring user authentication, job listings, messaging, and real-time updates with Firebase.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Firebase'],
    features: [
      'Realtime Chat',
      'Role-Based Access',
      'SSG & SSR',
      'Responsive Design',
    ],
    liveUrl: 'https://uptechunt.com',
    category: 'Full Stack',
  },
  {
    title: 'PRP Job Search Platform',
    description:
      'A job-finding platform for Australian users, connecting professionals with employers. Built with the same scalable tech stack as Uptechunt.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Firebase'],
    features: [
      'Job Listings',
      'Employer Panel',
      'Secure Auth',
      'Responsive Design',
    ],
    liveUrl: 'https://propertyrecruitmentpartners.com.au/',
    category: 'Full Stack',
  },
  {
    title: 'Temp Elite Healthcare Hiring',
    description:
      'Staffing dashboard for doctors and nurses, offering hiring logistics, admin panel, and real-time order tracking for hospitals and clinics.',
    technologies: ['React', 'Express.js', 'MongoDB', 'REST API'],
    features: [
      'Admin Dashboard',
      'Live Order Tracking',
      'Map Integration',
      'Secure Auth',
    ],
    liveUrl: 'https://www.tempelite.com/',
    category: 'Full Stack',
  },
  {
    title: 'Repsen – AI Startup Assistant',
    description:
      'An AI-powered assistant to help startups generate launch kits, press releases, emails, and social posts. Focused on productivity and speed.',
    technologies: [
      'Next.js',
      'TypeScript',
      'OpenAI API',
      'Tailwind CSS',
      'MongoDB',
    ],
    features: [
      'AI Launch Kits',
      'Content Blocks',
      'Editor Dashboard',
      'Tone Rewriting',
    ],
    liveUrl: 'https://repsen.io',
    category: 'AI SaaS',
  },
  {
    title: 'Antef – Solution Platform',
    description:
      'A digital solution provider helping businesses with custom software, strategy, and product development.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Company Website',
      'Service Pages',
      'Contact Forms',
      'Responsive Design',
    ],
    liveUrl: 'https://www.antef.in/',
    category: 'Web App',
  },
  {
    title: 'Portfolio Website',
    description:
      'My personal portfolio site built with Next.js and Framer Motion to showcase projects, experience, and contact options. Fully responsive and SEO optimized.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    features: [
      'Dark Mode',
      'Smooth Animations',
      'SEO Optimized',
      'Mobile Friendly',
    ],
    githubUrl: 'https://github.com/Rahularya01/my-porfolio',
    category: 'Frontend',
  },
];

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='projects' className='py-24 bg-white'>
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
            A showcase of my recent work—ranging from full-stack freelance
            platforms to scalable mobile apps. Every project reflects my
            commitment to clean code and user-first design.
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
              {/* Enhanced header with gradient and category */}
              <div className='relative bg-gradient-to-r from-[#fec00c]/10 via-[#fec00c]/5 to-transparent p-6 border-b border-gray-100'>
                <div className='flex items-center justify-between mb-3'>
                  <span className='px-3 py-1 bg-[#fec00c] text-black text-xs rounded-full font-medium'>
                    {project.category}
                  </span>
                  <div className='w-12 h-12 bg-gradient-to-br from-[#fec00c]/20 to-[#fec00c]/10 rounded-xl flex items-center justify-center'>
                    <div className='w-6 h-6 bg-[#fec00c]/40 rounded-md'></div>
                  </div>
                </div>
                <h3 className='text-xl font-bold text-gray-900'>
                  {project.title}
                </h3>
              </div>

              <div className='p-6'>
                <p className='text-gray-600 mb-6 text-sm leading-relaxed'>
                  {project.description}
                </p>

                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-gray-900 mb-3'>
                    Key Features:
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className='px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full'
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-gray-900 mb-3'>
                    Technologies:
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 bg-[#fec00c]/10 text-[#fec00c] text-xs rounded-full font-medium border border-[#fec00c]/20'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex justify-center'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='flex items-center gap-2 hover:bg-[#fec00c]/10 hover:border-[#fec00c]/30 transition-colors'
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={14} />
                    View Live Project
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
          className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-[#fec00c]/5 to-transparent rounded-2xl p-8 border border-[#fec00c]/20'>
            <h3 className='text-xl font-bold text-gray-900 mb-2'>
              Interested in working together?
            </h3>
            <p className='text-gray-600 mb-4'>
              I'm always open to discussing new opportunities and exciting
              projects.
            </p>
            <Button
              variant='outline'
              size='lg'
              className='bg-[#fec00c] border-[#fec00c] text-black hover:bg-[#fec00c]/90 transition-colors'
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
