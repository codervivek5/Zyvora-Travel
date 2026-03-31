import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const carouselData = [
  {
    id: 1,
    tag: "Featured Tour",
    title: "SPITI BIKE TRIP WITH SHIPKI LA AND LEPCHA LA PASS : 9N|10D",
    duration: "9 Nights 10 Days",
    dates: "30 May, 01 Jun, 05 Jun, and more",
    location: "I. S. B. T. Kashmere Gate, bus station, Inter State Bus Terminal, Kashmere Gate, Delhi, India",
    price: "31,999",
    image: "/images/spiti.png"
  },
  {
    id: 2,
    tag: "Featured Tour",
    title: "LEH LADAKH EXPEDITION : THE ULTIMATE ROAD TRIP",
    duration: "6 Nights 7 Days",
    dates: "15 Jun, 22 Jun, 01 Jul, and more",
    location: "Leh, Ladakh, India",
    price: "24,999",
    image: "/images/ladakh.png"
  },
  {
    id: 3,
    tag: "Featured Tour",
    title: "TARSAR MARSAR TREK : THE KASHMIR VALLEY",
    duration: "5 Nights 6 Days",
    dates: "10 Jul, 18 Jul, 25 Jul",
    location: "Srinagar, Jammu and Kashmir, India",
    price: "18,999",
    image: "/images/tarsar.png"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image Carousel */}
      <AnimatePresence initial={false}>
        <motion.img
          key={currentSlide}
          src={carouselData[currentSlide].image}
          alt={carouselData[currentSlide].title}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* Slide Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-white font-semibold text-lg md:text-xl tracking-wide mb-4 drop-shadow-md">
              {carouselData[currentSlide].tag}
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg max-w-4xl uppercase leading-tight">
              {carouselData[currentSlide].title}
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-6 text-sm md:text-base text-gray-200 drop-shadow">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{carouselData[currentSlide].duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{carouselData[currentSlide].dates}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{carouselData[currentSlide].location}</span>
              </div>
            </div>

            <p className="mt-8 text-xl md:text-2xl text-white font-medium drop-shadow-md">
              Starting from <span className="font-bold">₹ {carouselData[currentSlide].price}</span>
            </p>

            <button className="mt-6 bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-3 rounded tracking-wider font-semibold transition-colors shadow-lg shadow-red-500/30 active:scale-95">
              VIEW TOUR
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 text-white transition-all shadow-lg active:scale-90"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 text-white transition-all shadow-lg active:scale-90"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
