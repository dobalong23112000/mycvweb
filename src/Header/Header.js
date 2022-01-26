import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
export default function Header() {
  const ref = useRef(null);
  const [changeColor, setChangeColor] = useState("");
  const [openItems, setOpenItems] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setChangeColor("headerscroll");
      } else if (window.scrollY === 0) {
        setChangeColor("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = (e) => {
    setOpenItems(!openItems);
  };
  useEffect(() => {
    for (let i = 0; i < ref.current.children.length; i++) {
      ref.current.children[i].addEventListener("click", () => {
        setOpenItems(!openItems);
      });
    }
  }, [openItems]);

  return (
    <div
      id="header"
      className={
        openItems ? changeColor + " activeheaderreponsive" : changeColor
      }
    >
      <div className="reponsive-header">
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div
        className={
          openItems ? "activeitemsreponsive" + " items-header" : "items-header"
        }
        ref={ref}
      >
        <div className="item">
          <a href="/#">HOME</a>
        </div>
        <div className="item">
          <a href="/#services">SERVICES</a>
        </div>
        <div className="item">
          <a href="/#projects">PROJECT</a>
        </div>
        <div className="item">
          <a href="/#about">ABOUT</a>
        </div>
        <div className="item">
          <a href="/#contact">CONTACT</a>
        </div>
      </div>
    </div>
  );
}
