import { motion } from "framer-motion";
import { Code, Database, Settings, Star, TrendingUp, Zap } from "lucide-react";

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
        {
          name: "Framer Motion",
          proficiency: "Intermediate",
          icon: "🎭",
          stars: 3,
        },
      ],
    },
    {
      icon: <Database size={32} />,
      title: "Backend Development",
      color: "#10b981",
      skills: [
        { name: "Node.js", proficiency: "Advanced", icon: "🟢", stars: 4 },
        { name: "Express.js", proficiency: "Advanced", icon: "🚀", stars: 4 },
        { name: "MongoDB", proficiency: "Intermediate", icon: "🍃", stars: 3 },
        {
          name: "PostgreSQL",
          proficiency: "Intermediate",
          icon: "🐘",
          stars: 3,
        },
        { name: "REST APIs", proficiency: "Expert", icon: "🔗", stars: 5 },
      ],
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
      ],
    },
  ];

  const expertise = [
    {
      name: "Web Development",
      level: 95,
      description: "Modern, responsive web applications",
    },
    {
      name: "UI/UX Design",
      level: 88,
      description: "User-centered design principles",
    },
    {
      name: "Performance Optimization",
      level: 85,
      description: "Fast, efficient applications",
    },
    {
      name: "Problem Solving",
      level: 92,
      description: "Creative solutions to complex challenges",
    },
  ];

  return (
    <section
      className="relative !py-24 sm:py-32 md:!py-20 lg:!py-28 xl:!py-36 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white overflow-hidden"
      id="skills"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce delay-1000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 max-w-[1600px]">
        <div className="relative z-10 w-full">
          <motion.div
            className="text-center mb-16 sm:mb-20 lg:mb-24 xl:mb-28"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Floating Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-emerald-600/30 text-white rounded-full text-sm font-bold mb-10 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
              <Star
                size={20}
                className="text-yellow-400 animate-pulse relative z-10"
              />
              <span className="relative z-10">
                ✨ Professional Expertise ✨
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight relative"
            >
              <span className="relative inline-block">
                Skills &
                <span className="ml-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 bg-clip-text text-transparent relative">
                  Technologies
                </span>
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-300 w-full !py-8 justify-center flex items-center mx-auto leading-relaxed font-light relative"
            >
              <span className="relative max-w-3xl">
                Crafting exceptional digital experiences with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-semibold">
                  {" "}
                  cutting-edge technologies{" "}
                </span>
                and industry best practices
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 transform scale-x-0 animate-pulse"></div>
              </span>
            </motion.p>
          </motion.div>

          {/* Skills Categories */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full mb-20 sm:mb-24 lg:mb-28"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-3xl border border-white/20 rounded-3xl p-10 sm:p-12 lg:p-14 xl:p-16 overflow-hidden hover:from-white/10 hover:via-white/15 hover:to-white/10 transition-all duration-700 shadow-2xl hover:shadow-4xl"
                whileHover={{
                  y: -16,
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {/* Animated Background Gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-700"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${category.color}40, ${category.color}10, transparent)`,
                  }}
                ></div>

                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute top-4 right-4 w-2 h-2 rounded-full animate-bounce delay-100"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <div
                    className="absolute bottom-6 left-6 w-1 h-1 rounded-full animate-bounce delay-300"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-8 w-1.5 h-1.5 rounded-full animate-bounce delay-500"
                    style={{ backgroundColor: category.color }}
                  ></div>
                </div>

                <div className="relative z-10">
                  {/* Header with Enhanced Icon */}
                  <div className="flex items-center gap-6 !p-3 mb-8 sm:mb-10">
                    <motion.div
                      className="relative p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/30 shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                      style={{
                        boxShadow: `0 12px 40px ${category.color}20, inset 0 1px 0 rgba(255,255,255,0.2)`,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 10,
                        boxShadow: `0 20px 60px ${category.color}40`,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="text-3xl sm:text-4xl transition-all duration-300 group-hover:scale-110"
                        style={{ color: category.color }}
                      >
                        {category.icon}
                      </div>
                      {/* Glow Effect */}
                      <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle, ${category.color}30, transparent 70%)`,
                        }}
                      ></div>
                    </motion.div>

                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all duration-500">
                        {category.title}
                      </h3>
                      <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-700 delay-200"></div>
                    </div>
                  </div>

                  {/* Beautiful Skill Items */}
                  <div className="w-full !space-y-4 !p-3 sm:space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="w-full group/skill relative bg-gradient-to-r from-white/8 via-white/12 to-white/8 
                 backdrop-blur-xl rounded-2xl p-5 sm:p-6 lg:p-7 border border-white/20 
                 hover:from-white/15 hover:via-white/20 hover:to-white/15 
                 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, x: -30, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                          delay: skillIndex * 0.15,
                          duration: 0.6,
                          type: "spring",
                          stiffness: 100,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          x: 8,
                          scale: 1.02,
                          rotateY: 2,
                        }}
                      >
                        {/* Background Glow */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover/skill:opacity-30 transition-opacity duration-500"
                          style={{
                            background: `linear-gradient(135deg, ${category.color}20, transparent 60%)`,
                          }}
                        ></div>

                        <div className="relative z-10 space-y-8 !p-3 sm:space-y-10">
                          {/* Header */}
                          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
                            <div className="flex items-center gap-3 sm:gap-5">
                              <motion.div
                                className="relative p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 
                         backdrop-blur-sm border border-white/30 shadow-lg"
                                whileHover={{
                                  scale: 1.15,
                                  rotate: 5,
                                  boxShadow: `0 8px 25px ${category.color}40`,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <span className="text-2xl sm:text-3xl block transition-transform duration-300 group-hover/skill:scale-110">
                                  {skill.icon}
                                </span>
                              </motion.div>

                              <div>
                                <span
                                  className="text-white font-bold text-base sm:text-lg 
                               group-hover/skill:text-transparent group-hover/skill:bg-clip-text 
                               group-hover/skill:bg-gradient-to-r 
                               group-hover/skill:from-blue-300 group-hover/skill:to-purple-300 
                               transition-all duration-400 block"
                                >
                                  {skill.name}
                                </span>
                                <div
                                  className="w-0 group-hover/skill:w-full h-0.5 bg-gradient-to-r 
                              from-blue-400 to-purple-400 rounded-full 
                              transition-all duration-500 delay-100"
                                ></div>
                              </div>
                            </div>

                            <motion.span
                              className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 
                       bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-emerald-500/40 
                       text-white rounded-full font-bold border border-white/30 shadow-xl backdrop-blur-sm"
                              whileHover={{ scale: 1.1, y: -2 }}
                              transition={{ duration: 0.2 }}
                            >
                              {skill.proficiency}
                            </motion.span>
                          </div>

                          {/* Stars */}
                          <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
                            {[...Array(5)].map((_, starIndex) => (
                              <motion.div
                                key={starIndex}
                                className={`text-xl sm:text-2xl cursor-pointer transition-all duration-300 ${
                                  starIndex < skill.stars
                                    ? "text-yellow-400 drop-shadow-lg hover:text-yellow-300"
                                    : "text-gray-600 hover:text-gray-500"
                                }`}
                                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                                whileInView={{
                                  scale: 1,
                                  opacity: 1,
                                  rotate: 0,
                                }}
                                transition={{
                                  delay: skillIndex * 0.1 + starIndex * 0.08,
                                  duration: 0.5,
                                  type: "spring",
                                  stiffness: 200,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                  scale: 1.3,
                                  rotate: 15,
                                  y: -3,
                                }}
                              >
                                ⭐
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            className="mb-12 sm:mb-16 !mt-12 lg:mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-8 sm:mb-12 !lg:mb-16"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white !mb-3 sm:mb-4">
                Core Expertise
              </h3>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg !mb-3">
                Areas where I excel and deliver exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl !p-4 text-center hover:bg-white/8 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <h4 className="text-base font-bold text-white !mb-2">
                      {item.name}
                    </h4>
                    <p className="text-slate-300 text-xs">{item.description}</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative w-20 h-20 !mt-4">
                      <svg
                        width="80"
                        height="80"
                        className="transform -rotate-90"
                      >
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
                          whileInView={{
                            strokeDasharray: `${(item.level / 100) * 283} 283`,
                          }}
                          transition={{ duration: 2, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-blue-400">
                        {item.level}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Showcase */}
          <motion.div
            className="text-center  !mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="!mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-emerald-500/30">
                <TrendingUp size={16} />
                <span>Always Learning</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Technology Stack
              </h3>
            </motion.div>

            <div className="flex flex-wrap justify-between gap-2 lg:gap-3 xl:gap-4 w-full mx-auto">
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
                  className={`inline-flex items-center gap-2 !px-4 !py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 ${
                    tech.size === "large"
                      ? "text-base px-5 py-2"
                      : tech.size === "medium"
                      ? "text-sm px-4 py-2"
                      : "text-xs px-3 py-1"
                  }`}
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
