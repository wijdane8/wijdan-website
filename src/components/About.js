import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">About Me</h2>
        <div className="mt-8 flex flex-col md:flex-row items-center">
          <img src="https://via.placeholder.com/300" alt="Your Name" className="rounded-full w-48 h-48" />
          <div className="md:ml-8 mt-6 md:mt-0">
            <p className="text-gray-600">Short bio about yourself.</p>
            <ul className="mt-4">
              <li className="text-gray-600">Skill 1</li>
              <li className="text-gray-600">Skill 2</li>
              <li className="text-gray-600">Skill 3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;