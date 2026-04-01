import { motion, AnimatePresence } from 'framer-motion';
import { X, Wrench, AlertTriangle, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const MaintenancePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem('maintenance_popup_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000); // Show after 1 second
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('maintenance_popup_seen', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 mb-12">
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Top Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-red-500 to-purple-600" />
            
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 flex flex-col items-center text-center">
              {/* Logo Area */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full" />
                <img 
                  src="/logo.png" 
                  alt="STG Logo" 
                  className="relative h-16 w-auto object-contain bg-white rounded-lg p-2 shadow-lg"
                />
              </div>

              {/* Icon & Title */}
              <div className="flex items-center justify-center gap-2 mb-2 text-orange-400">
                <Wrench className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-bold tracking-widest uppercase">System Update</span>
              </div>
              
              <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                Under Maintenance
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
                We're currently polishing few wings of <span className="text-white font-semibold italic">STG</span> to serve you better. 
                <br />
                <span className="mt-2 block text-sm text-gray-500 italic">Feel free to continue exploring the current version!</span>
              </p>

              {/* Action Button */}
              <button
                onClick={handleClose}
                className="group relative w-full overflow-hidden rounded-xl bg-white px-8 py-4 text-black font-bold text-lg transition-all active:scale-95 shadow-xl hover:shadow-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center justify-center gap-2">
                  EXPLORE WEBSITE <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
            
            {/* Notice Footer */}
            <div className="bg-black/40 px-8 py-4 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-gray-500">
              <AlertTriangle className="w-4 h-4 text-orange-500/50" />
              <span>Some features might be temporarily unavailable.</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MaintenancePopup;
