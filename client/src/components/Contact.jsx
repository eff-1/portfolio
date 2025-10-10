import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink
} from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Lagos, Nigeria',
      description: 'West Africa',
      color: '#f72585'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@haftech.com',
      description: 'Send me an email anytime',
      color: '#4cc9f0',
      link: 'mailto:contact@haftech.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 8128 653 553',
      description: 'Call or WhatsApp',
      color: '#06ffa5',
      link: 'tel:+2348128653553'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/eff-1', color: '#333' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/haftech', color: '#0077b5' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/haftech', color: '#1da1f2' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/haftech', color: '#e4405f' }
  ];

  const quickContactMethods = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/+2348128653553?text=Hello,%20I%20would%20like%20to%20discuss%20a%20potential%20project%20collaboration',
      color: '#25d366',
      description: 'WhatsApp'
    },
    {
      name: 'Telegram',
      icon: Send,
      url: 'https://t.me/Haftechofficial',
      color: '#0088cc',
      description: 'Telegram'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:ariyofaruq1@gmail.com?subject=Project%20Inquiry',
      color: '#ea4335',
      description: 'Direct Email'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = () => {
    const form = document.querySelector('.contact-form');
    if (form) form.classList.add('active');
  };

  const handleBlur = () => {
    const form = document.querySelector('.contact-form');
    if (form) form.classList.remove('active');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else setSubmitStatus('error');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your next project? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info" data-aos="fade-right">
            <div className="info-header">
              <h3>Contact Information</h3>
              <p>Get in touch for inquiries or project discussions</p>
            </div>

            <div className="info-cards">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="info-card"
                    style={{ '--info-color': info.color }}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="info-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="info-details">
                      <h4>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="info-value">
                          {info.value}
                        </a>
                      ) : (
                        <span className="info-value">{info.value}</span>
                      )}
                      <p className="info-description">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Methods */}
            <div className="quick-contact">
              <h4>Quick Contact</h4>
              <div className="quick-methods">
                {quickContactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={method.name}
                      href={method.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="quick-method"
                      style={{ '--method-color': method.color }}
                      data-aos="zoom-in"
                      data-aos-delay={400 + index * 100}
                    >
                      <IconComponent size={18} className="method-icon" />
                      <span className="method-text">{method.description}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4>Find Me Online</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      data-aos="flip-left"
                      data-aos-delay={600 + index * 100}
                      aria-label={social.name}
                      title={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form" data-aos="fade-left">
            <div className="form-header">
              <h3>Send Message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form-wrapper">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Your full name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="your.email@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Project discussion, collaboration, etc."
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project, requirements, timeline..."
                  required
                  className="form-textarea"
                  rows="6"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="form-message success" data-aos="fade-in">
                  <div className="message-icon">✓</div>
                  <div>
                    <strong>Message sent successfully!</strong>
                    <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-message error" data-aos="fade-in">
                  <div className="message-icon">⚠</div>
                  <div>
                    <strong>Something went wrong!</strong>
                    <p>Please try again or contact me directly via WhatsApp or email.</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
              >
                <div className="btn-content">
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </div>
              </button>

              <div className="form-note">
                <p>
                  Your information is secure and will only be used to respond to your inquiry.
                  For immediate assistance, feel free to contact me via WhatsApp or Telegram.
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="additional-contact" data-aos="fade-up">
          <div className="contact-cta">
            <div className="cta-content">
              <div className="cta-text">
                <h3>Ready to Start Your Project?</h3>
              </div>
              <div className="cta-details">
                <p>
                  Let's discuss your requirements and bring your vision to life with cutting-edge
                  technology
                </p>
                <div className="cta-buttons">
                  <a
                    href="https://wa.me/+2348128653553?text=Hi%20Faruq,%20I'm%20ready%20to%20start%20my%20project.%20Let's%20discuss!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary cta-btn"
                  >
                    <MessageCircle size={18} />
                    Start Project Discussion
                  </a>
                  <a
                    href="#portfolio"
                    className="btn btn-outline cta-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <ExternalLink size={18} />
                    View My Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
