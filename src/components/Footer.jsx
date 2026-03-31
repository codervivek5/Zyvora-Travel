import { Plane, Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1 border-b md:border-b-0 border-gray-800 pb-8 md:pb-0">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-8 w-8 text-blue-500" />
              <span className="font-bold text-2xl tracking-tight">Zyvora Travel</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making your dream vacations a reality. Experience the world with our premium tour packages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Destinations</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Europe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Asia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">North America</a></li>
              <li><a href="#" className="hover:text-white transition-colors">South America</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Africa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Travel Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Zyvora Travel. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-center md:text-right">
            Designed with passion for travel. | Developed by <a href="https://instagram.com/coder_vivek" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 font-semibold transition-colors">@coder_vivek</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
