import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <button className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl transition-all hover:scale-110 active:scale-95 group relative">
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
      </button>

      <button className="bg-[#1a1a1a] hover:bg-gray-800 text-white p-4 rounded-full shadow-xl transition-all hover:scale-110 active:scale-95 group relative border border-gray-700">
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Call Us
        </span>
      </button>
    </div>
  );
};

export default FloatingActions;
