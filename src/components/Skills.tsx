import { motion } from 'framer-motion';
import { Code, Database, Settings, Star, TrendingUp, Zap } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Frontend Development",
      color: "#3b82f6",
      skills: [
        { name: "React", proficiency: "Expert", icon: "⚛️", stars: 5 },
        { name: "TypeScript", proficiency: "Advanced", icon: "🔷", stars: 4 },
        { name: "Next.js", proficiency: "Advanced", icon: "▲", stars: 4 },
        { name: "Tailwind CSS", proficiency: "Expert", icon: "🎨", stars: 5 },
        { name: "Framer Motion", proficiency: "Intermediate", icon: "🎭", stars: 3 },
      ]
    },
    {
      icon: <Database size={32} />,
      title: "Backend Development",
      color: "#10b981",
      skills: [
        { name: "Node.js", proficiency: "Advanced", icon: "🟢", stars: 4 },
        { name: "Express.js", proficiency: "Advanced", icon: "🚀", stars: 4 },
        { name: "MongoDB", proficiency: "Intermediate", icon: "🍃", stars: 3 },
        { name: "PostgreSQL", proficiency: "Intermediate", icon: "🐘", stars: 3 },
        { name: "REST APIs", proficiency: "Expert", icon: "🔗", stars: 5 },
      ]
    },
    {
      icon: <Settings size={32} />,
      title: "Tools & DevOps",
      color: "#8b5cf6",
      skills: [
        { name: "Git & GitHub", proficiency: "Expert", icon: "🐙", stars: 5 },
        { name: "Docker", proficiency: "Beginner", icon: "🐳", stars: 2 },
        { name: "AWS", proficiency: "Beginner", icon: "☁️", stars: 2 },
        { name: "Figma", proficiency: "Intermediate", icon: "🎨", stars: 3 },
        { name: "Jest", proficiency: "Intermediate", icon: "🧪", stars: 3 },
      ]
    }
  ];

  const expertise = [
    { name: "Web Development", level: 95, description: "Modern, responsive web applications" },
    { name: "UI/UX Design", level: 88, description: "User-centered design principles" },
    { name: "Performance Optimization", level: 85, description: "Fast, efficient applications" },
    { name: "Problem Solving", level: 92, description: "Creative solutions to complex challenges" },
  ];

  return (
    <section className="skills-section-new" id="skills">
      <div className="container">
        <div className="skills-container">
        <motion.div
          className="skills-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="skills-badge">
            <Star size={16} />
            <span>My Expertise</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="skills-title">
            Skills & <span className="skills-title-highlight">Technologies</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="skills-subtitle">
            Crafting exceptional digital experiences with cutting-edge technologies and best practices
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div 
          className="skills-categories"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="skills-category-card"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item-new"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-proficiency">{skill.proficiency}</span>
                    </div>
                    <div className="skill-stars">
                      {[...Array(5)].map((_, starIndex) => (
                        <motion.div
                          key={starIndex}
                          className={`skill-star ${starIndex < skill.stars ? 'filled' : ''}`}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ 
                            delay: skillIndex * 0.1 + starIndex * 0.05,
                            duration: 0.3 
                          }}
                          viewport={{ once: true }}
                        >
                          ⭐
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Section */}
        <motion.div 
          className="expertise-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="expertise-header">
            <h3>Core Expertise</h3>
            <p>Areas where I excel and deliver exceptional results</p>
          </motion.div>
          
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="expertise-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="expertise-content">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="expertise-level">
                  <div className="level-circle">
                    <svg width="80" height="80">
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        fill="none"
                        stroke="rgba(59, 130, 246, 0.2)"
                        strokeWidth="4"
                      />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="36"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 283" }}
                        whileInView={{ strokeDasharray: `${(item.level / 100) * 283} 283` }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        style={{ transform: "rotate(-90deg)", transformOrigin: "40px 40px" }}
                      />
                    </svg>
                    <span className="level-text">{item.level}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Showcase */}
        <motion.div 
          className="tech-showcase"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="tech-showcase-header">
            <div className="tech-badge">
              <TrendingUp size={16} />
              <span>Always Learning</span>
            </div>
            <h3>Technology Stack</h3>
          </motion.div>
          
          <div className="tech-cloud">
            {[
              { name: "React", size: "large" },
              { name: "TypeScript", size: "large" },
              { name: "Node.js", size: "medium" },
              { name: "MongoDB", size: "medium" },
              { name: "Next.js", size: "medium" },
              { name: "Tailwind", size: "small" },
              { name: "Docker", size: "small" },
              { name: "AWS", size: "small" },
              { name: "Git", size: "medium" },
              { name: "Figma", size: "small" },
              { name: "Jest", size: "small" },
              { name: "Express", size: "medium" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className={`tech-bubble tech-${tech.size}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                viewport={{ once: true }}
              >
                <Zap size={16} />
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
