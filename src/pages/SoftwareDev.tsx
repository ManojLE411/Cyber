import { CheckCircle, Code2, Settings, Database, Globe, Server, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import './SoftwareDev.css';

const SoftwareDev = () => {
  const sections = [
    {
      title: "Enterprise Applications",
      icon: Server,
      items: ["Custom ERP Systems", "CRM Solutions", "Business Process Management", "Workflow Automation", "Document Management Systems", "Enterprise Portals"]
    },
    {
      title: "Web & Mobile Development",
      icon: Globe,
      items: ["Responsive Web Applications", "Progressive Web Apps (PWA)", "Native Mobile Apps (iOS/Android)", "Cross-Platform Solutions", "E-Commerce Platforms", "Content Management Systems"]
    },
    {
      title: "System Integration & APIs",
      icon: Layers,
      items: ["RESTful API Development", "Microservices Architecture", "Third-Party Integrations", "Legacy System Modernization", "Data Migration Services", "API Gateway Setup"]
    },
    {
      title: "Business Automation",
      icon: Zap,
      items: ["Process Automation", "Workflow Optimization", "Task Scheduling Systems", "Report Generation Tools", "Data Processing Pipelines", "Automated Testing Frameworks"]
    },
    {
      title: "Database & Data Management",
      icon: Database,
      items: ["Database Design & Optimization", "Data Warehousing", "ETL Processes", "Data Analytics Platforms", "Real-Time Data Processing", "Backup & Recovery Solutions"]
    },
    {
      title: "Custom Software Solutions",
      icon: Code2,
      items: ["Tailored Business Applications", "Industry-Specific Solutions", "Scalable Architecture Design", "Performance Optimization", "Security Implementation", "Maintenance & Support"]
    }
  ];

  const methodologies = [
    { title: "Agile Development", desc: "Iterative development with continuous feedback and rapid delivery cycles." },
    { title: "DevSecOps", desc: "Security integrated from the start, ensuring secure code throughout the development lifecycle." },
    { title: "SDLC Best Practices", desc: "Structured approach following industry-standard software development lifecycle." },
    { title: "Quality Assurance", desc: "Rigorous testing methodologies to ensure bug-free, reliable software." }
  ];

  return (
    <div className="softwaredev-container">
      <div className="softwaredev-hero">
        <div className="softwaredev-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
            alt="Software Development Background" 
          />
          <div className="softwaredev-hero-overlay" />
        </div>
        <div className="softwaredev-hero-content">
          <div className="softwaredev-hero-inner">
            <div>
              <h1 className="softwaredev-hero-title">Software Development</h1>
              <p className="softwaredev-hero-description">
                Building secure, scalable, and high-quality software solutions aligned with your business goals. We follow SDLC, Agile, and DevSecOps principles.
              </p>
            </div>
            <div className="softwaredev-hero-icon">
              <Code2 style={{ height: '8rem', width: '8rem', color: 'var(--color-secondary)', opacity: 0.8 }} />
            </div>
          </div>
        </div>
      </div>

      <div className="softwaredev-content">
        <div className="softwaredev-intro">
          <h2 className="softwaredev-intro-title">Our Development Approach</h2>
          <p className="softwaredev-intro-text">
            We design and build systems that drive business efficiency. Our engineering methodology follows SDLC, Agile, and DevSecOps principles to ensure security is integrated from day one. Every solution is tailored to your specific needs while maintaining scalability and maintainability.
          </p>
        </div>

        <div className="softwaredev-grid">
          {sections.map((section, idx) => (
            <div key={idx} className="softwaredev-card">
              <div className="softwaredev-card-header">
                <section.icon className="softwaredev-card-icon" />
                <h3 className="softwaredev-card-title">{section.title}</h3>
              </div>
              <ul className="softwaredev-card-list">
                {section.items.map((item, i) => (
                  <li key={i} className="softwaredev-card-item">
                    <CheckCircle className="softwaredev-card-check" />
                    <span className="softwaredev-card-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="softwaredev-methodology">
          <h3 className="softwaredev-methodology-title">Our Methodologies</h3>
          <div className="softwaredev-methodology-grid">
            {methodologies.map((method, idx) => (
              <div key={idx} className="softwaredev-methodology-card">
                <h4 className="softwaredev-methodology-card-title">{method.title}</h4>
                <p className="softwaredev-methodology-card-desc">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="softwaredev-cta">
          <h3 className="softwaredev-cta-title">Build Your Next Software Solution</h3>
          <p className="softwaredev-cta-text">
            Let's discuss how we can transform your business ideas into powerful, secure, and scalable software applications.
          </p>
          <Link to="/contact" className="softwaredev-cta-button">
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDev;
