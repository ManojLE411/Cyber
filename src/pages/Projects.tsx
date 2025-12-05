import { Check, Cpu, Wifi, Shield, Code, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Engineering Projects Background" 
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Final Year Project Development</h1>
          <p className="hero-description">IEEE-based, Innovative, and Industry-Standard Projects for Engineering Students.</p>
        </div>
      </div>

      <div className="content-section">
        
        <div className="content-grid">
          <div>
            <h2 className="content-section-title">What We Provide</h2>
            <ul className="features-list">
              {[
                "Complete Source Code & Implementation",
                "Project Report & Documentation",
                "PPT & Synopsis",
                "Research Paper Support",
                "Plagiarism Check",
                "Live Demo & Explanation"
              ].map((item, idx) => (
                <li key={idx} className="feature-item">
                  <Check className="feature-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="content-section-title">Popular Domains</h2>
            <div className="domains-grid">
              {[
                { name: 'Machine Learning', icon: Database },
                { name: 'IoT & Embedded', icon: Wifi },
                { name: 'Cybersecurity', icon: Shield },
                { name: 'Web & Cloud', icon: Code },
                { name: 'Blockchain', icon: Cpu },
                { name: 'Artificial Intelligence', icon: Database },
              ].map((domain, i) => (
                <div key={i} className="domain-card">
                  <domain.icon className="domain-icon" />
                  <span className="domain-name">{domain.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="projects-cta">
          <h3 className="projects-cta-title">Ready to Start Your Project?</h3>
          <p className="projects-cta-text">
            Get complete project solutions with source code, documentation, and research support for your final year project.
          </p>
          <Link to="/contact" className="projects-cta-button">
            Request Project Quote
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Projects;