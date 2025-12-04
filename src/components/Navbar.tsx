import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      children: [
        { name: 'All Services', path: '/services' },
        { name: 'Cybersecurity', path: '/services/cybersecurity' },
        { name: 'Software Dev', path: '/services/software' },
        { name: 'AI & Data Science', path: '/services/ai' },
        { name: 'Web & Mobile Apps', path: '/services/web' },
        { name: 'Cloud & DevOps', path: '/services/cloud' },
      ]
    },
    { 
      name: 'Training', 
      path: '/training',
      children: [
        { name: 'Overview', path: '/training' },
        { name: 'Final Year Projects', path: '/training/projects' },
        { name: 'Internships', path: '/training/internships' },
        { name: 'Courses', path: '/training/courses' },
      ]
    },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDropdown = (name: string) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  const isActive = (path: string) => location.pathname === path ? 'navbar-link active' : 'navbar-link';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-wrapper">
              <img 
                src={logo} 
                alt="KOLMAG Cyber Technologies Logo" 
                className="navbar-logo-img"
              />
            </div>
          </Link>
          
          <div className="navbar-links">
            <div className="navbar-links-desktop">
              {navLinks.map((link) => (
                <div key={link.name} className="navbar-link-item">
                  {link.children ? (
                    <>
                      <button 
                        className={`navbar-link-button ${location.pathname.startsWith(link.path) ? 'active' : ''}`}
                        aria-label={`${link.name} menu`}
                        aria-haspopup="true"
                      >
                        {link.name} <ChevronDown style={{ marginLeft: '0.25rem', height: '1rem', width: '1rem' }} />
                      </button>
                      <div className="navbar-dropdown" role="menu">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="navbar-dropdown-link"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={isActive(link.path)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="navbar-mobile-toggle">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="navbar-mobile-button"
            >
              {isOpen ? <X style={{ height: '1.5rem', width: '1.5rem' }} /> : <Menu style={{ height: '1.5rem', width: '1.5rem' }} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-content">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => handleDropdown(link.name)}
                      aria-label={`Toggle ${link.name} submenu`}
                      aria-expanded={openDropdown === link.name}
                      className="navbar-mobile-dropdown-button"
                    >
                      {link.name} <ChevronDown className={`navbar-mobile-dropdown-icon ${openDropdown === link.name ? 'rotated' : ''}`} />
                    </button>
                    {openDropdown === link.name && (
                      <div className="navbar-mobile-dropdown-menu">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={toggleMenu}
                            className="navbar-mobile-dropdown-link"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={toggleMenu}
                    className="navbar-mobile-link"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;