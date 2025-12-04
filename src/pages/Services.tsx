import { Link } from 'react-router-dom';
import { Shield, Monitor, Brain, Cloud, Smartphone, Briefcase } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Cybersecurity Services",
      desc: "Protect enterprises from evolving cyber threats with VAPT, SOC, and Compliance.",
      icon: Shield,
      path: "/services/cybersecurity"
    },
    {
      title: "Software Development",
      desc: "Secure, scalable, and high-quality software solutions aligned with business goals.",
      icon: Monitor,
      path: "/services/software"
    },
    {
      title: "AI & Data Science",
      desc: "Harness the power of data and AI to improve insights and automation.",
      icon: Brain,
      path: "/services/ai"
    },
    {
      title: "Web & Mobile Apps",
      desc: "User-friendly, high-performance applications for all platforms.",
      icon: Smartphone,
      path: "/services/web"
    },
    {
      title: "Cloud & DevOps",
      desc: "Enable organizations to adopt secure, scalable cloud infrastructures.",
      icon: Cloud,
      path: "/services/cloud"
    },
    {
      title: "IT Consulting",
      desc: "Strategic guidance to align technology with your business vision.",
      icon: Briefcase,
      path: "/contact"
    }
  ];

  return (
    <div className="services-container">
      <div className="services-hero">
        <div className="services-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Services Background" 
          />
          <div className="services-hero-overlay" />
        </div>
        <div className="services-hero-content">
          <h1 className="services-hero-title">Our Services</h1>
          <p className="services-hero-description">
            We deliver high-value technology solutions that enable organizations to innovate, grow and stay secure.
          </p>
        </div>
      </div>

      <div className="services-grid-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="services-card">
              <div className="services-card-icon">
                <service.icon style={{ height: '1.75rem', width: '1.75rem' }} />
              </div>
              <h3 className="services-card-title">{service.title}</h3>
              <p className="services-card-description">{service.desc}</p>
              <Link to={service.path} className="services-card-link">
                Learn More <span style={{ marginLeft: '0.25rem' }}>&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="services-footer">
          <p className="services-footer-text">Each service is tailored to meet global industry quality and security standards.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;