// src/components/Footer.js
import React from 'react';
import './css/Footer.css'; // Make sure the CSS import path is correct

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get current year dynamically

    return (
        <footer className="footer">
            <p>&copy; {currentYear} وجدان الحربي. جميع الحقوق محفوظة.</p> {/* Updated copyright text with dynamic year and Arabic text */}
            <ul className="footer-links">
                <li><a href="#privacy">سياسة الخصوصية</a></li> {/* Privacy Policy in Arabic */}
                <li><a href="#terms">شروط الخدمة</a></li> {/* Terms of Service in Arabic */}
            </ul>
        </footer>
    );
};

export default Footer;