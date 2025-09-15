import React from 'react';
import { ChevronUp, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Back to Top Button */}
        <button 
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>

        {/* Footer Content */}
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">HafTech</h3>
            <p className="footer-tagline">
              Building the future, one line of code at a time
            </p>
          </div>

          <div className="footer-text">
            <p>
              Made with <Heart size={16} className="heart-icon" /> and <Code2 size={16} className="code-icon" /> 
              by <strong>Ariyo Faruq</strong> • CEO & Founder, HafTech
            </p>
            <p>
              &copy; {currentYear} HafTech. All rights reserved. Built with React & Vite.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Background Effect */}
      <div className="footer-gradient"></div>
    </footer>
  );
};

export default Footer;