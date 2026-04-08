import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: SiDiscord, href: 'https://discord.com', label: 'Discord' },
    { icon: FaEnvelope, href: 'mailto:amine@example.com', label: 'Email' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
      >
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="nav-logo"
        >
          <span className="text-red-500">amine</span>
          <span className="text-white">.</span>
        </Link>

        {/* Desktop Navigation - Centered Pill */}
        <div className="nav-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-80}
              className={activeSection === link.id ? 'active' : ''}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="nav-icons">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
              >
                <IconComponent />
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-overlay"
          >
            <div 
              className="mobile-overlay-bg"
              onClick={() => setIsOpen(false)}
            />
            <div className="mobile-menu-content">
              <div className="mobile-logo">
                <span className="text-red-500">amine</span>
                <span className="text-white">.</span>
              </div>

              <div className="mobile-nav-links">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className={activeSection === link.id ? 'active' : ''}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mobile-social">
                <p className="mobile-social-label">Connect with me</p>
                <div className="mobile-social-icons">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.label}
                      >
                        <IconComponent />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 8%;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          padding: 12px 8%;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .nav-logo {
          font-size: 22px;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
        }

        .nav-menu {
          display: flex;
          gap: 4px;
          background: rgba(255, 0, 0, 0.08);
          padding: 6px 16px;
          border-radius: 40px;
        }

        .nav-menu a {
          color: #bbb;
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 20px;
          transition: all 0.25s ease;
        }

        .nav-menu a:hover {
          color: white;
        }

        .nav-menu a.active {
          background: linear-gradient(135deg, #ff2a2a, #ff4d4d);
          color: white;
          box-shadow: 0 3px 12px rgba(255, 42, 42, 0.3);
        }

        .nav-icons {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nav-icons a {
          color: #ccc;
          font-size: 18px;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-icons a:hover {
          color: #ff2d2d;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 40;
        }

        .mobile-overlay-bg {
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 10, 0.98);
          backdrop-filter: blur(20px);
        }

        .mobile-menu-content {
          position: relative;
          padding: 100px 24px 40px;
          height: 100%;
        }

        .mobile-logo {
          text-align: center;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 36px;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 6px;
          max-width: 300px;
          margin: 0 auto;
        }

        .mobile-nav-links a {
          display: block;
          text-align: center;
          color: #999;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          padding: 14px 20px;
          border-radius: 14px;
          transition: all 0.25s ease;
        }

        .mobile-nav-links a:hover {
          color: white;
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-nav-links a.active {
          background: linear-gradient(135deg, #ff2a2a, #ff4d4d);
          color: white;
        }

        .mobile-social {
          position: absolute;
          bottom: 40px;
          left: 0;
          right: 0;
          text-align: center;
        }

        .mobile-social-label {
          font-size: 12px;
          color: #555;
          margin-bottom: 14px;
        }

        .mobile-social-icons {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .mobile-social-icons a {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #111;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #888;
          font-size: 18px;
          transition: all 0.25s ease;
        }

        .mobile-social-icons a:hover {
          color: #ff2a2a;
          border-color: rgba(255, 42, 42, 0.5);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .nav-menu,
          .nav-icons {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
