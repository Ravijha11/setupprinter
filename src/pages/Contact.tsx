import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 py-16">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 font-serif">
                Contact Our Experts
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif">
                Ready to get your printer fixed? Contact us now for fast, professional 
                printer support services. We're here to help!
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Get In Touch</h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group bg-blue-50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => window.location.href = 'tel:+1-877-593-3790'}
                  >
                    <div className="p-3 rounded-lg bg-blue-50 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 font-serif">Call Us</h4>
                      <p className="text-blue-600 text-xl font-semibold font-serif">+1 (877) 593-3790</p>
                      <p className="text-gray-600 font-serif">Call now for immediate assistance</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group bg-green-50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => window.location.href = 'mailto:contact@setupprinter.online'}
                  >
                    <div className="p-3 rounded-lg bg-green-50 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-green-600 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 font-serif">Email Us</h4>
                      <p className="text-green-600 text-xl font-semibold font-serif">contact@setupprinter.online</p>
                      <p className="text-gray-600 font-serif">We respond within 2 hours</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-purple-50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="p-3 rounded-lg bg-purple-50 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 font-serif">Service Area</h4>
                      <p className="text-purple-600 text-xl font-semibold font-serif">All Metro Areas</p>
                      <p className="text-gray-600 font-serif">On-site service available</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-orange-50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="p-3 rounded-lg bg-orange-50 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800 font-serif">Business Hours</h4>
                      <p className="text-orange-600 text-xl font-semibold font-serif">24/7 Emergency Service</p>
                      <p className="text-gray-600 font-serif">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800 font-serif">Request Service</h3>
                </div>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.input 
                      type="text" 
                      placeholder="First Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-serif transition-all duration-200 hover:border-blue-400"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.input 
                      type="text" 
                      placeholder="Last Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-serif transition-all duration-200 hover:border-blue-400"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-serif transition-all duration-200 hover:border-blue-400"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-serif transition-all duration-200 hover:border-blue-400"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <motion.select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-serif transition-all duration-200 hover:border-blue-400"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option>Select Service Type</option>
                    <option>Printer Not Working</option>
                    <option>Paper Jam Issues</option>
                    <option>Print Quality Problems</option>
                    <option>Network/WiFi Issues</option>
                    <option>Error Messages</option>
                    <option>Maintenance Service</option>
                    <option>Other Issue</option>
                  </motion.select>

                  <motion.textarea 
                    placeholder="Describe your printer problem in detail..." 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-serif transition-all duration-200 hover:border-blue-400 resize-none"
                    whileFocus={{ scale: 1.02 }}
                  ></motion.textarea>

                  <motion.button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-300 font-serif flex items-center justify-center group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    SEND REQUEST
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
