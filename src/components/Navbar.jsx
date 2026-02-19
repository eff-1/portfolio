import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'portfolio', label: 'Projects', href: '#portfolio' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <div className="nav-logo">
            <a href="#home" onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}>
              <span className="logo-text">HafTech</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation Backdrop */}
          {isOpen && (
            <div 
              className="mobile-backdrop"
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
            <div className="mobile-nav-content">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;