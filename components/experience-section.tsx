"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Full Stack Developer",
    period: "2022 - Present",
    location: "Remote",
    description: [
      "Led development of a scalable e-commerce platform serving 100K+ users",
      "Implemented microservices architecture using Node.js and Docker",
      "Mentored junior developers and established coding best practices",
      "Reduced application load time by 40% through optimization techniques",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    company: "Digital Solutions LLC",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    location: "San Francisco, CA",
    description: [
      "Built responsive web applications for various clients across industries",
      "Developed RESTful APIs and integrated third-party services",
      "Collaborated with design teams to implement pixel-perfect UIs",
      "Maintained 99.9% uptime for critical business applications",
    ],
    technologies: ["Vue.js", "Python", "MongoDB", "Firebase", "Tailwind CSS"],
  },
  {
    company: "StartupXYZ",
    position: "Frontend Developer",
    period: "2019 - 2020",
    location: "New York, NY",
    description: [
      "Developed the company's flagship SaaS product from scratch",
      "Implemented real-time features using WebSocket connections",
      "Optimized application performance and user experience",
      "Worked closely with product managers to define feature requirements",
    ],
    technologies: ["React", "TypeScript", "Redux", "Node.js", "Socket.io"],
  },
];

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='experience' className='py-20 bg-gray-50'>
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
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className='absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#fec00c] rounded-full border-4 border-white shadow-lg'></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
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
