import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center border border-slate-100">
          <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting KOLMAG. We have received your message and will get back to you shortly.
          </p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', phone: '', message: '' });
            }}
            className="text-secondary font-semibold hover:underline"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

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
                      <a href="tel:+916309649554" className="text-gray-400 hover:text-secondary transition-colors">+91 63096 49554</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-secondary mr-4 shrink-0" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a href="mailto:Kolmagcybertech@gmail.com" className="text-gray-400 hover:text-secondary transition-colors">Kolmagcybertech@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                   <a href="https://www.linkedin.com/company/kolmag-cyber-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300 hover:-translate-y-1" aria-label="LinkedIn">
                     <Linkedin className="h-5 w-5" />
                   </a>
                   <a href="https://x.com/kolmagcybertech" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300 hover:-translate-y-1" aria-label="Twitter">
                     <Twitter className="h-5 w-5" />
                   </a>
                   <a href="https://www.facebook.com/kolmagcybertech" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300 hover:-translate-y-1" aria-label="Facebook">
                     <Facebook className="h-5 w-5" />
                   </a>
                </div>
              </div>
            </div>

            <div className="p-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary bg-gray-50 p-3 border"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      required
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary bg-gray-50 p-3 border"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary bg-gray-50 p-3 border"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
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