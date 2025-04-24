// src/components/Footer.js
import React from 'react';
import './css/Footer.css'; // Make sure the CSS import path is correct

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get current year dynamically

    return (
        <footer className="footer">
            <p>وجدان الحربي. جميع الحقوق محفوظة.&copy; {currentYear} </p> {/* Updated copyright text with dynamic year and Arabic text */}
        </footer>
    );
};

export default Footer;