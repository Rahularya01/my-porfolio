'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Manmohan Yadav',
    position: 'Founder',
    company: 'Confidential',
    image: '/api/placeholder/60/60',
    rating: 5,
    testimonial:
      'I had a great experience working with Rahul on a project involving Next.js, Node.js, TypeScript, and Tailwind CSS. He was professional, responsive, and delivered high-quality work throughout. Rahul understood requirements clearly and implemented features efficiently with clean, scalable code. Communication was smooth and deadlines were met. Highly recommended!',
    project: 'Full Stack Web App',
  },
  {
    name: 'Jakub',
    position: 'CTO',
    company: 'Stealth Startup',
    image: '/api/placeholder/60/60',
    rating: 5,
    testimonial:
      'I had a pleasant experience working with Rahul. He managed to deliver the work within a few days without any mistakes. Would love to collaborate again!',
    project: 'Web Platform Optimization',
  },
  {
    name: 'Ahmed',
    position: 'Technical Lead',
    company: 'GlobalTech',
    image: '/api/placeholder/60/60',
    rating: 5,
    testimonial:
      'The project was completed professionally by Rahul and ahead of schedule. His skill and knowledge in development are truly impressive.',
    project: 'Dashboard Development',
  },
  {
    name: 'Jack',
    position: 'Product Owner',
    company: 'Freelance Client',
    image: '/api/placeholder/60/60',
    rating: 5,
    testimonial:
      "Rahul is very kind and completed the project successfully. He responded immediately to all my messages and never caused delays. He's a great person to work with. Thank you!",
    project: 'Landing Page Build',
  },
  {
    name: 'Gari',
    position: 'Business Consultant',
    company: 'US Based Client',
    image: '/api/placeholder/60/60',
    rating: 5,
    testimonial:
      'Rahul is a gem! His attention to detail and commitment to the project were outstanding. He handled all feedback with professionalism and delivered everything as promised. Would definitely work again!',
    project: 'Custom Admin Panel',
  },
  {
    name: 'Sophia Lee',
    position: 'UX Lead',
    company: 'DesignMotion',
    image: '/api/placeholder/60/60',
    rating: 5,
    testimonial:
      'Rahul is the kind of developer every team wants. He communicates clearly, adapts quickly to feedback, and brings a strong sense of ownership. The final product exceeded our expectations both in design and performance.',
    project: 'Interactive Web App',
  },
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='testimonials' className='py-24 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
            What Clients Say
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Don't just take my word for it. Here's what clients and colleagues
            have to say about working with me.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className='bg-white rounded-2xl p-6 shadow-lg border border-gray-200 relative'
            >
              {/* Quote icon */}
              <div className='absolute -top-3 -left-3 w-8 h-8 bg-[#fec00c] rounded-full flex items-center justify-center'>
                <Quote size={16} className='text-black' />
              </div>

              {/* Rating */}
              <div className='flex items-center mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className='text-[#fec00c] fill-current'
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className='text-gray-600 mb-6 text-sm leading-relaxed'>
                "{testimonial.testimonial}"
              </p>

              {/* Project tag */}
              <div className='mb-4'>
                <span className='px-3 py-1 bg-[#fec00c]/10 text-[#fec00c] text-xs rounded-full font-medium'>
                  {testimonial.project}
                </span>
              </div>

              {/* Client info */}
              <div className='flex items-center'>
                <Avatar className='w-12 h-12 mr-4'>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className='bg-[#fec00c]/10 text-[#fec00c] font-semibold'>
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className='font-semibold text-gray-900 text-sm'>
                    {testimonial.name}
                  </h4>
                  <p className='text-gray-600 text-xs'>
                    {testimonial.position}
                  </p>
                  <p className='text-[#fec00c] text-xs font-medium'>
                    {testimonial.company}
                  </p>
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
          <div className='bg-white rounded-2xl p-8 border border-gray-200 inline-block'>
            <h3 className='text-2xl font-bold text-gray-900 mb-4'>
              Ready to work together?
            </h3>
            <p className='text-gray-600 mb-6'>
              Join the list of satisfied clients and let's build something
              amazing together.
            </p>
            <div className='flex items-center justify-center space-x-8 text-sm text-gray-500'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-[#fec00c]'>50+</div>
                <div>Projects Completed</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-[#fec00c]'>98%</div>
                <div>Client Satisfaction</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-[#fec00c]'>5★</div>
                <div>Average Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
