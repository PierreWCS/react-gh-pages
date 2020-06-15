import React, { useState } from "react";
import "./Homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import projectsData from "../ProjectDetails/projectsData.json";

const Homepage = () => {
  const [iconPositionX, setIconPositionX] = useState(null);
  const [projectDetails, setProjectDetails] = useState(false);
  const [selectedImagesData, setSelectedImagesData] = useState(false);

  function handleOver(event) {
    let positionX = (window.innerWidth / 1.05 - event.clientX) / 1.1;
    if (positionX > 100 && positionX < 1870) {
      setIconPositionX(positionX);
    }
  }

  return (
    <div className="homePageContainer">
      {/*   Header    */}
      <div className="header" onMouseMove={(event) => handleOver(event)}>
        <div className="headerContent">
          <FontAwesomeIcon
            style={{
              position: "absolute",
              zIndex: "0",
              left: iconPositionX || "10%",
              top: "15%",
              transition: "transform ease 200ms",
            }}
            color="orange"
            icon={faReact}
            id="techIcons"
            className="fa-4x reactIconHeader"
          />
          <div style={{ zIndex: 1 }} className="columnOneHeader">
            <p className="nameTitle">Pierre</p>
            <p className="nameTitle">Legrain.</p>
            <hr className="separatorHeader" />
            <div className="iconContainer">
              <a
                style={{ color: "inherit" }}
                href="https://github.com/PierreWCS"
                target="_blank"
                rel="noopener noreferrer"
                className="linkIconHeader"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="fa-2x iconHeader"
                  style={{ marginRight: "25px" }}
                />
              </a>
              <a
                style={{ color: "inherit" }}
                href="https://www.linkedin.com/in/pierre-legrain/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkIconHeader"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="fa-2x iconHeader"
                />
              </a>
            </div>
          </div>
          <div style={{ zIndex: 1 }} className="columnTwoHeader">
            <p className="introHeader">- Introduction</p>
            <h2 className="subtitleHeader">
              Front-End developer based in France.
            </h2>
            <p className="subtitleHeaderText">
              React.JS and Node.JS specialized.
            </p>
          </div>
        </div>
      </div>

      {/*   About   */}

      <div className="aboutContainer">
        <div className="aboutContent">
          <div className="columnAboutContainer">
            <div className="firstColumnAbout">
              <p className="introHeader">- Contact</p>
              <h2 style={{ color: "#EBEBEC", width: "60%" }}>
                Any type of JavaScript & contact.
              </h2>
              <p style={{ color: "#ACADB2", width: "60%" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <p style={{ color: "#FFAF29", textDecoration: "underline" }}>
                pierrelegrain45@gmail.com
              </p>
            </div>
            <div className="secColumnAbout">
              <h3 style={{ color: "#EBEBEC" }}>
                You can't use up creativity, the more you use, more you have in
                your significant mind.
              </h3>
              <p style={{ color: "#ACADB2" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                alias aut, dolor dolorum eligendi est et expedita fugiat laborum
                magni nisi non optio pariatur recusandae.
              </p>
              <div className="expProjectsContainer">
                <p className="numberExpProject">1</p>
                <p className="textExpProject">year of experiences</p>
                <p className="numberExpProject">14</p>
                <p className="textExpProject">projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*     Projects      */}

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
                  <p style={{ margin: 0, fontSize: "12px" }}>6 projects</p>
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
                    3 projects
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
                    2 projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Selected projects */}

          <div className="selectedProjects">
            {projectDetails ? (
              <ProjectDetails
                setProjectDetails={setProjectDetails}
                imagesData={selectedImagesData}
              />
            ) : null}
            <div className="selectedProjectsContent">
              {/* First column portfolio  */}

              <div className="firstColumnSelectedProjects">
                <div className="portfolioText">
                  <p style={{ margin: "5px 0" }}>- Portfolio</p>
                  <h2 style={{ width: "250px" }}>
                    All creative works, selected projects.
                  </h2>
                  <p className="projectsLastMonthsText">
                    Here are some of the projects I have been working last
                    months.
                  </p>
                </div>
                <div
                  className="projectCard cardBeers"
                  onClick={() => {
                    setSelectedImagesData(projectsData[0]);
                    setProjectDetails(true);
                  }}
                >
                  <div className="projectCardText">
                    <h2 style={{ margin: 0 }}>Wild Beers.</h2>
                    <p style={{ fontSize: "12px" }}>Branding, development</p>
                  </div>
                  <img
                    className="projectCardImage"
                    src={require("../../assets/images/wildbeers.PNG")}
                    alt="blackjack"
                  />
                  <p className="clickToSeeProject">Click for more details</p>
                </div>
              </div>

              {/* Second column portfolio  */}

              <div className="secondColumnSelectedProjects">
                <div className="projectCard">
                  <div className="projectCardText">
                    <h2 style={{ margin: 0 }}>My Siege.</h2>
                    <p style={{ fontSize: "12px" }}>Api, Development</p>
                  </div>
                  <img
                    className="projectCardImage"
                    src={require("../../assets/images/mysiege.PNG")}
                    alt="blackjack"
                  />
                  <p className="clickToSeeProject">Click for more details</p>
                </div>

                <div
                  className="projectCard"
                  onClick={() => {
                    setSelectedImagesData(projectsData[1]);
                    setProjectDetails(true);
                  }}
                >
                  <div className="projectCardText">
                    <h2 style={{ margin: 0 }}>My Blackjack.</h2>
                    <p style={{ fontSize: "12px" }}>Game, development</p>
                  </div>
                  <img
                    className="projectCardImage"
                    src={require("../../assets/images/my-blackjack - Copie.PNG")}
                    alt="blackjack"
                  />
                  <p className="clickToSeeProject">Click for more details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}

      <footer>
        <div className="footerContent">
          <div className="firstColumnFooter">
            <p>Looking for a front-end developer?</p>
            <p>Let's talk about it.</p>
            <p style={{ color: "#FFAF29", textDecoration: "underline" }}>
              pierrelegrain45@gmail.com
            </p>
          </div>
          <div className="secondColumnFooter">
            <h3 style={{ margin: "10px" }}>Find me.</h3>
            <hr className="footerSeparator" />
            <div className="footerIconsContainer">
              <a
                href="https://github.com/PierreWCS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  color="#EBEBEC"
                  icon={faGithub}
                  className="fa-2x iconFooter"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/pierre-legrain/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  color="#EBEBEC"
                  icon={faLinkedin}
                  className="fa-2x iconFooter"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
