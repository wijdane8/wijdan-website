// src/components/Navbar.js
import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">وجــــدان الحــربي</div>
      <ul className="nav-links">
        <li><a href="#">الرئيسية</a></li>
        <li><a href="#about">نبذة</a></li>
        <li><a href="#services">خدماتي</a></li>
        <li><a href="#portfolio">الملف التعريفي</a></li>
        <li><a href="#contact">تواصل معي</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;