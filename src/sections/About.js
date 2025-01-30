// src/sections/About.js
import React from 'react';
import './css/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img src="https://via.placeholder.com/400" alt="Your Photo" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          A short bio about yourself. Highlight your skills, experiences, and what makes you unique.
        </p>
        <ul className="skills-list">
          <li>React</li>
          <li>Node.js</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
    </section>
  );
};

export default About;