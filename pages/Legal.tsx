import React, { useState } from 'react';

const Legal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'refund'>('privacy');

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900">Legal & Policies</h1>
          <p className="text-gray-600 mt-2">Transparency is key to our relationship with you.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Nav */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-24">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`w-full text-left px-6 py-4 border-b border-gray-100 hover:bg-slate-50 transition-colors ${activeTab === 'privacy' ? 'bg-slate-50 text-secondary font-bold border-l-4 border-l-secondary' : 'text-gray-600'}`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveTab('terms')}
                className={`w-full text-left px-6 py-4 border-b border-gray-100 hover:bg-slate-50 transition-colors ${activeTab === 'terms' ? 'bg-slate-50 text-secondary font-bold border-l-4 border-l-secondary' : 'text-gray-600'}`}
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => setActiveTab('refund')}
                className={`w-full text-left px-6 py-4 hover:bg-slate-50 transition-colors ${activeTab === 'refund' ? 'bg-slate-50 text-secondary font-bold border-l-4 border-l-secondary' : 'text-gray-600'}`}
              >
                Refund Policy
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-white p-8 border border-gray-100 rounded-xl shadow-sm">
            {activeTab === 'privacy' && (
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Privacy Policy</h2>
                <p>Last updated: October 2023</p>
                
                <h3 className="font-bold text-lg mt-6 mb-2">1. Introduction</h3>
                <p>Welcome to KOLMAG Cyber Technologies. We value your privacy and are committed to protecting your personal data.</p>
                
                <h3 className="font-bold text-lg mt-6 mb-2">2. Data Collection</h3>
                <p>We collect information you provide directly to us when you fill out contact forms, apply for courses, or request services. This may include name, email, phone number, and educational background.</p>
                
                <h3 className="font-bold text-lg mt-6 mb-2">3. Use of Information</h3>
                <p>We use your information to provide services, process course enrollments, send project updates, and communicate regarding inquiries.</p>
                
                <h3 className="font-bold text-lg mt-6 mb-2">4. Data Security</h3>
                <p>We implement industry-standard security measures to protect your data from unauthorized access.</p>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Terms & Conditions</h2>
                
                <h3 className="font-bold text-lg mt-6 mb-2">1. Acceptance</h3>
                <p>By accessing our website and services, you agree to be bound by these Terms and Conditions.</p>
                
                <h3 className="font-bold text-lg mt-6 mb-2">2. Intellectual Property</h3>
                <p>All content, including software, text, images, and course materials, is the property of KOLMAG Cyber Technologies and is protected by copyright laws.</p>
                
                <h3 className="font-bold text-lg mt-6 mb-2">3. Services</h3>
                <p>We reserve the right to modify or discontinue any service or training program without prior notice, though we will make reasonable efforts to fulfill existing commitments.</p>
                
                <h3 className="font-bold text-lg mt-6 mb-2">4. User Conduct</h3>
                <p>You agree not to misuse our website or services for any illegal activities.</p>
              </div>
            )}

            {activeTab === 'refund' && (
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Refund Policy (Training Section)</h2>
                
                <h3 className="font-bold text-lg mt-6 mb-2">1. Course Fees</h3>
                <p>Fees paid for training programs, workshops, and internships are generally non-refundable once the batch has commenced.</p>
                
                <h3 className="font-bold text-lg mt-6 mb-2">2. Cancellations by Student</h3>
                <p>If a student cancels their registration 7 days before the start date, a 90% refund will be processed. No refunds are applicable after this period.</p>
                
                <h3 className="font-bold text-lg mt-6 mb-2">3. Cancellations by KOLMAG</h3>
                <p>If we cancel a course or batch, a 100% refund will be issued to the registered participants.</p>
                
                <h3 className="font-bold text-lg mt-6 mb-2">4. Project Services</h3>
                <p>For final year project development services, advance payments are non-refundable once the work has been initiated.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;