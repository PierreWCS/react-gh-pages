/* eslint-disable no-lone-blocks */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

import projectsData from "./projectsData.json";
import ProjectOverview from "./ProjectOverview";
import "./Portfolio.css";

const Portfolio = () => (
  <div className="projects">
    {/*  three technologies  */}
    <div className="projectsContent">
      <div className="projectsSquareContainer">
        <div className="projectsSquare orangeSquare">
          <div className="iconTextProjectSquare">
            <FontAwesomeIcon
              style={{ marginTop: "20px" }}
              icon={faReact}
              className="fa-2x"
            />
            <div className="projectSquareTextContainer">
              <p className="projectSquareTitle">React.</p>
              <p style={{ margin: 0, fontSize: "12px" }}>16 projects</p>
            </div>
          </div>
        </div>

        {/* Second square */}

        <div className="projectsSquare">
          <div className="iconTextProjectSquare">
            <FontAwesomeIcon
              style={{ marginTop: "20px" }}
              icon={faNodeJs}
              className="fa-2x"
            />
            <div className="projectSquareTextContainer">
              <p className="projectSquareTitle">Node.</p>
              <p style={{ margin: 0, fontSize: "12px", color: "#ACADB2" }}>
                11 projects
              </p>
            </div>
          </div>
        </div>

        {/* Third square  */}

        <div className="projectsSquare">
          <div className="iconTextProjectSquare">
            <FontAwesomeIcon
              style={{ marginTop: "20px" }}
              icon={faMobileAlt}
              className="fa-2x"
              color="white"
            />
            <div className="projectSquareTextContainer">
              <p className="projectSquareTitle">React Native.</p>
              <p style={{ margin: 0, fontSize: "12px", color: "#ACADB2" }}>
                5 projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Selected projects */}

      <div className="selectedProjects">
        <div className="firstColumnSelectedProjects">
          <div className="portfolioText">
            <p style={{ margin: "5px 0", color: "#acadb2" }}>- Portfolio</p>
            <h2 style={{ width: "250px" }}>
              All creative works, selected projects.
            </h2>
            <p style={{ color: "#acadb2" }} className="projectsLastMonthsText">
              Here are some of the projects I have been working these last
              months.
            </p>
          </div>
        </div>

        <div className="selectedProjectsContent">
          {projectsData.map((project) => (
            <ProjectOverview key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;
