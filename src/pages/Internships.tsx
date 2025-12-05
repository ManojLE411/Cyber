import { Link } from 'react-router-dom';
import { Briefcase, Code, Terminal, Award, Users, ArrowRight, CheckCircle } from 'lucide-react';
import './Internships.css';

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
    <div className="internships-container">
      {/* Hero */}
      <div className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Internship Background" 
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Industrial Internship Program</h1>
          <p className="hero-description">
            Bridge the gap between academic learning and corporate expectations with our intensive, project-based internship program.
          </p>
          <div className="hero-cta">
            <Link to="/training/internships/apply" className="hero-button">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="overview-section">
        <div className="overview-grid">
          <div>
            <h2 className="overview-content-title">Why Intern with KOLMAG?</h2>
            <p className="overview-content-text">
              Our internship program offers real-time project exposure and corporate-style training designed to transform engineering students into skilled professionals.
            </p>
            <p className="overview-content-text overview-content-text-last">
              Unlike traditional training, we treat interns as junior developers. You will attend stand-ups, manage tasks, and write production-quality code under the mentorship of senior engineers.
            </p>
          </div>
          <div className="overview-card">
             <h3 className="overview-card-title">Internship Domains</h3>
             <ul className="domains-list">
               {['Web Full Stack (MERN/Java/Python)', 'Data Science & AI', 'Cybersecurity & Ethical Hacking', 'Cloud Computing (AWS/DevOps)', 'Mobile App Development'].map((domain, i) => (
                 <li key={i} className="domain-item">
                   <CheckCircle className="domain-icon" />
                   {domain}
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* Highlights Grid */}
        <h2 className="highlights-title">Program Highlights</h2>
        <div className="highlights-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="highlight-card">
              <item.icon className="highlight-icon" />
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section">
        <div className="process-container">
          <h2 className="process-title">How It Works</h2>
          <div className="process-steps">
            {/* Connecting Line (Desktop) */}
            <div className="process-connector"></div>
            
            {[
              { step: "01", title: "Apply", desc: "Submit your application form" },
              { step: "02", title: "Screening", desc: "Basic technical assessment" },
              { step: "03", title: "Training", desc: "Intensive skill building" },
              { step: "04", title: "Project", desc: "Work on live modules" },
              { step: "05", title: "Certification", desc: "Get certified & career support" },
            ].map((s, i) => (
              <div key={i} className="process-step">
                <div className="process-step-number">{s.step}</div>
                <h3 className="process-step-title">{s.title}</h3>
                <p className="process-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2 className="cta-title">Start Your Career Journey Today</h2>
        <p className="cta-description">Limited slots available for the upcoming batch.</p>
        <Link to="/training/internships/apply" className="cta-button">
          Register for Internship <ArrowRight className="cta-button-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Internships;