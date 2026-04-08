import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaBootstrap, FaDownload } from 'react-icons/fa';

const About = () => {
  const skillCards = [
    {
      title: 'Education',
      icon: FaGraduationCap,
      items: ['Computer Science Degree', 'Web Development Certification', 'UI/UX Design Course'],
      color: 'from-red-600 to-pink-600',
    },
    {
      title: 'Experience',
      icon: FaBriefcase,
      items: ['3+ Years Frontend Development', '50+ Projects Completed', 'Modern Web Technologies'],
      color: 'from-purple-600 to-red-600',
    },
    {
      title: 'Skills',
      icon: FaCode,
      items: ['React.js, Vue.js', 'Tailwind CSS, SCSS', 'JavaScript, TypeScript'],
      color: 'from-blue-600 to-red-600',
    },
  ];

  const techStack = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="about" className="py-24 px-6 lg:px-8 bg-[#0f0f0f] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Get To Know</span>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" 
               style={{ boxShadow: '0 0 20px rgba(255,27,27,0.5)' }} />
        </motion.div>

        {/* Main Grid - Image Left, Content Right */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Image - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden"
                   style={{
                     boxShadow: '0 0 30px rgba(255,27,27,0.2)',
                   }}>
                <img
                  src="/images/about.jpg"
                  alt="About Reddy"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70" />
              </div>
              
              {/* Decorative border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-red-500/30 rounded-2xl -z-10" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#111] border border-red-500/30 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <FaCode className="text-red-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Frontend Developer</p>
                    <p className="text-xs text-gray-500">Available for Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-bold font-poppins">
              Frontend Developer & <span className="text-red-500">UI/UX</span> Designer
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              I'm a passionate frontend developer with a keen eye for design and a love for creating 
              beautiful, functional user interfaces. With over 3 years of experience in web development, 
              I specialize in building modern, responsive web applications using the latest technologies.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              My approach combines technical expertise with creative problem-solving to deliver 
              exceptional user experiences. I believe in writing clean, maintainable code and 
              following best practices to ensure scalable and performant applications.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 py-4">
              {[
                { label: 'Name', value: 'Reddy' },
                { label: 'Email', value: 'Hitanimes55@gmail.com' },
                { label: 'Location', value: 'Kadapa' },
                { label: 'Available', value: 'Freelance & Full-time' },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <span className="text-red-500 text-sm font-semibold">{item.label}:</span>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111] border border-white/5 hover:border-red-500/50 transition-all duration-300 cursor-pointer"
                    >
                      <IconComponent className={tech.color} />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Download CV Button */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-xl transition-all duration-300 mt-2"
              style={{ boxShadow: '0 0 20px rgba(255,27,27,0.4)' }}
            >
              <FaDownload />
              Download CV
            </motion.a>
          </motion.div>
        </div>

        {/* Skill Cards - 3 Column Grid Below */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-[#111] rounded-xl p-6 border border-red-500/20 transition-all duration-300"
                style={{
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(255,27,27,0.3), 0 20px 40px rgba(0,0,0,0.3)';
                  e.currentTarget.style.borderColor = 'rgba(255,27,27,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,27,27,0.2)';
                }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} p-3 mb-5`}>
                  <IconComponent className="w-full h-full text-white" />
                </div>
                
                <h4 className="text-xl font-bold font-poppins mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {card.title}
                </h4>
                
                <ul className="space-y-3">
                  {card.items.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
