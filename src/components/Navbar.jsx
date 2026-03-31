import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg py-2 top-0 border-b border-gray-800' : 'bg-gradient-to-b from-black/80 to-transparent py-4 top-0'} border-b border-gray-400/30`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-extrabold text-2xl lg:text-3xl text-white tracking-tight drop-shadow-md whitespace-nowrap">Zyvora Travel</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-4 xl:space-x-6 text-[11px] xl:text-xs font-semibold tracking-wider">
            <a href="#community" className="text-gray-200 hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap">COMMUNITY TRIPS <span className="text-[10px] text-gray-400">▼</span></a>
            <a href="#bikes" className="text-gray-200 hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap">BIKE TRIPS <span className="text-[10px] text-gray-400">▼</span></a>
            <a href="#luxec" className="text-gray-200 hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap">ZYVORA LUXURY <span className="text-[10px] text-gray-400">▼</span></a>
            <a href="#world" className="text-gray-200 hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap">ZYVORA WORLD <span className="text-[10px] text-gray-400">▼</span></a>
            <Link to="/corporate" className="text-gray-200 hover:text-white transition-colors whitespace-nowrap">CORPORATE BOOKINGS</Link>
            <Link to="/contact" className="bg-[#e64045] hover:bg-[#c9363b] text-white px-4 py-2 rounded-sm font-bold tracking-widest transition-colors ml-2 shadow-lg active:scale-95 whitespace-nowrap">CONTACT US</Link>
            <button className="text-gray-200 hover:text-white transition-colors ml-2">
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-[#1a1a1a] absolute w-full mt-4 border-t border-gray-800 shadow-2xl">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#community" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white font-medium hover:bg-gray-800 rounded">COMMUNITY TRIPS</a>
            <a href="#bikes" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white font-medium hover:bg-gray-800 rounded">BIKE TRIPS</a>
            <a href="#luxec" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white font-medium hover:bg-gray-800 rounded">ZYVORA LUXURY</a>
            <a href="#world" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white font-medium hover:bg-gray-800 rounded">ZYVORA WORLD</a>
            <Link to="/corporate" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-white font-medium hover:bg-gray-800 rounded">CORPORATE BOOKINGS</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 mt-2 bg-[#e64045] hover:bg-[#c9363b] text-white font-bold text-center rounded tracking-widest">CONTACT US</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
