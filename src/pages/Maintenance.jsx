import { motion } from 'framer-motion';
import { Wrench, MessageCircle, Mail, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Maintenance = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/maintenance-bg.png")' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/30 blur-3xl rounded-full scale-150 animate-pulse" />
              <div className="relative bg-gradient-to-br from-orange-500 to-red-600 p-5 rounded-2xl shadow-2xl">
                <Wrench className="w-12 h-12 text-white animate-spin-slow" />
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            WEBSITE UNDER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-purple-600">
              MAINTENANCE
            </span>
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
            We're currently fine-tuning <span className="text-white font-semibold">STG</span> to bring you even more 
            extraordinary travel experiences. We'll be back shortly!
          </p>

          {/* 3 Buttons Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Button 1: Join Community */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-xl bg-white px-6 py-4 text-black font-bold text-lg transition-all shadow-xl hover:shadow-orange-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                JOIN COMMUNITY <MessageCircle className="w-5 h-5 text-orange-600" />
              </span>
            </motion.button>

            {/* Button 2: Contact Support */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full group rounded-xl bg-white/5 border border-white/10 px-6 py-4 text-white font-bold text-lg transition-all hover:bg-white/10 backdrop-blur-md"
              >
                <span className="flex items-center justify-center gap-2">
                  CONTACT US <Mail className="w-5 h-5 text-gray-400" />
                </span>
              </motion.button>
            </Link>

            {/* Button 3: Follow Updates */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 px-6 py-4 text-white font-bold text-lg transition-all shadow-xl hover:shadow-orange-500/20"
            >
              <span className="flex items-center justify-center gap-2">
                FOLLOW US <Globe className="w-5 h-5" />
              </span>
            </motion.button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-3 text-gray-500 text-sm font-medium tracking-widest uppercase">
            <div className="h-px w-8 bg-gray-800" />
            STG | Premium Expeditions
            <div className="h-px w-8 bg-gray-800" />
          </div>
        </motion.div>
      </div>

      {/* Custom Styles for Slow Animation */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Maintenance;
