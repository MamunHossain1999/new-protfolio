import { motion } from 'framer-motion';
import { 
  Heart, 
  Code, 
  Coffee, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Zap,
  Star,
  Rocket,
  Globe
} from 'lucide-react';

const Footer = () => {
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
      },
    },
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: "GitHub",
      url: "https://github.com/mamun-dev",
      color: "#333"
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn", 
      url: "https://linkedin.com/in/mamun-dev",
      color: "#0077b5"
    },
    {
      icon: <Twitter size={20} />,
      name: "Twitter",
      url: "https://twitter.com/mamun_dev",
      color: "#1da1f2"
    },
    {
      icon: <Mail size={20} />,
      name: "Email",
      url: "mailto:developermamun1999@gmail.com",
      color: "#ea4335"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "Mobile Apps",
    "API Development"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section-new">
      {/* Animated Background */}
      <div className="footer-bg-animation">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="footer-particle"
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="footer-brand">
              <div className="brand-logo">
                <motion.div
                  className="logo-icon"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Code size={32} />
                </motion.div>
                <div className="brand-text">
                  <h3>Md Mamun Hossain</h3>
                  <p>Full Stack Developer</p>
                </div>
              </div>
              
              <p className="brand-description">
                Crafting digital experiences with passion and precision. 
                Let's build something amazing together!
              </p>

              <div className="footer-stats">
                <div className="stat-item">
                  <Rocket size={16} />
                  <span>50+ Projects</span>
                </div>
                <div className="stat-item">
                  <Star size={16} />
                  <span>100% Quality</span>
                </div>
                <div className="stat-item">
                  <Coffee size={16} />
                  <span>500+ Cups</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={link.href}>{link.name}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="footer-services">
              <h4>Services</h4>
              <ul>
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Zap size={14} />
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="footer-contact">
              <h4>Get In Touch</h4>
              <div className="contact-items">
                <motion.a
                  href="mailto:developermamun1999@gmail.com"
                  className="contact-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail size={16} />
                  <span>developermamun1999@gmail.com</span>
                </motion.a>
                <motion.a
                  href="tel:+8801795920956"
                  className="contact-item"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone size={16} />
                  <span>+880 1795920956</span>
                </motion.a>
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-links-unique">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link-unique social-${social.name.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.15,
                    rotateY: 15,
                    rotateX: 10
                  }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
                >
                  <div className="social-icon-wrapper">
                    <div className="social-icon-bg"></div>
                    <div className="social-icon-content">
                      {social.icon}
                    </div>
                    <div className="social-ripple"></div>
                  </div>
                  <span className="social-label">{social.name}</span>
                  <div className="social-tooltip">
                    {social.name === 'GitHub' && 'View my code'}
                    {social.name === 'LinkedIn' && 'Professional network'}
                    {social.name === 'Twitter' && 'Follow updates'}
                    {social.name === 'Email' && 'Send message'}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants} className="footer-newsletter">
            <div className="newsletter-content">
              <Globe size={24} />
              <h4>Stay Updated</h4>
              <p>Get notified about my latest projects and tech insights</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div variants={itemVariants} className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>
                  © {currentYear} Md Mamun Hossain. Made with{' '}
                  <motion.span
                    className="heart"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart size={16} fill="currentColor" />
                  </motion.span>{' '}
                  in Bangladesh
                </p>
              </div>
              
              <div className="footer-actions">
                <motion.button
                  className="scroll-top"
                  onClick={scrollToTop}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp size={20} />
                  <span>Back to Top</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
