import React, { useState } from "react";
import "../About/_About.scss";
import Collapse from "../ToggleSection/ToggleSection.jsx";

const AboutPage = ({ sections }) => {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    setOpenSections((prevOpen) =>
      prevOpen.includes(index)
        ? prevOpen.filter((i) => i !== index)
        : [...prevOpen, index]
    );
  };

  return (
    <div className="about-page">
      <div className="sections-list">
        {sections.map((section, index) => (
          <Collapse
            key={index}
            className="sections"
            title={section.title}
            content={<p>{section.content}</p>}
            isOpen={openSections.includes(index)}
            onToggle={() => toggleSection(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
