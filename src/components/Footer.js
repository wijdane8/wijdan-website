// src/components/Footer.js
import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 Your Name. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
      </ul>
    </footer>
  );
};

export default Footer;