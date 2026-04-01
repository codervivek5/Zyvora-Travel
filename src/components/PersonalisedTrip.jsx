import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const PersonalisedTrip = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a] flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-gray-600 hidden sm:block"></span>
            LOOKING FOR A PERSONALISED TRIP?
            <span className="h-0.5 w-8 bg-gray-600 hidden sm:block"></span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white p-2"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors rounded-lg shadow-inner"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Contact Number" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors rounded-lg shadow-inner"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email ID" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors rounded-lg shadow-inner"
                  />
                </div>
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows="6"
                  className="w-full h-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none rounded-lg shadow-inner"
                ></textarea>
              </div>
            </div>
            
            <button 
              type="button" 
              className="w-full bg-[#e64045] hover:bg-[#c9363b] text-white tracking-[0.2em] font-medium py-4 px-4 transition-all rounded-lg shadow-lg hover:shadow-xl active:scale-[0.99] flex items-center justify-center gap-2"
            >
              SUBMIT INQUIRY <ChevronRight className="w-5 h-5" />
            </button>
          </form>
        </motion.div>


      </div>
    </section>
  );
};

export default PersonalisedTrip;
