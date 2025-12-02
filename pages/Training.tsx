import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Briefcase, Cpu } from 'lucide-react';

const Training: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="relative bg-slate-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Training Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-800/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Training & Talent Development</h1>
          <p className="text-xl text-gray-300">
            Transforming engineering students into skilled professionals with industry-aligned programs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Cpu className="h-12 w-12 text-secondary mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Final Year Projects</h3>
            <p className="text-gray-600 mb-6">
              Complete project solutions for B.Tech, M.Tech, and Diploma students. IEEE based, hardware + software, and research support.
            </p>
            <Link to="/training/projects" className="text-secondary font-bold hover:underline">View Project Domains &rarr;</Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Briefcase className="h-12 w-12 text-accent mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Industrial Internships</h3>
            <p className="text-gray-600 mb-6">
              Real-time project exposure, corporate training, and hands-on experience with industry tools.
            </p>
            <Link to="/training/internships" className="text-accent font-bold hover:underline">Program Details &rarr;</Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <BookOpen className="h-12 w-12 text-purple-500 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Courses</h3>
            <p className="text-gray-600 mb-6">
              AI, ML, Data Science, Cybersecurity, Full Stack, and Cloud Computing courses with live projects.
            </p>
            <Link to="/training/courses" className="text-purple-500 font-bold hover:underline">Browse Courses &rarr;</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Training;