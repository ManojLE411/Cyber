import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Briefcase, Cpu } from 'lucide-react';
import './Training.css';

const Training = () => {
  return (
    <div className="training-container">
      <div className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Training Background" 
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Training & Talent Development</h1>
          <p className="hero-description">
            Transforming engineering students into skilled professionals with industry-aligned programs.
          </p>
        </div>
      </div>

      <div className="content-section">
        <div className="programs-grid">
          
          <div className="program-card">
            <Cpu className="program-icon" />
            <h3 className="program-title">Final Year Projects</h3>
            <p className="program-description">
              Complete project solutions for B.Tech, M.Tech, and Diploma students. IEEE based, hardware + software, and research support.
            </p>
            <Link to="/training/projects" className="program-link">View Project Domains &rarr;</Link>
          </div>

          <div className="program-card accent">
            <Briefcase className="program-icon accent" />
            <h3 className="program-title">Industrial Internships</h3>
            <p className="program-description">
              Real-time project exposure, corporate training, and hands-on experience with industry tools.
            </p>
            <Link to="/training/internships" className="program-link accent">Program Details &rarr;</Link>
          </div>

          <div className="program-card purple">
            <BookOpen className="program-icon purple" />
            <h3 className="program-title">Courses</h3>
            <p className="program-description">
              AI, ML, Data Science, Cybersecurity, Full Stack, and Cloud Computing courses with live projects.
            </p>
            <Link to="/training/courses" className="program-link purple">Browse Courses &rarr;</Link>
          </div>

        </div>

        <div className="training-cta">
          <h3 className="training-cta-title">Ready to Start Your Learning Journey?</h3>
          <p className="training-cta-text">
            Join our training programs and transform your career with industry-aligned skills and hands-on experience.
          </p>
          <Link to="/contact" className="training-cta-button">
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Training;