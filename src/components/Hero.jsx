import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  const techIcons = [
    { name: 'React', class: 'devicon-react-original', color: '#61DAFB' },
    { name: 'JavaScript', class: 'devicon-javascript-plain', color: '#F7DF1E' },
    { name: 'CSS3', class: 'devicon-css3-plain', color: '#1572B6' },
    { name: 'HTML5', class: 'devicon-html5-plain', color: '#E34F26' },
    { name: 'Node.js', class: 'devicon-nodejs-plain', color: '#339933' },
    { name: 'TypeScript', class: 'devicon-typescript-plain', color: '#3178C6' },
    { name: 'Git', class: 'devicon-git-plain', color: '#F05032' },
    { name: 'VS Code', class: 'devicon-vscode-plain', color: '#007ACC' },
  ];

  return (
    <section id="home" className="hero-section">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      
      <div className="hero-container">
        
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-text"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="hero-title"
          >
            Hi, I'm Amine
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hero-subtitle"
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hero-description"
          >
            Crafting beautiful, responsive, and performant web experiences with modern 
            technologies. I transform ideas into elegant digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="hero-buttons"
          >
            <Link to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(255,42,42,0.7)' }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Hire Me
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </Link>

            <Link to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ff2a2a', color: '#fff', boxShadow: '0 0 30px rgba(255,42,42,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="hero-stats"
          >
            {[
              { value: '3+', label: 'Years Exp.' },
              { value: '50+', label: 'Projects' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="stat-item">
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Avatar with Orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-avatar"
        >
          <div className="avatar-wrapper">
            <div className="avatar-glow"></div>
            
            <div className="orbit-system">
              {techIcons.map((icon, index) => (
                <div 
                  key={index}
                  className="orbit-icon"
                  style={{ 
                    '--index': index,
                    '--angle': `calc(360deg / 8 * ${index})`
                  }}
                >
                  <div className="icon-wrapper">
                    <i className={icon.class} style={{ color: icon.color }}></i>
                    <span className="icon-tooltip">{icon.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <img className="avatar-image" src="./avator.jpg" alt="Amine" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="scroll-content"
        >
          <span className="scroll-text">Scroll</span>
          <div className="scroll-mouse">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="scroll-dot"
            />
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          padding: 6% 8%;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 60px;
        }

        /* LEFT: Text Section */
        .hero-text {
          flex: 1;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-title {
          font-size: 42px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 10px 0;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 36px;
          font-weight: 700;
          color: #ff2a2a;
          margin: 0 0 15px 0;
          line-height: 1.2;
        }

        .hero-description {
          font-size: 16px;
          color: #aaa;
          line-height: 1.6;
          max-width: 500px;
          margin: 0 0 25px 0;
        }

        .hero-buttons {
          display: flex;
          gap: 14px;
        }

        .btn {
          padding: 12px 28px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: #ff2a2a;
          color: white;
          border: none;
          box-shadow: 0 0 25px rgba(255, 42, 42, 0.4);
        }

        .btn-primary:hover {
          box-shadow: 0 0 40px rgba(255, 42, 42, 0.6);
        }

        .btn-outline {
          background: transparent;
          color: #ff2a2a;
          border: 2px solid #ff2a2a;
        }

        .btn-outline:hover {
          background: rgba(255, 42, 42, 0.1);
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stat-item {
          text-align: left;
        }

        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: #ff2a2a;
          margin: 0;
        }

        .stat-label {
          font-size: 13px;
          color: #666;
          margin: 4px 0 0;
        }

        /* RIGHT: Avatar Section */
        .hero-avatar {
          flex-shrink: 0;
        }

        .avatar-wrapper {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .avatar-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 42, 42, 0.2), transparent 65%);
          border-radius: 50%;
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.7; }
        }

        .orbit-system {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          animation: orbit-rotate 12s linear infinite;
        }

        @keyframes orbit-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .orbit-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50px;
          height: 50px;
          margin-top: -25px;
          margin-left: -25px;
          transform: rotate(calc(360deg / 8 * var(--index))) translateX(165px) rotate(calc(360deg / 8 * var(--index) * -1));
        }

        .icon-wrapper {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
          border: 2px solid #2a2a2a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .icon-wrapper i {
          font-size: 24px;
        }

        .icon-wrapper:hover {
          transform: scale(1.15);
          border-color: #ff2a2a;
          box-shadow: 0 0 25px rgba(255, 42, 42, 0.5), inset 0 0 15px rgba(255, 42, 42, 0.1);
        }

        .icon-wrapper:hover .icon-tooltip {
          opacity: 1;
        }

        .icon-tooltip {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #1a1a1a;
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 11px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          margin-bottom: 8px;
          border: 1px solid #333;
        }

        .avatar-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 250px;
          height: 250px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #ff2a2a;
          box-shadow: 0 0 40px rgba(255, 42, 42, 0.8), 0 0 80px rgba(255, 42, 42, 0.4);
          z-index: 10;
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
        }

        .scroll-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .scroll-text {
          font-size: 10px;
          color: #555;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .scroll-mouse {
          width: 24px;
          height: 40px;
          border: 2px solid rgba(255, 42, 42, 0.4);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding: 6px;
        }

        .scroll-dot {
          width: 4px;
          height: 12px;
          background: #ff2a2a;
          border-radius: 2px;
        }

        /* Hover to pause orbit */
        .avatar-wrapper:hover .orbit-system {
          animation-play-state: paused;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .hero-container {
            gap: 40px;
          }
          
          .avatar-wrapper {
            width: 360px;
            height: 360px;
          }
          
          .avatar-image {
            width: 230px;
            height: 230px;
          }
          
          .orbit-icon {
            transform: rotate(calc(360deg / 8 * var(--index))) translateX(150px) rotate(calc(360deg / 8 * var(--index) * -1));
          }
        }

        @media (max-width: 1024px) {
          .hero-section {
            padding: 5% 6%;
          }
          
          .hero-container {
            flex-direction: column;
            text-align: center;
            gap: 60px;
          }
          
          .hero-text {
            max-width: 100%;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .avatar-wrapper {
            width: 320px;
            height: 320px;
          }
          
          .avatar-image {
            width: 200px;
            height: 200px;
          }
          
          .orbit-icon {
            width: 46px;
            height: 46px;
            margin-top: -23px;
            margin-left: -23px;
            transform: rotate(calc(360deg / 8 * var(--index))) translateX(135px) rotate(calc(360deg / 8 * var(--index) * -1));
          }
          
          .icon-wrapper i {
            font-size: 22px;
          }
        }

        @media (max-width: 768px) {
          .hero-heading {
            font-size: 36px;
          }
          
          .hero-name {
            font-size: 48px;
          }
          
          .hero-role {
            font-size: 22px;
          }
          
          .hero-description {
            font-size: 15px;
          }
          
          .btn {
            padding: 12px 24px;
            font-size: 14px;
          }
          
          .stat-value {
            font-size: 28px;
          }
          
          .avatar-wrapper {
            width: 240px;
            height: 240px;
          }
          
          .avatar-image {
            width: 160px;
            height: 160px;
          }
          
          .orbit-icon {
            width: 36px;
            height: 36px;
            margin-top: -18px;
            margin-left: -18px;
            transform: rotate(calc(360deg / 8 * var(--index))) translateX(95px) rotate(calc(360deg / 8 * var(--index) * -1));
          }
          
          .icon-wrapper i {
            font-size: 18px;
          }
          
          .icon-tooltip {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-heading {
            font-size: 28px;
          }
          
          .hero-name {
            font-size: 36px;
          }
          
          .hero-role {
            font-size: 18px;
          }
          
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }
          
          .btn {
            width: 100%;
            justify-content: center;
          }
          
          .hero-stats {
            gap: 24px;
          }
          
          .avatar-wrapper {
            width: 200px;
            height: 200px;
          }
          
          .avatar-image {
            width: 130px;
            height: 130px;
          }
          
          .orbit-icon {
            width: 32px;
            height: 32px;
            margin-top: -16px;
            margin-left: -16px;
            transform: rotate(calc(360deg / 8 * var(--index))) translateX(75px) rotate(calc(360deg / 8 * var(--index) * -1));
          }
          
          .icon-wrapper i {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
