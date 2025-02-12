// sections/AboutCertificates.js
import React, { useState, useCallback } from 'react'; // Import useCallback
import About from './About';
import Certificates from './Certificates';
import './css/AboutCertificates.css';

const SLIDE_WIDTH_PERCENT = 100; // Constant for slide width in percentage

const AboutCertificates = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Use useCallback to prevent unnecessary function re-creation on each render
  const goToSlide = useCallback((slideIndex) => {
    setActiveSlide(slideIndex);
  }, [setActiveSlide]);

  const goToPrevSlide = useCallback(() => {
    goToSlide(0); // Always go to the first slide (index 0) for "prev"
  }, [goToSlide]);

  const goToNextSlide = useCallback(() => {
    goToSlide(1); // Always go to the second slide (index 1) for "next"
  }, [goToSlide]);

  return (
    <section id="about-certificate" className="slider-section"> {/* Added a section wrapper for semantic and styling purposes */}
      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${activeSlide * SLIDE_WIDTH_PERCENT}%)` }}
        >
          <div className="slide">
            <About />
          </div>
          <div className="slide">
            <Certificates />
          </div>
        </div>

        <div className="slider-controls">
          <button
            className="slide-arrow prev"
            onClick={goToPrevSlide}
            disabled={activeSlide === 0}
            aria-label="Slide to Previous Section" // Accessibility: Aria label for screen readers
          >
            ←
          </button>
          <div className="slide-indicators">
            <span
              className={activeSlide === 0 ? 'active' : ''}
              aria-label={`Slide indicator for section 1 of 2. ${activeSlide === 0 ? 'Current section' : ''}`} // Accessibility
              role="radio" // Accessibility: Indicate radio button role
              aria-checked={activeSlide === 0} // Accessibility: Indicate checked state
            />
            <span
              className={activeSlide === 1 ? 'active' : ''}
              aria-label={`Slide indicator for section 2 of 2. ${activeSlide === 1 ? 'Current section' : ''}`} // Accessibility
              role="radio" // Accessibility: Indicate radio button role
              aria-checked={activeSlide === 1} // Accessibility: Indicate checked state
            />
          </div>
          <button
            className="slide-arrow next"
            onClick={goToNextSlide}
            disabled={activeSlide === 1}
            aria-label="Slide to Next Section" // Accessibility: Aria label for screen readers
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutCertificates;