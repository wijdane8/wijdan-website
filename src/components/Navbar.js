import React, { useState } from 'react'; // Import useState!
import './css/Navbar.css';
import { FaBars } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link'; // Or import { Link } from 'react-router-dom' if using the manual scrolling method


const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Now isExpanded is defined

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`navbar ${isExpanded ? 'expanded' : ''}`}>
      <div className="logo">وجــــدان الحــربي</div>
      <ul className="nav-links">
        <li><HashLink to="/#home">الرئيسية</HashLink></li> {/* Or <Link to=... > if using manual scrolling */}
        <li><HashLink to="/#about">نبذة</HashLink></li>
        <li><HashLink to="/#services">خدماتي</HashLink></li>
        <li><HashLink to="/#portfolio">الملف التعريفي</HashLink></li>
        <li><HashLink to="/#contact">تواصل معي</HashLink></li>
      </ul>
      <div className="nav-toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;