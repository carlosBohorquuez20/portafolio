import React, { useEffect } from "react";
import "../styles/aboutMe.css";
import person2 from "../img/person2.png";
import image from "../img/image.png";
import arrow3 from "../img/arrow3.png";
import lightbulb from "../img/lightbulb.png";
import shadow2 from "../img/shadow2.png";
import note from "../img/note-music.png";
const AboutMe = () => {
  useEffect(() => {
    window.sr = ScrollReveal();
    sr.reveal(".about-container", {
      duration: 3000,
      origin: "top",
      distance: "-100px",
    });
  }, []);

  return (
    <div className="about-container" id="about">
      <div className="about-left">
        <h2>
         Sobre <span className="text-color">mi</span>
        </h2>
        <p>
        Soy un desarrollador web front-end, me encargo de diseñar y desarrollar la interfaz de usuario de un sitio web o aplicación web. Utilizo lenguajes como HTML, CSS y JavaScript, así como el framework de React JS para crear elementos visuales interactivos y diseños atractivos.
        </p>
        <div className="left-image ">
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
