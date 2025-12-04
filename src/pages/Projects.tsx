import { Check, Cpu, Wifi, Shield, Code, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-slate-900 py-24 text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Engineering Projects Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Final Year Project Development</h1>
          <p className="mt-4 text-gray-400">IEEE-based, Innovative, and Industry-Standard Projects for Engineering Students.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What We Provide</h2>
            <ul className="space-y-4">
              {[
                "Complete Source Code & Implementation",
                "Project Report & Documentation",
                "PPT & Synopsis",
                "Research Paper Support",
                "Plagiarism Check",
                "Live Demo & Explanation"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-gray-700 bg-slate-50 p-3 rounded-lg">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Popular Domains</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Machine Learning', icon: Database },
                { name: 'IoT & Embedded', icon: Wifi },
                { name: 'Cybersecurity', icon: Shield },
                { name: 'Web & Cloud', icon: Code },
                { name: 'Blockchain', icon: Cpu },
                { name: 'Artificial Intelligence', icon: Database },
              ].map((domain, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg transition-all duration-300 hover:scale-105 hover:border-secondary hover:bg-slate-50 hover:shadow-lg">
                  <domain.icon className="h-8 w-8 text-slate-600 mb-2" />
                  <span className="font-semibold text-sm text-center">{domain.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to start?</h2>
            <Link to="/contact" className="bg-secondary text-white px-8 py-3 rounded-md font-semibold hover:bg-cyan-700">
              Request Project Quote
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Projects;