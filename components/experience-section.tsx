'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Uptechunt',
    position: 'Full Stack Developer',
    period: 'Feb 2023 – Present',
    location: 'Remote',
    description: [
      'Built and scaled a freelance platform using Next.js, React, and Node.js with server-side rendering and efficient routing.',
      'Integrated Firebase and AWS for real-time messaging, secure authentication, and cloud storage.',
      'Designed responsive, mobile-friendly UIs using TailwindCSS with performance optimizations for Core Web Vitals.',
    ],
    technologies: [
      'Next.js',
      'React',
      'Node.js',
      'Firebase',
      'AWS',
      'TailwindCSS',
    ],
  },
  {
    company: 'Cercling',
    position: 'Senior Front-End Developer',
    period: 'Jan 2022 – Jan 2023',
    location: 'Remote',
    description: [
      'Led front-end development for a SaaS analytics dashboard using React and Next.js.',
      'Collaborated with product managers to deliver user-centric features, boosting retention by 30%.',
      'Improved application speed and SEO through code-splitting and advanced optimizations.',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
  },
  {
    company: 'Freelance Projects',
    position: 'React/React Native Developer',
    period: 'May 2020 – Dec 2021',
    location: 'Remote',
    description: [
      'Delivered 10+ responsive web and mobile apps across healthcare, e-commerce, and education sectors.',
      'Built cross-platform mobile apps with React Native and deployed on Play Store and App Store.',
      'Managed the entire development lifecycle including wireframing, coding, testing, and deployment.',
    ],
    technologies: ['React', 'React Native', 'Expo', 'Firebase', 'MongoDB'],
  },
  {
    company: 'Dippers Logistics',
    position: 'Full Stack Developer',
    period: 'Jul 2019 – Apr 2020',
    location: 'Gurgaon, HR',
    description: [
      'Developed logistic dashboards using React and Express for real-time tracking and delivery insights.',
      'Integrated REST APIs and Google Maps for dynamic order visualization.',
      'Collaborated with teams to convert logistics workflows into scalable interfaces and backend services.',
    ],
    technologies: [
      'React',
      'Express.js',
      'MongoDB',
      'REST API',
      'Google Maps API',
    ],
  },
];

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='experience' className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
            Work Experience
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            A journey through my professional growth and the impact I've made at
            various organizations.
          </p>
        </motion.div>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-[#fec00c]'></div>

          <div className='space-y-12'>
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className='absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#fec00c] rounded-full border-4 border-white shadow-lg'></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-200'>
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-xl font-bold text-gray-900 mb-1'>
                          {experience.position}
                        </h3>
                        <div className='flex items-center text-[#fec00c] font-semibold mb-2'>
                          <Building2 size={16} className='mr-2' />
                          {experience.company}
                        </div>
                        <div className='flex items-center text-gray-600 text-sm space-x-4'>
                          <div className='flex items-center'>
                            <Calendar size={14} className='mr-1' />
                            {experience.period}
                          </div>
                          <div className='flex items-center'>
                            <MapPin size={14} className='mr-1' />
                            {experience.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className='space-y-2 mb-4'>
                      {experience.description.map((item, i) => (
                        <li
                          key={i}
                          className='text-gray-600 text-sm flex items-start'
                        >
                          <span className='w-1.5 h-1.5 bg-[#fec00c] rounded-full mt-2 mr-3 flex-shrink-0'></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className='flex flex-wrap gap-2'>
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className='px-3 py-1 bg-[#fec00c]/10 text-[#fec00c] text-xs rounded-full font-medium'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
