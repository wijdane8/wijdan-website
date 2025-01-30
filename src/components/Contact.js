import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Me</h2>
        <form className="mt-8 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded-lg" />
          <input type="text" placeholder="Subject" className="w-full p-3 mb-4 border rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded-lg" rows="5"></textarea>
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;