import React, { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Server, 
  ShoppingCart, 
  Search, 
  Settings, 
  Palette,
  Cloud,
  Database,
  Shield
} from 'lucide-react';
import '../styles/Services.css';

const Services = () => {


  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Modern, responsive web applications using React, Next.js, and cutting-edge technologies. Creating beautiful user interfaces that engage and convert.",
      icon: Code2,
      features: ["React/Next.js", "Responsive Design", "Performance Optimization", "Modern UI/UX"],
      color: "#4361ee"
    },
    {
      id: 2,
      title: "Backend Development", 
      description: "Robust server-side applications with Node.js, PHP, and database integration. Building scalable APIs and secure backend systems.",
      icon: Server,
      features: ["Node.js/Express", "PHP Development", "API Design", "Database Management"],
      color: "#f72585"
    },
    {
      id: 3,
      title: "Full Stack Solutions",
      description: "Complete web applications from conception to deployment. End-to-end development covering both frontend and backend requirements.",
      icon: Database,
      features: ["MERN/LAMP Stack", "Database Design", "Authentication", "Deployment"],
      color: "#f72585"
    },
    {
      id: 4,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native. Creating native-like experiences for iOS and Android platforms.",
      icon: Smartphone,
      features: ["React Native", "Cross-platform", "Native Performance", "App Store Deployment"],
      color: "#4361ee"
    },
    {
      id: 5,
      title: "E-Commerce Development",
      description: "Complete online store solutions with payment integration, inventory management, and admin dashboards for business growth.",
      icon: ShoppingCart,
      features: ["Shopping Cart", "Payment Gateway", "Admin Dashboard", "Order Management"],
      color: "#4cc9f0"
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive interfaces and exceptional user experiences that drive engagement.",
      icon: Palette,
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "#4361ee"
    },
    {
      id: 7,
      title: "Cloud & DevOps",
      description: "Cloud deployment, CI/CD pipelines, and infrastructure management for scalable and reliable applications.",
      icon: Cloud,
      features: ["AWS/Azure", "Docker", "CI/CD", "Monitoring"],
      color: "#f72585"
    },
    {
      id: 8,
      title: "Security & Performance",
      description: "Application security audits, performance optimization, and implementation of best practices for robust applications.",
      icon: Shield,
      features: ["Security Audit", "Performance Tuning", "Code Review", "Best Practices"],
      color: "#4cc9f0"
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Desktop Layout */}
        <div className="desktop-services">
          {/* Header at Top */}
          <div className="services-header" data-aos="fade-up">
            <h2 className="section-title">Services</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              Building digital experiences that drive results and transform businesses through innovative technology solutions.
            </p>
            <div className="services-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Full Width Services Grid */}
          <div className="services-grid" data-aos="fade-up" data-aos-delay="200">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="service-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  style={{ '--service-color': service.color }}
                >
                  <div className="card-content">
                    <div className="service-icon">
                      <IconComponent size={28} />
                    </div>
                    
                    <div className="service-info">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                      
                      <div className="service-features">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="feature-tag">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="mobile-services">
          <div className="mobile-header" data-aos="fade-up">
            <h2 className="section-title">Digital Services</h2>
            <p className="section-subtitle">
              Building digital experiences that drive results
            </p>
          </div>

          <div className="mobile-services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="mobile-service-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  style={{ '--service-color': service.color }}
                >
                  <div className="mobile-service-icon">
                    <IconComponent size={28} />
                  </div>
                  
                  <div className="mobile-service-info">
                    <h3 className="mobile-service-title">{service.title}</h3>
                    <p className="mobile-service-description">{service.description}</p>
                    
                    <div className="mobile-service-features">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="mobile-feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mobile-cta" data-aos="fade-up">
            <p>Ready to start your project?</p>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;