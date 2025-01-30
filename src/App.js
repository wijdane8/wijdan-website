// src/App.js
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './App.css';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

function App() {
  const [showArrow, setShowArrow] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: 'hero', component: Hero },
    { id: 'about', component: About },
    { id: 'services', component: Services },
    { id: 'portfolio', component: Portfolio },
    { id: 'testimonials', component: Testimonials },
    { id: 'contact', component: Contact },
  ];

  useEffect(() => {
    // Show the arrow after 5 seconds
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 1000);

    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Update the current section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let newCurrentSection = 0;

      sections.forEach((section, index) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            newCurrentSection = index;
          }
        }
      });

      setCurrentSection(newCurrentSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const scrollToNextSection = () => {
    const nextSectionIndex = (currentSection + 1) % sections.length;
    const nextSectionId = sections[nextSectionIndex].id;
    document.getElementById(nextSectionId).scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(nextSectionIndex);
  };

  const scrollToTop = () => {
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
    setCurrentSection(0);
  };

  const handleArrowClick = () => {
    if (currentSection === sections.length - 1) {
      scrollToTop();
    } else {
      scrollToNextSection();
    }
  };

  return (
    <div className="App">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Contact /></section>
      <Footer />

      {/* Fixed Arrow Button */}
      {showArrow && (
        <button className="next-arrow" onClick={handleArrowClick}>
          {currentSection === sections.length - 1 ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      )}
    </div>
  );
}

export default App;
