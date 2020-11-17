import React, { useState } from 'react';
import './ProjectOverview.css';

import projectsData from '../../ProjectDetails/projectsData.json';

const ProjectOverview = ({ project, setSelectedProject, setSelectedImageData, setIsProjectDetailsVisible }) => (
  <div
    onClick={() => {
      setSelectedProject(project);
      setIsProjectDetailsVisible(true);
      setSelectedImageData(projectsData[project.id]);
      document.body.style.overflow = 'hidden';
    }}
    key={project.id}
    className="projectOverview"
    style={project.id % 2 ? { backgroundColor: '#424657' } : null}
  >
    <div className="imageContainer">
      <img
        className="projectImage"
        src={require(`../../../assets/images/${project.images[0].image}`)}
        alt="blackjack"
      />
    </div>

    <div className="projectTextContainer textRight">
      <h2 className="projectTitle">{project.name}</h2>
      <div className="underlineProjectTitle" />
      <p style={{ fontSize: '12px' }}>{project.type}</p>
      <p>{project.description}</p>
      <p style={{ margin: '2rem 0 .5rem 0' }}>Technologies used:</p>
      <p>{project.technologies}</p>
    </div>
  </div>
);

export default ProjectOverview;
