import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
export default function Projects() {
  const ref = useRef(null);
  const refProjects = useRef(null);
  const [count, setCount] = useState(0);
  const [disabledNext, setDisabledNext] = useState(false);
  const handlePrev = (e) => {
    if (count === 0) {
      e.target.disabled = true;
    } else {
      setCount((count) => count + 370);
    }
  };
  const handleNext = (e) => {
    if (
      count ===
      -(ref.current.offsetWidth - refProjects.current.offsetWidth - 30)
    ) {
      e.target.disabled = true;
    } else {
      setCount((count) => count - 370);
    }
  };
  useEffect(() => {
    ref.current.style.transition = "transform 0.5s ease-in-out";
    ref.current.style.transform = `translateX(${count}px)`;
    if (
      count ===
      -(ref.current.offsetWidth - refProjects.current.offsetWidth - 30)
    ) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
  }, [count]);
  
  return (
    <div id="projects">
      <div className="content-projects">
        <div className="title-projects">PROJECTS</div>
        <div className="projects" ref={refProjects}>
          <div className="icons">
            <div
              className={count === 0 ? "prev disabled" : "prev"}
              onClick={handlePrev}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div
              className={disabledNext ? "next disabled" : "next"}
              onClick={handleNext}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className="items" ref={ref}>
            <div className="item">
              <div className="image-project">
                <img
                  src="https://ayans-portfolio.netlify.app/static/media/utracker.be1fe64a.jpg"
                  alt=""
                />
              </div>
              <div className="description-project">
                An application to track your all data from one place. I
                developed the website and the mobile app
              </div>
            </div>
            <div className="item">
              <div className="image-project">
                <img
                  src="https://ayans-portfolio.netlify.app/static/media/cavinimg.77adeaa3.jpg"
                  alt=""
                />
              </div>
              <div className="description-project">
                A tracking website that will show the performance of the
                website. Also you will get some useful advice to improve the
                performance.
              </div>
            </div>
            <div className="item">
              <div className="image-project">
                <img
                  src="https://i.pinimg.com/564x/64/9c/25/649c252edf976a8326e60c5dc19cde42.jpg?fbclid=IwAR2dl-kTbjjB6C9SOZ0m2W4VkL-V1OjDj6uGq7PHgmFm32aTPGXrGvy4TV4"
                  alt=""
                />
              </div>
              <div className="description-project">
                An application to track your all data from one place. I
                developed the website and the mobile app
              </div>
            </div>
            <div className="item">
              <div className="image-project">
                <img
                  src="https://ayans-portfolio.netlify.app/static/media/greenctg.e51b3bbd.jpg"
                  alt=""
                />
              </div>
              <div className="description-project">
                An application to track your all data from one place. I
                developed the website and the mobile app
              </div>
            </div>
            <div className="item">
              <div className="image-project">
                <img
                  src="https://i.pinimg.com/474x/3d/a2/ed/3da2eda16216514aab723133e972428c.jpg?fbclid=IwAR1fts5uDB7ENdTqfzFZQ6Coh4xx8l-0aQs9gZ_7VW2RvbTX5WGyFAAbwl4"
                  alt=""
                />
              </div>
              <div className="description-project">
                An application to track your all data from one place. I
                developed the website and the mobile app
              </div>
            </div>
            <div className="item">
              <div className="image-project">
                <img
                  src="https://i.pinimg.com/564x/b4/3c/0b/b43c0b0d65e7500b6f95222ae5021835.jpg?fbclid=IwAR0ui0GIKwrSDEECr0iA_spWn2HFPKCrYk-TfKtFH9lZByYZTsmu2riroEw"
                  alt=""
                />
              </div>
              <div className="description-project">
                An application to track your all data from one place. I
                developed the website and the mobile app
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
