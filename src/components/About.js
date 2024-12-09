import React from "react";
import { UserOutlined } from "@ant-design/icons";

const About = () => {
  const aboutDetails = [
    "Passionate front-end developer skilled in JavaScript, ReactJS, and UI/UX design.",
    "Specializes in building responsive and user-friendly websites.",
    "Aims to create intuitive digital experiences blending technology with creativity.",
  ];

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
      <h2 className="text-4xl font-semibold mb-6 hover-text-shadow">
        About Me
      </h2>

      {/* Desktop View */}
      <div className="hidden md:flex items-center p-6 border rounded-lg hover:shadow-xl transition-shadow">
        <UserOutlined className="text-blue-500 text-4xl mr-6" />
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
          {aboutDetails.map((detail, idx) => (
            <li key={idx} className="hover-text-shadow">
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile View */}
      <div className="md:hidden block p-4 border rounded-lg hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <UserOutlined className="text-blue-500 text-3xl mr-4" />
          <h3 className="text-2xl font-semibold">About Me</h3>
        </div>
        <ul className="list-disc list-inside text-md text-gray-700 space-y-3">
          {aboutDetails.map((detail, idx) => (
            <li key={idx} className="hover-text-shadow">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
