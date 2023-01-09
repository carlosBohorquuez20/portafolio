import React from "react";
import "../styles/aboutMe.css";
import person2 from "../img/person2.png";
import image from "../img/image.png";
import arrow3 from "../img/arrow3.png";
import lightbulb from "../img/lightbulb.png";
import shadow2 from "../img/shadow2.png";
import note from "../img/note-music.png";
const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h2>
          About <span className="text-color">Me</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          ratione tenetur, vel voluptates laboriosam enim soluta corporis earum
          quam at, consequatur culpa iusto repellat, cum praesentium magni nulla
          voluptate nostrum!
        </p>
        <div className="left-image">
        <img src={arrow3} alt="arrow" className="arrow3"/>
        <img src={lightbulb} alt="bulb" className="bulb"/>
        <img src={note} alt="note" className="note"/>
        </div>
      </div>
      <div className="about-right">
        <img src={image} alt="image" className="image-background" />
        <img src={person2} alt="person" className="person2-image" />
        <img src={shadow2} alt=""  className="shadow2"/>
      </div>
    </div>
  );
};

export default AboutMe;
