import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

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

  const isActive = (path: string) => location.pathname === path ? 'text-secondary font-bold' : 'text-gray-300 hover:text-white';

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="KOLMAG Cyber Technologies Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.children ? (
                    <button 
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${location.pathname.startsWith(link.path) ? 'text-secondary' : 'text-gray-300 hover:text-white'}`}
                      aria-label={`${link.name} menu`}
                      aria-haspopup="true"
                    >
                      {link.name} <ChevronDown className="ml-1 h-4 w-4" />
                      <div className="absolute top-full left-0 w-48 bg-slate-800 rounded-md shadow-xl py-2 hidden group-hover:block border border-slate-700" role="menu">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-white"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(link.path)}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => handleDropdown(link.name)}
                      aria-label={`Toggle ${link.name} submenu`}
                      aria-expanded={openDropdown === link.name}
                      className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 flex justify-between"
                    >
                      {link.name} <ChevronDown className={`h-5 w-5 transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === link.name && (
                      <div className="pl-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            onClick={toggleMenu}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700"
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
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
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