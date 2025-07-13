"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "TechCorp Inc.",
    image: "/api/placeholder/60/60",
    rating: 5,
    testimonial:
      "Rahul is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to solve complex problems makes him a valuable team member. The e-commerce platform he built for us exceeded all expectations.",
    project: "E-Commerce Platform",
  },
  {
    name: "Michael Chen",
    position: "CTO",
    company: "StartupXYZ",
    image: "/api/placeholder/60/60",
    rating: 5,
    testimonial:
      "Working with Rahul was a game-changer for our startup. He not only delivered a robust application but also provided valuable insights that improved our overall architecture. His code quality and documentation are top-notch.",
    project: "SaaS Application",
  },
  {
    name: "Emily Rodriguez",
    position: "Design Lead",
    company: "Creative Studios",
    image: "/api/placeholder/60/60",
    rating: 5,
    testimonial:
      "Rahul has an excellent eye for translating designs into pixel-perfect implementations. He's collaborative, communicative, and always willing to go the extra mile to ensure the final product meets our design vision.",
    project: "Portfolio Website",
  },
  {
    name: "David Thompson",
    position: "Founder",
    company: "FinTech Solutions",
    image: "/api/placeholder/60/60",
    rating: 5,
    testimonial:
      "Rahul's expertise in full-stack development helped us launch our product ahead of schedule. His understanding of both frontend and backend technologies, combined with his problem-solving skills, made the development process smooth and efficient.",
    project: "Financial Dashboard",
  },
  {
    name: "Lisa Park",
    position: "Project Manager",
    company: "Digital Agency",
    image: "/api/placeholder/60/60",
    rating: 5,
    testimonial:
      "I've worked with many developers, but Rahul stands out for his professionalism and technical expertise. He communicates clearly, meets deadlines consistently, and delivers code that's maintainable and scalable.",
    project: "Client Portal",
  },
  {
    name: "James Wilson",
    position: "Senior Developer",
    company: "Tech Innovations",
    image: "/api/placeholder/60/60",
    rating: 5,
    testimonial:
      "Rahul is not just a skilled developer but also a great mentor. His code reviews were insightful, and he helped our entire team improve our development practices. His contributions significantly improved our project's success.",
    project: "Team Collaboration",
  },
];

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='testimonials' className='py-20 bg-gray-50'>
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
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
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
