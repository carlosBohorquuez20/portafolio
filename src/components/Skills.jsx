import React from "react";
import "../styles/skills.css";
import html from "../img/html-icon.png";
import js from "../img/js-icon.png";
import css from "../img/css-icon.png";
import git from "../img/git-icon.png";
const Skills = () => {
  return (
    <div className="skills-box">
      <div className="text-skills">
        <h2>My <span className="other-color">Skills</span></h2>
      </div>
      <div className="tecnologies-skills">
        <div className="skills-icons">
          <img src={html} alt="html" />
          <p>HTML5</p>
        </div>
        <div className="skills-icons">
          <img src={css} alt="css" />
          <p>CSS3</p>
        </div>
        <div className="skills-icons">
          <img src={js} alt="js" />
          <p>JavaScript</p>
        </div>
        <div className="skills-icons">
          <img src={git} alt="git" />
          <p>Git</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
