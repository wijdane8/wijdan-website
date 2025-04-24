import React, { useState } from 'react';
import './Accordion.css';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Accordion = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(null);
  

  const toggleAccordion = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <div className="accordion-container">
      {Object.entries(projects).map(([projectId, project]) => (
        <div key={projectId}>
          <div
            className={`summary ${activeProject === projectId ? 'active' : 'inactive'}`}
            onClick={() => toggleAccordion(projectId)}
          >
            {project.summary}
            <span className="toggle-icon">
              {activeProject === projectId ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </span>
          </div>
          <div className={`folding-pannel ${activeProject === projectId ? 'active' : 'inactive'}`}>
            {project.image && (
              <img src={project.image} alt={`${project.summary} Interface`} className="project-interface-image" />
            )}
            <p>{project.answer}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-button">
                زيارة المشروع
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;