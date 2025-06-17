import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Users, Settings, Star, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Expert Troubleshooting",
      description: "Our team provides detailed, easy-to-follow solutions for all printer-related issues, from basic paper jams to complex network connectivity problems.",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Access to round-the-clock printer support ensures that you can get help whenever you need it, keeping your operations running smoothly.",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Comprehensive Coverage",
      description: "We support all major printer brands including HP, Canon, Epson, Brother, and Lexmark, ensuring you get the help you need regardless of your printer model.",
      color: "text-purple-600"
    },
    {
      icon: Settings,
      title: "Preventive Maintenance",
      description: "Get expert advice on printer maintenance and best practices to prevent issues before they occur and extend your printer's lifespan.",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            {/* Header Section */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 font-serif">
                About Printer Fix
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-serif">
                Your trusted partner in printer solutions and maintenance
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Our Mission */}
              <motion.section 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-semibold mb-6 text-gray-900 font-serif">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed font-serif">
                  At PrinterDoctor, we're dedicated to providing comprehensive printer support and solutions. 
                  We understand that printer issues can be frustrating and time-consuming, which is why we're 
                  here to offer expert guidance and support for all printer makes and models.
                </p>
              </motion.section>

              {/* What We Do */}
              <motion.section 
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900 font-serif">What We Do</h2>
                <div className="grid gap-8 md:grid-cols-2">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="space-y-4 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-3">
                        <feature.icon className={`w-8 h-8 ${feature.color}`} />
                        <h3 className="text-xl font-medium text-gray-900 font-serif">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 font-serif leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Why Choose Us */}
              <motion.section 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-semibold mb-6 text-gray-900 font-serif">Why Choose Printer Fix?</h2>
                <div className="text-lg text-gray-600 space-y-4 font-serif">
                  <p>
                    With years of experience in printer troubleshooting and maintenance, 
                    we've helped thousands of users resolve their printer issues quickly and effectively.
                  </p>
                  <p className="font-medium text-gray-900">
                    Let us be your trusted partner in maintaining your printer's optimal performance.
                  </p>
                </div>
              </motion.section>

              {/* Stats Section */}
              <motion.section 
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">10+</div>
                    <div className="text-blue-100 font-serif">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">50K+</div>
                    <div className="text-blue-100 font-serif">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100 font-serif">Support Available</div>
                  </div>
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.section 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6 font-serif">
                  Ready to Get Started?
                </h2>
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 font-serif flex items-center mx-auto"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = 'tel:+1-877-593-3790'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +1 (877) 593-3790
                </motion.button>
              </motion.section>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;