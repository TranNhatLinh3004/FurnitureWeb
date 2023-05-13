import React from "react";

import "./scrollup.css";

function ScrollUp(props) {
  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scrollup");

    if (window.scrollY > 260) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });
  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}

export default ScrollUp;
