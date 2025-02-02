import React from 'react';
import './css/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>وجدان الحربي</h1>
          <p className="tagline">مطورة برمجيات متكاملة | تصميم حلول قابلة للتوسع في عالم متغير</p>
        </div>
        <div className="cta-buttons">
          <button className="btn-primary">استعن بي</button>
          <button className="btn-secondary">آخر الأعمال</button>
        </div>
        <div className="social-links text-end">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="لينكدإن">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="جيت هب">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:your.email@example.com" aria-label="البريد الإلكتروني">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;