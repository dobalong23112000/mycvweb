import React, { useEffect, useRef } from "react";
import "./Banner.css";
import Typed from "typed.js";
export default function Banner() {
  const typed = useRef(null);
  const ref = useRef(null);
  useEffect(() => {
    var options = {
      strings: ["Freelancer", "Front-end Developer", "Gamer"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    typed.current = new Typed(ref.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div id="banner">
      <div className="content-banner">
        <div style={{ fontSize: "xx-large" }}>Hello,</div>
        <div className="item">My name is</div>
        <div className="item" style={{ fontWeight: "800", color: "red" }}>
          Do Ba Long
        </div>
        <div className="item">
          I'm <span ref={ref} style={{ color: "red" }}></span>
        </div>
        <button>PORTFOLIO</button>
      </div>
    </div>
  );
}
