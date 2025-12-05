import { Link } from 'react-router-dom';
import { Monitor, Smartphone, Globe, ShoppingCart, Layout, Layers, Code } from 'lucide-react';
import './WebDevelopment.css';

const WebDevelopment = () => {
  const solutions = [
    {
      title: "Business Websites",
      desc: "Professional, responsive, and SEO-optimized websites that establish your digital presence and credibility.",
      icon: Globe
    },
    {
      title: "Admin Dashboards",
      desc: "Powerful, data-driven control panels to manage your business operations, users, and analytics efficiently.",
      icon: Layout
    },
    {
      title: "E-commerce Platforms",
      desc: "Secure online stores with integrated payment gateways, inventory management, and seamless user checkout experiences.",
      icon: ShoppingCart
    },
    {
      title: "Android/iOS Apps",
      desc: "Native mobile applications designed for high performance and optimal user experience on specific platforms.",
      icon: Smartphone
    },
    {
      title: "Cross-platform Apps",
      desc: "Cost-effective mobile solutions using Flutter or React Native to deploy on both iOS and Android from a single codebase.",
      icon: Layers
    },
    {
      title: "Custom Web Applications",
      desc: "Tailor-made web software to automate complex business processes and solve unique operational challenges.",
      icon: Monitor
    }
  ];

  return (
    <div className="web-development-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80" 
            alt="Web Development Background" 
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <Code className="hero-badge-icon" />
            <span>Digital Experiences</span>
          </div>
          <h1 className="hero-title">Web & Mobile App Development</h1>
          <p className="hero-description">
            We build user-friendly, high-performance applications that engage users and drive business growth across all devices.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="solutions-section">
        <div className="solutions-header">
          <h2 className="solutions-title">Our Solutions</h2>
          <p className="solutions-subtitle">
            From simple landing pages to complex enterprise mobile apps, we deliver excellence.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((item, idx) => (
            <div key={idx} className="solution-card">
              <div className="solution-icon-container">
                <item.icon className="solution-icon" />
              </div>
              <h3 className="solution-title">{item.title}</h3>
              <p className="solution-description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack-section">
        <div className="tech-stack-container">
          <div className="tech-stack-grid">
            <div>
              <h2 className="tech-stack-title">Technologies We Use</h2>
              <p className="tech-stack-description">
                We stay ahead of the curve by leveraging the most modern, secure, and scalable technologies in the industry. Our full-stack expertise ensures your project is built on a solid foundation.
              </p>
              <div className="tech-stack-list">
                {[
                  "React.js & Next.js", "Node.js & Express", "Flutter & React Native", "Python & Django", "PostgreSQL & MongoDB", "AWS & Firebase"
                ].map((tech, i) => (
                  <div key={i} className="tech-stack-item">
                    <div className="tech-stack-bullet"></div>
                    <span className="tech-stack-name">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="tech-visual-grid">
               {/* Visual representation of tech stack */}
               <div className="tech-visual-card">
                 <h4 className="tech-visual-title">Frontend</h4>
                 <p className="tech-visual-text">React, Angular, Vue</p>
               </div>
               <div className="tech-visual-card">
                 <h4 className="tech-visual-title">Backend</h4>
                 <p className="tech-visual-text">Node, Python, Java</p>
               </div>
               <div className="tech-visual-card">
                 <h4 className="tech-visual-title">Mobile</h4>
                 <p className="tech-visual-text">Flutter, iOS, Android</p>
               </div>
               <div className="tech-visual-card">
                 <h4 className="tech-visual-title">Database</h4>
                 <p className="tech-visual-text">SQL, NoSQL, Graph</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="webdevelopment-cta">
        <h3 className="webdevelopment-cta-title">Have an App Idea?</h3>
        <p className="webdevelopment-cta-text">
          Let's turn your vision into a reality. Contact us for a free consultation and project estimation.
        </p>
        <Link to="/contact" className="webdevelopment-cta-button">
          Get a Quote
        </Link>
      </div>
    </div>
  );
};

export default WebDevelopment;