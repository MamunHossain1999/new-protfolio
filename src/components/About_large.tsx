import { User, MapPin, Phone, Mail, Calendar, Award, Target, Heart, Code, Zap } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
    { icon: Phone, label: "Phone", value: "+880 1234567890" },
    { icon: Mail, label: "Email", value: "developermamun1999@gmail.com" },
    { icon: Calendar, label: "Experience", value: "3 Months Internship" }
  ];

  const achievements = [
    { icon: <Award size={24} />, title: "3 Months", desc: "Internship Experience" },
    { icon: <Target size={24} />, title: "2+ Years", desc: "Learning Experience" },
    { icon: <Heart size={24} />, title: "MERN Stack", desc: "Specialized Skills" },
    { icon: <User size={24} />, title: "Frontend", desc: "Development Focus" }
  ];

  return (
    <section
      id="about"
      className="about-section-new"
    >
      {/* Hero-style background elements */}
      <div className="about-bg-elements">
        <div className="about-bg-circle about-bg-circle-1"></div>
        <div className="about-bg-circle about-bg-circle-2"></div>
        <div className="about-bg-circle about-bg-circle-3"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm sm:text-base font-semibold mb-8 shadow-lg">
            <Zap size={18} className="animate-pulse" />
            <span>Get to know me</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Md Mamun Hossain
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 !mt-6 !mb-6  !text-center max-w-3xl mx-auto leading-relaxed">
            Frontend Developer & MERN Stack Developer with internship experience
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row !gap-10 lg:!gap-14 lg:items-stretch">
          {/* Left */}
          <div className="w-full lg:w-3/5 flex flex-col !space-y-10">
            {/* Story */}
            <div className="about-card group flex-1">
              <div className="flex items-center gap-4 sm:!gap-6 mb-8 sm:mb-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Code size={24} className="sm:size-28 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">My Story</h3>
              </div>

              <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed overflow-y-auto h-[310px] text-sm sm:text-base md:text-lg">
                <p>
                  I'm Md Mamun Hossain, a passionate Frontend Developer and MERN Stack Developer with 3 months of internship experience and over 2 years of dedicated learning. My journey began with curiosity about web development, which has evolved into comprehensive expertise in modern technologies.
                </p>
                <p>
                  I specialize in Frontend Development and MERN Stack (MongoDB, Express.js, React, Node.js), creating responsive and user-friendly web applications. My internship experience has given me hands-on exposure to real-world projects and professional development practices.
                </p>
                <p>
                  With 2+ years of continuous learning and 3 months of practical internship experience, I'm committed to writing clean, efficient code and staying updated with the latest web development trends.
                </p>
              </div>
            </div>

            {/* Personal Info */}
            <div className="border border-gray-600/50 rounded-2xl bg-gray-800/90 !p-5 flex-1" >
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white  !mb-5 text-center">
                Personal Information
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                {personalInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-5 bg-gray-700/90 backdrop-blur-sm rounded-2xl border border-gray-600/50 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs sm:text-sm text-gray-400 font-medium">{info.label}</span>
                      <span className="block text-white font-semibold text-sm sm:text-base truncate">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-2/5 flex flex-col !space-y-10">
            {/* Profile */}
            <div className="about-card text-center">
              <div className="relative inline-block mb-8 sm:mb-10">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-gradient-to-br from-gray-700 to-slate-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-gray-600">
                  <User size={80} className="text-blue-400" />
                </div>
                
                {/* Orbital rings */}
                <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute inset-4 border-2 border-transparent border-b-pink-400 border-l-cyan-400 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
                
                {/* Orbiting elements */}
                <div className="orbital-container">
                  <div className="orbital-path orbital-path-1">
                    <div className="orbital-element orbital-element-1">
                      <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                  <div className="orbital-path orbital-path-2">
                    <div className="orbital-element orbital-element-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                  <div className="orbital-path orbital-path-3">
                    <div className="orbital-element orbital-element-3">
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                  <div className="orbital-path orbital-path-4">
                    <div className="orbital-element orbital-element-4">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700/90 backdrop-blur-sm rounded-2xl p-6 !mt-3 sm:p-8 shadow-lg border border-gray-600/50">
                <blockquote className="text-sm sm:text-lg md:text-xl text-gray-300 italic mb-3 sm:mb-4 leading-relaxed">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </blockquote>
                <cite className="text-blue-600 font-semibold text-sm sm:text-base">- Steve Jobs</cite>
              </div>
            </div>

            {/* Achievements */}
            <div className="about-card">
              <div className="flex items-center justify-center gap-3 sm:gap-4 !mb-8 sm:mb-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Award size={20} className="text-white" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Key Achievements</h4>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-5 bg-gray-700/90 backdrop-blur-sm rounded-2xl border border-gray-600/50 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {achievement.icon}
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs sm:text-sm text-gray-400 font-medium">{achievement.desc}</span>
                      <span className="block text-white font-semibold text-sm sm:text-base truncate">{achievement.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
