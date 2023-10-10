import React from "react";
import "./Hero.css";
import heropic from "../../assets/images/heropic.png";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-left">
        <h1>
          THIS IS THE <br />
          HERO SECTION
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </p>

        <div className="serchButton">
          <input
            className="input-button"
            type="text"
            placeholder="What is your mind"
          ></input>
          <button>Search</button>
        </div>
      </div>

      <div className="hero-right">
        <img src={heropic} alt="" />
      </div>
    </div>
  );
};

export default Hero;
