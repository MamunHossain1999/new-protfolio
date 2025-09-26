import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Code, Sparkles, Database, Globe, Monitor, Smartphone, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import developerAnimationData from '../assets/developer skills (1).json';
import resumePDF from '../assets/Cover Letter Doc (2).pdf';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const texts = [
      'Frontend Developer',
      'MERN Stack Developer', 
      'React Specialist',
      'Full Stack Engineer'
    ];
    
    let timeoutId: NodeJS.Timeout | null = null;
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      const currentText = texts[currentIndex];
      
      if (!isDeleting) {
        // Typing
        setDisplayText(currentText.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentText.length) {
          // Finished typing, wait then start deleting
          timeoutId = setTimeout(() => {
            isDeleting = true;
            type();
          }, 2000);
          return;
        }
        
        timeoutId = setTimeout(type, 100);
      } else {
        // Deleting
        setDisplayText(currentText.substring(0, charIndex));
        charIndex--;
        
        if (charIndex < 0) {
          // Finished deleting, move to next text
          isDeleting = false;
          charIndex = 0;
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          timeoutId = setTimeout(type, 500);
          return;
        }
        
        timeoutId = setTimeout(type, 50);
      }
    };
    
    timeoutId = setTimeout(type, 1000);
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentIndex]);

  // Screen size detection


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

      <div className="container mx-auto !px-2 md:!px-0 lg:!px-0 !pt-12 md:!pt-20 lg:!pt-20 !pb-10 md:!pb-16 lg:pb-18 ">
        <div className="hero-grid flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16  items-center">
          {/* Content Section */}
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div 
              className="status-badge mx-auto lg:mx-0 mb-4 sm:mb-6 text-xs xs:text-sm sm:text-base "
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">Available for Projects</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="hero-title text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center md:!text-center lg:!text-left leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="title-line text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl block mb-1 sm:mb-2">Hi, I'm</span>
              <span className="title-name block mb-1 sm:mb-2">Md Mamun Hossain</span>
              <span 
                className="title-role text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl block"
                style={{ 
                  color: ['#60a5fa', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'][currentIndex]
                }}
              >
                {displayText}
                <span className="typing-cursor">|</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className=" mx-auto lg:mx-0 text-center w-3x4 lg:text-left justify-center text-base md:text-lg lg:text-xl !px-0 sm:px-0 leading-relaxed"
              // style={{ textAlign: isDesktop ? 'left' : 'center' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I create exceptional digital experiences with modern technologies. 
              Passionate about building scalable, user-focused web applications.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="hero-actions flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center md:!justify-center lg:!justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="btn-primary w-full sm:w-auto max-w-xs mx-auto sm:mx-0 text-sm xs:text-base sm:text-lg font-semibold py-3 px-6"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#skills"><span className='text-white'>Let's Work Together</ span></a>
                <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </motion.button>
              
              <motion.a
                href={resumePDF}
                download="Md_Mamun_Hossain_Resume.pdf"
                className="btn-secondary w-full sm:w-auto max-w-xs mx-auto sm:mx-0 text-sm xs:text-base sm:text-lg font-semibold py-3 px-6"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="hero-social flex flex-col items-center md:!items-center lg:!items-start gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span className="social-label text-center md:!text-center lg:!text-left text-xs xs:text-sm sm:text-base font-medium">Connect with me:</span>
              <div className="social-links flex gap-2 xs:gap-3 sm:gap-4 justify-center md:!justify-center lg:!justify-start">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 flex items-center justify-center"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 flex items-center justify-center"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />
                </motion.a>
                <motion.a
                  href="mailto:developermamun1999@gmail.com?subject=Hello%20Mamun%20%E2%80%93%20Project%20Inquiry"
                  className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 flex items-center justify-center"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Coding Animation */}
          <motion.div 
            className="hero-visual h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[600px] order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="coding-animation-container h-full">
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
                {"{"}{"}"} 
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
        <div className="bg-floating-icons hidden md:block">
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
