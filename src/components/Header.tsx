import { MapPin, Menu, X, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/services", label: "SERVICES" },
    { path: "/about-us", label: "ABOUT" },
    { path: "/testimonials", label: "TESTIMONIALS" },
    { path: "/contact-us", label: "CONTACT" }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header 
      className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Contact Info Bar */}
      <motion.div 
        className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2 sm:py-3"
        variants={itemVariants}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <motion.div 
                className="flex items-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => window.location.href = 'tel:+18593126304'}
              >
                <Phone className="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors" />
                <span className="font-serif">+1 (859) 312-6304</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="w-4 h-4 mr-2 text-blue-400" />
                <span className="font-serif text-xs sm:text-sm">Available 24/7</span>
              </motion.div>
            </div>
            <motion.div 
              className="flex items-center"
              variants={itemVariants}
            >
              <span className="font-serif text-xs sm:text-sm">Contact Us for Printer Support</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-2 sm:py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-serif"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            Techie Care - Printer Fix
          </motion.div>
          
          <motion.nav 
            className="hidden lg:flex space-x-8"
            variants={itemVariants}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.path} 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 font-serif relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 font-serif text-xs sm:text-sm md:text-base flex items-center gap-1 sm:gap-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'tel:+18593126304'}
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">GET FREE QUOTE</span>
              <span className="sm:hidden">QUOTE</span>
            </motion.button>
            
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={item.path} 
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors font-serif block py-3 px-2 text-lg border-b border-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 font-serif mt-4 flex items-center justify-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    window.location.href = 'tel:+18593126304';
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Phone className="w-4 h-4" />
                  CALL NOW
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;