import React from "react";
import "./css/Hero.css";

const Hero = () => {
 
 return (
  <section id="home" className="hero">
   <div className="hero-content">
    <div className="hero-text">
     <h1>وجدان الحربي</h1>
     <p className="tagline">
      مطورة برمجيات متكاملة | تصميم حلول قابلة للتوسع في عالم متغير
     </p>
    </div>
    <div className="cta-buttons">
     <a href="#contact" className="btn-primary">استعن بي</a>
     <a href="#portfolio" className="btn-secondary">آخر الأعمال</a>
    </div>
    <div className="social-links text-end">
     <a
      href="https://www.linkedin.com/in/wijdan-alharbi/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="لينكدإن"
     >
      <i className="fab fa-linkedin"></i>
     </a>
     <a
      href="https://github.com/wijdane8"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="جيت هب"
     >
      <i className="fab fa-github"></i>
     </a>
    </div>
   </div>
  </section>
  
  
 );
};

export default Hero;