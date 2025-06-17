
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      role: "Business Owner",
      content: "They fixed my office printer the same day I called. The technician was professional and explained everything clearly.",
      rating: 5
    },
    {
      name: "Sarah Wilson",
      role: "Home User",
      content: "My printer wasn't working and I thought I'd have to buy a new one. They fixed it for a reasonable cost.",
      rating: 5
    },
    {
      name: "Robert Davis",
      role: "Office Manager",
      content: "We've been using their services for 3 years now. Fair pricing and good customer service.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 font-serif">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto font-serif">
            Here's what customers have to say about our printer repair services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-red-600 hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100">
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mb-3 sm:mb-4" />
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 italic font-serif">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-300 pt-3 sm:pt-4">
                <div className="font-bold text-gray-800 text-base sm:text-lg font-serif">{testimonial.name}</div>
                <div className="text-gray-600 text-sm sm:text-base font-serif">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="bg-red-600 rounded-lg p-6 sm:p-8 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2 font-serif">High</div>
              <div className="text-red-100 text-sm sm:text-base font-serif">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2 font-serif">Fast</div>
              <div className="text-red-100 text-sm sm:text-base font-serif">Response Time</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2 font-serif">Effective</div>
              <div className="text-red-100 text-sm sm:text-base font-serif">Solutions</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2 font-serif">★</div>
              <div className="text-red-100 text-sm sm:text-base font-serif">Customer Ratings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;