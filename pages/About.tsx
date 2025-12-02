import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
            alt="Office Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
           <h1 className="text-4xl font-bold mb-4">About Us</h1>
           <p className="text-xl text-gray-300">Innovating for a secure and intelligent future.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="lead text-2xl font-light text-slate-800 mb-8">
            KOLMAG Cyber Technologies is a professionally driven IT organization that integrates innovation, engineering excellence, and cybersecurity intelligence to deliver world-class solutions.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="mb-6">
                We operate across technology services, digital transformation, and talent development to create lasting impact for businesses and individuals. Our philosophy is simple: we believe that technology and talent together shape the future.
              </p>
              <p>
                Our unique model ensures we deliver transformational solutions for enterprises while empowering engineering students with industry-ready capabilities through our rigorous training programs.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-secondary">
               <h3 className="text-xl font-bold text-slate-900 mb-4">Our Strengths</h3>
               <ul className="space-y-3">
                 {['Highly skilled engineers and mentors', 'Robust software development lifecycle', 'Industry-certified cybersecurity professionals', 'Modern training methodologies', 'Dedicated R&D team'].map(item => (
                   <li key={item} className="flex items-center">
                     <span className="text-secondary mr-2">•</span> {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Secure Software Engineering",
                "Cyber Defence & Threat Intelligence",
                "AI and Data Science Implementation",
                "Full-Stack Development",
                "Cloud & DevOps",
                "Research & Innovation"
              ].map((expert, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center font-medium text-slate-800 hover:border-secondary transition-colors">
                  {expert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;