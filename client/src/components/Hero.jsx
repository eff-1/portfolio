import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Rocket, Sparkles } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Full Stack Developer",
    "React Specialist", 
    "Backend Engineer",
    "UI/UX Designer",
    "Tech Entrepreneur"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    
    <section id="home" className="hero-section">
      {/* Background Elements */}
      
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="floating-elements">
          <div className="floating-icon icon-1">
            <Code size={24} />
          </div>
          <div className="floating-icon icon-2">
            <Rocket size={20} />
          </div>
          <div className="floating-icon icon-3">
            <Sparkles size={18} />
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          {/* Greeting */}
          <div className="hero-greeting" data-aos="fade-up" data-aos-delay="200">
            <span className="greeting-text">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="hero-name" data-aos="fade-up" data-aos-delay="400">
            <span className="name-part">Ariyo</span>
            <span className="name-part gradient-text">Faruq</span>
          </h1>

          {/* Dynamic Role */}
          <div className="hero-role" data-aos="fade-up" data-aos-delay="600">
            <span className="role-label">I'm a </span>
            <span className="role-text">
              {roles[currentRole]}
            </span>
          </div>

          {/* Description */}
          <p className="hero-description" data-aos="fade-up" data-aos-delay="800">
            CEO & Founder of <strong>HafTech</strong> - Building innovative web solutions
            and leading digital transformation with cutting-edge technologies.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions" data-aos="fade-up" data-aos-delay="1000">
            <button 
              className="btn btn-primary hero-cta"
              onClick={scrollToPortfolio}
            >
              <span >View My Work</span>
              <Rocket size={18} />
            </button>
            
            <a 
              href="#contact" 
              className="btn btn-outline hero-cta-secondary"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                  
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <span>Get In Touch</span>
            </a>{}
          </div>

          {/* Social Stats */}
          <div className="hero-stats" data-aos="fade-up" data-aos-delay="1200">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Clients</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="1400">
          <button 
            className="scroll-btn"
            onClick={() => {
              const element = document.querySelector('#about');
              if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
                });
              }
            }}
            aria-label="Scroll to next section"
          >
            <ChevronDown size={24} />
          </button>
          <span className="scroll-text">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;