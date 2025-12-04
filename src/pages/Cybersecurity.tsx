import { CheckCircle, ShieldAlert, Lock, Activity, FileCheck, Users, Search, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Cybersecurity.css';

const Cybersecurity = () => {
  const sections = [
    {
      title: "Vulnerability Assessment & Penetration Testing (VAPT)",
      icon: ShieldAlert,
      items: ["Web Application VAPT", "Mobile Application VAPT", "Network VAPT", "API Security Testing", "Cloud Infrastructure Testing", "Source Code Review"]
    },
    {
      title: "Network Security & Infrastructure Hardening",
      icon: Server,
      items: ["Firewall Configuration", "IDS/IPS Deployment", "Endpoint Protection", "Secure Network Architecture", "Zero Trust Implementation", "Advanced Threat Monitoring"]
    },
    {
      title: "Cloud Security Services",
      icon: Lock,
      items: ["Cloud VAPT (AWS/Azure/GCP)", "Identity & Access Management (IAM)", "Secure Cloud Architecture Review", "Data Leakage Prevention", "Compliance Audits"]
    },
    {
      title: "SOC & Threat Intelligence",
      icon: Activity,
      items: ["SIEM Configuration (Splunk, ELK)", "Real-Time Threat Monitoring", "Incident Response Planning", "Log Analysis & Reporting"]
    },
    {
      title: "Compliance & Audits",
      icon: FileCheck,
      items: ["ISO 27001", "GDPR", "HIPAA", "PCI-DSS", "SOC 2 Compliance"]
    },
    {
      title: "Red Team Operations",
      icon: Users,
      items: ["Social engineering", "Internal/External attacks", "Physical security testing"]
    },
    {
      title: "Cyber Forensics & Incident Response",
      icon: Search,
      items: ["Malware Analysis", "Ransomware Response", "Data Recovery", "Compromise Assessment"]
    }
  ];

  return (
    <div className="cybersecurity-container">
      <div className="cybersecurity-hero">
        <div className="cybersecurity-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Cybersecurity Background" 
          />
          <div className="cybersecurity-hero-overlay" />
        </div>
        <div className="cybersecurity-hero-content">
          <div className="cybersecurity-hero-inner">
            <div>
              <h1 className="cybersecurity-hero-title">Cybersecurity Services</h1>
              <p className="cybersecurity-hero-description">
                Comprehensive solutions designed to protect enterprises from evolving cyber threats. We follow OWASP, NIST, ISO 27001 frameworks.
              </p>
            </div>
            <div className="cybersecurity-hero-icon">
               <ShieldAlert style={{ height: '8rem', width: '8rem', color: 'var(--color-secondary)', opacity: 0.8 }} />
            </div>
          </div>
        </div>
      </div>

      <div className="cybersecurity-content">
        <div className="cybersecurity-grid">
          {sections.map((section, idx) => (
            <div key={idx} className="cybersecurity-card">
              <div className="cybersecurity-card-header">
                <section.icon className="cybersecurity-card-icon" />
                <h3 className="cybersecurity-card-title">{section.title}</h3>
              </div>
              <ul className="cybersecurity-card-list">
                {section.items.map((item, i) => (
                  <li key={i} className="cybersecurity-card-item">
                    <CheckCircle className="cybersecurity-card-check" />
                    <span className="cybersecurity-card-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="cybersecurity-cta">
          <h3 className="cybersecurity-cta-title">Secure Your Business Today</h3>
          <p className="cybersecurity-cta-text">
            Don't wait for a breach to happen. Let our experts assess and fortify your digital infrastructure.
          </p>
          <Link to="/contact" className="cybersecurity-cta-button">
            Get a Security Audit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;