import React from "react";
import image3 from "./assets/image 3.png";
import image4 from "./assets/image 4.png";
import image5 from "./assets/image 5.png";
import image6 from "./assets/image 6.png";

const HeroPage = () => {
  return (
    <div>
      <div className="hero container">
        <div className="hero-text">
          <h1>
            Rent a <strong>place</strong> away from <strong>home</strong> in the{" "}
            <strong>metaverse</strong>
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form className="hero-form">
            <input type="text" placeholder="Search for location" />
            <button className="hero-btn" onClick={(e) => e.preventDefault()}>
              search
            </button>
          </form>
        </div>
        <div className="hero-images">
          <div className="hero-images-left">
            <div className="img">
              <img src={image4} alt="places" />
            </div>
            <div className="img">
              <img src={image6} alt="places" />
            </div>
          </div>
          <div className="hero-images-right">
            <div className="img">
              <img src={image3} alt="places" />
            </div>
            <div className="img">
              <img src={image5} alt="places" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
