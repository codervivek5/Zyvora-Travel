import { motion } from 'framer-motion';

const links = [
  { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/zyvora_28/' },
  { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/ZyvoraTravel/?rdid=z0DPaKuaXq0M66FH' },
  { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@ZyvoraTravel28' },
  { id: 'website', label: 'Website', url: 'https://st-group.in' }
];

const Links = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title Area */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Zyvora Travel
          </h1>
          <p className="text-gray-400 text-lg mb-10 font-medium">
            Connect with us on social media
          </p>

          {/* Vertical Links Grid */}
          <div className="flex flex-col gap-4">
            {links.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-center gap-3 text-gray-600 text-xs font-bold tracking-[0.2em] uppercase">
            <div className="h-px w-6 bg-gray-800" />
            STG | PREMIUM EXPEDITIONS
            <div className="h-px w-6 bg-gray-800" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Links;
