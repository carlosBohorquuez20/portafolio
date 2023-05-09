import React, { useEffect } from "react";
import person1 from "../img/person1.png";
import arrow1 from "../img/arrow1.png";
import technologies from "../img/tecnologias.png";
import shadow1 from "../img/shadow2.png";
import "../styles/home.css";
import cv from "../cv/CV_Carlos_Bohorquez_Parra.pdf";

const Home = () => {
  useEffect(() => {
    window.sr = ScrollReveal();
    sr.reveal(".home-container", {
      duration: 3000,
      origin: "left",
      distance: "-100px",
    });
  }, []);

  return (
    <div className="home-container" id="home">
      <div className="left-home">
        <div className="text-arrow">
          <img src={arrow1} alt="arrow" />
          <h1>
            Carlos Bohorquez{" "}
            <span className="other-color">Desarrollador Front-End</span>
          </h1>
        </div>
        <div className="buttons-home">
          <a
            href="https://www.linkedin.com/in/carlos-bohorquez-parra-711b5224b/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/carlosBohorquuez20" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={cv}
            target="_blank"
            dowload="CV Carlos Bohorquez"
            className="btn-dowload"
          >
            Descargar CV <i className="fa-solid fa-download"></i>
          </a>
        </div>
        <a className="arrow2" href="#about">
          <i className="fa-solid fa-arrow-down"></i>
        </a>
      </div>
      <div className="right-home">
        <img
          src={technologies}
          alt="technologies"
          className="technologies-img"
        />
        <img src={person1} alt="person" className="person1-img" />
        <img src={shadow1} alt="" className="shadow1" />
      </div>
    </div>
  );
};

export default Home;
