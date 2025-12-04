import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cybersecurity from './pages/Cybersecurity';
import SoftwareDev from './pages/SoftwareDev';
import CloudDevOps from './pages/CloudDevOps';
import AIDataScience from './pages/AIDataScience';
import WebDevelopment from './pages/WebDevelopment';
import Training from './pages/Training';
import Projects from './pages/Projects';
import Internships from './pages/Internships';
import InternshipApplication from './pages/InternshipApplication';
import Courses from './pages/Courses';
import Careers from './pages/Careers';
import JobApplication from './pages/JobApplication';
import Legal from './pages/Legal';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Custom ScrollToTop component handling scroll restoration manually
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/software" element={<SoftwareDev />} />
            <Route path="/services/ai" element={<AIDataScience />} />
            <Route path="/services/web" element={<WebDevelopment />} />
            <Route path="/services/cloud" element={<CloudDevOps />} />
            
            {/* Training */}
            <Route path="/training" element={<Training />} />
            <Route path="/training/projects" element={<Projects />} />
            <Route path="/training/internships" element={<Internships />} />
            <Route path="/training/internships/apply" element={<InternshipApplication />} />
            <Route path="/training/courses" element={<Courses />} />
            
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/apply" element={<JobApplication />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;

