import { useState, type ChangeEvent, type FormEvent } from 'react';
import { BookOpen, Send, User, Mail, Phone, GraduationCap, Briefcase, FileText, CheckCircle } from 'lucide-react';
import './InternshipApplication.css';

const InternshipApplication = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    degree: '',
    year: '',
    domain: '',
    duration: '1 Month',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend API
    // For now, simulate successful submission
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="success-container">
        <div className="success-card">
          <div className="success-icon-container">
            <CheckCircle className="success-icon" />
          </div>
          <h2 className="success-title">Application Received!</h2>
          <p className="success-message">
            Thank you for applying to the KOLMAG Internship Program. Our training team will review your profile and contact you within 48 hours.
          </p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                college: '',
                degree: '',
                year: '',
                domain: '',
                duration: '1 Month',
                message: ''
              });
            }}
            className="success-link"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="internship-application-container">
      <div className="application-container">
        
        <div className="application-header">
          <h1 className="application-title">Internship Application Form</h1>
          <p className="application-subtitle">Join our industrial training program to kickstart your career.</p>
        </div>

        <div className="application-card">
          <div className="card-header">
            <Briefcase className="card-header-icon" />
            <h2 className="card-header-title">Student Details</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="application-form">
            
            {/* Personal Info */}
            <div className="form-section">
              <h3 className="form-section-title">Personal Information</h3>
              <div className="form-grid">
                <div>
                  <label className="form-label">Full Name</label>
                  <div className="form-input-wrapper">
                    <User className="form-icon" />
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <div className="form-input-wrapper">
                    <Mail className="form-icon" />
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label">Phone Number</label>
                  <div className="form-input-wrapper">
                    <Phone className="form-icon" />
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Info */}
            <div className="form-section">
              <h3 className="form-section-title mt-2">Academic Background</h3>
              <div className="form-grid">
                <div className="form-field-full">
                  <label className="form-label">College / University Name</label>
                  <div className="form-input-wrapper">
                    <GraduationCap className="form-icon" />
                    <input
                      required
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your college name"
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label">Degree & Branch</label>
                  <input
                    required
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    className="form-input no-icon"
                    placeholder="e.g. B.Tech CSE"
                  />
                </div>
                <div>
                  <label className="form-label">Current Year / Semester</label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="form-select no-icon"
                  >
                    <option value="">Select Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year (Final Year)</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Internship Preferences */}
            <div className="form-section">
              <h3 className="form-section-title mt-2">Internship Preferences</h3>
              <div className="form-grid">
                <div>
                  <label className="form-label">Interested Domain</label>
                  <div className="form-input-wrapper">
                    <BookOpen className="form-icon" />
                    <select
                      required
                      name="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select Domain</option>
                      <option value="Web Full Stack">Web Full Stack (MERN/Java)</option>
                      <option value="Python Full Stack">Python Full Stack</option>
                      <option value="AI & Data Science">AI & Data Science</option>
                      <option value="Cybersecurity">Cybersecurity & VAPT</option>
                      <option value="Cloud & DevOps">Cloud & DevOps</option>
                      <option value="Mobile App Dev">Mobile App Development</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="form-label">Preferred Duration</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="form-select no-icon"
                  >
                    <option value="1 Month">1 Month</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                  </select>
                </div>
                <div className="form-field-full">
                  <label className="form-label">Why do you want to join this internship?</label>
                  <div className="form-input-wrapper">
                    <FileText className="form-icon" />
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                      placeholder="Tell us briefly about your goals..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-submit-section">
              <button
                type="submit"
                className="submit-button"
              >
                Submit Application <Send className="submit-button-icon" />
              </button>
              <p className="form-disclaimer">
                By submitting this form, you agree to be contacted by KOLMAG regarding your application.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InternshipApplication;
