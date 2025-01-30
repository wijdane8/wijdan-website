// src/sections/Testimonials.js
import React from 'react';
import './css/Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"Great work! Highly recommend."</p>
          <h3>- Client Name</h3>
        </div>
        <div className="testimonial-card">
          <p>"Amazing attention to detail."</p>
          <h3>- Client Name</h3>
        </div>
        <div className="testimonial-card">
          <p>"Professional and reliable."</p>
          <h3>- Client Name</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;