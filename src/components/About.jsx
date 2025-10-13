import React, { useState, useEffect } from 'react';
import { 
  Code2, Server, Cloud, Filter, Zap, FileCode, Palette, Braces,
  Globe, Database, HardDrive, Terminal, GitBranch, Package, Rocket, 
  Figma, Paintbrush, Code, Send
} from 'lucide-react';
import { skillsData, mainSkills } from '../utils/skills';
import '../styles/About.css';
import profileImage from '../assets/profile-image.jpg';

const About = () => {
  // Show 'frontend' by default on mobile, 'all' on desktop
  const [activeCategory, setActiveCategory] = useState(
    window.innerWidth < 768 ? 'frontend' : 'all'
  );
  const [skillsVisible, setSkillsVisible] = useState(false);

  // Icon mapping for skills
  const getSkillIcon = (iconName) => {
    const icons = {
      Code2, Zap, FileCode, Palette, Braces, Server, Globe, 
      Database, HardDrive, Terminal, GitBranch, Package, 
      Cloud, Rocket, Figma, Paintbrush, Code, Send
    };
    return icons[iconName] || Code2;
  };

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Filter },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'tools', label: 'Tools', icon: Cloud }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setSkillsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe both skills section and main skills (core competencies)
    const skillsSection = document.querySelector('.skills-section');
    const mainSkillsSection = document.querySelector('.main-skills');
    
    if (skillsSection) {
      observer.observe(skillsSection);
    }
    if (mainSkillsSection) {
      observer.observe(mainSkillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      const allSkills = [];
      Object.keys(skillsData).forEach(category => {
        allSkills.push(...skillsData[category].skills.map(skill => ({
          ...skill,
          category,
          categoryColor: skillsData[category].color
        })));
      });
      return allSkills.sort((a, b) => b.level - a.level);
    }
    
    return skillsData[activeCategory]?.skills.map(skill => ({
      ...skill,
      category: activeCategory,
      categoryColor: skillsData[activeCategory].color
    })) || [];
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer creating innovative solutions with modern technologies
          </p>
        </div>

        <div className="about-content">
          {/* profile image and bio */}
          <div className="about-main">
            <div className="about-image" data-aos="fade-right">
              <div className="image-container">
                <img src={profileImage} alt="Ariyo Faruq"/>
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h3>HafTech CEO</h3>
                    <p>5+ Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-text" data-aos="fade-left">
              <div className="text-content">
                <h3 className="about-title">
                  Full Stack Developer & <span className="gradient-text">Tech Entrepreneur</span>
                </h3>
                
                <p>
                  I am a passionate software engineer with over 5 years of experience 
                  specializing in full-stack web development. As the founder and CEO of 
                  <strong> HafTech</strong>, I lead a dynamic team in creating innovative 
                  digital solutions for clients across various industries.
                </p>

                <p>
                  My expertise spans modern frontend frameworks like React and Next.js, 
                  robust backend systems with Node.js and PHP, and scalable cloud infrastructure. 
                  I'm committed to writing clean, maintainable code and creating exceptional 
                  user experiences that drive business growth.
                </p>

                <div className="achievements">
                  <div className="achievement-item">
                    <span className="achievement-number">50+</span>
                    <span className="achievement-label">Projects Delivered</span>
                  </div>
                  <div className="achievement-item">
                    <span className="achievement-number">30+</span>
                    <span className="achievement-label">Happy Clients</span>
                  </div>
                  <div className="achievement-item">
                    <span className="achievement-number">5+</span>
                    <span className="achievement-label">Years Experience</span>
                  </div>
                </div>

                {/* Main Skills Progress */}
                <div className="main-skills">
                  <h4>⚙️ Core Competencies</h4>
                  {mainSkills.map((skill, index) => (
                    <div key={skill.name} className="skill-bar" data-aos="fade-up" data-aos-delay={index * 100}>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{
                            width: skillsVisible ? `${skill.level}%` : '0%',
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-section" data-aos="fade-up">
            <div className="skills-header">
              <h3>Technical Skills</h3>
              <p>Technologies and tools I work with professionally</p>
            </div>

            {/* Skill Filters */}
            <div className="skill-filters">
              {skillCategories.map(category => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <IconComponent size={18} />
                    <span>{category.label}</span>
                    {category.id !== 'all' && (
                      <span className="skill-count">
                        {skillsData[category.id]?.skills.length || 0}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Skills Grid */}
            <div className="skills-grid">
              {getFilteredSkills().map((skill, index) => (
                <div 
                  key={`${skill.category}-${skill.name}`}
                  className="skill-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                  style={{
                    '--skill-color': skill.categoryColor || skillsData[skill.category]?.color
                  }}
                >
                  <div className="skill-icon">
                    {React.createElement(getSkillIcon(skill.icon), { size: 20 })}
                  </div>
                  <div className="skill-info">
                    <h4 className="skill-title">{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>

            {activeCategory !== 'all' && skillsData[activeCategory] && (
              <div className="category-info" data-aos="fade-up">
                <h4>{skillsData[activeCategory].title}</h4>
                <p>{skillsData[activeCategory].description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;