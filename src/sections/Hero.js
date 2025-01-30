// src/sections/Hero.js
import React from 'react';
import './css/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>WIJDAN ALHARBI</h1>
        <p className="tagline">Full-Stack Developer | Crafting Scalable Solutions for a Dynamic World</p>
        <div className="cta-buttons">
          <button className="btn-primary">Hire Me</button>
          <button className="btn-secondary">View Portfolio</button>
        </div>
        <div className="social-links">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:your.email@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;