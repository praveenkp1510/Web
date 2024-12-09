import React from "react";
import { BookOutlined } from "@ant-design/icons";

const Education = () => {
  const educationDetails = [
    {
      icon: <BookOutlined className="text-blue-500 text-3xl" />,
      degree: "B.E - Velalar College of Engineering and Technology",
      period: "Aug 2019 - Apr 2023",
      score: "CGPA: 8.3",
    },
  ];

  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:block bg-white p-8 rounded-lg shadow-lg animate-fadeIn w-full">
        <h2 className="text-4xl font-semibold mb-6">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationDetails.map((edu, idx) => (
            <div
              key={idx}
              className="flex items-center p-6 border rounded-lg hover:shadow-xl transition-shadow"
            >
              <div className="mr-6">{edu.icon}</div>
              <div>
                <h3 className="text-2xl font-bold">{edu.degree}</h3>
                <p className="text-gray-600 mb-2">{edu.period}</p>
                <p className="text-gray-700">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile View */}
      <section className="md:hidden bg-white p-6 rounded-lg shadow-md animate-fadeIn w-full">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <div className="space-y-6">
          {educationDetails.map((edu, idx) => (
            <div
              key={idx}
              className="flex items-center p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mr-4">{edu.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-gray-600 mb-1">{edu.period}</p>
                <p className="text-gray-700">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
