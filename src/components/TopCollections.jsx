import { motion } from 'framer-motion';

const collections = [
  {
    id: 1,
    title: "Ladakh Bike Trips",
    tours: "14",
    price: "15,999",
    colSpan: "col-span-1 md:col-span-2",
    hasDetails: true,
    image: "/images/ladakh.png"
  },
  {
    id: 2,
    title: "Maldives Romantic Escapades",
    tours: "",
    price: "",
    colSpan: "col-span-1",
    hasDetails: false,
    image: "/images/maldives.png"
  },
  {
    id: 3,
    title: "North East India Tours",
    colSpan: "col-span-1",
    hasDetails: false,
    image: "https://images.unsplash.com/photo-1596489392289-53bfa59dd6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "Spiti Valley Tour Packages",
    colSpan: "col-span-1",
    hasDetails: false,
    image: "/images/spiti.png"
  },
  {
    id: 5,
    title: "Kashmir Tour Packages",
    colSpan: "col-span-1",
    hasDetails: false,
    image: "/images/tarsar.png"
  },
  {
    id: 6,
    title: "Rajasthan Tour Packages",
    colSpan: "col-span-1",
    hasDetails: false,
    image: "/images/rajasthan.png"
  },
  {
    id: 7,
    title: "Andaman & Nicobar Islands Tours",
    colSpan: "col-span-1",
    hasDetails: false,
    image: "https://images.unsplash.com/photo-1589308183188-751bd7da67ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 8,
    title: "Kerala Tour Packages",
    colSpan: "col-span-1",
    hasDetails: false,
    image: "/images/kerala.png"
  },
  {
    id: 9,
    title: "Dubai Vacation Packages",
    colSpan: "col-span-1",
    hasDetails: false,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 10,
    title: "Vietnam Holiday Packages",
    tours: "5",
    price: "44,000",
    colSpan: "col-span-1 md:col-span-2",
    hasDetails: true,
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  }
];

const TopCollections = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a1a1a] mb-4 flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-gray-600 hidden sm:block"></span>
            OUR TOP COLLECTIONS
            <span className="h-0.5 w-8 bg-gray-600 hidden sm:block"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {collections.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${item.colSpan} min-h-[250px] md:min-h-[220px] rounded-2xl shadow-md border border-gray-100/50`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10" />
              
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full text-white">
                <h3 className="text-xl md:text-2xl font-bold tracking-wide drop-shadow-md mb-2">{item.title}</h3>
                
                {item.hasDetails && (
                  <div className="flex flex-col gap-2 mt-4 space-y-3">
                    <div className="flex items-center gap-8 text-sm">
                      <div>
                        <span className="block text-gray-300 text-xs tracking-wider uppercase mb-1">TOURS</span>
                        <span className="font-semibold text-lg">{item.tours}</span>
                      </div>
                      <div>
                        <span className="block text-gray-300 text-xs tracking-wider uppercase mb-1">STARTING FROM</span>
                        <span className="font-semibold text-lg">₹ {item.price}</span>
                      </div>
                    </div>
                    <button className="border border-white/60 bg-transparent hover:bg-white hover:text-black py-2 px-6 w-max transition-all tracking-[0.2em] text-sm mt-3 backdrop-blur-sm">
                      EXPLORE
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCollections;
