import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles, Code, Database, Globe, Monitor, Smartphone, Cpu } from 'lucide-react';
import Lottie from 'lottie-react';
import developerAnimationData from '../assets/developer skills (1).json';
import resumePDF from '../assets/Cover Letter Doc (2).pdf';

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
              <span className="title-role">Full Stack Developer</span>
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
              
              <motion.a
                href={resumePDF}
                download="Md_Mamun_Hossain_Resume.pdf"
                className="btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                <span>Download CV</span>
              </motion.a>
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
                  href="https://github.com/MamunHossain1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mamun-hossain1999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:developermamun1999@gmail.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Coding Animation Image */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="coding-animation-container">
              <motion.div 
                className="coding-animation-wrapper"
                animate={{ 
                  y: [-10, 10, -10],
                  rotateY: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              >
<Lottie 
                  animationData={developerAnimationData}
                  className="coding-lottie-animation"
                  loop={true}
                  autoplay={true}
                />
              </motion.div>
              
              {/* Floating Code Elements */}
              <motion.div 
                className="floating-code-element code-element-1"
                animate={{ 
                  y: [-15, 15, -15],
                  rotate: [0, 360]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                &lt;/&gt;
              </motion.div>
              
              <motion.div 
                className="floating-code-element code-element-2"
                animate={{ 
                  y: [20, -20, 20],
                  x: [-10, 10, -10]
                }}
                transition={{ 
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                { }
              </motion.div>
              
              <motion.div 
                className="floating-code-element code-element-3"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, -180, 0]
                }}
                transition={{ 
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                }}
              >
                [ ]
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Background Floating Icons */}
        <div className="bg-floating-icons">
          <motion.div 
            className="bg-icon bg-icon-1"
            whileHover={{ 
              scale: 1.3, 
              rotate: 360,
              color: "#60a5fa",
              transition: { duration: 0.6 }
            }}
            animate={{ 
              y: [-15, 15, -15],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          >
            <Code size={28} />
          </motion.div>

          <motion.div 
            className="bg-icon bg-icon-2"
            whileHover={{ 
              scale: 1.4, 
              rotate: -360,
              color: "#8b5cf6",
              transition: { duration: 0.5 }
            }}
            animate={{ 
              y: [20, -20, 20],
              x: [-10, 10, -10]
            }}
            transition={{ 
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Database size={24} />
          </motion.div>

          <motion.div 
            className="bg-icon bg-icon-3"
            whileHover={{ 
              scale: 1.5, 
              rotate: 180,
              color: "#10b981",
              transition: { duration: 0.7 }
            }}
            animate={{ 
              y: [-25, 25, -25],
              rotate: [0, 360]
            }}
            transition={{ 
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 15, repeat: Infinity, ease: "linear" }
            }}
          >
            <Globe size={26} />
          </motion.div>

          <motion.div 
            className="bg-icon bg-icon-4"
            whileHover={{ 
              scale: 1.2, 
              rotate: -180,
              color: "#f59e0b",
              transition: { duration: 0.4 }
            }}
            animate={{ 
              y: [18, -18, 18],
              x: [15, -15, 15]
            }}
            transition={{ 
              y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Monitor size={25} />
          </motion.div>

          <motion.div 
            className="bg-icon bg-icon-5"
            whileHover={{ 
              scale: 1.6, 
              rotate: 270,
              color: "#ef4444",
              transition: { duration: 0.8 }
            }}
            animate={{ 
              y: [-12, 12, -12],
              rotate: [0, -360]
            }}
            transition={{ 
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 25, repeat: Infinity, ease: "linear" }
            }}
          >
            <Smartphone size={22} />
          </motion.div>

          <motion.div 
            className="bg-icon bg-icon-6"
            whileHover={{ 
              scale: 1.3, 
              rotate: 90,
              color: "#8b5cf6",
              transition: { duration: 0.6 }
            }}
            animate={{ 
              y: [22, -22, 22],
              x: [-20, 20, -20]
            }}
            transition={{ 
              y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Cpu size={27} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
