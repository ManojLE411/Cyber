import { useState, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Briefcase, User, Mail, Phone, Link as LinkIcon, UploadCloud, FileText, CheckCircle, ArrowLeft, Send } from 'lucide-react';
import './JobApplication.css';

const JobApplication = () => {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    portfolio: '',
    experience: '',
    coverLetter: ''
  });

  // Pre-fill role if passed from Careers page
  useEffect(() => {
    if (location.state && location.state.role) {
      setFormData(prev => ({ ...prev, role: location.state.role }));
    }
    window.scrollTo(0, 0);
  }, [location.state]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
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
          <h2 className="success-title">Application Sent Successfully!</h2>
          <p className="success-message">
            Thank you for applying for the <span className="success-role">{formData.role}</span> position. Our HR team will review your profile and get back to you shortly.
          </p>
          <div className="success-actions">
            <Link 
              to="/careers"
              className="success-button"
            >
              Back to Careers
            </Link>
            <Link 
              to="/"
              className="success-button-secondary"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="job-application-container">
      <div className="application-container">
        
        <Link to="/careers" className="back-link">
          <ArrowLeft className="back-link-icon" /> Back to Job Listings
        </Link>

        <div className="application-header">
          <h1 className="application-title">Job Application</h1>
          <p className="application-subtitle">Take the next step in your career with KOLMAG.</p>
        </div>

        <div className="application-card">
          <div className="card-header">
            <div className="card-header-left">
              <Briefcase className="card-header-icon" />
              <h2 className="card-header-title">Candidate Profile</h2>
            </div>
            {formData.role && (
              <span className="card-header-badge">
                Applying for: {formData.role}
              </span>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="application-form">
            
            {/* Personal Details */}
            <div>
              <h3 className="form-section-title">Basic Information</h3>
              <div className="form-grid">
                <div className="form-field-full">
                   <label className="form-label">Applying For Position</label>
                   <div className="form-input-wrapper">
                      <Briefcase className="form-icon" />
                      <input
                        required
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="form-input font-medium"
                        placeholder="e.g. Senior Full Stack Developer"
                      />
                   </div>
                </div>
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
                <div>
                  <label className="form-label">Total Experience</label>
                  <select
                    required
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="form-select no-icon"
                  >
                    <option value="">Select Experience</option>
                    <option value="Fresher">Fresher (0 Years)</option>
                    <option value="1-2 Years">1-2 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5-8 Years">5-8 Years</option>
                    <option value="8+ Years">8+ Years</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div>
              <h3 className="form-section-title">Professional Details</h3>
              <div className="form-professional-details">
                <div>
                  <label className="form-label">Portfolio / LinkedIn URL</label>
                  <div className="form-input-wrapper">
                    <LinkIcon className="form-icon" />
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label form-label-resume">Resume / CV</label>
                  <div className="file-upload-area">
                    <div className="file-upload-content">
                      {fileName ? (
                         <div className="file-selected-container">
                           <FileText className="file-selected-icon" />
                           <p className="file-selected-name">{fileName}</p>
                           <p className="file-selected-status">File Selected</p>
                         </div>
                      ) : (
                        <>
                          <UploadCloud className="file-upload-icon" />
                          <div className="file-upload-text">
                            <label htmlFor="file-upload" className="file-upload-label">
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                            </label>
                            <p className="file-upload-hint">or drag and drop</p>
                          </div>
                          <p className="file-upload-size">PDF, DOC, DOCX up to 10MB</p>
                        </>
                      )}
                    </div>
                    {!fileName && (
                       <input 
                         type="file" 
                         className="file-upload-hidden"
                         onChange={handleFileChange}
                         accept=".pdf,.doc,.docx"
                       />
                    )}
                  </div>
                </div>

                <div>
                  <label className="form-label">Cover Letter / Message</label>
                  <textarea
                    name="coverLetter"
                    rows={4}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us why you are a great fit for this role..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="form-submit-section">
              <button
                type="submit"
                disabled={!fileName}
                className="submit-button"
              >
                Submit Application <Send className="submit-button-icon" />
              </button>
              {!fileName && (
                 <p className="error-message">Please upload your resume to proceed.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
