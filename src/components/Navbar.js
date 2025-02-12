import React, { useState } from "react";
import "./css/Navbar.css";
import { FaBars } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`navbar ${isExpanded ? "expanded" : ""}`}>
      <div className="logo">وجــــدان الحــربي</div>
      <ul className="nav-links">
        <li>
          <HashLink to="/#">الرئيسية</HashLink>
        </li>
        <li>
          <HashLink to="/#about">نبذة</HashLink>
        </li>
        <li>
          <HashLink to="/#WhyChooseMe">خدماتي</HashLink>
        </li>
        <li>
          <HashLink to="/#portfolio">الملف التعريفي</HashLink>
        </li>
        <li>
          <HashLink to="/#contact">تواصل معي</HashLink>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}> {/*  Ensure class name is navbar-toggle */}
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;