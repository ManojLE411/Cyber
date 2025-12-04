import { useState, type ChangeEvent, type FormEvent } from 'react';
import { BookOpen, Send, User, Mail, Phone, GraduationCap, Briefcase, FileText, CheckCircle } from 'lucide-react';

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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center border border-slate-100">
          <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Application Received!</h2>
          <p className="text-gray-600 mb-6">
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
            className="text-secondary font-semibold hover:underline"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Internship Application Form</h1>
          <p className="mt-2 text-gray-600">Join our industrial training program to kickstart your career.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-slate-900 px-8 py-4 border-b border-slate-800 flex items-center">
            <Briefcase className="h-5 w-5 text-secondary mr-3" />
            <h2 className="text-white font-semibold">Student Details</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            {/* Personal Info */}
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>
            </div>

            {/* Academic Info */}
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2 mt-2">Academic Background</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">College / University Name</label>
                  <div className="relative">
                    <GraduationCap className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                    <input
                      required
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border-gray-300 border bg-gray-50 p-2.5 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="Enter your college name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Degree & Branch</label>
                  <input
                    required
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 border bg-gray-50 p-2.5 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                    placeholder="e.g. B.Tech CSE"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Year / Semester</label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 border bg-gray-50 p-2.5 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
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
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2 mt-2">Internship Preferences</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interested Domain</label>
                  <div className="relative">
                    <BookOpen className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                    <select
                      required
                      name="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border-gray-300 border bg-gray-50 p-2.5 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Duration</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 border bg-gray-50 p-2.5 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                  >
                    <option value="1 Month">1 Month</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join this internship?</label>
                  <div className="relative">
                    <FileText className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border-gray-300 border bg-gray-50 p-2.5 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                      placeholder="Tell us briefly about your goals..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-cyan-700 text-white font-bold py-3.5 px-6 rounded-lg transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center text-lg"
              >
                Submit Application <Send className="ml-2 h-5 w-5" />
              </button>
              <p className="text-center text-xs text-gray-400 mt-4">
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
