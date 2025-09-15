import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Eye, X, Filter, Play, Pause } from 'lucide-react';
import { projectsData, categories } from '../utils/projects';
import Modal from './Modal';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [autoPlay, setAutoPlay] = useState(true);

  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  // Desktop: 3 cards per slide, Mobile: 1 card per slide
  const getItemsPerSlide = () => {
    return window.innerWidth <= 768 ? 1 : 3;
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
      setCurrentSlide(0); // Reset slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, filteredProjects.length, itemsPerSlide, autoPlay]);

  // Auto-flip cards timer
  useEffect(() => {
    const flipInterval = setInterval(() => {
      const visibleProjects = getVisibleProjects();
      if (visibleProjects.length > 0) {
        const randomIndex = Math.floor(Math.random() * visibleProjects.length);
        const projectId = visibleProjects[randomIndex].id;
        
        setFlippedCards(prev => {
          const newSet = new Set(prev);
          if (newSet.has(projectId)) {
            newSet.delete(projectId);
          } else {
            newSet.add(projectId);
          }
          return newSet;
        });

        // Auto flip back after 3 seconds
        setTimeout(() => {
          setFlippedCards(prev => {
            const newSet = new Set(prev);
            newSet.delete(projectId);
            return newSet;
          });
        }, 3000);
      }
    }, 2000);

    return () => clearInterval(flipInterval);
  }, [currentSlide, filteredProjects]);

  const totalSlides = Math.ceil(filteredProjects.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleProjects = () => {
    const start = currentSlide * itemsPerSlide;
    return filteredProjects.slice(start, start + itemsPerSlide);
  };

  const handleCardClick = (project) => {
    const projectId = project.id;
    if (flippedCards.has(projectId)) {
      // If already flipped, open modal on second click
      setSelectedProject(project);
    } else {
      // First click - flip the card
      setFlippedCards(prev => new Set(prev).add(projectId));
    }
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentSlide(0);
    setFlippedCards(new Set()); // Clear flipped cards when filter changes
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Desktop Layout */}
        <div className="desktop-portfolio">
          <div className="portfolio-header">
            <div className="header-content" data-aos="fade-right">
              <h2 className="section-title">Portfolio</h2>
              <p className="section-subtitle">
                Explore my latest web development projects showcasing modern technologies and innovative solutions
              </p>
              
              {/* Desktop Filters */}
              <div className="desktop-filters">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                    onClick={() => handleFilterChange(category.id)}
                  >
                    <Filter size={16} />
                    {category.name}
                    <span className="count">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="portfolio-carousel" data-aos="fade-left">
              {/* Carousel Controls */}
              <div className="carousel-controls">
                <div className="slide-controls">
                  <button 
                    className="control-btn prev" 
                    onClick={prevSlide}
                    disabled={totalSlides <= 1}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <div className="slide-indicators">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                      />
                    ))}
                  </div>
                  
                  <button 
                    className="control-btn next" 
                    onClick={nextSlide}
                    disabled={totalSlides <= 1}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <button 
                  className={`autoplay-btn ${autoPlay ? 'active' : ''}`}
                  onClick={() => setAutoPlay(!autoPlay)}
                  title={autoPlay ? 'Pause autoplay' : 'Start autoplay'}
                >
                  {autoPlay ? <Pause size={16} /> : <Play size={16} />}
                </button>
              </div>

              {/* Projects Grid */}
              <div className="projects-carousel">
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
                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                        .map((project) => (
                          <ProjectCard
                            key={project.id}
                            project={project}
                            isFlipped={flippedCards.has(project.id)}
                            onClick={() => handleCardClick(project)}
                            onViewProject={() => setSelectedProject(project)}
                          />
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="mobile-portfolio">
          <div className="mobile-header" data-aos="fade-up">
            <h2 className="section-title">Portfolio</h2>
            <p className="section-subtitle">
              Explore my latest projects
            </p>
          </div>

          {/* Mobile Filters */}
          <div className="mobile-filters" data-aos="fade-up" data-aos-delay="200">
            {categories.map(category => (
              <button
                key={category.id}
                className={`mobile-filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                onClick={() => handleFilterChange(category.id)}
              >
                {category.name}
                <span className="count">{category.count}</span>
              </button>
            ))}
          </div>

          {/* Mobile Projects */}
          <div className="mobile-projects" data-aos="fade-up" data-aos-delay="400">
            {filteredProjects.slice(0, 6).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFlipped={flippedCards.has(project.id)}
                onClick={() => handleCardClick(project)}
                onViewProject={() => setSelectedProject(project)}
                mobile={true}
                delay={index * 100}
              />
            ))}
            
            {filteredProjects.length > 6 && (
              <button className="load-more-btn">
                <Eye size={16} />
                View More Projects
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <ProjectModal project={selectedProject} />
        </Modal>
      )}
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, isFlipped, onClick, onViewProject, mobile = false, delay = 0 }) => {
  return (
    <div 
      className={`project-card ${isFlipped ? 'flipped' : ''} ${mobile ? 'mobile-card' : ''}`}
      onClick={onClick}
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="card-inner">
        {/* Front of card */}
        <div className="card-front">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
            <div className="image-overlay">
              <Eye size={24} />
            </div>
          </div>
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">{project.category}</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="card-back">
          <div className="back-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="tech-stack">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-actions">
              <a 
                href={project.liveLink} 
                className="action-btn primary"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
              <a 
                href={project.githubLink}
                className="action-btn secondary"
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Modal Component
const ProjectModal = ({ project }) => {
  return (
    <div className="project-modal">
      <div className="modal-image">
        <img src={project.image} alt={project.title} />
      </div>
      
      <div className="modal-content">
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.longDescription}</p>
        
        <div className="modal-tech-stack">
          <h4>Technologies Used:</h4>
          <div className="tech-grid">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-item">{tech}</span>
            ))}
          </div>
        </div>
        
        <div className="modal-actions">
          <a 
            href={project.liveLink}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} />
            View Live Project
          </a>
          <a 
            href={project.githubLink}
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;