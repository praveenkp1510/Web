import React from "react";
import { HeartOutlined } from "@ant-design/icons";

const Interests = () => {
  const interests = [
    {
      icon: <HeartOutlined className="text-red-500 text-3xl" />,
      title: "Web Design",
      description: "Crafting visually appealing and user-friendly websites.",
    },
    {
      icon: <HeartOutlined className="text-green-500 text-3xl" />,
      title: "Front-End Development",
      description: "Building responsive and interactive user interfaces.",
    },
    {
      icon: <HeartOutlined className="text-blue-500 text-3xl" />,
      title: "UI/UX",
      description: "Designing intuitive and engaging digital experiences.",
    },
  ];

  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:block bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
        <h2 className="text-4xl font-semibold mb-6">Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((interest, idx) => (
            <div
              key={idx}
              className="flex items-center p-6 border rounded-lg hover:shadow-xl transition-shadow"
            >
              <div className="mr-6">{interest.icon}</div>
              <div>
                <h3 className="text-2xl font-bold">{interest.title}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile View */}
      <section className="md:hidden bg-white p-6 rounded-lg shadow-lg animate-fadeIn">
        <h2 className="text-3xl font-semibold mb-4">Interests</h2>
        <div className="flex flex-col gap-6">
          {interests.map((interest, idx) => (
            <div
              key={idx}
              className="flex items-start p-4 border rounded-lg hover:shadow-xl transition-shadow"
            >
              <div className="mr-4">{interest.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{interest.title}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Interests;
