import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Eye, X, Plus } from 'lucide-react';
import { projectsData } from '../utils/projects';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAllTechs, setShowAllTechs] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const mobileSliderRef = useRef(null);

  // All available technologies from projects
  const allTechs = [...new Set(projectsData.flatMap(p => p.technologies))];
  
  // Key technologies to show upfront
  const keyTechs = ['React', 'Node.js', 'TypeScript', 'JavaScript'];
  const otherTechs = allTechs.filter(tech => !keyTechs.includes(tech));

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter projects based on selected technologies
  const filteredProjects = selectedTechs.length === 0 
    ? projectsData 
    : projectsData.filter(project => 
        selectedTechs.some(tech => 
          project.technologies.some(pTech => 
            pTech.toLowerCase().includes(tech.toLowerCase())
          )
        )
      );

  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(filteredProjects.length / projectsPerSlide);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTechToggle = (tech) => {
    setSelectedTechs(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
    setCurrentSlide(0);
  };

  const clearFilters = () => {
    setSelectedTechs([]);
    setCurrentSlide(0);
  };

  // Mobile swipe handling
  const handleMobileScroll = (e) => {
    if (!isMobile || !mobileSliderRef.current) return;
    
    const container = mobileSliderRef.current;
    const cardWidth = container.children[0]?.offsetWidth || 0;
    const scrollLeft = container.scrollLeft;
    const newIndex = Math.round(scrollLeft / cardWidth);
    
    if (newIndex !== currentSlide) {
      setCurrentSlide(newIndex);
    }
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {isMobile ? (
          // MOBILE: Instagram Story Style
          <div className="mobile-portfolio">
            <div className="mobile-header">
              <h2 className="section-title">Portfolio</h2>
              <div className="title-underline"></div>
              <p className="section-subtitle">
                Swipe to explore my projects
              </p>
            </div>

            {/* Mobile Tech Filters */}
            <div className="mobile-tech-filters">
              <div className="mobile-filter-container">
                {keyTechs.map(tech => (
                  <button
                    key={tech}
                    className={`mobile-tech-filter ${selectedTechs.includes(tech) ? 'active' : ''}`}
                    onClick={() => handleTechToggle(tech)}
                  >
                    {tech}
                  </button>
                ))}
                
                <button
                  className="mobile-more-tech-btn"
                  onClick={() => setShowAllTechs(true)}
                >
                  <Plus size={12} />
                  More
                </button>

                {selectedTechs.length > 0 && (
                  <button className="mobile-clear-filters" onClick={clearFilters}>
                    Clear
                  </button>
                )}
              </div>
            </div>

            <div 
              className="mobile-slider"
              ref={mobileSliderRef}
              onScroll={handleMobileScroll}
            >
              {filteredProjects.map((project, index) => (
                <MobileProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => {
                    const scrollY = window.scrollY;
                    setScrollPosition(scrollY);
                    setSelectedProject(project);
                    document.body.classList.add('modal-open');
                    document.body.style.top = `-${scrollY}px`;
                  }}
                  isActive={index === currentSlide}
                />
              ))}
            </div>

            <div className="mobile-indicators">
              {filteredProjects.map((_, index) => (
                <div
                  key={index}
                  className={`mobile-dot ${index === currentSlide ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // DESKTOP: Professional Layout
          <div className="desktop-portfolio">
            <div className="portfolio-layout">
              {/* Left Side - Header */}
              <div className="portfolio-header">
                <h2 className="section-title">Portfolio</h2>
                <div className="title-underline"></div>
                <p className="section-description">
                  Explore my latest web development projects showcasing modern technologies and innovative solutions
                </p>
              </div>

              {/* Right Side - Carousel */}
              <div className="portfolio-carousel">
                {/* Tech Filters */}
                <div className="tech-filters">
                  <div className="filter-container">
                    {keyTechs.map(tech => (
                      <button
                        key={tech}
                        className={`tech-filter ${selectedTechs.includes(tech) ? 'active' : ''}`}
                        onClick={() => handleTechToggle(tech)}
                      >
                        {tech}
                      </button>
                    ))}
                    
                    <button
                      className="more-tech-btn"
                      onClick={() => setShowAllTechs(true)}
                    >
                      <Plus size={14} />
                      More
                    </button>

                    {selectedTechs.length > 0 && (
                      <button className="clear-filters" onClick={clearFilters}>
                        Clear All
                      </button>
                    )}
                  </div>
                </div>

                {/* Projects Carousel */}
                <div className="projects-carousel">
                  <button 
                    className="carousel-arrow prev"
                    onClick={prevSlide}
                    disabled={totalSlides <= 1}
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <div className="carousel-container">
                    <div 
                      className="carousel-track"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        width: `${totalSlides * 100}%`
                      }}
                    >
                      {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                        <div key={slideIndex} className="carousel-slide">
                          {filteredProjects
                            .slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide)
                            .map((project) => (
                              <DesktopProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => {
                                  const scrollY = window.scrollY;
                                  setScrollPosition(scrollY);
                                  setSelectedProject(project);
                                  document.body.classList.add('modal-open');
                                  document.body.style.top = `-${scrollY}px`;
                                }}
                              />
                            ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    className="carousel-arrow next"
                    onClick={nextSlide}
                    disabled={totalSlides <= 1}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Carousel Indicators */}
                {totalSlides > 1 && (
                  <div className="carousel-indicators">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tech Selection Modal */}
      {showAllTechs && (
        <div className="tech-modal-overlay" onClick={() => setShowAllTechs(false)}>
          <div className="tech-modal" onClick={e => e.stopPropagation()}>
            <div className="tech-modal-header">
              <h3>Select Technologies</h3>
              <button onClick={() => setShowAllTechs(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="tech-grid">
              {allTechs.map(tech => (
                <button
                  key={tech}
                  className={`tech-option ${selectedTechs.includes(tech) ? 'selected' : ''}`}
                  onClick={() => handleTechToggle(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => {
            setSelectedProject(null);
            document.body.classList.remove('modal-open');
            document.body.style.top = '';
            window.scrollTo(0, scrollPosition);
          }} 
        />
      )}
    </section>
  );
};

// Mobile Project Card Component
const MobileProjectCard = ({ project, onClick, isActive }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [project.image];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (hasMultipleImages) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [hasMultipleImages, images.length]);

  return (
    <div 
      className={`mobile-project-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="mobile-card-image">
        <img src={images[currentImageIndex]} alt={project.title} />
        <div className="mobile-card-overlay">
          <Eye size={20} />
        </div>
        {hasMultipleImages && (
          <div className="mobile-image-indicators">
            {images.map((_, index) => (
              <div
                key={index}
                className={`mobile-image-dot ${index === currentImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="mobile-card-content">
        <h3 className="mobile-card-title">{project.title}</h3>
        <p className="mobile-card-description">
          {project.description}
        </p>
        <p className="mobile-card-subtitle">
          {project.technologies.slice(0, 2).join(' • ')}
        </p>
        <button className="mobile-view-btn">
          View Project
        </button>
      </div>
    </div>
  );
};

// Desktop Project Card Component
const DesktopProjectCard = ({ project, onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [project.image];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (hasMultipleImages) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [hasMultipleImages, images.length]);

  return (
    <div className="desktop-project-card" onClick={onClick}>
      <div className="desktop-card-image">
        <img src={images[currentImageIndex]} alt={project.title} />
        <div className="desktop-card-overlay">
          <Eye size={24} />
        </div>
        {hasMultipleImages && (
          <div className="image-indicators">
            {images.map((_, index) => (
              <div
                key={index}
                className={`image-dot ${index === currentImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="desktop-card-content">
        <h3 className="desktop-card-title">{project.title}</h3>
        <p className="desktop-card-description">
          {project.description}
        </p>
        <div className="desktop-card-tech">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
        <button className="desktop-view-btn">
          View Project
        </button>
      </div>
    </div>
  );
};

// Project Modal Component
const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const images = project.images || [project.image];
  const hasMultipleImages = images.length > 1;

  // Reset state when project changes
  useEffect(() => {
    setShowFullDescription(false);
    setCurrentImageIndex(0);
  }, [project.id]);

  // Prevent background scroll and add keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (hasMultipleImages) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [hasMultipleImages, images.length]);

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-content">
          <div className="modal-image">
            <img src={images[currentImageIndex]} alt={project.title} />
            {hasMultipleImages && (
              <div className="modal-image-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`modal-image-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>
          
          <div className="modal-info">
            <h2 className="modal-title">{project.title}</h2>
            
            {!showFullDescription ? (
              <div className="modal-preview">
                <p className="modal-description">
                  {project.description}
                </p>
                <div className="modal-preview-actions">
                  <button 
                    className="view-details-btn"
                    onClick={() => setShowFullDescription(true)}
                  >
                    View Details
                  </button>
                  <a 
                    href={project.liveLink}
                    className="modal-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Visit Project
                  </a>
                </div>
              </div>
            ) : (
              <div className="modal-full-description">
                <p className="modal-long-description">
                  {project.longDescription || project.description}
                </p>
                
                <div className="modal-tech-stack">
                  <h4>Technologies Used:</h4>
                  <div className="modal-tech-grid">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="modal-tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-actions">
                  <a 
                    href={project.liveLink}
                    className="modal-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    Visit Project
                  </a>
                  <a 
                    href={project.githubLink}
                    className="modal-btn secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;