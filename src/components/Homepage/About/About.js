import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './About.css';

const About = () => (
  <div className="aboutContainer">
    <div className="aboutContent">
      <div className="columnAboutContainer">
        <div className="firstColumnAbout">
          <p className="introHeader">- Contact</p>
          <h2 style={{ color: '#EBEBEC', width: '60%' }}>Any type of JavaScript & contact.</h2>
          <p style={{ color: '#ACADB2', width: '60%' }}>Send me an email.</p>
          <p style={{ color: '#FFAF29', textDecoration: 'underline' }}>
            pierrelegrain45@gmail.com
            <FontAwesomeIcon icon={faEnvelope} style={{ paddingLeft: '1rem' }} />
          </p>
        </div>
        <div className="secColumnAbout">
          <h3 style={{ color: '#EBEBEC' }}>
            You can't use up creativity, the more you use, more you have in your significant mind.
          </h3>
          <p style={{ color: '#ACADB2' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aut, dolor dolorum eligendi est et
            expedita fugiat laborum magni nisi non optio pariatur recusandae.
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
);

export default About;
