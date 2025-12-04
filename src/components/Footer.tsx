import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src={logo} 
                alt="KOLMAG Cyber Technologies Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-6 mb-4">
              Next-generation technology company offering enterprise-level software development, robust cybersecurity services, and advanced AI & Data Science solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/kolmag-cyber-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="https://x.com/kolmagcybertech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="https://www.facebook.com/kolmagcybertech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/cybersecurity" className="hover:text-secondary">Cybersecurity & VAPT</Link></li>
              <li><Link to="/services/software" className="hover:text-secondary">Software Development</Link></li>
              <li><Link to="/services/ai" className="hover:text-secondary">AI & Data Science</Link></li>
              <li><Link to="/services/cloud" className="hover:text-secondary">Cloud & DevOps</Link></li>
              <li><Link to="/services/web" className="hover:text-secondary">Web & Mobile Apps</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Training</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/training/projects" className="hover:text-secondary">Final Year Projects</Link></li>
              <li><Link to="/training/internships" className="hover:text-secondary">Industrial Internships</Link></li>
              <li><Link to="/training/courses" className="hover:text-secondary">Skill Development Courses</Link></li>
              <li><Link to="/careers" className="hover:text-secondary">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-secondary shrink-0 mt-1" />
                <span>5th Floor, Vasista Bhavan, one day co working labs, APHB Colony, Indira Nagar, Gachibowli, Seri Lingampally, K.V.Rangareddy, Telangana - 500032</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-secondary shrink-0" />
                <a href="tel:+916309649554" className="hover:text-secondary transition-colors">+91 63096 49554</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-secondary shrink-0" />
                <a href="mailto:Kolmagcybertech@gmail.com" className="hover:text-secondary transition-colors">Kolmagcybertech@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} KOLMAG Cyber Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/legal" className="hover:text-white">Privacy Policy</Link>
            <Link to="/legal" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;