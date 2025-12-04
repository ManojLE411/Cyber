import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from '../assets/logo.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          <div>
            <Link to="/" className="footer-logo">
              <img 
                src={logo} 
                alt="KOLMAG Cyber Technologies Logo" 
                className="footer-logo-img"
              />
            </Link>
            <p className="footer-description">
              Next-generation technology company offering enterprise-level software development, robust cybersecurity services, and advanced AI & Data Science solutions.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/kolmag-cyber-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn"><Linkedin style={{ height: '1.25rem', width: '1.25rem' }} /></a>
              <a href="https://x.com/kolmagcybertech" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter"><Twitter style={{ height: '1.25rem', width: '1.25rem' }} /></a>
              <a href="https://www.facebook.com/kolmagcybertech" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook"><Facebook style={{ height: '1.25rem', width: '1.25rem' }} /></a>
            </div>
          </div>

          <div>
            <h3 className="footer-section-title">Services</h3>
            <ul className="footer-list">
              <li className="footer-list-item"><Link to="/services/cybersecurity" className="footer-link">Cybersecurity & VAPT</Link></li>
              <li className="footer-list-item"><Link to="/services/software" className="footer-link">Software Development</Link></li>
              <li className="footer-list-item"><Link to="/services/ai" className="footer-link">AI & Data Science</Link></li>
              <li className="footer-list-item"><Link to="/services/cloud" className="footer-link">Cloud & DevOps</Link></li>
              <li className="footer-list-item"><Link to="/services/web" className="footer-link">Web & Mobile Apps</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">Training</h3>
            <ul className="footer-list">
              <li className="footer-list-item"><Link to="/training/projects" className="footer-link">Final Year Projects</Link></li>
              <li className="footer-list-item"><Link to="/training/internships" className="footer-link">Industrial Internships</Link></li>
              <li className="footer-list-item"><Link to="/training/courses" className="footer-link">Skill Development Courses</Link></li>
              <li className="footer-list-item"><Link to="/careers" className="footer-link">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">Contact</h3>
            <ul className="footer-list" style={{ gap: '0.75rem' }}>
              <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>5th Floor, Vasista Bhavan, one day co working labs, APHB Colony, Indira Nagar, Gachibowli, Seri Lingampally, K.V.Rangareddy, Telangana - 500032</span>
              </li>
              <li className="footer-contact-item-center">
                <Phone className="footer-contact-icon-center" />
                <a href="tel:+916309649554" className="footer-contact-link">+91 63096 49554</a>
              </li>
              <li className="footer-contact-item-center">
                <Mail className="footer-contact-icon-center" />
                <a href="mailto:Kolmagcybertech@gmail.com" className="footer-contact-link">Kolmagcybertech@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} KOLMAG Cyber Technologies Pvt Ltd. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/legal" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/legal" className="footer-bottom-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;