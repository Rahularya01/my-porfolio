"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
            Let's Work Together
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>
              Get in Touch
            </h3>
            <p className='text-gray-600 mb-8'>
              I'm always open to discussing new opportunities, creative
              projects, or potential collaborations. Feel free to reach out
              through any of the channels below.
            </p>

            <div className='space-y-6'>
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-[#fec00c]/10 rounded-full flex items-center justify-center mr-4'>
                  <Mail className='text-[#fec00c]' size={20} />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900'>Email</h4>
                  <a
                    href='mailto:rahul@example.com'
                    className='text-gray-600 hover:text-[#fec00c] transition-colors'
                  >
                    rahul@example.com
                  </a>
                </div>
              </div>

              <div className='flex items-center'>
                <div className='w-12 h-12 bg-[#fec00c]/10 rounded-full flex items-center justify-center mr-4'>
                  <Phone className='text-[#fec00c]' size={20} />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900'>Phone</h4>
                  <a
                    href='tel:+1234567890'
                    className='text-gray-600 hover:text-[#fec00c] transition-colors'
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className='flex items-center'>
                <div className='w-12 h-12 bg-[#fec00c]/10 rounded-full flex items-center justify-center mr-4'>
                  <MapPin className='text-[#fec00c]' size={20} />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900'>Location</h4>
                  <p className='text-gray-600'>Available Worldwide (Remote)</p>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <h4 className='font-semibold text-gray-900 mb-4'>Follow Me</h4>
              <div className='flex space-x-4'>
                <a
                  href='https://github.com/rahul'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-gray-100 hover:bg-[#fec00c] rounded-full flex items-center justify-center transition-colors group'
                >
                  <Github
                    size={20}
                    className='text-gray-600 group-hover:text-black'
                  />
                </a>
                <a
                  href='https://linkedin.com/in/rahul'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-gray-100 hover:bg-[#fec00c] rounded-full flex items-center justify-center transition-colors group'
                >
                  <Linkedin
                    size={20}
                    className='text-gray-600 group-hover:text-black'
                  />
                </a>
                <a
                  href='https://twitter.com/rahul'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-gray-100 hover:bg-[#fec00c] rounded-full flex items-center justify-center transition-colors group'
                >
                  <Twitter
                    size={20}
                    className='text-gray-600 group-hover:text-black'
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fec00c] focus:border-[#fec00c] transition-colors'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fec00c] focus:border-[#fec00c] transition-colors'
                    placeholder='your@email.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fec00c] focus:border-[#fec00c] transition-colors'
                  placeholder='Project inquiry'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fec00c] focus:border-[#fec00c] transition-colors resize-none'
                  placeholder='Tell me about your project...'
                />
              </div>

              <Button
                type='submit'
                size='lg'
                className='w-full flex items-center justify-center gap-2'
              >
                <Send size={20} />
                Send Message
              </Button>
            </form>

            <div className='mt-8 p-6 bg-gray-50 rounded-lg'>
              <h4 className='font-semibold text-gray-900 mb-2'>
                Quick Response
              </h4>
              <p className='text-gray-600 text-sm'>
                I typically respond to all inquiries within 24 hours. For urgent
                projects, feel free to reach out via phone or email directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
