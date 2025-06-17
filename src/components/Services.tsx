import { Settings, Wifi, Shield, HeadphonesIcon, Monitor, UserCheck, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Installation & Setup",
      description: "Installation and network configuration for new printers.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Assistance",
      description: "Assistance with printer issues to help minimize downtime.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Settings,
      title: "Managed Print Services", 
      description: "Print management services to help optimize costs and efficiency.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: UserCheck,
      title: "Printer Consulting",
      description: "Advice on printer selection and fleet optimization.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 font-serif">
            Our Printer Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-serif">
            We provide comprehensive printer solutions to keep your business running smoothly.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => window.location.href = 'tel:+1-877-593-3790'}
            >
              <motion.div 
                className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-serif">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-serif">{service.description}</p>
              <div className="mt-4 flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                <span className="mr-2">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div 
          className="text-center bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.div 
              className="flex items-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'tel:+1-877-593-3790'}
            >
              <span className="text-2xl mr-2">🇺🇸</span>
              <span className="text-blue-600 font-bold text-xl font-serif group-hover:text-blue-700 transition-colors">
                +1 (877) 593-3790
              </span>
            </motion.div>
            <motion.div 
              className="flex items-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'mailto:contact@setupprinter.online'}
            >
              <span className="text-blue-600 font-bold font-serif group-hover:text-blue-700 transition-colors">
                ✉️ contact@setupprinter.online
              </span>
            </motion.div>
          </div>
          
          <div className="mt-6 flex justify-center items-center space-x-4">
            <div className="flex items-center text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <span className="text-gray-600 font-serif">Customer-focused service</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
