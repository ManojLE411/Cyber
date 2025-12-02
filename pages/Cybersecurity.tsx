import React from 'react';
import { CheckCircle, ShieldAlert, Lock, Activity, FileCheck, Users, Search, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cybersecurity: React.FC = () => {
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
    <div className="bg-white pb-20">
      <div className="relative bg-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Cybersecurity Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-6">Cybersecurity Services</h1>
              <p className="text-xl text-gray-300">
                Comprehensive solutions designed to protect enterprises from evolving cyber threats. We follow OWASP, NIST, ISO 27001 frameworks.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
               <ShieldAlert className="h-32 w-32 text-secondary opacity-80" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-secondary">
              <div className="flex items-center mb-6">
                <section.icon className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">{section.title}</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Secure Your Business Today</h3>
          <p className="text-blue-800 mb-8 max-w-2xl mx-auto">
            Don't wait for a breach to happen. Let our experts assess and fortify your digital infrastructure.
          </p>
          <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-800">
            Get a Security Audit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cybersecurity;