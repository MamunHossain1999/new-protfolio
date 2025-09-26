import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Code, Database, Globe, Monitor, Smartphone, Cpu } from 'lucide-react';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import developerAnimationData from '../assets/developer skills (1).json';
import resumePDF from '../assets/Cover Letter Doc (2).pdf';

const roles = ['MERN Stack Developer', 'Full Stack Developer', 'React Developer', 'Node.js Developer', 'JavaScript Developer'];
const roleColors = ['#60a5fa', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(currentRole.slice(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentIndex((prev) => (prev + 1) % roles.length);
            }
          }, 100);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-modern !pt-40  md:!pt-40 lg:!pt-52 xl:!pt-50">
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

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
            animate={{ 
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-32 right-20 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"
            animate={{ 
              y: [20, -20, 20],
              x: [10, -10, 10],
              scale: [1.2, 1, 1.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl"
            animate={{ 
              y: [-15, 15, -15],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="hero-grid flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 xl:gap-20 items-center min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-160px)] relative z-10 pt-10 md:!pt-20 lg:!pt-20 !pb-10 md:!pb-16 lg:pb-20">
          {/* Content Section */}
          <motion.div 
            className="hero-content flex flex-col gap-4 sm:gap-6 md:gap-8 border text-center md:text-left order-2 md:order-1 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mx-auto md:mx-0 w-fit"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-blue-200">Available for Projects</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.span 
                className="title-line text-base sm:text-lg md:text-xl lg:text-2xl block mb-2 text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Hi, I'm
              </motion.span>
              <motion.span 
                className="title-name block mb-2 sm:mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent font-bold"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                Md Mamun Hossain
              </motion.span>
              <motion.span 
                className="title-role text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl block font-semibold"
                style={{ color: roleColors[currentIndex] }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {displayText}
                <motion.span 
                  className="typing-cursor"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="hero-description text-sm sm:text-base md:text-lg lg:text-xl max-w-[45ch] sm:max-w-[50ch] md:max-w-[55ch] mx-auto text-center leading-relaxed text-gray-300 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span className="relative z-10">
                I create exceptional digital experiences with modern technologies. 
                Passionate about building scalable, user-focused web applications.
              </span>
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg blur-sm -z-10"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="hero-actions flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-stretch sm:items-center justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                className="btn-primary w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Let's Work Together</span>
                <ArrowRight size={16} className="sm:w-5 sm:h-5 relative z-10" />
              </motion.button>
              
              <motion.a
                href={resumePDF}
                download="Md_Mamun_Hossain_Resume.pdf"
                className="btn-secondary w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-semibold rounded-full backdrop-blur-sm bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} className="sm:w-5 sm:h-5 group-hover:animate-bounce" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="hero-social flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <span className="social-label text-xs sm:text-sm md:text-base text-gray-400 font-medium">Connect with me:</span>
              <div className="social-links flex gap-2 sm:gap-3">
                <motion.a
                  href="https://github.com/MamunHossain1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-400 hover:bg-blue-500/10 text-gray-400 hover:text-blue-400 transition-all duration-300 backdrop-blur-sm group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={18} className="group-hover:animate-pulse" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mamun-hossain1999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-400 hover:bg-blue-500/10 text-gray-400 hover:text-blue-400 transition-all duration-300 backdrop-blur-sm group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={18} className="group-hover:animate-pulse" />
                </motion.a>
                <motion.a
                  href="mailto:developermamun1999@gmail.com"
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-400 hover:bg-blue-500/10 text-gray-400 hover:text-blue-400 transition-all duration-300 backdrop-blur-sm group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={18} className="group-hover:animate-pulse" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Coding Animation Image */}
          <motion.div 
            className="hero-visual h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] order-1 md:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="coding-animation-container h-full flex items-center justify-center p-2 relative">
              <motion.div 
                className="coding-animation-wrapper w-full max-w-[350px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px] xl:max-w-[680px] relative"
                animate={{ 
                  y: [-10, 10, -10],
                  rotateY: [0, 2, 0, -2, 0]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Glowing border effect */}
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-sm"
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative z-10 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                  <Lottie 
                    animationData={developerAnimationData}
                    className="coding-lottie-animation w-full h-auto"
                    loop={true}
                    autoplay={true}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
                </div>
              </motion.div>
              
              {/* Floating Code Elements */}
              <motion.div 
                className="floating-code-element code-element-1 hidden sm:block"
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
                className="floating-code-element code-element-2 hidden sm:block"
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
                className="floating-code-element code-element-3 hidden sm:block"
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
