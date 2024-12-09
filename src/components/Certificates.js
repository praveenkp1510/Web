import React from "react";
import { TrophyOutlined, FileDoneOutlined } from "@ant-design/icons";

const Certificates = () => {
  const certificates = [
    {
      icon: <TrophyOutlined className="text-blue-500 text-4xl" />,
      title: "UI/UX by Figma Tools",
      platform: "Udemy",
    },
    {
      icon: <FileDoneOutlined className="text-green-500 text-4xl" />,
      title: "UI/UX Design Internship Certification",
      platform: "Code-Soft",
    },
  ];

  return (
    <>
      {/* Desktop View */}
      <section className="hidden md:block bg-white p-8 rounded-lg shadow-lg w-full animate-fadeIn">
        <h2 className="text-4xl font-semibold mb-6">Certificates</h2>
        <div className="grid grid-cols-2 gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-center p-6 border rounded-lg hover:shadow-xl transition-shadow"
            >
              <div className="mr-6">{cert.icon}</div>
              <div>
                <h3 className="text-2xl font-bold">{cert.title}</h3>
                <p className="text-gray-600 text-base">{cert.platform}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile View */}
      <section className="md:hidden bg-white p-6 rounded-lg shadow-md w-full animate-fadeIn">
        <h2 className="text-3xl font-semibold mb-4">Certificates</h2>
        <div className="space-y-4">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-center p-4 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mr-4">{cert.icon}</div>
              <div>
                <h3 className="text-lg font-bold">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.platform}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Certificates;
