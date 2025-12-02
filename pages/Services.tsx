import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Monitor, Brain, Cloud, Smartphone, Briefcase } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Cybersecurity Services",
      desc: "Protect enterprises from evolving cyber threats with VAPT, SOC, and Compliance.",
      icon: Shield,
      path: "/services/cybersecurity"
    },
    {
      title: "Software Development",
      desc: "Secure, scalable, and high-quality software solutions aligned with business goals.",
      icon: Monitor,
      path: "/services/software"
    },
    {
      title: "AI & Data Science",
      desc: "Harness the power of data and AI to improve insights and automation.",
      icon: Brain,
      path: "/services/ai"
    },
    {
      title: "Web & Mobile Apps",
      desc: "User-friendly, high-performance applications for all platforms.",
      icon: Smartphone,
      path: "/services/web"
    },
    {
      title: "Cloud & DevOps",
      desc: "Enable organizations to adopt secure, scalable cloud infrastructures.",
      icon: Cloud,
      path: "/services/cloud"
    },
    {
      title: "IT Consulting",
      desc: "Strategic guidance to align technology with your business vision.",
      icon: Briefcase,
      path: "/contact"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="relative bg-primary py-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Services Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We deliver high-value technology solutions that enable organizations to innovate, grow and stay secure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-transparent transition-all duration-300 hover:scale-105 hover:border-secondary hover:shadow-xl">
              <div className="h-12 w-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-secondary">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <Link to={service.path} className="text-secondary font-semibold hover:text-cyan-700 flex items-center">
                Learn More <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">Each service is tailored to meet global industry quality and security standards.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;