import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="contact-success">
        <div className="contact-success-card">
          <div className="contact-success-icon">
            <CheckCircle style={{ height: '2.5rem', width: '2.5rem', color: 'var(--color-green-600)' }} />
          </div>
          <h2 className="contact-success-title">Message Sent Successfully!</h2>
          <p className="contact-success-text">
            Thank you for contacting KOLMAG. We have received your message and will get back to you shortly.
          </p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', phone: '', message: '' });
            }}
            className="contact-success-link"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <div className="contact-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f142fcb93370?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
            alt="Contact Background" 
          />
          <div className="contact-hero-overlay" />
        </div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-description">Get in touch for services, training, or general inquiries.</p>
        </div>
      </div>
      
      <div className="contact-content">
        <div className="contact-container-inner">
          <div className="contact-grid">
            
            <div className="contact-info">
              <div>
                <h2 className="contact-info-title">Contact Information</h2>
                <ul className="contact-info-list">
                  <li className="contact-info-item">
                    <MapPin className="contact-info-icon" />
                    <div>
                      <h3 className="contact-info-label">Head Office</h3>
                      <p className="contact-info-text">
                        5th Floor, Vasista Bhavan, APHB Colony, Indira Nagar, Gachibowli, Seri Lingampally, K.V.Rangareddy, Telangana - 500032
                      </p>
                    </div>
                  </li>
                  <li className="contact-info-item-center">
                    <Phone className="contact-info-icon-center" />
                    <div>
                      <h3 className="contact-info-label">Phone</h3>
                      <a href="tel:+916309649554" className="contact-info-link">+91 63096 49554</a>
                    </div>
                  </li>
                  <li className="contact-info-item-center">
                    <Mail className="contact-info-icon-center" />
                    <div>
                      <h3 className="contact-info-label">Email</h3>
                      <a href="mailto:contact@kolmagcybertech.com" className="contact-info-link">contact@kolmagcybertech.com</a>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="contact-social">
                <h3 className="contact-social-title">Follow Us</h3>
                <div className="contact-social-links">
                   <a href="https://www.linkedin.com/company/kolmag-cyber-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="LinkedIn">
                     <Linkedin style={{ height: '1.25rem', width: '1.25rem' }} />
                   </a>
                   <a href="https://x.com/kolmagcybertech" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Twitter">
                     <Twitter style={{ height: '1.25rem', width: '1.25rem' }} />
                   </a>
                   <a href="https://www.facebook.com/kolmagcybertech" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Facebook">
                     <Facebook style={{ height: '1.25rem', width: '1.25rem' }} />
                   </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2 className="contact-form-title">Send us a message</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="contact-form-group">
                  <label htmlFor="contact-name" className="contact-form-label">Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    type="text"
                    className="contact-form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="contact-form-grid">
                  <div className="contact-form-group">
                    <label htmlFor="contact-email" className="contact-form-label">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      required
                      type="email"
                      className="contact-form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-phone" className="contact-form-label">Phone</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      className="contact-form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-message" className="contact-form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    className="contact-form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="contact-form-button"
                >
                  Send Message <Send style={{ marginLeft: '0.5rem', height: '1rem', width: '1rem' }} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;