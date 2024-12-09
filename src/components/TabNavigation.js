import React, { useState, useRef } from "react";
import {
  UserOutlined,
  SolutionOutlined,
  BookOutlined,
  TrophyOutlined,
  AppstoreAddOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Education from "./Education";
import Interests from "./Interest";
import Praveen from "../Asset/Praveen.JPG";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("about");

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const certificatesRef = useRef(null);
  const educationRef = useRef(null);
  const interestsRef = useRef(null);

  const tabs = [
    { name: "About", id: "about", icon: <UserOutlined />, ref: aboutRef },
    {
      name: "Experience",
      id: "experience",
      icon: <SolutionOutlined />,
      ref: experienceRef,
    },
    { name: "Skills", id: "skills", icon: <BookOutlined />, ref: skillsRef },
    {
      name: "Certificates",
      id: "certificates",
      icon: <TrophyOutlined />,
      ref: certificatesRef,
    },
    {
      name: "Education",
      id: "education",
      icon: <BulbOutlined />,
      ref: educationRef,
    },
    {
      name: "Interests",
      id: "interests",
      icon: <AppstoreAddOutlined />,
      ref: interestsRef,
    },
  ];

  const handleTabClick = (tabId, sectionRef) => {
    setActiveTab(tabId);
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full min-h-[100vh] px-4 py-8 font-sans">
      {/* Avatar Section */}
      <div className="flex justify-center mb-8">
        <Avatar
          size={150}
          src={Praveen}
          className="border-4 border-gray-300 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Tabs for Desktop */}
      <div className="hidden md:flex flex-wrap justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`text-xl font-semibold flex items-center space-x-2 px-4 py-2 rounded-md ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => handleTabClick(tab.id, tab.ref)}
          >
            {tab.icon}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Tabs for Mobile */}
      <div className="md:hidden grid grid-cols-3 gap-3 mb-8 w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex flex-col items-center justify-center p-4 rounded-lg ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => handleTabClick(tab.id, tab.ref)}
          >
            <div className="text-2xl mb-1">{tab.icon}</div>
            <span className="text-sm">{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <Card bordered={false} className="p-6 rounded-lg shadow-lg w-full">
        <section ref={aboutRef} id="about">
          {activeTab === "about" && <About />}
        </section>
        <section ref={experienceRef} id="experience">
          {activeTab === "experience" && <Experience />}
        </section>
        <section ref={skillsRef} id="skills">
          {activeTab === "skills" && <Skills />}
        </section>
        <section ref={certificatesRef} id="certificates">
          {activeTab === "certificates" && <Certificates />}
        </section>
        <section ref={educationRef} id="education">
          {activeTab === "education" && <Education />}
        </section>
        <section ref={interestsRef} id="interests">
          {activeTab === "interests" && <Interests />}
        </section>
      </Card>
    </div>
  );
};

export default TabNavigation;
