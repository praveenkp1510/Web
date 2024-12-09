import React from "react";
import { CodeOutlined, TeamOutlined } from "@ant-design/icons";

const Experience = () => {
  const experiences = [
    {
      icon: <CodeOutlined className="text-blue-500 text-3xl" />,
      role: "React Front-End Developer",
      company: "Nubiznez",
      period: "Feb 2024 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications using ReactJS and Tailwind CSS.",
        "Collaborated with back-end teams to integrate APIs for dynamic content rendering.",
        "Optimized React components for improved performance and scalability.",
      ],
    },
    {
      icon: <TeamOutlined className="text-green-500 text-3xl" />,
      role: "UI/UX Design Intern",
      company: "Code-Soft",
      period: "Aug 2023 - Sep 2023",
      responsibilities: [
        "Worked with senior designers on wireframes and prototypes.",
        "Gained hands-on experience with Figma and modern UI/UX design tools.",
      ],
    },
  ];

  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:block bg-white p-8 rounded-lg shadow-lg w-full animate-fadeIn">
        <h2 className="text-4xl font-semibold mb-6">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex items-start p-6 border rounded-lg hover:shadow-xl transition-shadow"
            >
              <div className="mr-6">{exp.icon}</div>
              <div>
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <p className="text-lg text-gray-600 mb-4">
                  {exp.company} | {exp.period}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile View */}
      <section className="md:hidden bg-white p-6 rounded-lg shadow-md w-full animate-fadeIn">
        <h2 className="text-3xl font-semibold mb-4">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex items-start p-4 border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mr-4">{exp.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-gray-600 mb-1">
                  {exp.company} | {exp.period}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
