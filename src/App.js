// App.js
import React, { useEffect, useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import WhyChooseMe from "./sections/WhyChooseMe";
import AboutCertificate from "./sections/AboutCertificate";
import './sections/css/globalStyles.css';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [showArrow, setShowArrow] = useState(false); // Keep showArrow

  const sections = useMemo(
    () => [
      { id: "hero", component: Hero },
      { id: "about-certificate", component: AboutCertificate },
      { id: "WhyChooseMe", component: WhyChooseMe },
      { id: "portfolio", component: Portfolio },
      // { id: "testimonials", component: Testimonials },
      { id: "contact", component: Contact },
    ],
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 2000);

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let newCurrentSection = 0;

      sections.forEach((section, index) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            newCurrentSection = index;
          }
        }
      });

      setCurrentSection(newCurrentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer); // Clear the timer
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToNextSection = () => {
    const nextSectionIndex = (currentSection + 1) % sections.length;
    const nextSectionId = sections[nextSectionIndex].id;
    document
      .getElementById(nextSectionId)
      .scrollIntoView({ behavior: "smooth" });
    setCurrentSection(nextSectionIndex);
  };

  const scrollToTop = () => {
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
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
      <section id="hero">
        <Hero />
      </section>
      <section id="about-certificate">
        <AboutCertificate />
      </section>
      <section id="WhyChooseMe">
        <WhyChooseMe/>
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      {/* <section id="testimonials">
        <Testimonials />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
      <Footer />

      {showArrow && ( // Conditionally render the button
        <button
          className="next-arrow"
          onClick={handleArrowClick}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: "100",
          }}
        >
          {currentSection === sections.length - 1 ? (
            <FaArrowUp />
          ) : (
            <FaArrowDown />
          )}
        </button>
      )}
    </div>
  );
}

export default App;
