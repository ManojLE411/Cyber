import { Link } from 'react-router-dom';
import { Users, Smile, Coffee, Target, ArrowRight, Briefcase } from 'lucide-react';
import './Careers.css';

const Careers = () => {
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
    <div className="careers-container">
      {/* Hero */}
      <div className="careers-hero">
        <div className="careers-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80" 
            alt="Careers Background" 
          />
          <div className="careers-hero-overlay" />
        </div>
        <div className="careers-hero-content">
          <h1 className="careers-hero-title">Join Our Team</h1>
          <p className="careers-hero-description">
            Build the future of technology with us. We are always looking for passionate individuals to join our mission.
          </p>
        </div>
      </div>

      {/* Life at KOLMAG */}
      <div className="careers-life-section">
        <div className="careers-section-header">
          <h2 className="careers-section-title">Life at KOLMAG</h2>
          <p className="careers-section-description">
            More than just a workplace, we are a community of innovators.
          </p>
        </div>

        <div className="careers-benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="careers-benefit-card">
              <div className="careers-benefit-icon-container">
                <b.icon className="careers-benefit-icon" />
              </div>
              <h3 className="careers-benefit-title">{b.title}</h3>
              <p className="careers-benefit-description">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Openings */}
        <div className="careers-openings-card">
          <div className="careers-openings-header">
            <h3 className="careers-openings-title">
              <Briefcase className="careers-openings-title-icon" />
              <span className="careers-openings-title-text">Current Openings</span>
            </h3>
            <span className="careers-openings-badge">{openings.length} Roles</span>
          </div>
          <div className="careers-openings-list">
            {openings.map((job, idx) => (
              <div key={idx} className="careers-job-item">
                <div className="careers-job-content">
                  <h4 className="careers-job-role">{job.role}</h4>
                  <div className="careers-job-details">
                    <span className="careers-job-detail-item">{job.exp}</span>
                    <span className="careers-job-detail-separator">•</span>
                    <span className="careers-job-detail-item">{job.location}</span>
                    <span className="careers-job-detail-separator">•</span>
                    <span className="careers-job-detail-item">{job.type}</span>
                  </div>
                </div>
                <Link 
                  to="/careers/apply" 
                  state={{ role: job.role }}
                  className="careers-job-apply-btn"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Internship Callout */}
        <div className="careers-internship-callout">
          <div className="careers-internship-content">
            <h3 className="careers-internship-title">Looking for an Internship?</h3>
            <p className="careers-internship-description">Start your career with our intensive industrial training program.</p>
          </div>
          <Link to="/training/internships" className="careers-internship-link">
            View Internship Details <ArrowRight className="careers-internship-link-icon" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Careers;