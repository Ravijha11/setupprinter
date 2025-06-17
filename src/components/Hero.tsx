import { CheckCircle, Phone, ArrowRight, Zap, Shield, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Hero = () => {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [printerModel, setPrinterModel] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGetHelp = () => {
    if (!selectedIssue) {
      alert('Please select a printer issue to continue.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate a brief delay for better UX
    setTimeout(() => {
      setIsSubmitting(false);
      window.location.href = 'tel:+1-877-593-3790';
    }, 500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const features = [
    { icon: Shield, text: "All Major Printer Brands Supported", color: "text-green-500" },
    { icon: Zap, text: "Step-by-Step Troubleshooting Guide", color: "text-blue-500" },
    { icon: Clock, text: "Wireless Setup Assistance", color: "text-purple-500" },
    { icon: Users, text: "Available 24/7 for printer support", color: "text-orange-500" }
  ];

  return (
    <section id="home" className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-[85vh] sm:min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-800 leading-tight"
                variants={itemVariants}
              >
                Reliable
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                  Printer Support
                </span>
                <span className="text-gray-600 text-3xl sm:text-4xl lg:text-5xl block font-serif">
                  Services
                </span>
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-serif"
                variants={itemVariants}
              >
                Printer troubleshooting and support services for all major brands. 
                Get assistance with printer issues, wireless setup, and technical problems.
              </motion.p>
            </div>

            <motion.div className="space-y-3 sm:space-y-4" variants={itemVariants}>
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3 group px-2 py-1"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color} flex-shrink-0 group-hover:scale-110 transition-transform`} />
                  <span className="text-gray-700 text-base sm:text-lg font-medium font-serif">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              variants={itemVariants}
            >
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group w-full sm:w-auto"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => window.location.href = 'tel:+1-877-593-3790'}
              >
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Call Now: +1 (877) 593-3790
              </motion.button>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link 
                  to="/contact-us"
                  className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center group hover:shadow-lg w-full sm:w-auto"
                >
                  Get Support
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/20"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center space-y-6">
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold text-gray-800 font-serif"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Get Printer Help
                </motion.h3>
                <motion.p 
                  className="text-gray-600 font-serif"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Select your printer issue for immediate assistance
                </motion.p>
                <motion.form 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleGetHelp();
                  }}
                >
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-serif transition-all duration-200 hover:border-blue-400 text-base sm:text-lg"
                    value={selectedIssue}
                    onChange={(e) => setSelectedIssue(e.target.value)}
                  >
                    <option value="">Select Your Printer Issue</option>
                    <option value="printer-offline">Printer Offline</option>
                    <option value="wireless-setup">Wireless Setup</option>
                    <option value="not-printing">Not Printing</option>
                    <option value="blank-prints">Blank Prints</option>
                    <option value="error-codes">Error Codes</option>
                    <option value="scanner-issues">Scanner Issues</option>
                  </select>
                  <input 
                    type="text" 
                    placeholder="Printer Model" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-serif transition-all duration-200 hover:border-blue-400"
                    value={printerModel}
                    onChange={(e) => setPrinterModel(e.target.value)}
                  />
                  <motion.button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 font-serif flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Connecting...
                      </>
                    ) : (
                      'GET HELP NOW'
                    )}
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;