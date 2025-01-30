// src/sections/Services.js
import React from 'react';
import './css/Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Building responsive and modern websites.</p>
        </div>
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>Designing user-friendly interfaces.</p>
        </div>
        <div className="service-card">
          <h3>Consulting</h3>
          <p>Providing expert advice on tech solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;