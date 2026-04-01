import { Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const tours = [
  {
    id: 1,
    title: "Santorini Getaway",
    location: "Greece",
    price: "₹1,09,999",
    duration: "7 Days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Bali Temple Tour",
    location: "Indonesia",
    price: "₹75,999",
    duration: "5 Days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    price: "₹1,59,999",
    duration: "10 Days",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "Eiffel Tower Experience",
    location: "France",
    price: "₹1,25,999",
    duration: "4 Days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    title: "Tokyo Neon Nights",
    location: "Japan",
    price: "₹1,95,999",
    duration: "8 Days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const FeaturedTours = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="tours" className="py-20 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a1a1a] mb-4 flex items-center justify-center gap-4">
            <span className="h-0.5 w-12 bg-gray-300 hidden sm:block"></span>
            TOP SELLING GROUP TOURS BY STG!
            <span className="h-0.5 w-12 bg-gray-300 hidden sm:block"></span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white shadow-lg border border-gray-100 rounded-full w-12 h-12 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            ←
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white shadow-lg border border-gray-100 rounded-full w-12 h-12 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            →
          </button>

          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 snap-x snap-mandatory scrollbar-hide -mx-4 items-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[320px] max-w-[350px] flex-shrink-0 snap-center bg-white rounded-2xl overflow-hidden shadow-md group/card transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow-lg border border-white/50">
                    {tour.price}
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-b from-white to-gray-50 flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-gray-500 text-sm font-medium">
                      <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                      {tour.location}
                    </div>
                    <div className="flex items-center text-yellow-500 text-sm font-bold bg-yellow-50 px-2 py-0.5 rounded-md border border-yellow-100">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {tour.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight line-clamp-1 group-hover/card:text-blue-600 transition-colors">{tour.title}</h3>
                  
                  <div className="flex items-center justify-between border-t border-gray-200 pt-5 mt-auto">
                    <div className="flex items-center text-gray-600 text-sm font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      {tour.duration}
                    </div>
                    <button className="text-white bg-[#e64045] font-semibold text-sm px-4 py-2 flex items-center gap-1 rounded shadow-md hover:bg-[#c9363b] hover:shadow-lg transition-all active:scale-95 group-hover/card:pr-3">
                      View Details <ArrowRight className="w-4 h-4 transition-transform group-hover/card:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
