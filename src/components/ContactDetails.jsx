import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Contact Info */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            Have questions about a tour, need help with booking, or just want to say hello? 
            Our team of travel experts is ready to assist you.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Our Office</h4>
              <p className="text-gray-600">123 Travel Boulevard, Suite 500<br/>San Francisco, CA 94105</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Phone</h4>
              <p className="text-gray-600">+1 (800) 123-4567<br/>Mon-Fri 9am-6pm PST</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Email</h4>
              <p className="text-gray-600">hello@zyvoratravel.com<br/>support@zyvoratravel.com</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Doe" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you plan your next trip?"></textarea>
          </div>
          <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactDetails;
