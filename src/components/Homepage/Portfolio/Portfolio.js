/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import ProjectDetails from '../../ProjectDetails/ProjectDetails';
import projectsData from '../../ProjectDetails/projectsData.json';
import ProjectOverview from './ProjectOverview';
import './Portfolio.css';

const Portfolio = () => {
  const [isProjectDetailsVisible, setIsProjectDetailsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(false);
  const [selectedImagesData, setSelectedImageData] = useState(null);

  return (
    <div className="projects">
      {/*  three technologies  */}
      <div className="projectsContent">
        <div className="projectsSquareContainer">
          <div className="projectsSquare orangeSquare">
            <div className="iconTextProjectSquare">
              <FontAwesomeIcon style={{ marginTop: '20px' }} icon={faReact} className="fa-2x" />
              <div className="projectSquareTextContainer">
                <p className="projectSquareTitle">React.</p>
                <p style={{ margin: 0, fontSize: '12px' }}>8 projects</p>
              </div>
            </div>
          </div>

          {/* Second square */}

          <div className="projectsSquare">
            <div className="iconTextProjectSquare">
              <FontAwesomeIcon style={{ marginTop: '20px' }} icon={faNodeJs} className="fa-2x" />
              <div className="projectSquareTextContainer">
                <p className="projectSquareTitle">Node.</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#ACADB2' }}>4 projects</p>
              </div>
            </div>
          </div>

          {/* Third square  */}

          <div className="projectsSquare">
            <div className="iconTextProjectSquare">
              <FontAwesomeIcon style={{ marginTop: '20px' }} icon={faMobileAlt} className="fa-2x" color="white" />
              <div className="projectSquareTextContainer">
                <p className="projectSquareTitle">React Native.</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#ACADB2' }}>3 projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Selected projects */}

        <div className="selectedProjects">
          <div className="firstColumnSelectedProjects">
            <div className="portfolioText">
              <p style={{ margin: '5px 0' }}>- Portfolio</p>
              <h2 style={{ width: '250px' }}>All creative works, selected projects.</h2>
              <p className="projectsLastMonthsText">
                Here are some of the projects I have been working these last months.
              </p>
            </div>
          </div>

          <div className="selectedProjectsContent">
            {projectsData.map((project) => (
              <ProjectOverview
                key={project.id}
                project={project}
                setSelectedImageData={setSelectedImageData}
                setSelectedProject={setSelectedProject}
                setIsProjectDetailsVisible={setIsProjectDetailsVisible}
              />
            ))}
          </div>
        </div>
      </div>
      {isProjectDetailsVisible && (
        <ProjectDetails
          setIsProjectDetailsVisible={setIsProjectDetailsVisible}
          imagesData={selectedImagesData}
          project={selectedProject}
        />
      )}
    </div>
  );
};

{
  /* <div className="firstColumnSelectedProjects">
              <div className="portfolioText">
                <p style={{ margin: '5px 0' }}>- Portfolio</p>
                <h2 style={{ width: '250px' }}>All creative works, selected projects.</h2>
                <p className="projectsLastMonthsText">
                  Here are some of the projects I have been working these last months.
                </p>
              </div>
              <div
                className="projectCard cardBeers"
                onClick={() => {
                  setSelectedImagesData(projectsData[0]);
                  setProjectDetails(true);
                  document.body.style.overflow = 'hidden';
                }}
              >
                <div className="projectCardText">
                  <h2 style={{ margin: 0 }}>Wild Beers.</h2>
                  <p style={{ fontSize: '12px' }}>Branding, API, development</p>
                </div>
                <img
                  className="projectCardImage"
                  src={require('../../../assets/images/wildbeers.PNG')}
                  alt="blackjack"
                />
                <p className="clickToSeeProject">Click for more details</p>
              </div>
            </div> */
}

{
  /* Second column portfolio  */
}

{
  /* <div className="secondColumnSelectedProjects">
              <div
                className="projectCard"
                onClick={() => {
                  setSelectedImagesData(projectsData[2]);
                  setProjectDetails(true);
                  document.body.style.overflow = 'hidden';
                }}
              >
                <div className="projectCardText">
                  <h2 style={{ margin: 0 }}>My Siege.</h2>
                  <p style={{ fontSize: '12px' }}>API, Development</p>
                </div>
                <img className="projectCardImage" src={require('../../../assets/images/mysiege.PNG')} alt="blackjack" />
                <p className="clickToSeeProject">Click for more details</p>
              </div>

              <div
                className="projectCard"
                onClick={() => {
                  setSelectedImagesData(projectsData[1]);
                  setProjectDetails(true);
                  document.body.style.overflow = 'hidden';
                }}
              >
                <div className="projectCardText">
                  <h2 style={{ margin: 0 }}>My Blackjack.</h2>
                  <p style={{ fontSize: '12px' }}>Game, development</p>
                </div>
                <img
                  className="projectCardImage"
                  src={require('../../../assets/images/my-blackjack.PNG')}
                  alt="blackjack"
                />
                <p className="clickToSeeProject">Click for more details</p>
              </div>
            </div> */
}

export default Portfolio;
