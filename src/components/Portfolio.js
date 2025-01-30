import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Portfolio</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/300" alt="Project 1" className="rounded-lg" />
            <h3 className="mt-4 text-xl font-bold text-gray-800">Project 1</h3>
            <p className="mt-2 text-gray-600">Description of Project 1.</p>
            <a href="#" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">View Project</a>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;