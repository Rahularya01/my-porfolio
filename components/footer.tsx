import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-3 gap-8'>
          {/* Brand */}
          <div>
            <div className='font-bold text-xl mb-4'>
              <span className='text-[#fec00c]'>Rahul</span>
              <span className='text-white'>.dev</span>
            </div>
            <p className='text-gray-400 mb-4'>
              Full Stack Developer passionate about creating modern, scalable
              web applications that make a difference.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://github.com/rahul'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-[#fec00c] transition-colors'
              >
                <Github size={20} />
              </a>
              <a
                href='https://linkedin.com/in/rahul'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-[#fec00c] transition-colors'
              >
                <Linkedin size={20} />
              </a>
              <a
                href='mailto:rahul@example.com'
                className='text-gray-400 hover:text-[#fec00c] transition-colors'
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-semibold text-lg mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#home'
                  className='text-gray-400 hover:text-[#fec00c] transition-colors'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-gray-400 hover:text-[#fec00c] transition-colors'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#experience'
                  className='text-gray-400 hover:text-[#fec00c] transition-colors'
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='text-gray-400 hover:text-[#fec00c] transition-colors'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-400 hover:text-[#fec00c] transition-colors'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-semibold text-lg mb-4'>Services</h3>
            <ul className='space-y-2 text-gray-400'>
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>UI/UX Design</li>
              <li>API Development</li>
              <li>DevOps & Deployment</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm'>
            © {currentYear} Rahul. All rights reserved.
          </p>
          <p className='text-gray-400 text-sm flex items-center mt-4 md:mt-0'>
            Made with <Heart size={16} className='text-[#fec00c] mx-1' /> and
            lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
