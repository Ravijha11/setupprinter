import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-[1440px] mx-auto px-4 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-serif bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Printer Support
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 font-serif">
              Printer support services for all major brands. Get troubleshooting help, 
              wireless setup assistance, and available support.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-blue-700 p-2 rounded-lg hover:bg-blue-800 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-serif">Quick Links</h3>
            <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-400">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/" className="hover:text-blue-400 transition-colors font-serif">
                  Home
                </Link>
              </motion.div>
              <span className="text-gray-600">|</span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/services" className="hover:text-blue-400 transition-colors font-serif">
                  Services
                </Link>
              </motion.div>
              <span className="text-gray-600">|</span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about-us" className="hover:text-blue-400 transition-colors font-serif">
                  About Us
                </Link>
              </motion.div>
              <span className="text-gray-600">|</span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/testimonials" className="hover:text-blue-400 transition-colors font-serif">
                  Testimonials
                </Link>
              </motion.div>
              <span className="text-gray-600">|</span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact-us" className="hover:text-blue-400 transition-colors font-serif">
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-4">
              <motion.div 
                className="flex items-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'tel:+1-877-593-3790'}
              >
                <span className="text-2xl mr-2">🇺🇸</span>
                <span className="text-blue-600 font-bold text-lg sm:text-xl font-serif group-hover:text-blue-700 transition-colors">
                  +1 (877) 593-3790
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'mailto:contact@setupprinter.online'}
              >
                <span className="text-blue-600 font-bold text-sm sm:text-base font-serif group-hover:text-blue-700 transition-colors">
                  ✉️ contact@setupprinter.online
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer Section */}
        <motion.div 
          className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-800 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg sm:text-xl font-bold text-center mb-3 sm:mb-4 font-serif">Disclaimer</h2>
          <p className="text-center text-sm sm:text-base text-gray-300 max-w-4xl mx-auto font-serif">
            Printer Fix is an independent service provider. We are not affiliated with, nor endorsed by, any of the brands mentioned on this website. The content on printerdoctor.info is designed to offer general troubleshooting steps and expert advice to assist users with common printer-related issues.
          </p>
        </motion.div>

        {/* Copyright and Links */}
        <motion.div 
          className="text-center border-t border-gray-700 pt-6 sm:pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-400 mb-4 font-serif">© 2024 Printer Fix. All Rights Reserved.</p>
          
          <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-gray-400">
            <Link to="/about-us" className="hover:text-blue-400 transition-colors font-serif">
              About Us
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors font-serif">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/contact-us" className="hover:text-blue-400 transition-colors font-serif">
              Contact Us
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms" className="hover:text-blue-400 transition-colors font-serif">
              Terms & Conditions
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/refund-policy" className="hover:text-blue-400 transition-colors font-serif">
              Cancellation & Refund Policy
            </Link>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          className="fixed bottom-20 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;