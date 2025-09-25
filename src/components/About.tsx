import { motion } from 'framer-motion';
import { User, Award, Target, Heart, Calendar, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
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
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const personalInfo = [
    { icon: <Calendar size={20} />, label: "Age", value: "24 Years" },
    { icon: <MapPin size={20} />, label: "Location", value: "Bangladesh, Rangpur, Panchagarh" },
    { icon: <Mail size={20} />, label: "Email", value: "developermamun1999@gmail.com" },
    { icon: <Phone size={20} />, label: "Phone", value: "+880 1795920956" }
  ];

  const achievements = [
    { icon: <Award size={24} />, title: "3 Months", desc: "Internship Experience" },
    { icon: <Target size={24} />, title: "2+ Years", desc: "Learning Experience" },
    { icon: <Heart size={24} />, title: "MERN Stack", desc: "Specialized Skills" },
    { icon: <User size={24} />, title: "Frontend", desc: "Development Focus" }
  ];

  return (
    <section className="about-section-new" id="about">
      <div className="container">
        <motion.div
          className="about-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="about-badge">
            <User size={16} />
            <span>Get to know me</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="about-title">
            About <span className="about-title-highlight">Md Mamun Hossain</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="about-subtitle">
            Frontend Developer & MERN Stack Developer with internship experience
          </motion.p>
        </motion.div>

        <div className="about-main">
          {/* Left Content */}
          <motion.div 
            className="about-content-left"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="about-story">
              <h3>My Story</h3>
              <p>
                I'm Md Mamun Hossain, a passionate Frontend Developer and MERN Stack Developer with 3 months of 
                internship experience and over 2 years of dedicated learning. My journey began with curiosity 
                about web development, which has evolved into comprehensive expertise in modern technologies.
              </p>
              <p>
                I specialize in Frontend Development and MERN Stack (MongoDB, Express.js, React, Node.js), 
                creating responsive and user-friendly web applications. My internship experience has given me 
                hands-on exposure to real-world projects and professional development practices.
              </p>
              <p>
                With 2+ years of continuous learning and 3 months of practical internship experience, I'm 
                committed to writing clean, efficient code and staying updated with the latest web development 
                trends. I bring both theoretical knowledge and practical experience to every project.
              </p>
            </div>

            <div className="about-personal-info">
              <h4>Personal Info</h4>
              <div className="personal-info-grid">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="personal-info-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="personal-info-icon">{info.icon}</div>
                    <div className="personal-info-content">
                      <span className="personal-info-label">{info.label}</span>
                      <span className="personal-info-value">{info.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="about-content-right"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="about-image-section">
              <div className="about-image-container">
                <div className="about-image-placeholder">
                  <User size={80} />
                </div>
                <div className="about-image-decoration">
                  <div className="decoration-dot decoration-dot-1"></div>
                  <div className="decoration-dot decoration-dot-2"></div>
                  <div className="decoration-dot decoration-dot-3"></div>
                </div>
              </div>
              
              <div className="about-quote">
                <blockquote>
                  "Design is not just what it looks like and feels like. Design is how it works."
                </blockquote>
                <cite>- Steve Jobs</cite>
              </div>
            </div>

            <div className="about-achievements">
              <h4>Key Achievements</h4>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="achievement-card"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-content">
                      <h5>{achievement.title}</h5>
                      <p>{achievement.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="about-bottom"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="about-cta">
            <h3>Let's Work Together</h3>
            <p>Ready to bring your ideas to life? Let's discuss your next project.</p>
            <motion.button
              className="about-cta-button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
