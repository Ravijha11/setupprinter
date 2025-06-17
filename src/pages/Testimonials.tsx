import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Testimonials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: "Sarah J.",
      text: "The technician was extremely knowledgeable and fixed my printer issues in no time. I highly recommend their services!",
      rating: 5
    },
    {
      name: "Michael T.",
      text: "Quick response time and excellent service. My wireless printer is working perfectly now.",
      rating: 5
    },
    {
      name: "David L.",
      text: "Saved me from buying a new printer! Their maintenance service brought my old printer back to life.",
      rating: 5
    },
    {
      name: "Jennifer M.",
      text: "Professional, courteous, and efficient. They resolved my network printing issues in under an hour.",
      rating: 5
    },
    {
      name: "Robert K.",
      text: "Outstanding customer service! The team went above and beyond to help me with my printer setup.",
      rating: 5
    },
    {
      name: "Lisa P.",
      text: "Fast, reliable, and affordable. I've been using their services for years and they never disappoint.",
      rating: 5
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
          <div className="container mx-auto px-4 py-16">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 font-serif">
                Customer Testimonials
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-serif">
                Here's what our customers have to say about our printer support services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 font-serif leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-bold text-gray-800 font-serif">- {testimonial.name}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-serif">
                Ready to Experience Our Service?
              </h2>
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 font-serif"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'tel:+1-877-593-3790'}
              >
                Call Now: +1 (877) 593-3790
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
