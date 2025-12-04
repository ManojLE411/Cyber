import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Code, Cpu, Award, Building2, Brain, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Engineering Secure, Intelligent &",
      titleHighlight: "Future-Ready",
      description: "Empowering enterprises with cutting-edge software engineering, cybersecurity services, and AI-driven solutions while shaping industry-ready engineering talent.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Explore Services",
      buttonLink: "/services"
    },
    {
      title: "Cybersecurity Excellence &",
      titleHighlight: "Digital Protection",
      description: "Comprehensive security solutions designed to protect enterprises from evolving cyber threats. We follow OWASP, NIST, ISO 27001 frameworks.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Security Services",
      buttonLink: "/services/cybersecurity"
    },
    {
      title: "AI & Data Science",
      titleHighlight: "Transformation",
      description: "Harness the power of data and AI to improve insights, automation, and decision-making. Transform raw data into competitive advantage.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "AI Solutions",
      buttonLink: "/services/ai"
    },
    {
      title: "Training & Talent",
      titleHighlight: "Development",
      description: "Transforming engineering students into skilled professionals with industry-aligned programs, internships, and hands-on project experience.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "View Programs",
      buttonLink: "/training"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const features = [
    {
      title: "Enterprise-Grade Standards",
      desc: "We follow industry-leading architectural patterns and coding standards to build robust, scalable, and maintainable systems for global enterprises.",
      icon: Building2
    },
    {
      title: "Security-First Approach",
      desc: "Security is embedded at every stage of our development lifecycle (DevSecOps) to ensure maximum data protection and compliance.",
      icon: ShieldCheck
    },
    {
      title: "Advanced AI & Cloud",
      desc: "Leveraging cutting-edge AI models and cloud-native technologies (AWS, Azure) to drive innovation and operational efficiency.",
      icon: Brain
    },
    {
      title: "Academic & Industry Integration",
      desc: "Bridging the gap between academic learning and real-world corporate requirements through our unique talent development model.",
      icon: Users
    },
    {
      title: "Quality & On-Time Delivery",
      desc: "Rigorous testing methodologies and agile project management ensure timely delivery without compromising on software quality.",
      icon: Clock
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section with Carousel */}
      <div className="home-hero">
        <div className="home-hero-carousel">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`home-hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="home-hero-bg">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                />
                <div className="home-hero-overlay" />
              </div>
              <div className="home-hero-content">
                <div className="home-hero-inner">
                  <h1 className="home-hero-title">
                    {slide.title} <span>{slide.titleHighlight}</span> Digital Solutions
                  </h1>
                  <p className="home-hero-description">
                    {slide.description}
                  </p>
                  <div className="home-hero-actions">
                    <Link
                      to={slide.buttonLink}
                      className="home-hero-button"
                    >
                      {slide.buttonText}
                    </Link>
                    <Link to="/contact" className="home-hero-link">
                      Contact Us <ArrowRight style={{ marginLeft: '0.25rem', height: '1rem', width: '1rem' }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Arrows */}
        <button 
          className="home-hero-nav home-hero-nav-prev"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <ChevronLeft style={{ height: '2rem', width: '2rem' }} />
        </button>
        <button 
          className="home-hero-nav home-hero-nav-next"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight style={{ height: '2rem', width: '2rem' }} />
        </button>

        {/* Carousel Dots */}
        <div className="home-hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`home-hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* About Section Snippet */}
      <section className="home-about">
        <div className="home-about-container">
          <div className="home-about-grid">
            <div>
              <h2 className="home-about-title">About KOLMAG</h2>
              <p className="home-about-text">
                KOLMAG Cyber Technologies Pvt Ltd is a next-generation technology company offering enterprise-level software development, robust cybersecurity services, and advanced AI & Data Science solutions.
              </p>
              <p className="home-about-text">
                With a strong commitment to quality and innovation, we deliver secure, scalable, and high-performance digital systems that meet the demands of the modern world.
              </p>
              <Link to="/about" className="home-about-link">Read More &rarr;</Link>
            </div>
            <div className="home-about-cards">
              <div className="home-about-card">
                <ShieldCheck className="home-about-card-icon" />
                <h3 className="home-about-card-title">Cybersecurity</h3>
                <p className="home-about-card-desc">VAPT & Threat Intel</p>
              </div>
              <div className="home-about-card">
                <Code className="home-about-card-icon" />
                <h3 className="home-about-card-title">Development</h3>
                <p className="home-about-card-desc">Web & Mobile Apps</p>
              </div>
              <div className="home-about-card">
                <Cpu className="home-about-card-icon" />
                <h3 className="home-about-card-title">AI & Data</h3>
                <p className="home-about-card-desc">ML & Analytics</p>
              </div>
              <div className="home-about-card">
                <Award className="home-about-card-icon" />
                <h3 className="home-about-card-title">Training</h3>
                <p className="home-about-card-desc">Projects & Internships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Divisions */}
      <section className="home-divisions">
        <div className="home-divisions-container">
          <div className="home-divisions-header">
            <h2 className="home-divisions-title">Our Key Divisions</h2>
            <p className="home-divisions-description">Bridging the gap between industry needs and technological innovation.</p>
          </div>
          
          <div className="home-divisions-grid">
            <div className="home-division-card">
              <h3 className="home-division-card-title">Technology Services</h3>
              <ul className="home-division-list">
                {['Software Development', 'Cybersecurity & VAPT', 'Cloud & DevOps', 'Web & Mobile Applications', 'AI & Data Science Solutions'].map((item) => (
                  <li key={item} className="home-division-list-item">
                    <div className="home-division-list-dot"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="home-division-link">
                 <Link to="/services" className="home-division-link-text">View Services &rarr;</Link>
              </div>
            </div>

            <div className="home-division-card">
              <h3 className="home-division-card-title">Training & Talent Development</h3>
              <ul className="home-division-list">
                {['B.Tech Final Year Projects', 'AI, ML, Cybersecurity Courses', 'Industrial Internships', 'Full Stack Development', 'Academic Collaboration'].map((item) => (
                  <li key={item} className="home-division-list-item">
                    <div className="home-division-list-dot home-division-list-dot-accent"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="home-division-link">
                 <Link to="/training" className="home-division-link-text home-division-link-text-accent">View Programs &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Updated UI */}
      <section className="home-features">
        <div className="home-features-container">
          <div className="home-features-header">
             <h2 className="home-features-title">Why Choose Us</h2>
             <p className="home-features-description">
               We combine technical expertise with a commitment to excellence, ensuring your business stays ahead of the curve.
             </p>
          </div>
          
          <div className="home-features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="home-feature-card">
                 <div className="home-feature-icon-wrapper">
                   <div className="home-feature-icon-bg">
                     <feature.icon style={{ height: '1.5rem', width: '1.5rem' }} />
                   </div>
                 </div>
                 <h3 className="home-feature-title">{feature.title}</h3>
                 <p className="home-feature-description">
                   {feature.desc}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;