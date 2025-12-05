import { Link } from 'react-router-dom';
import { Brain, Database, MessageSquare, Eye, Bot, BarChart, Cpu, Layers } from 'lucide-react';
import './AIDataScience.css';

const AIDataScience = () => {
  const services = [
    {
      title: "Machine Learning Models",
      description: "Develop custom algorithms tailored to solve specific business challenges, from recommendation engines to fraud detection systems.",
      icon: Brain,
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Predictive Analytics",
      description: "Leverage historical data to forecast future trends, customer behaviors, and market shifts to make proactive decisions.",
      icon: BarChart,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Natural Language Processing",
      description: "Empower applications to understand, interpret, and generate human language for chatbots, sentiment analysis, and text extraction.",
      icon: MessageSquare,
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      title: "Computer Vision Systems",
      description: "Implement advanced image and video analysis for automated quality control, facial recognition, and surveillance systems.",
      icon: Eye,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      title: "AI Automation",
      description: "Combine Artificial Intelligence with process automation to streamline workflows, reduce manual effort, and increase operational efficiency.",
      icon: Bot,
      color: "text-cyan-500",
      bg: "bg-cyan-50"
    },
    {
      title: "Big Data Analytics",
      description: "Process, analyze, and visualize massive datasets to uncover hidden patterns, correlations, and actionable business insights.",
      icon: Database,
      color: "text-rose-500",
      bg: "bg-rose-50"
    }
  ];

  return (
    <div className="ai-datascience-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="AI & Data Science Background" 
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <Cpu className="hero-badge-icon" />
            <span>Next-Gen Intelligence</span>
          </div>
          <h1 className="hero-title">
            AI & Data Science Solutions
          </h1>
          <p className="hero-description">
            We help organizations harness the power of data and AI to improve insights, automation, and decision-making. Transform raw data into competitive advantage.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="intro-section">
        <div className="intro-container">
          <h2 className="intro-title">Driven by Data, Powered by Intelligence</h2>
          <p className="intro-text">
            In today's digital economy, data is the new oil. At KOLMAG, we not only help you mine this resource but refine it into intelligent actions. Our team of data scientists and AI engineers build robust solutions that integrate seamlessly into your existing ecosystem.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-section">
        <div className="services-header">
          <h2 className="services-title">Our Core Capabilities</h2>
          <div className="services-divider"></div>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => {
            const colorMap: { [key: string]: string } = {
              'text-purple-500': 'service-icon-purple',
              'text-blue-500': 'service-icon-blue',
              'text-green-500': 'service-icon-green',
              'text-amber-500': 'service-icon-amber',
              'text-cyan-500': 'service-icon-cyan',
              'text-rose-500': 'service-icon-rose'
            };
            const iconClass = colorMap[service.color] || 'service-icon-purple';
            return (
              <div key={idx} className="service-card">
                <div className={`service-icon-container ${iconClass}`}>
                  <service.icon className="service-icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tech Stack / Approach */}
      <div className="tech-stack-section">
        <div className="tech-stack-container">
          <div className="tech-stack-grid">
            <div>
              <h2 className="tech-stack-title">Why Choose Our AI Solutions?</h2>
              <ul className="features-list">
                {[
                  { title: "Customized Models", desc: "We don't just use off-the-shelf APIs. We train models specifically on your data for higher accuracy." },
                  { title: "Scalable Architecture", desc: "Our solutions are built to handle growing data volumes and real-time processing requirements." },
                  { title: "Ethical AI", desc: "We prioritize transparency, fairness, and security in all our algorithmic implementations." }
                ].map((item, idx) => (
                  <li key={idx} className="feature-item">
                    <div className="feature-icon-container">
                      <Layers className="feature-icon" />
                    </div>
                    <div className="feature-content">
                      <h4 className="feature-title">{item.title}</h4>
                      <p className="feature-description">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tech-card">
              <h3 className="tech-card-title">Technologies We Leverage</h3>
              <div className="tech-tags">
                {['TensorFlow', 'PyTorch', 'Python', 'Scikit-learn', 'OpenCV', 'Pandas', 'Keras', 'Apache Spark', 'AWS SageMaker', 'Azure AI'].map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="tech-card-quote">
                 <p className="tech-card-quote-text">
                   "We integrate the latest frameworks to ensure your solution is future-proof."
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="aidatascience-cta">
        <h3 className="aidatascience-cta-title">Ready to Transform Your Business with AI?</h3>
        <p className="aidatascience-cta-text">
          Let's discuss how data science can solve your most complex challenges and drive growth.
        </p>
        <Link to="/contact" className="aidatascience-cta-button">
          Start Your AI Journey
        </Link>
      </div>
    </div>
  );
};

export default AIDataScience;