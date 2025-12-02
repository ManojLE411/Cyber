import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Smile, Coffee, Target, ArrowRight, Briefcase } from 'lucide-react';

const Careers: React.FC = () => {
  const benefits = [
    { title: "Great Culture", desc: "Collaborative and inclusive environment.", icon: Smile },
    { title: "Continuous Learning", desc: "Access to courses and workshops.", icon: Target },
    { title: "Work-Life Balance", desc: "Flexible timings and remote options.", icon: Coffee },
    { title: "Growth", desc: "Clear career progression paths.", icon: Users },
  ];

  const openings = [
    {
      role: "Senior Full Stack Developer",
      exp: "3-5 Years",
      location: "Bangalore",
      type: "Full Time"
    },
    {
      role: "Cybersecurity Analyst",
      exp: "2-4 Years",
      location: "Remote/Bangalore",
      type: "Full Time"
    },
    {
      role: "AI/ML Engineer",
      exp: "1-3 Years",
      location: "Bangalore",
      type: "Full Time"
    },
    {
      role: "Sales Executive",
      exp: "0-2 Years",
      location: "Bangalore",
      type: "Full Time"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative bg-primary py-24 text-white text-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
            alt="Careers Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Build the future of technology with us. We are always looking for passionate individuals to join our mission.
          </p>
        </div>
      </div>

      {/* Life at KOLMAG */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Life at KOLMAG</h2>
          <p className="mt-4 text-gray-600">
            More than just a workplace, we are a community of innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((b, i) => (
            <div key={i} className="text-center p-6 bg-slate-50 rounded-xl">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-secondary mx-auto mb-4 shadow-sm">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Openings */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
            <h3 className="text-xl font-bold flex items-center">
              <Briefcase className="mr-2 h-5 w-5 text-secondary" />
              Current Openings
            </h3>
            <span className="text-sm bg-secondary px-3 py-1 rounded-full text-white">{openings.length} Roles</span>
          </div>
          <div className="divide-y divide-gray-100">
            {openings.map((job, idx) => (
              <div key={idx} className="p-6 flex flex-col md:flex-row justify-between items-center hover:bg-slate-50 transition-colors">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-bold text-slate-800">{job.role}</h4>
                  <div className="flex space-x-4 mt-2 text-sm text-gray-500">
                    <span>{job.exp}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <Link 
                  to="/careers/apply" 
                  state={{ role: job.role }}
                  className="border border-slate-300 text-slate-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Callout */}
        <div className="mt-20 bg-slate-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between border border-slate-200">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Looking for an Internship?</h3>
            <p className="text-gray-600">Start your career with our intensive industrial training program.</p>
          </div>
          <Link to="/training/internships" className="flex items-center text-secondary font-bold hover:underline">
            View Internship Details <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Careers;