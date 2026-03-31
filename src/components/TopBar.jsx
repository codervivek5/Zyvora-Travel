import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#1a1a1a] text-gray-300 text-sm py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-50">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
          <Phone className="w-4 h-4" />
          <span>9870417123</span>
        </div>
        <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
          <Mail className="w-4 h-4" />
          <span>care@zyvoratravel.com</span>
        </div>
      </div>
      <div>
        <select className="bg-transparent text-gray-300 outline-none border-none cursor-pointer hover:text-white transition-colors">
          <option value="INR" className="bg-[#1a1a1a] text-white">INR</option>
          <option value="USD" className="bg-[#1a1a1a] text-white">USD</option>
          <option value="EUR" className="bg-[#1a1a1a] text-white">EUR</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
