import React, { useRef } from "react";
import "./Homepage.css";
import Footer from "../Footer/Footer";
import Portfolio from "./Portfolio/Portfolio";
import Header from "./Header/Header";
import About from "./About/About";

const Homepage = () => {
  const containerRef = useRef(null);

  const customScroll = (direction, distance, interval, nbIncrem) => {
    let scrollStart = 0;
    let myInterval = setInterval(scrollAnimate, interval);

    function scrollAnimate() {
      if (scrollStart === distance) {
        clearInterval(myInterval);
      } else {
        scrollStart++;
        if (direction === "down") {
          containerRef.current.scrollTop += nbIncrem;
        } else if (direction === "up") {
          containerRef.current.scrollTop -= nbIncrem;
        }
      }
    }
  };

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      customScroll("up", 5, 10, 10);
    } else if (e.key === "ArrowDown") {
      customScroll("down", 5, 10, 10);
    }
  });

  window.addEventListener("wheel", (e) => {
    if (e.wheelDeltaY > 0) {
      customScroll("up", 50, 10, 10);
    } else {
      customScroll("down", 5, 10, 10);
    }
  });

  return (
    <div className="homePageContainer" ref={containerRef}>
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Homepage;
