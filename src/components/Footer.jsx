import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:amine@dev.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold font-poppins mb-4">
              <span className="text-red-500">&lt;</span>
              <span className="text-white">Amine</span>
              <span className="text-red-500">/&gt;</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Crafting beautiful digital experiences with passion and precision. 
              Let's build something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-10 h-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center hover:border-red-500/50 transition-all duration-300"
                    style={{ boxShadow: 'none' }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 15px rgba(255,27,27,0.3)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <IconComponent className="text-gray-400 hover:text-red-500 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="block text-gray-400 hover:text-red-500 transition-colors cursor-pointer text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>amine@dev.com</p>
              <p>+1 234 567 890</p>
              <p>Remote / Worldwide</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} <span className="text-white font-semibold">Amine</span>. Made with{' '}
            <FaHeart className="text-red-500 text-xs animate-pulse" />{' '}
            All rights reserved.
          </p>
          
          <motion.a
            href="#home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center hover:bg-red-500 transition-all duration-300"
            style={{ boxShadow: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 20px rgba(255,27,27,0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
          >
            <FaArrowUp className="text-red-500" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
