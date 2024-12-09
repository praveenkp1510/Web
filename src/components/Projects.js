import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Recipe Sharing App",
      description: "A platform to share and discover recipes.",
    },
    {
      name: "Portfolio Website",
      description: "This resume website showcasing my skills and experience.",
    },
  ];

  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:block">
        <h2 className="text-4xl font-semibold mb-6">Projects</h2>
        <ul className="space-y-6">
          {projects.map((project, idx) => (
            <li
              key={idx}
              className="text-lg text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="font-bold text-xl">{project.name}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Mobile View */}
      <section className="md:hidden">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          {projects.map((project, idx) => (
            <li
              key={idx}
              className="text-base text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <p className="text-sm">{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Projects;
