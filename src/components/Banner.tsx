import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Rocket, Globe, Brain, Zap, ArrowRight, Play } from 'lucide-react';

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="banner-container-new">
      {/* Advanced Background with 3D Elements */}
      <div className="banner-bg-advanced">
        <motion.div 
          className="bg-mesh bg-mesh-1"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="bg-mesh bg-mesh-2"
          animate={{
            rotate: [360, 0],
            scale: [1.2, 0.8, 1.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="bg-mesh bg-mesh-3"
          animate={{
            rotate: [0, -360],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Interactive Particles System */}
      <div className="particles-system">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="advanced-particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              opacity: 0 
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced Mouse Follower */}
      <motion.div
        className="advanced-cursor"
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="cursor-ring"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <div className="container">
        <motion.div
          className="banner-content-new"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section with 3D Cards */}
          <motion.div className="banner-hero" variants={itemVariants}>
            <motion.div 
              className="hero-badge-new"
              whileHover={{ scale: 1.1 }}
            >
              <Rocket size={16} />
              <span>Welcome to Innovation</span>
            </motion.div>
            
            <motion.h1 className="banner-title-new">
              <motion.span
                className="title-main"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                Crafting Digital
              </motion.span>
              <motion.span
                className="title-highlight"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                Experiences
              </motion.span>
              <motion.span
                className="title-sub"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                That Matter
              </motion.span>
            </motion.h1>

            <motion.p 
              className="banner-description-new"
              variants={itemVariants}
            >
              Transforming ideas into powerful web applications with cutting-edge MERN stack technology. 
              Let's build something extraordinary together.
            </motion.p>
          </motion.div>

          {/* Interactive Feature Grid */}
          <motion.div className="features-grid-new" variants={itemVariants}>
            <motion.div
              className="feature-card-new"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                boxShadow: "0 25px 50px rgba(102, 126, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="card-glow"></div>
              <motion.div
                className="feature-icon-new"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Zap size={28} />
              </motion.div>
              <h3>Lightning Speed</h3>
              <p>Blazing fast performance with optimized code architecture</p>
              <div className="card-stats">
                <span>99.9% Uptime</span>
              </div>
            </motion.div>

            <motion.div
              className="feature-card-new featured-new"
              whileHover={{ 
                scale: 1.08, 
                rotateY: -10,
                boxShadow: "0 30px 60px rgba(240, 147, 251, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="card-glow featured-glow"></div>
              <motion.div
                className="feature-icon-new"
                animate={{ 
                  y: [-5, 5, -5],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Brain size={28} />
              </motion.div>
              <h3>Smart Solutions</h3>
              <p>AI-powered development with intelligent problem solving</p>
              <div className="card-stats">
                <span>100% Success Rate</span>
              </div>
            </motion.div>

            <motion.div
              className="feature-card-new"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                boxShadow: "0 25px 50px rgba(16, 185, 129, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="card-glow"></div>
              <motion.div
                className="feature-icon-new"
                animate={{ 
                  rotate: [0, -360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Globe size={28} />
              </motion.div>
              <h3>Global Reach</h3>
              <p>Scalable solutions for worldwide accessibility</p>
              <div className="card-stats">
                <span>50+ Countries</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Advanced CTA Section */}
          <motion.div className="banner-cta-new" variants={itemVariants}>
            <motion.button
              className="cta-primary-new"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(102, 126, 234, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Project</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
              <div className="button-ripple"></div>
            </motion.button>

            <motion.button
              className="cta-secondary-new"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={18} />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats Counter */}
          <motion.div className="stats-section-new" variants={itemVariants}>
            <div className="stat-item-new">
              <motion.span 
                className="stat-number-new"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                50+
              </motion.span>
              <span className="stat-label-new">Projects Completed</span>
            </div>
            <div className="stat-item-new">
              <motion.span 
                className="stat-number-new"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                100%
              </motion.span>
              <span className="stat-label-new">Client Satisfaction</span>
            </div>
            <div className="stat-item-new">
              <motion.span 
                className="stat-number-new"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9 }}
              >
                24/7
              </motion.span>
              <span className="stat-label-new">Support Available</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Advanced Decorative Elements */}
      <div className="advanced-decorations">
        <motion.div
          className="floating-shape shape-1"
          animate={{
            rotate: [0, 360],
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="floating-shape shape-2"
          animate={{
            rotate: [360, 0],
            y: [20, -20, 20],
            x: [10, -10, 10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="floating-shape shape-3"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
