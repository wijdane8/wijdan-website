import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Testimonials</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600">"Testimonial 1"</p>
            <p className="mt-4 font-bold text-gray-800">- Client Name</p>
          </div>
          {/* Repeat for other testimonials */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;