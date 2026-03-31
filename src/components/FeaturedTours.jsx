import { motion } from 'framer-motion';
import { Star, Clock, MapPin } from 'lucide-react';

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
  }
];

const FeaturedTours = () => {
  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked curated packages built specifically for ultimate relaxation and adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-gray-900 shadow">
                  {tour.price}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                    {tour.location}
                  </div>
                  <div className="flex items-center text-yellow-500 text-sm font-medium">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {tour.rating}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{tour.title}</h3>
                
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {tour.duration}
                  </div>
                  <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    View Details &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
