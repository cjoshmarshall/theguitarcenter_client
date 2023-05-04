import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import new_models from "../../assets/new-models.jpg";
import strings from "../../assets/strings.jpg";
import oo from "../../assets/00.jpg";
import { Link } from "react-router-dom";

function Slider() {
  const dots = [1, 2, 3];

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setInterval(
      () =>
        setIndex((prevIndex) =>
          prevIndex === dots.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );

    return () => {
      resetTimeout();
    };
  });

  const handleClick = (direction) => {
    resetTimeout();
    if (direction === "left") {
      setIndex(index > 0 ? index - 1 : 2);
    } else {
      setIndex(index < 2 ? index + 1 : 0);
    }
  };

  return (
    <div className="slider">
      <div className="slider_arrowLeft" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </div>
      <div className="slider_container">
        <div
          className="slider_subcontainer"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          <div className="slider_imageContainer">
            <img src={new_models} alt=" " className="slider_image1" />
          </div>
          <div className="slider_infoContainer">
            <div className="slider_infoContent">
              <h1 className="slider_infoTitle">NEW MODELS RELEASED</h1>
              <p className="slider_infoDescription">NEW OPTIONS. NO LIMITS</p>
              <Link to={"/guitars"} className="slider_infoButtonContainer">
                <button className="slider_infoButton">SHOP NOW</button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="slider_subcontainer"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          <div className="slider_imageContainer">
            <img src={strings} alt=" " className="slider_image1" />
          </div>
          <div className="slider_infoContainer">
            <div className="slider_infoContent">
              <h1 className="slider_infoTitle">
                D'Addario Acoustic Guitar Strings
              </h1>
              <p className="slider_infoDescription">COMING SOON</p>
            </div>
          </div>
        </div>

        <div
          className="slider_subcontainer"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          <div className="slider_imageContainer">
            <img src={oo} alt=" " className="slider_image1" />
          </div>
          <div className="slider_infoContainer">
            <div className="slider_infoContent">
              <h1 className="slider_infoTitle">THE NEW 00-28 MODERN DELUXE</h1>
              <p className="slider_infoDescription">FROM OUR FLAGSHIP SERIES</p>
              <Link
                to={"/guitars/6229061e25b86df054fe9605"}
                className="slider_infoButtonContainer"
              >
                <button className="slider_infoButton">SHOP NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="slider_slideshowDots">
        {dots.map((_, i) => (
          <div
            key={i}
            className={`slider_slideshowDot${
              index === i ? " slider_active" : ""
            }`}
            onClick={() => {
              resetTimeout();
              setIndex(i);
            }}
          ></div>
        ))}
      </div>
      <div className="slider_arrowRight" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </div>
    </div>
  );
}

export default Slider;
