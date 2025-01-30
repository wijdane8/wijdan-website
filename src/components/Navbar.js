import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Your Logo</div>
        <div className="flex space-x-4">
          <a href="#home" className="text-gray-800 hover:text-blue-500">Home</a>
          <a href="#about" className="text-gray-800 hover:text-blue-500">About</a>
          <a href="#services" className="text-gray-800 hover:text-blue-500">Services</a>
          <a href="#portfolio" className="text-gray-800 hover:text-blue-500">Portfolio</a>
          <a href="#testimonials" className="text-gray-800 hover:text-blue-500">Testimonials</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;