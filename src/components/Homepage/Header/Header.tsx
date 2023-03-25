import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import "./Header.css";

const Header = () => {
  const [iconPositionX, setIconPositionX] = useState<number>();

  function handleOver(event: any) {
    let positionX = (window.innerWidth / 1.05 - event.clientX) / 1.1;
    if (positionX > 100 && positionX < 1870) {
      setIconPositionX(positionX);
    }
  }

  return (
    <div className="header" onMouseMove={(event) => handleOver(event)}>
      <div className="headerContent">
        <FontAwesomeIcon
          style={{
            position: "absolute",
            zIndex: 0,
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
              <FontAwesomeIcon icon={faLinkedin} className="fa-2x iconHeader" />
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
  );
};

export default Header;
