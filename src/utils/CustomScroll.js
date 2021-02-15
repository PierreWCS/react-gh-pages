export default {
  async scrollAnimate(containerRef, direction, distance, interval, nbIncrem) {
    let scrollStart = 0;

    return new Promise((resolve, reject) => {
      let animationInterval = setInterval(() => {
        if (scrollStart === distance) {
          clearInterval(animationInterval);
          resolve({ status: "over" });
        } else if (direction === "down") {
          containerRef.current.scrollTop += nbIncrem;
        } else if (direction === "up") {
          containerRef.current.scrollTop -= nbIncrem;
        }
        scrollStart++;
      }, interval);
    });
  },
};
