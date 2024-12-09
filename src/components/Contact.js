import React from "react";

const Contact = () => {
  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:block max-w-5xl mx-auto my-12 p-8 bg-white shadow-lg rounded-lg animate-fadeIn w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <div className="space-y-4">
          <p className="text-xl text-gray-600">Email: praveen1510kp@gmail.com</p>
          <p className="text-xl text-gray-600">Phone: +91 9688553316</p>
        </div>
        <button className="mt-6 px-8 py-3 bg-indigo-600 text-white text-xl rounded-lg animate-pulse hover:animate-bounce">
          Hire Me!
        </button>
      </section>

      {/* Mobile View */}
      <section className="md:hidden mx-4 my-8 p-6 bg-white shadow-md rounded-lg animate-fadeIn w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h2>
        <div className="space-y-3">
          <p className="text-lg text-gray-600">Email: praveen1510kp@gmail.com</p>
          <p className="text-lg text-gray-600">Phone: +91 9688553316</p>
        </div>
        <button className="mt-6 px-6 py-2 bg-indigo-600 text-white text-lg rounded-lg animate-pulse hover:animate-bounce">
          Hire Me!
        </button>
      </section>
    </>
  );
};

export default Contact;
