import { motion } from 'framer-motion';
import { ExternalLink, Github, Rocket, Star, Calendar, ArrowRight, Code2, Layers, Sparkles } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: "Digital Wallet App",
      subtitle: "Secure Payment Solution",
      description: "A comprehensive digital wallet application featuring secure money transfers, bill payments, transaction history, and multi-currency support. Built with advanced security protocols and real-time notifications for seamless financial management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Socket.io"],
      github_Client: "https://github.com/MamunHossain1999/digital-wallet-client",
      github_Server: "https://github.com/MamunHossain1999/digital-wallet-server",
      live: "https://digital-wallet-client-mu.vercel.app/",
      featured: true,
      category: "FinTech",
      year: "2024",
      status: "Live",
      highlights: ["Secure Payments", "Multi-Currency", "Real-time Notifications"]
    },
    // {
    //   id: 2,
    //   title: "School Management System",
    //   subtitle: "Educational Administration Platform",
    //   description: "Complete school management solution with student enrollment, attendance tracking, grade management, parent-teacher communication, and administrative tools. Features comprehensive reporting and analytics for educational institutions.",
    //   image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&crop=center",
    //   technologies: ["React", "Express.js", "MySQL", "Chart.js", "PDF-lib", "Nodemailer"],
    //   github_Client: "https://github.com/MamunHossain1999/school-management-client",
    //   github_Server: "https://github.com/MamunHossain1999/school-management-server",
    //   live: "https://school-management-mamun.netlify.app",
    //   featured: true,
    //   category: "Education",
    //   year: "2024",
    //   status: "Live",
    //   highlights: ["Student Portal", "Attendance System", "Grade Analytics"]
    // },
    {
      id: 3,
      title: "Library Management System",
      subtitle: "Digital Library Solution",
      description: "Modern library management system with book cataloging, member management, borrowing/returning system, fine calculation, and digital book access. Includes advanced search functionality and inventory management.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB", "Mongoose", "Tailwind CSS", "QR Code"],
      github_Client: "https://github.com/MamunHossain1999/libray-management-system-frontend",
      github_Server: "https://github.com/MamunHossain1999/Library-API",
      live: "https://libray-management-system-frontend.vercel.app/",
      featured: true,
      category: "Management",
      year: "2024",
      status: "Live",
      highlights: ["Book Catalog", "Member Portal", "Fine Management"]
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      subtitle: "Online Shopping Solution",
      description: "Full-featured e-commerce platform with product management, shopping cart, secure checkout, order tracking, and admin dashboard. Includes payment integration and inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
      github_Client: "https://github.com/MamunHossain1999/ecommerce-client",
      github_Server: "https://github.com/MamunHossain1999/ecommerce-server",
      live: "https://ecommerce-mamun.netlify.app",
      featured: false,
      category: "E-Commerce",
      year: "2023",
      status: "Live",
      highlights: ["Payment Gateway", "Order Tracking", "Admin Panel"]
    },
    {
      id: 5,
      title: "Task Management App",
      subtitle: "Productivity Tool",
      description: "Collaborative task management application with project organization, team collaboration, deadline tracking, and progress monitoring. Features real-time updates and notification system.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io", "PWA"],
      github_Client: "https://github.com/MamunHossain1999/task-management-client",
      github_Server: "https://github.com/MamunHossain1999/task-management-server",
      live: "https://task-manager-mamun.netlify.app",
      featured: false,
      category: "Productivity",
      year: "2023",
      status: "Live",
      highlights: ["Team Collaboration", "Real-time Updates", "Mobile App"]
    },
    {
      id: 6,
      title: "Weather Dashboard",
      subtitle: "Weather Monitoring App",
      description: "Comprehensive weather dashboard with current conditions, forecasts, weather maps, and alerts. Features location-based weather data and historical weather information.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation", "PWA"],
      github: "https://github.com/MamunHossain1999/weather-dashboard",
      live: "https://weather-dashboard-mamun.netlify.app",
      featured: false,
      category: "Utility",
      year: "2023",
      status: "Live",
      highlights: ["Weather Forecast", "Interactive Maps", "Location-based"]
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="projects-section-new" id="projects">
      <div className="container">
        <div className="projects-container">
        {/* Header */}
        <motion.div
          className="projects-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="projects-badge">
            <Rocket size={16} />
            <span>Portfolio Showcase</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="projects-title text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured <span className="projects-title-highlight">Projects</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="projects-subtitle text-base sm:text-lg text-gray-600">
            Discover my latest work showcasing innovative solutions, cutting-edge technologies, and exceptional user experiences
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div 
          className="featured-projects"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`featured-project ${index % 2 === 1 ? 'reverse' : ''}`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-visual">
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <Layers size={32} />
                      <span>View Project</span>
                    </div>
                  </div>
                  <div className="project-status">
                    <span className={`status-badge ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="project-details">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">
                    <Calendar size={14} />
                    {project.year}
                  </span>
                </div>
                
                <h3 className="project-name text-xl sm:text-2xl font-bold">{project.title}</h3>
                <p className="project-tagline text-sm sm:text-base text-blue-600">{project.subtitle}</p>
                <p className="project-desc text-sm sm:text-base text-gray-600">{project.description}</p>
                
                <div className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">
                      <Star size={12} />
                      {highlight}
                    </span>
                  ))}
                </div>
                
                <div className="project-tech-stack">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                  {project.github_Client && project.github_Server ? (
                    <>
                      <motion.a
                        href={project.github_Client}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        Client Code
                      </motion.a>
                      <motion.a
                        href={project.github_Server}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        Server Code
                      </motion.a>
                    </>
                  ) : (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects Grid */}
        <motion.div 
          className="other-projects"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-content">
              <Code2 size={24} />
              <h3 className="text-xl sm:text-2xl font-bold">More Projects</h3>
              <p className="text-sm sm:text-base text-gray-600">Additional work and experiments</p>
            </div>
            <div className="divider-line"></div>
          </motion.div>
          
          <div className="projects-grid">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card-new"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-header">
                  <div className="card-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="card-project-image"
                      loading="lazy"
                    />
                    <div className="card-image-overlay">
                      <Sparkles size={24} />
                    </div>
                  </div>
                  <div className="card-meta">
                    <span className="card-category">{project.category}</span>
                    <span className={`card-status ${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="card-content">
                  <h4 className="card-title text-lg font-bold">{project.title}</h4>
                  <p className="card-subtitle text-sm text-blue-600">{project.subtitle}</p>
                  <p className="card-description text-xs sm:text-sm text-gray-600">{project.description}</p>
                  
                  <div className="card-technologies">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag-small">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </div>
                
                <div className="card-footer">
                  <div className="card-links">
                    {project.github_Client && project.github_Server ? (
                      <>
                        <motion.a
                          href={project.github_Client}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Client Repository"
                        >
                          <Github size={16} />
                        </motion.a>
                        <motion.a
                          href={project.github_Server}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Server Repository"
                        >
                          <Github size={16} />
                        </motion.a>
                      </>
                    ) : (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Source Code"
                      >
                        <Github size={16} />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                  <span className="card-year">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="projects-cta-new"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="cta-content">
            <h3 className="text-xl sm:text-2xl font-bold">Interested in Working Together?</h3>
            <p className="text-sm sm:text-base text-gray-600">Let's create something amazing together. I'm always open to discussing new opportunities and exciting projects.</p>
            <motion.a
              href="#contact"
              className="cta-button"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
