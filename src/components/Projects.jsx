import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio with smooth animations and clean UI.',
      image: './assets/Anime streaming.jpeg',
      tech: ['HTML', 'CSS', 'JS'],
      live: '#',
      github: '#',
    },
    {
      title: '2D Platformer Game',
      description: 'Pixel-art platformer game built with Unity and C#.',
      image: './assets/2 platform game.jpeg',
      tech: ['Unity', 'C#'],
      live: '#',
      github: '#',
    },
    {
      title: 'To Do List',
      description: 'Task management app with add, edit, and delete functionality.',
      image: './assets/to do list.jpeg',
      tech: ['HTML', 'CSS', 'JS'],
      live: '#',
      github: '#',
    },
    {
      title: 'Task Manager',
      description: 'Organize and prioritize daily tasks with a clean interface.',
      image: './assets/task manager.jpeg',
      tech: ['HTML', 'CSS', 'JS'],
      live: '#',
      github: '#',
    },
    {
      title: 'Game Landing Page',
      description: 'Landing page with animations and parallax effects.',
      image: './assets/game landing page.jpeg',
      tech: ['HTML', 'CSS', 'GSAP'],
      live: '#',
      github: '#',
    },
    {
      title: 'E-Commerce Website',
      description: 'Online store with product filtering and cart system.',
      image: './assets/e commerce.jpeg',
      tech: ['HTML', 'CSS', 'JS', 'MySQL'],
      live: '#',
      github: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Projects</h2>
          <div className="section-underline"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="project-card"
            >
              {/* Image */}
              <div className="card-image">
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>

              {/* Content */}
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>

                {/* Tech Tags */}
                <div className="tech-tags">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="card-buttons">
                  <a href={project.live} className="btn btn-demo">
                    Live Demo
                  </a>
                  <a href={project.github} className="btn btn-github">
                    <FaGithub size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .projects-section {
          padding: 100px 8%;
          background: #0a0a0a;
          position: relative;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 42px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px 0;
        }

        .section-underline {
          width: 80px;
          height: 4px;
          background: #ff2a2a;
          margin: 0 auto;
          border-radius: 2px;
          box-shadow: 0 0 20px rgba(255, 42, 42, 0.5);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .project-card {
          background: #0f0f0f;
          border-radius: 15px;
          overflow: hidden;
          border: 1px solid rgba(255, 42, 42, 0.15);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 40px rgba(255, 42, 42, 0.3), 0 20px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 42, 42, 0.4);
        }

        .card-image {
          width: 100%;
          height: 180px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover .card-image img {
          transform: scale(1.05);
        }

        .card-content {
          padding: 20px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          margin: 0 0 10px 0;
        }

        .card-description {
          font-size: 14px;
          color: #aaa;
          line-height: 1.6;
          margin: 0 0 15px 0;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }

        .tech-tag {
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 500;
          color: #ff2a2a;
          border: 1px solid #ff2a2a;
          border-radius: 20px;
          background: rgba(255, 42, 42, 0.08);
        }

        .card-buttons {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .btn {
          padding: 8px 18px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 999px;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .btn-demo {
          background: #ff2a2a;
          color: white;
          border: none;
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.6);
        }

        .btn-demo:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(255, 0, 0, 0.8);
        }

        .btn-github {
          background: transparent;
          color: white;
          border: 1px solid #444;
        }

        .btn-github:hover {
          border-color: #ff2a2a;
          color: #ff2a2a;
          background: rgba(255, 0, 0, 0.1);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 32px;
          }

          .card-buttons {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
