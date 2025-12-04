import { Link } from 'react-router-dom';
import { Briefcase, Code, Terminal, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';

const Internships = () => {
  const highlights = [
    {
      title: "Hands-on Technology Training",
      desc: "Learn by doing. Move beyond theory and work with the actual tools and frameworks used in the industry.",
      icon: Terminal
    },
    {
      title: "Real-Time Project Involvement",
      desc: "Contribute to live projects or realistic simulations that mimic actual corporate deliverables.",
      icon: Code
    },
    {
      title: "Industry Tools & Platforms",
      desc: "Gain proficiency in Jira, GitHub, AWS, Docker, and other essential enterprise platforms.",
      icon: Briefcase
    },
    {
      title: "Certificates & LOR",
      desc: "Receive a verified internship certificate and a Letter of Recommendation based on performance.",
      icon: Award
    },
    {
      title: "Placement Preparation",
      desc: "Mock interviews, resume building, and soft skills training to get you job-ready.",
      icon: Users
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative bg-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Internship Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial Internship Program</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridge the gap between academic learning and corporate expectations with our intensive, project-based internship program.
          </p>
          <div className="mt-8">
            <Link to="/training/internships/apply" className="bg-accent hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-full transition-colors inline-block">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Intern with KOLMAG?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our internship program offers real-time project exposure and corporate-style training designed to transform engineering students into skilled professionals.
            </p>
            <p className="text-gray-600">
              Unlike traditional training, we treat interns as junior developers. You will attend stand-ups, manage tasks, and write production-quality code under the mentorship of senior engineers.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
             <h3 className="text-xl font-bold text-slate-900 mb-4">Internship Domains</h3>
             <ul className="space-y-3">
               {['Web Full Stack (MERN/Java/Python)', 'Data Science & AI', 'Cybersecurity & Ethical Hacking', 'Cloud Computing (AWS/DevOps)', 'Mobile App Development'].map((domain, i) => (
                 <li key={i} className="flex items-center text-gray-700">
                   <CheckCircle className="h-5 w-5 text-secondary mr-3" />
                   {domain}
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* Highlights Grid */}
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Program Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <item.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-0 -translate-y-1/2"></div>
            
            {[
              { step: "01", title: "Apply", desc: "Submit your application form" },
              { step: "02", title: "Screening", desc: "Basic technical assessment" },
              { step: "03", title: "Training", desc: "Intensive skill building" },
              { step: "04", title: "Project", desc: "Work on live modules" },
              { step: "05", title: "Certification", desc: "Get certified & career support" },
            ].map((s, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm w-full md:w-48 relative z-10 mb-8 md:mb-0 border border-gray-100">
                <div className="text-3xl font-bold text-slate-200 mb-2">{s.step}</div>
                <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-secondary py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Career Journey Today</h2>
        <p className="text-lg opacity-90 mb-8">Limited slots available for the upcoming batch.</p>
        <Link to="/training/internships/apply" className="inline-flex items-center bg-white text-secondary px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
          Register for Internship <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default Internships;