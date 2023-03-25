import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./About.css";
import { useEffect } from "react";

const About = () => {
  const debutDate = new Date(2020, 7, 3);
  const todayDate = new Date();
  // @ts-ignore
  const diffTime = Math.abs(todayDate - debutDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const yearsOfExperience = Math.round(diffDays / 365);

  const [nbOfRepos, setNbOfRepos] = useState<number>();

  useEffect(() => {
    getNbOfRepos();
  });

  const getNbOfRepos = async () => {
    const rawResponse = await fetch(
      "https://api.github.com/users/PierreWCS/repos",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const content = await rawResponse.json();
    setNbOfRepos(content.length);
  };
  return (
    <div className="aboutContainer">
      <div className="aboutContent">
        <div className="columnAboutContainer">
          <div className="firstColumnAbout">
            <p className="introHeader">- Contact</p>
            <h2 style={{ color: "#EBEBEC", width: "60%" }}>
              Any type of JavaScript & contact.
            </h2>
            <p style={{ color: "#ACADB2", width: "60%" }}>Send me an email.</p>
            <p style={{ color: "#FFAF29", textDecoration: "underline" }}>
              pierrelegrain45@gmail.com
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ paddingLeft: "1rem" }}
              />
            </p>
          </div>
          <div className="secColumnAbout">
            <h3 style={{ color: "#EBEBEC" }}>
              <i>
                You can't use up creativity, the more you use, more you have in
                your significant mind.
              </i>
            </h3>
            <p style={{ color: "#ACADB2" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias
              aut, dolor dolorum eligendi est et expedita fugiat laborum magni
              nisi non optio pariatur recusandae.
            </p>
            <div className="expProjectsContainer">
              <div className="numberExpContainer">
                <p className="numberExpProject">{yearsOfExperience}</p>
                <p className="textExpProject">years of experiences</p>
              </div>
              <div className="numberExpContainer">
                <p className="numberExpProject">{nbOfRepos}</p>
                <p className="textExpProject">projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
