import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Mumbai, India",
    text: "The Ladakh Expedition was life-changing! STG organized everything perfectly. The bikes were in excellent condition, and the itinerary was flawless. Can't wait for the next trip!",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=ef4444&color=fff&size=200"
  },
  {
    id: 2,
    name: "Priya Menon",
    location: "Bangalore, India",
    text: "Our Maldives romantic getaway was exactly what we dreamed of. The attention to detail from the STG team made us feel like royalty. Absolutely premium experience.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Priya+M&background=0284c7&color=fff&size=200"
  },
  {
    id: 3,
    name: "Vikram Singh",
    location: "Delhi, India",
    text: "Spiti valley is tough to navigate on your own, but the group tour was so well managed. The guides were extremely knowledgeable and friendly. Top-notch service!",
    rating: 4,
    avatar: "https://ui-avatars.com/api/?name=Vikram+Singh&background=16a34a&color=fff&size=200"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-[#111] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-gray-700 hidden sm:block"></span>
            TRAVELER STORIES
            <span className="h-0.5 w-8 bg-gray-700 hidden sm:block"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Real experiences from travelers who trusted STG for their dream vacations.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Controls */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-gray-800/50 hover:bg-gray-700 text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-lg hidden sm:flex active:scale-90"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-gray-800/50 hover:bg-gray-700 text-white p-3 rounded-full backdrop-blur-sm transition-all shadow-lg hidden sm:flex active:scale-90"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-gray-900/40 border border-gray-800 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-24 h-24 text-gray-800/40 -z-10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left"
              >
                <div className="flex-shrink-0 relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#e64045] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    VERIFIED
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-700'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-300 italic mb-6 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Controls */}
            <div className="flex justify-center gap-4 mt-8 sm:hidden">
              <button 
                onClick={prevTestimonial}
                className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8 md:mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-[#e64045]' : 'w-2 bg-gray-700 hover:bg-gray-600'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
