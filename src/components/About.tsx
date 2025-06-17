import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 font-serif">
            About Our Printer Service
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-serif">
            We're dedicated to providing expert printer solutions and maintenance services 
            to keep your business running smoothly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-serif">
              Your Trusted Printer Service Partner
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-serif">
              With years of experience in printer troubleshooting and maintenance, 
              we've helped thousands of users resolve their printer issues quickly 
              and effectively.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700 text-base sm:text-lg font-serif">Expert Technicians</span>
              </div>
              <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700 text-base sm:text-lg font-serif">Quick Response Time</span>
              </div>
              <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700 text-base sm:text-lg font-serif">Affordable Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-serif">
              Our Commitment
            </h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-serif">
              We understand how critical printer functionality is to your operations. 
              That's why we offer 24/7 emergency services and guarantee rapid response 
              times.
            </p>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2 font-serif">100%</div>
                <div className="text-gray-600 text-sm sm:text-base font-serif">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;