import { useEffect, useState, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Container, GitBranch, ShieldCheck, Settings, ArrowRight, TrendingUp, CheckCircle, Lock } from 'lucide-react';

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
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: delay }}
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
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
            alt="Cloud Infrastructure" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl font-bold mb-6">Cloud & DevOps Services</h1>
          </AnimatedSection>
          <AnimatedSection delay="200ms">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We enable organizations to adopt secure, scalable, and cost-effective cloud infrastructures.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Our Offerings</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From migration to automation, we provide end-to-end cloud solutions tailored to your business needs.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
               <div className="group bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-secondary h-full cursor-default">
                <item.icon className="h-10 w-10 text-secondary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
             </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Success Stories</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Real-world impact of our Cloud & DevOps expertise.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <AnimatedSection key={idx} delay={`${idx * 150}ms`}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 flex flex-col hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-700">
                    <study.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{study.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Challenge</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Solution</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <h4 className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Outcome</h4>
                    <p className="text-sm font-medium text-slate-800">{study.outcome}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-slate-900 py-16 text-white mt-auto">
        <AnimatedSection className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your Infrastructure?</h2>
            <p className="text-gray-400 max-w-xl">
              Contact our experts to discuss your cloud strategy and DevOps transformation today.
            </p>
          </div>
          <Link to="/contact" className="bg-secondary hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-cyan-500/20">
            Get a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CloudDevOps;