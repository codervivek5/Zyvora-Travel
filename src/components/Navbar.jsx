import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900 tracking-tight">Zyvora Travel</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
            <a href="#tours" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tours</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</Link>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white mt-1 border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">Home</Link>
            <a href="#tours" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">Tours</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">About</a>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50">Contact</Link>
            <button className="w-full text-left px-3 py-2 mt-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
