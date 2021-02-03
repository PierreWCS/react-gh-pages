import React from 'react';
import './Homepage.css';
import Footer from '../Footer/Footer';
import Portfolio from './Portfolio/Portfolio';
import Header from './Header/Header';
import About from './About/About';

const Homepage = () => (
  <div className="homePageContainer">
    <Header />
    <About />
    <Portfolio />
    <Footer />
  </div>
);

export default Homepage;
