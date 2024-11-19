import React, { useState } from "react";
import "../About/_About.scss";


const SectionsList = ({ sections }) => {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  return (
    <div className="sections-list">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`sections ${
            openSections.includes(index) ? "expanded" : ""
          }`}
        >
          <h2 onClick={() => toggleSection(index)}>
            {section.title}
            <span
              className={`arrow ${
                openSections.includes(index) ? "up" : "down"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="#fafafa"
                  d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                />
              </svg>
            </span>
          </h2>
          {openSections.includes(index) && (
            <div className="content">
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionsList;
