import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />
      <main className="flex-grow w-full">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <div className="bg-white py-3 sm:py-4 border-t">

        <div className="container mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-4 sm:gap-8">
          <motion.img 
            src="/trust-badges/ssl-secure.png" 
            alt="SSL Security Certificate - Your Data is Protected" 
            className="h-8 sm:h-12 w-auto object-contain"
            loading="lazy"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
          <motion.img 
            src="/trust-badges/bbb-aplus.png" 
            alt="Better Business Bureau A+ Rating Badge" 
            className="h-8 sm:h-12 w-auto object-contain"
            loading="lazy"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
          <motion.img 
            src="/trust-badges/mcafee-secure.png" 
            alt="McAfee Secure Website Verification Badge" 
            className="h-8 sm:h-12 w-auto object-contain"
            loading="lazy"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;