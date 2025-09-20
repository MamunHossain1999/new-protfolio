import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-modern">
      {/* Background Elements */}
      <div className="hero-bg">
        <motion.div 
          className="bg-orb bg-orb-1"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="bg-orb bg-orb-2"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container">
        <div className="hero-grid">
          {/* Content Section */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div 
              className="status-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} />
              <span>Available for Projects</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="title-line">Hi, I'm</span>
              <span className="title-name">Md Mamun Hossain</span>
              <span className="title-role">MERN Stack Developer</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I create exceptional digital experiences with modern technologies. 
              Passionate about building scalable, user-focused web applications.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Work Together</span>
                <ArrowRight size={18} />
              </motion.button>
              
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span className="social-label">Connect with me:</span>
              <div className="social-links">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:contact@example.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="visual-container">
              {/* Code Card */}
              <motion.div 
                className="code-card"
                animate={{ 
                  y: [-10, 10, -10],
                  rotateY: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                whileHover={{ scale: 1.05, rotateY: 15 }}
              >
                <div className="card-header">
                  <div className="card-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="card-title">portfolio.js</span>
                </div>
                <div className="card-content">
                  <div className="code-line">
                    <span className="line-number">1</span>
                    <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {"{"}
                  </div>
                  <div className="code-line">
                    <span className="line-number">2</span>
                    &nbsp;&nbsp;<span className="code-property">name</span>: <span className="code-string">'Mamun'</span>,
                  </div>
                  <div className="code-line">
                    <span className="line-number">3</span>
                    &nbsp;&nbsp;<span className="code-property">skills</span>: [<span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>],
                  </div>
                  <div className="code-line">
                    <span className="line-number">4</span>
                    &nbsp;&nbsp;<span className="code-property">passion</span>: <span className="code-string">'Building Amazing Apps'</span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">5</span>
                    {"}"};
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack Card */}
              <motion.div 
                className="tech-card"
                animate={{ 
                  y: [10, -10, 10],
                  rotateY: [0, -5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                whileHover={{ scale: 1.05, rotateY: -15 }}
              >
                <div className="tech-header">
                  <Code size={24} />
                  <span>Tech Stack</span>
                </div>
                <div className="tech-grid">
                  <span className="tech-item">React</span>
                  <span className="tech-item">Node.js</span>
                  <span className="tech-item">MongoDB</span>
                  <span className="tech-item">Express</span>
                  <span className="tech-item">TypeScript</span>
                  <span className="tech-item">Next.js</span>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                className="floating-element element-1"
                animate={{ 
                  y: [-20, 20, -20],
                  rotate: [0, 360]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
              >
                <Sparkles size={20} />
              </motion.div>
              
              <motion.div 
                className="floating-element element-2"
                animate={{ 
                  y: [20, -20, 20],
                  x: [-10, 10, -10]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Code size={18} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
