import { ShieldCheck, Code, Brain, Cloud, Users, Award, Target, Zap, Lock, Sparkles } from 'lucide-react';
import './About.css';

const About = () => {
  const strengths = [
    { text: 'Highly skilled engineers and mentors', icon: Users },
    { text: 'Robust software development lifecycle', icon: Code },
    { text: 'Industry-certified cybersecurity professionals', icon: ShieldCheck },
    { text: 'Modern training methodologies', icon: Award },
    { text: 'Dedicated R&D team', icon: Brain }
  ];

  const expertise = [
    { title: 'Secure Software Engineering', icon: Lock, desc: 'Building secure, scalable applications' },
    { title: 'Cyber Defence & Threat Intelligence', icon: ShieldCheck, desc: 'Advanced security solutions' },
    { title: 'AI and Data Science', icon: Brain, desc: 'Intelligent data-driven solutions' },
    { title: 'Full-Stack Development', icon: Code, desc: 'End-to-end web and mobile applications' },
    { title: 'Cloud & DevOps', icon: Cloud, desc: 'Scalable cloud infrastructure' },
    { title: 'Research & Innovation', icon: Sparkles, desc: 'Cutting-edge technology solutions' }
  ];

  const values = [
    { title: 'Innovation', desc: 'We stay ahead of technological trends and continuously innovate to provide cutting-edge solutions.' },
    { title: 'Excellence', desc: 'We maintain the highest standards of quality in every project we undertake.' },
    { title: 'Security', desc: 'Security is embedded in every stage of our development lifecycle.' },
    { title: 'Collaboration', desc: 'We believe in working together with our clients and partners to achieve mutual success.' }
  ];

  const stats = [
    { number: '100+', label: 'Projects Delivered' },
    { number: '500+', label: 'Students Trained' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '15+', label: 'Industry Experts' }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
            alt="Office Background" 
          />
          <div className="about-hero-overlay" />
        </div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About KOLMAG</h1>
          <p className="about-hero-description">
            Empowering enterprises with cutting-edge technology solutions while shaping the next generation of engineering talent.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="about-stats-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="about-stat-item">
              <div className="about-stat-number">{stat.number}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-mission-container">
          <div className="about-mission-content">
            <div className="about-mission-header">
              <Target className="about-mission-icon" />
              <h2 className="about-mission-title">Our Mission</h2>
            </div>
            <p className="about-mission-text">
              Our mission is to build secure, scalable, and innovative digital solutions while bridging the gap between industry and education empowering organizations and learners to grow, compete, and lead in a rapidly evolving digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="about-strengths">
        <div className="about-strengths-container">
          <div className="about-section-header">
            <h2 className="about-section-title">Our Strengths</h2>
            <p className="about-section-description">
              What sets us apart in delivering exceptional technology solutions
            </p>
          </div>
          <div className="about-strengths-grid">
            {strengths.map((strength, idx) => (
              <div key={idx} className="about-strength-card">
                <div className="about-strength-icon-wrapper">
                  <strength.icon className="about-strength-icon" />
                </div>
                <p className="about-strength-text">{strength.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-values-container">
          <div className="about-section-header">
            <h2 className="about-section-title">Our Core Values</h2>
            <p className="about-section-description">
              The principles that guide everything we do
            </p>
          </div>
          <div className="about-values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="about-value-card">
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="about-expertise">
        <div className="about-expertise-container">
          <div className="about-section-header">
            <h2 className="about-section-title">Our Expertise</h2>
            <p className="about-section-description">
              Specialized knowledge across cutting-edge technologies
            </p>
          </div>
          <div className="about-expertise-grid">
            {expertise.map((expert, idx) => (
              <div key={idx} className="about-expertise-card">
                <div className="about-expertise-icon-wrapper">
                  <expert.icon className="about-expertise-icon" />
                </div>
                <h3 className="about-expertise-card-title">{expert.title}</h3>
                <p className="about-expertise-card-desc">{expert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;