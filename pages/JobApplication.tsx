import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Briefcase, User, Mail, Phone, Link as LinkIcon, UploadCloud, FileText, CheckCircle, ArrowLeft, Send } from 'lucide-react';

const JobApplication: React.FC = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    console.log("Job Application Submitted:", { ...formData, resume: fileName });
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-xl text-center border border-slate-100">
          <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Application Sent Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for applying for the <span className="font-semibold text-secondary">{formData.role}</span> position. Our HR team will review your profile and get back to you shortly.
          </p>
          <div className="space-y-3">
            <Link 
              to="/careers"
              className="block w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Back to Careers
            </Link>
            <Link 
              to="/"
              className="block w-full text-slate-600 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <Link to="/careers" className="inline-flex items-center text-gray-500 hover:text-secondary mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Job Listings
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Job Application</h1>
          <p className="mt-2 text-gray-600">Take the next step in your career with KOLMAG.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-6 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center">
              <Briefcase className="h-6 w-6 text-secondary mr-3" />
              <h2 className="text-white text-xl font-semibold">Candidate Profile</h2>
            </div>
            {formData.role && (
              <span className="hidden md:inline-block bg-secondary/20 text-secondary border border-secondary/30 px-4 py-1 rounded-full text-sm font-medium">
                Applying for: {formData.role}
              </span>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            
            {/* Personal Details */}
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 border-b border-gray-100 pb-2">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                   <label className="block text-sm font-medium text-gray-700 mb-1">Applying For Position</label>
                   <div className="relative">
                      <Briefcase className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                      <input
                        required
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-lg border-gray-300 border bg-gray-50 p-2.5 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all font-medium"
                        placeholder="e.g. Senior Full Stack Developer"
                      />
                   </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border-gray-300 border bg-gray-50 p-2.5 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border-gray-300 border bg-gray-50 p-2.5 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border-gray-300 border bg-gray-50 p-2.5 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Total Experience</label>
                  <select
                    required
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 border bg-gray-50 p-2.5 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
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
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 border-b border-gray-100 pb-2">Professional Details</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio / LinkedIn URL</label>
                  <div className="relative">
                    <LinkIcon className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border-gray-300 border bg-gray-50 p-2.5 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resume / CV</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative">
                    <div className="space-y-1 text-center">
                      {fileName ? (
                         <div className="flex flex-col items-center">
                           <FileText className="h-12 w-12 text-secondary mb-2" />
                           <p className="text-sm text-gray-900 font-medium">{fileName}</p>
                           <p className="text-xs text-green-600 mt-1 font-semibold">File Selected</p>
                         </div>
                      ) : (
                        <>
                          <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-secondary hover:text-cyan-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-secondary">
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                        </>
                      )}
                    </div>
                    {/* Hidden input needs to be triggered if clicking outside the label but inside the box - simple fix is making the whole box clickable via a wrapping label or just keeping the existing structure where label wraps the text */}
                    {!fileName && (
                       <input 
                         type="file" 
                         className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                         onChange={handleFileChange}
                         accept=".pdf,.doc,.docx"
                       />
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter / Message</label>
                  <textarea
                    name="coverLetter"
                    rows={4}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 border bg-gray-50 p-3 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    placeholder="Tell us why you are a great fit for this role..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={!fileName}
                className="w-full bg-secondary hover:bg-cyan-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center text-lg"
              >
                Submit Application <Send className="ml-2 h-5 w-5" />
              </button>
              {!fileName && (
                 <p className="text-center text-red-500 text-xs mt-2">Please upload your resume to proceed.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
