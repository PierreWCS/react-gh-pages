import React, { useRef } from "react";
import "./Homepage.css";
import Footer from "../Footer/Footer";
import Portfolio from "./Portfolio/Portfolio";
import Header from "./Header/Header";
import About from "./About/About";
import CustomScroll from "../../utils/CustomScroll";

const Homepage = () => {
  const containerRef = useRef(null);
  let isScrolling = false;

  const handleScroll = async (direction, distance, interval, nbIncrem) => {
    if (isScrolling === false) {
      isScrolling = true;

      const scrollRes = CustomScroll.scrollAnimate(
        containerRef,
        direction,
        distance,
        interval,
        nbIncrem
      );
      scrollRes.then((value) => {
        if (value.status === "over") {
          setTimeout(() => (isScrolling = false), 250);
        }
      });
    }
  };

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      handleScroll("up", 25, 10, 10);
    } else if (event.key === "ArrowDown") {
      handleScroll("down", 25, 10, 10);
    }
  });

  window.addEventListener("wheel", (event) => {
    // If the wheelDelta is negative, that means user goes down
    if (event.wheelDeltaY > 0) {
      handleScroll("up", 25, 10, 10);
    } else if (event.wheelDeltaY < 0) {
      handleScroll("down", 25, 10, 10);
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
