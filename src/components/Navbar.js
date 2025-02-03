import React, { useState } from 'react';
import './css/Navbar.css';
import { FaBars } from 'react-icons/fa'; // Example using react-icons

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`navbar ${isExpanded? 'expanded': ''}`}>
      <div className="logo">وجــــدان الحــربي</div>
      <ul className="nav-links">
        <li><a href="#">الرئيسية</a></li>
        <li><a href="#about">نبذة</a></li>
        <li><a href="#services">خدماتي</a></li>
        <li><a href="#portfolio">الملف التعريفي</a></li>
        <li><a href="#contact">تواصل معي</a></li>
      </ul>
      <div className="nav-toggle" onClick={toggleMenu}>
        <FaBars /> {/* Your hamburger icon here */}
      </div>
    </nav>
  );
};

export default Navbar;