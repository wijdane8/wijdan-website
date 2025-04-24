// sections/AboutCertificates.js
import React, { useState, useCallback } from 'react'; // Import useCallback
import About from './About';
import Certificates from './Certificates';
import './css/AboutCertificates.css'; // Make sure this CSS file is also adapted for RTL

const SLIDE_WIDTH_PERCENT = 100/2; // Constant for slide width in percentage

const AboutCertificates = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Use useCallback for optimized performance
  const goToSlide = useCallback((slideIndex) => {
    setActiveSlide(slideIndex);
  }, [setActiveSlide]);

  // For RTL, "Previous" might mean moving to the *right* visually
  const goToPrevSlide = useCallback(() => {
    goToSlide(1); // In RTL, prev might go to slide 1 (visually on the right)
  }, [goToSlide]);

  // For RTL, "Next" might mean moving to the *left* visually
  const goToNextSlide = useCallback(() => {
    goToSlide(0); // In RTL, next might go to slide 0 (visually on the left)
  }, [goToSlide]);

  return (
    <section id="about-certificate" className="slider-section">
      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(${activeSlide * SLIDE_WIDTH_PERCENT}%)` }} // Changed to positive translateX for RTL
        >
          <div className="slide">
            <About /> {/* Slide 2 (visually left in RTL) */}
          </div>
          <div className="slide">
            <Certificates /> {/* Slide 1 (visually right in RTL) */}
          </div>
        </div>
        <div className="slider-controls">
          <button
          className="slide-arrow next"
            onClick={goToNextSlide}
            disabled={activeSlide === 0} // Disabled when on the 'first' visual slide in RTL (index 0)
            aria-label="Slide to Next Section"
          >
            → {/* Changed arrow to right arrow for RTL "previous" */}
          </button>
          <div className="slide-indicators">
            <span
              className={activeSlide === 0 ? 'active' : ''}
              aria-label={`Slide indicator for section 1 of 2. ${activeSlide === 0 ? 'Current section' : ''}`}
              role="radio"
              aria-checked={activeSlide === 0}
            />
            <span
              className={activeSlide === 1 ? 'active' : ''}
              aria-label={`Slide indicator for section 2 of 2. ${activeSlide === 1 ? 'Current section' : ''}`}
              role="radio"
              aria-checked={activeSlide === 1}
            />
          </div>
          <button
          className="slide-arrow prev"
          onClick={goToPrevSlide}
          disabled={activeSlide === 1} // Disabled when on the 'last' visual slide in RTL (index 1)
          aria-label="Slide to Previous Section"
            
          >
            ← {/* Changed arrow to left arrow for RTL "next" */}
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutCertificates;