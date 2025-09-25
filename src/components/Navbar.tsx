import { motion, type Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const navVariants: Variants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''} fixed top-0 left-0 right-0 z-[1000] py-3 sm:py-4 md:py-4 lg:py-5`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="nav-container max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text text-base sm:text-lg md:text-xl lg:text-2xl font-bold truncate max-w-[200px] sm:max-w-none">
            <span className="hidden sm:inline">Md Mamun Hossain</span>
            <span className="sm:hidden">Mamun</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="nav-menu desktop-menu !hidden lg:!flex items-center gap-4 lg:gap-6 xl:gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="nav-link text-sm md:text-base lg:text-lg font-medium px-2 lg:px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="menu-toggle !flex lg:!hidden items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors z-[1001]"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center justify-center">
            {isOpen ? (
              <X size={20} className="sm:w-6 sm:h-6" />
            ) : (
              <Menu size={20} className="sm:w-6 sm:h-6" />
            )}
          </div>
        </motion.button>

        {/* Mobile Menu Backdrop */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <motion.div
          className="mobile-menu fixed top-0 right-0 h-full w-72 sm:w-80 md:w-96 max-w-[85vw] sm:max-w-[75vw] bg-slate-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-[1000] lg:hidden"
          variants={menuVariants}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
        >
          <div className="mobile-menu-content flex flex-col pt-16 sm:pt-20 px-4 sm:px-6">
            <div className="flex flex-col space-y-1 sm:space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="mobile-nav-link text-white text-base sm:text-lg font-medium py-3 sm:py-4 px-3 sm:px-4 rounded-lg hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0"
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ x: 4 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            {/* Mobile Menu Footer */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm sm:text-base text-center">
                Md Mamun Hossain
              </p>
              <p className="text-white/40 text-xs sm:text-sm text-center mt-1">
                MERN Stack Developer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
