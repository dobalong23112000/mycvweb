import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import Typed from "typed.js";
export default function About() {
  const typed = useRef(null);
  const ref = useRef(null);
  const [appear, setAppear] = useState("right-content");
  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY >= 2000) {
        setAppear("right-content appearabout");
      } else {
        setAppear("right-content disappearabout");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  useEffect(() => {
    var options = {
      strings: [" Freelancer", " Front-end Developer", " Gamer"],
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
    <div id="about">
      <div className="content-about">
        <div className="left-content">
          <div className="borderimg"></div>
          <img
            src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/147437119_1508797735990878_4429973264374945298_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=HyHj2rJPMWcAX-9afLB&_nc_oc=AQmQ-og1yvWt8ocSeKF_SxcFGGgJ783qmXMVNqvWGUJPVjAsHXaSOwzji2EgZ_xQ8u_UC_-iRK0X0ANWE26ZW-62&_nc_ht=scontent-sin6-2.xx&oh=4f8b131bf8f59b784ec23f34bf26efdb&oe=61B98D83"
            alt=""
          />
        </div>
        <div className={appear}>
          <div className="title">ABOUT ME</div>
          <h2 style={{ marginBottom: "20px" }}>Hi, My name is Do Ba Long</h2>
          <div className="description">
            I am a <span ref={ref} style={{ color: "red" }}></span> from Ha Noi,
            Viet Nam. I create professional websites. I love art and always try
            to show unique views to the audience through my design.
          </div>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}
