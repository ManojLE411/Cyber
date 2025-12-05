import { useEffect, useState, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Container, GitBranch, ShieldCheck, Settings, TrendingUp, CheckCircle, Lock } from 'lucide-react';
import './CloudDevOps.css';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: string;
  key?: string | number;
}

const AnimatedSection = ({ children, className = '', delay = '0ms' }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`animated-section ${isVisible ? 'visible' : ''} ${className}`}
      style={{ '--delay': delay } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

const CloudDevOps = () => {
  const caseStudies = [
    {
      title: "E-Commerce Scaling on AWS",
      challenge: "A rapidly growing retail platform faced frequent downtime during peak traffic events due to legacy on-premise servers.",
      solution: "Migrated infrastructure to AWS with auto-scaling groups and implemented Kubernetes for microservices orchestration.",
      outcome: "Achieved 99.99% uptime during major sales events and reduced operational costs by 35%.",
      icon: TrendingUp
    },
    {
      title: "Secure FinTech DevSecOps",
      challenge: "A financial services firm needed to accelerate release cycles while adhering to strict regulatory compliance.",
      solution: "Established a secure DevSecOps pipeline with automated compliance scanning and immutable infrastructure using Terraform.",
      outcome: "Reduced deployment time from weeks to hours and passed ISO 27001 compliance audits effortlessly.",
      icon: Lock
    },
    {
      title: "SaaS Environment Standardization",
      challenge: "A SaaS provider struggled with inconsistent development and production environments causing deployment failures.",
      solution: "Standardized environments using Docker and implemented a robust CI/CD pipeline with automated testing.",
      outcome: "Eliminated environment-related bugs and increased developer productivity by 40%.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="cloud-devops-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
            alt="Cloud Infrastructure" 
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <AnimatedSection>
            <h1 className="hero-title">Cloud & DevOps Services</h1>
          </AnimatedSection>
          <AnimatedSection delay="200ms">
            <p className="hero-description">
              We enable organizations to adopt secure, scalable, and cost-effective cloud infrastructures.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="offerings-section">
        <AnimatedSection className="section-header">
          <h2 className="section-title">Our Offerings</h2>
          <p className="section-subtitle">
            From migration to automation, we provide end-to-end cloud solutions tailored to your business needs.
          </p>
        </AnimatedSection>

        <div className="offerings-grid">
          {[
            {
              icon: Cloud,
              title: "Cloud Migration",
              desc: "Seamlessly migrate your legacy applications and data to leading cloud platforms like AWS, Azure, and GCP with minimal downtime."
            },
            {
              icon: Container,
              title: "Kubernetes & Docker",
              desc: "Implement containerization and orchestration strategies to ensure consistency, scalability, and efficiency across environments."
            },
            {
              icon: GitBranch,
              title: "CI/CD Pipeline Setup",
              desc: "Automate build, test, and deployment processes to accelerate release cycles and improve code quality using modern CI/CD tools."
            },
            {
              icon: ShieldCheck,
              title: "Cloud Security",
              desc: "Fortify your cloud infrastructure with Identity & Access Management (IAM), compliance audits, and advanced threat protection."
            },
            {
              icon: Settings,
              title: "DevOps Automation",
              desc: "Streamline operations with Infrastructure as Code (IaC) and automated configuration management to reduce manual overhead."
            }
          ].map((item, index) => (
             <AnimatedSection key={index} delay={`${index * 100}ms`}>
               <div className="offering-card">
                <item.icon className="offering-icon" />
                <h3 className="offering-title">{item.title}</h3>
                <p className="offering-desc">
                  {item.desc}
                </p>
              </div>
             </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="case-studies-section">
        <div className="case-studies-container">
          <AnimatedSection className="section-header">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              Real-world impact of our Cloud & DevOps expertise.
            </p>
          </AnimatedSection>

          <div className="case-studies-grid">
            {caseStudies.map((study, idx) => (
              <AnimatedSection key={idx} delay={`${idx * 150}ms`}>
                <div className="case-study-card">
                  <div className="case-study-icon-container">
                    <study.icon className="case-study-icon" />
                  </div>
                  <h3 className="case-study-title">{study.title}</h3>
                  
                  <div className="case-study-section">
                    <h4 className="case-study-label">Challenge</h4>
                    <p className="case-study-text">{study.challenge}</p>
                  </div>
                  
                  <div className="case-study-section">
                    <h4 className="case-study-label">Solution</h4>
                    <p className="case-study-text">{study.solution}</p>
                  </div>
                  
                  <div className="case-study-outcome">
                    <h4 className="case-study-outcome-label">Outcome</h4>
                    <p className="case-study-outcome-text">{study.outcome}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="clouddevops-cta">
        <h3 className="clouddevops-cta-title">Ready to Modernize Your Infrastructure?</h3>
        <p className="clouddevops-cta-text">
          Contact our experts to discuss your cloud strategy and DevOps transformation today.
        </p>
        <Link to="/contact" className="clouddevops-cta-button">
          Get a Consultation
        </Link>
      </div>
    </div>
  );
};

export default CloudDevOps;