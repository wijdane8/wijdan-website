import React from "react";

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Service 1</h3>
            <p className="mt-4 text-gray-600">Description of Service 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Service 2</h3>
            <p className="mt-4 text-gray-600">Description of Service 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Service 3</h3>
            <p className="mt-4 text-gray-600">Description of Service 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;