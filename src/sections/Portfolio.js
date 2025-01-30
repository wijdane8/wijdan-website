// src/sections/Portfolio.js
import React from 'react';
import './css/Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-cards">
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
          <button>View Project</button>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
          <button>View Project</button>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Project 3" />
          <h3>Project 3</h3>
          <p>Description of Project 3.</p>
          <button>View Project</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;