import React from 'react';
import { Code2, Settings, Database, Globe } from 'lucide-react';

const SoftwareDev: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-slate-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
            alt="Software Development Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/95" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Software Development</h1>
          <p className="text-lg opacity-90">Building secure, scalable, and high-quality software solutions.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Capabilities</h2>
            <p className="text-gray-600 mb-8">
              We design and build systems that drive business efficiency. Our engineering methodology follows SDLC, Agile, and DevSecOps principles to ensure security is integrated from day one.
            </p>
            <div className="space-y-6">
              {[
                { title: "Enterprise Applications", desc: "Large-scale systems for complex business needs." },
                { title: "ERP/CRM Systems", desc: "Streamlining operations and customer relationships." },
                { title: "Business Automation", desc: "Tools to reduce manual effort and errors." },
                { title: "System Integration", desc: "Connecting disparate systems for seamless data flow." }
              ].map((item, idx) => (
                <div key={idx} className="flex">
                  <div className="shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-sm border border-transparent transition-all duration-300 hover:scale-105 hover:border-secondary hover:shadow-lg">
              <Code2 className="h-12 w-12 text-secondary mb-4" />
              <h4 className="font-bold">Custom Dev</h4>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-sm border border-transparent transition-all duration-300 hover:scale-105 hover:border-secondary hover:shadow-lg">
              <Settings className="h-12 w-12 text-secondary mb-4" />
              <h4 className="font-bold">Automation</h4>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-sm border border-transparent transition-all duration-300 hover:scale-105 hover:border-secondary hover:shadow-lg">
              <Database className="h-12 w-12 text-secondary mb-4" />
              <h4 className="font-bold">Data Systems</h4>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl flex flex-col items-center justify-center text-center shadow-sm border border-transparent transition-all duration-300 hover:scale-105 hover:border-secondary hover:shadow-lg">
              <Globe className="h-12 w-12 text-secondary mb-4" />
              <h4 className="font-bold">Web Platforms</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDev;