import { motion } from 'framer-motion';
import { Send, Map } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden flex items-center justify-center">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-[#e64045]">
          <Map className="w-64 h-64 -rotate-12" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#e64045] to-[#c9363b] rounded-3xl p-8 md:p-16 shadow-2xl text-center relative overflow-hidden"
        >
          {/* Decorative shapes inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight text-shadow-sm">
              Ready for your next adventure?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 font-medium tracking-wide">
              Subscribe to our newsletter to receive exclusive travel offers, destination guides, and inspiration for your next dream vacation!
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 bg-white/95 backdrop-blur-sm border-2 border-transparent focus:outline-none focus:border-white shadow-inner font-medium"
                required
              />
              <button 
                type="submit" 
                className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl font-bold tracking-widest transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                SUBSCRIBE <Send className="w-5 h-5" />
              </button>
            </form>
            
            <p className="text-white/70 text-sm mt-6">
              *We hate spam as much as you do. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
