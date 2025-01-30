import React from "react";

const Hero = () => {
  return (
    <section id="home" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Your Name</h1>
        <p className="mt-4 text-gray-600">Professional Tagline</p>
        <div className="mt-8">
          <a href="#portfolio" className="bg-blue-500 text-white px-6 py-3 rounded-lg mr-4">View Portfolio</a>
          <a href="#contact" className="bg-orange-500 text-white px-6 py-3 rounded-lg">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;