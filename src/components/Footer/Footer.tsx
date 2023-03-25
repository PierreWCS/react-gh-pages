import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => (
  <div className="footer">
    <div className="footerContent">
      <div className="firstColumnFooter">
        <p>You have a project?</p>
        <p>Let's talk about it.</p>
        <p style={{ color: "#FFAF29", textDecoration: "underline" }}>
          pierrelegrain45@gmail.com
          <FontAwesomeIcon icon={faEnvelope} style={{ paddingLeft: "1rem" }} />
        </p>
      </div>
      <div className="secondColumnFooter">
        <h3 style={{ margin: "10px" }}>Find me.</h3>
        <hr className="footerSeparator" />
        <div className="footerIconsContainer">
          <a
            href="https://github.com/PierreWCS"
            target="_blank"
            className="linkIconHeader"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              color="#EBEBEC"
              icon={faGithub}
              className="fa-2x iconHeader"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/pierre-legrain/"
            className="linkIconHeader"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              color="#EBEBEC"
              icon={faLinkedin}
              className="fa-2x iconHeader"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
