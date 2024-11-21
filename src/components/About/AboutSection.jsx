import React, { useState } from "react";
import "../About/_About.scss";
import Collapse from "../ToggleSection/ToggleSection.jsx";

// reçoit une prop "sections", un tableau contenant les données des sections
const AboutPage = ({ sections }) => {
  // Déclare un état local "openSections", initialisé à un tableau vide. 
  // Cet état garde en mémoire les indices des sections actuellement ouvertes.
  const [openSections, setOpenSections] = useState([]);

  // Fonction pour ouvrir ou fermer une section selon son index.
  const toggleSection = (index) => {
    // Met à jour l'état "openSections" en vérifiant si l'index est déjà dans le tableau.
    setOpenSections((prevOpen) =>
      // Si l'index est déjà présent, le retirer (fermer la section).
      prevOpen.includes(index)
        ? prevOpen.filter((i) => i !== index)
        // Sinon, l'ajouter au tableau (ouvrir la section).
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
