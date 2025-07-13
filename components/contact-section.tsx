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
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Add imports for react-hook-form, zod, and resolver
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define Zod schema for validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Use react-hook-form instead of local state
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Update handleSubmit to use react-hook-form
  const onSubmit = async (formData: ContactFormData) => {
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    }
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
            Have a project or an idea? I'm always open to new opportunities,
            collaborations, or just a quick tech chat.
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
              Whether it's building a product or contributing to your tech team,
              I bring 5+ years of real-world experience in full-stack
              development. Drop me a message and let’s build something impactful
              together.
            </p>

            <div className='space-y-6'>
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-[#fec00c]/10 rounded-full flex items-center justify-center mr-4'>
                  <Mail className='text-[#fec00c]' size={20} />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900'>Email</h4>
                  <a
                    href='mailto:aryarahul819@gmail.com'
                    className='text-gray-600 hover:text-[#fec00c] transition-colors'
                  >
                    aryarahul819@gmail.com
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
                    href='tel:+917009391495'
                    className='text-gray-600 hover:text-[#fec00c] transition-colors'
                  >
                    +91 70093 91495
                  </a>
                </div>
              </div>

              <div className='flex items-center'>
                <div className='w-12 h-12 bg-[#fec00c]/10 rounded-full flex items-center justify-center mr-4'>
                  <MapPin className='text-[#fec00c]' size={20} />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900'>Location</h4>
                  <p className='text-gray-600'>
                    Based in India — Available Worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <h4 className='font-semibold text-gray-900 mb-4'>
                Connect Online
              </h4>
              <div className='flex space-x-4'>
                <a
                  href='https://github.com/Rahularya01'
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
                  href='https://linkedin.com/in/rahul-arya-0993841b7'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-gray-100 hover:bg-[#fec00c] rounded-full flex items-center justify-center transition-colors group'
                >
                  <Linkedin
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
            {/* Use handleSubmit from react-hook-form */}
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
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
                    {...register("name")}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fec00c] focus:border-[#fec00c] transition-colors'
                    placeholder='Your name'
                  />
                  {errors.name && (
                    <span className='text-red-600 text-sm'>
                      {errors.name.message}
                    </span>
                  )}
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
                    {...register("email")}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fec00c] focus:border-[#fec00c] transition-colors'
                    placeholder='your@email.com'
                  />
                  {errors.email && (
                    <span className='text-red-600 text-sm'>
                      {errors.email.message}
                    </span>
                  )}
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
                  {...register("subject")}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fec00c] focus:border-[#fec00c] transition-colors'
                  placeholder='Project inquiry'
                />
                {errors.subject && (
                  <span className='text-red-600 text-sm'>
                    {errors.subject.message}
                  </span>
                )}
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
                  {...register("message")}
                  required
                  rows={6}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fec00c] focus:border-[#fec00c] transition-colors resize-none'
                  placeholder='Tell me about your project...'
                />
                {errors.message && (
                  <span className='text-red-600 text-sm'>
                    {errors.message.message}
                  </span>
                )}
              </div>

              <Button
                type='submit'
                size='lg'
                disabled={isSubmitting}
                className='w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed'
              >
                <Send size={20} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border-red-200"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle size={20} className='text-green-600' />
                  ) : (
                    <AlertCircle size={20} className='text-red-600' />
                  )}
                  <span className='text-sm font-medium'>
                    {submitStatus.message}
                  </span>
                </motion.div>
              )}
            </form>

            <div className='mt-8 p-6 bg-gray-50 rounded-lg'>
              <h4 className='font-semibold text-gray-900 mb-2'>
                Quick Response
              </h4>
              <p className='text-gray-600 text-sm'>
                I typically respond within 24 hours. For urgent queries, feel
                free to call or email me directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
