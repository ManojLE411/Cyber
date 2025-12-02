import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting KOLMAG. We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="relative bg-slate-900 py-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f142fcb93370?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-gray-300">Get in touch for services, training, or general inquiries.</p>
        </div>
      </div>
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
            
            <div className="p-10 bg-slate-900 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-secondary mr-4 mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold">Head Office</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        5th Floor, Vasista Bhavan, one day co working labs, APHB Colony, Indira Nagar, Gachibowli, Seri Lingampally, K.V.Rangareddy, Telangana - 500032
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-secondary mr-4 shrink-0" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-400">+91 63096 49554</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-secondary mr-4 shrink-0" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-400">Kolmagcybertech@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                   <a href="#" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300 hover:-translate-y-1">
                     <Linkedin className="h-5 w-5" />
                   </a>
                   <a href="#" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300 hover:-translate-y-1">
                     <Twitter className="h-5 w-5" />
                   </a>
                   <a href="#" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300 hover:-translate-y-1">
                     <Facebook className="h-5 w-5" />
                   </a>
                </div>
              </div>
            </div>

            <div className="p-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    required
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary bg-gray-50 p-3 border"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      required
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary bg-gray-50 p-3 border"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary bg-gray-50 p-3 border"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary bg-gray-50 p-3 border"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-bold hover:bg-slate-800 flex items-center justify-center transition-colors"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;