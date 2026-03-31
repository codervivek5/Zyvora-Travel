import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80"
          alt="Travel Destination"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-md"
        >
          Discover Your Next <span className="text-blue-400">Adventure</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-xl text-gray-200 max-w-3xl drop-shadow"
        >
          Explore the world's most breathtaking destinations with our premium curated tours. Unforgettable experiences await.
        </motion.p>

        {/* Search/Booking Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 w-full max-w-4xl bg-white rounded-2xl p-2 shadow-2xl flex flex-col md:flex-row items-center gap-2"
        >
          <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl w-full">
            <MapPin className="text-blue-500 h-5 w-5 mr-3" />
            <input 
              type="text" 
              placeholder="Where to?" 
              className="bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 w-full font-medium"
            />
          </div>
          
          <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl w-full">
            <Calendar className="text-blue-500 h-5 w-5 mr-3" />
            <input 
              type="text" 
              placeholder="Dates" 
              className="bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 w-full font-medium"
            />
          </div>

          <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl w-full">
            <Users className="text-blue-500 h-5 w-5 mr-3" />
            <input 
              type="text" 
              placeholder="Guests" 
              className="bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 w-full font-medium"
            />
          </div>

          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition-colors flex items-center justify-center">
            <Search className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
