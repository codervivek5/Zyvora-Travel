import { Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const tours = [
  {
    id: 1,
    title: "Santorini Getaway",
    location: "Greece",
    price: "$1,299",
    duration: "7 Days",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Bali Temple Tour",
    location: "Indonesia",
    price: "$899",
    duration: "5 Days",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    price: "$1,899",
    duration: "10 Days",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "Eiffel Tower Experience",
    location: "France",
    price: "$1,499",
    duration: "4 Days",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    title: "Tokyo Neon Nights",
    location: "Japan",
    price: "$2,299",
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
        <div className="text-center mb-16 pt-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a1a1a] mb-4 flex items-center justify-center gap-4">
            <span className="h-0.5 w-12 bg-gray-300 hidden sm:block"></span>
            TOP SELLING GROUP TOURS BY ZYVORA TRAVEL!
            <span className="h-0.5 w-12 bg-gray-300 hidden sm:block"></span>
          </h2>
        </div>

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
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="min-w-[320px] max-w-[350px] flex-shrink-0 snap-center bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow">
                    {tour.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                      {tour.location}
                    </div>
                    <div className="flex items-center text-yellow-500 text-sm font-bold">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {tour.rating}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-gray-900 mb-6 tracking-tight line-clamp-1">{tour.title}</h3>
                  
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {tour.duration}
                    </div>
                    <button className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors flex items-center gap-1">
                      View Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
