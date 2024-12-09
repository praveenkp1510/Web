import React from "react";
import { Progress } from "antd";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "ReactJS", level: 85 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Figma", level: 70 },
  ];

  return (
    <section className=" animate-fadeIn">
      <h2 className="text-4xl font-semibold mb-6">Skills</h2>
      <ul className="space-y-4">
        {skills.map((skill, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            <Progress percent={skill.level} status="active" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
