import { useState } from 'react';
import './Legal.css';

const Legal = () => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'refund'>('privacy');

  return (
    <div className="legal-container">
      <div className="legal-header">
        <div className="legal-header-container">
          <h1 className="legal-title">Legal & Policies</h1>
          <p className="legal-subtitle">Transparency is key to our relationship with you.</p>
        </div>
      </div>

      <div className="legal-content">
        <div className="legal-layout">
          
          {/* Sidebar Nav */}
          <div className="legal-sidebar">
            <div className="sidebar-nav">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`sidebar-button ${activeTab === 'privacy' ? 'active' : ''}`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`sidebar-button ${activeTab === 'terms' ? 'active' : ''}`}
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => setActiveTab('refund')}
                className={`sidebar-button ${activeTab === 'refund' ? 'active' : ''}`}
              >
                Refund Policy
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="legal-main">
            {activeTab === 'privacy' && (
              <div className="legal-content-text">
                <h2 className="legal-content-title">Privacy Policy</h2>
                <p className="legal-updated">Last updated: October 2023</p>
                
                <h3 className="legal-section-title">1. Introduction</h3>
                <p className="legal-section-text">Welcome to KOLMAG Cyber Technologies. We value your privacy and are committed to protecting your personal data.</p>
                
                <h3 className="legal-section-title">2. Data Collection</h3>
                <p className="legal-section-text">We collect information you provide directly to us when you fill out contact forms, apply for courses, or request services. This may include name, email, phone number, and educational background.</p>
                
                <h3 className="legal-section-title">3. Use of Information</h3>
                <p className="legal-section-text">We use your information to provide services, process course enrollments, send project updates, and communicate regarding inquiries.</p>
                
                <h3 className="legal-section-title">4. Data Security</h3>
                <p className="legal-section-text">We implement industry-standard security measures to protect your data from unauthorized access.</p>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="legal-content-text">
                <h2 className="legal-content-title">Terms & Conditions</h2>
                
                <h3 className="legal-section-title">1. Acceptance</h3>
                <p className="legal-section-text">By accessing our website and services, you agree to be bound by these Terms and Conditions.</p>
                
                <h3 className="legal-section-title">2. Intellectual Property</h3>
                <p className="legal-section-text">All content, including software, text, images, and course materials, is the property of KOLMAG Cyber Technologies and is protected by copyright laws.</p>
                
                <h3 className="legal-section-title">3. Services</h3>
                <p className="legal-section-text">We reserve the right to modify or discontinue any service or training program without prior notice, though we will make reasonable efforts to fulfill existing commitments.</p>
                
                <h3 className="legal-section-title">4. User Conduct</h3>
                <p className="legal-section-text">You agree not to misuse our website or services for any illegal activities.</p>
              </div>
            )}

            {activeTab === 'refund' && (
              <div className="legal-content-text">
                <h2 className="legal-content-title">Refund Policy (Training Section)</h2>
                
                <h3 className="legal-section-title">1. Course Fees</h3>
                <p className="legal-section-text">Fees paid for training programs, workshops, and internships are generally non-refundable once the batch has commenced.</p>
                
                <h3 className="legal-section-title">2. Cancellations by Student</h3>
                <p className="legal-section-text">If a student cancels their registration 7 days before the start date, a 90% refund will be processed. No refunds are applicable after this period.</p>
                
                <h3 className="legal-section-title">3. Cancellations by KOLMAG</h3>
                <p className="legal-section-text">If we cancel a course or batch, a 100% refund will be issued to the registered participants.</p>
                
                <h3 className="legal-section-title">4. Project Services</h3>
                <p className="legal-section-text">For final year project development services, advance payments are non-refundable once the work has been initiated.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;