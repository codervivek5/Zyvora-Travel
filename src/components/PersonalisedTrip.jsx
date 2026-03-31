import { ChevronRight } from 'lucide-react';

const PersonalisedTrip = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a] flex items-center justify-center gap-4">
            <span className="h-0.5 w-8 bg-gray-600 hidden sm:block"></span>
            LOOKING FOR A PERSONALISED TRIP?
            <span className="h-0.5 w-8 bg-gray-600 hidden sm:block"></span>
          </h2>
        </div>

        <div className="bg-white p-2">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-transparent border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Contact Number" 
                    className="w-full px-4 py-3 bg-transparent border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email ID" 
                    className="w-full px-4 py-3 bg-transparent border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows="6"
                  className="w-full h-full px-4 py-3 bg-transparent border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                ></textarea>
              </div>
            </div>
            
            <button 
              type="button" 
              className="w-full bg-[#e64045] hover:bg-[#c9363b] text-white tracking-[0.2em] font-medium py-4 px-4 transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>


      </div>
    </section>
  );
};

export default PersonalisedTrip;
