import React from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* Desktop View */}
      <header
        className="hidden md:block bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-500 text-white py-20 text-center rounded-b-lg shadow-xl cursor-pointer transition-all duration-[5000ms] ease-in-out"
        style={{
          backgroundSize: "200% 100%",
          backgroundPosition: "right center",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundPosition = "left center";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundPosition = "right center";
        }}
      >
        <h1 className="text-5xl font-extrabold mb-4 hover:text-shadow transition-all duration-[5000ms] ease-in-out">
          K P Praveen
        </h1>
        <p className="text-xl font-semibold mb-8 hover:text-shadow transition-all duration-[5000ms] ease-in-out">
          Front-End React Developer
        </p>
        <div className="flex justify-center space-x-8 mb-6">
          <div className="flex items-center text-lg hover:text-gray-300 transition-all duration-[5000ms] ease-in-out">
            <FaEnvelope className="text-2xl" />
            <p className="ml-2">praveen1510kp@gmail.com</p>
          </div>
          <div className="flex items-center text-lg hover:text-gray-300 transition-all duration-[5000ms] ease-in-out">
            <FaPhoneAlt className="text-2xl" />
            <p className="ml-2">9688553316</p>
          </div>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/praveenkp1510" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-gray-300 transition-all duration-[5000ms] ease-in-out" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl hover:text-gray-300 transition-all duration-[5000ms] ease-in-out" />
          </a>
        </div>
      </header>

      {/* Mobile View */}
      <header
        className="md:hidden bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-500 text-white py-12 text-center rounded-b-lg shadow-xl cursor-pointer transition-all duration-[5000ms] ease-in-out"
        style={{
          backgroundSize: "200% 100%",
          backgroundPosition: "right center",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundPosition = "left center";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundPosition = "right center";
        }}
      >
        <h1 className="text-4xl font-extrabold mb-4 hover:text-shadow transition-all duration-[5000ms] ease-in-out">
          K P Praveen
        </h1>
        <p className="text-lg font-semibold mb-6 hover:text-shadow transition-all duration-[5000ms] ease-in-out">
          Front-End React Developer
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          <div className="flex items-center text-lg hover:text-gray-300 transition-all duration-[5000ms] ease-in-out">
            <FaEnvelope className="text-2xl" />
            <p className="ml-2">praveen1510kp@gmail.com</p>
          </div>
          <div className="flex items-center text-lg hover:text-gray-300 transition-all duration-[5000ms] ease-in-out">
            <FaPhoneAlt className="text-2xl" />
            <p className="ml-2">9688553316</p>
          </div>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-gray-300 transition-all duration-[5000ms] ease-in-out" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl hover:text-gray-300 transition-all duration-[5000ms] ease-in-out" />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
