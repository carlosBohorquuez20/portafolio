import React from "react";
import person1 from "../img/person1.png";
import arrow1 from "../img/arrow1.png";
import technologies from "../img/tecnologias.png";
import shadow1 from "../img/shadow2.png";
import "../styles/home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="left-home">
        <div className="text-arrow">
          <img src={arrow1} alt="arrow" />
          <h1>
            Desarrollador <span className="other-color">Front-End</span>
          </h1>
        </div>
        <div className="buttons-home">
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            {" "}
            <i className="fa-brands fa-github"></i>
          </a>
          <button>
            Download CV <i className="fa-solid fa-download"></i>
          </button>
        </div>
        <div className="arrow2">
          <i className="fa-solid fa-arrow-down"></i>
        </div>
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
