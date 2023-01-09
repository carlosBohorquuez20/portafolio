import React from "react";
import "../styles/myWorks.css";
const MyWorks = () => {
  return (
    <div className="works-box">
      <div className="works-text">
        <h2>
          My recent <span className="other-color">works</span>
        </h2>
      </div>
      <ul className="categories-text">
        <li>All</li>
        <li>Front-End</li>
        <li>Back-End</li>
      </ul>
      <div className="img-categories">
        <div className="category-box">
          <img src="" alt="" />
        </div>
        <div className="category-box">
          <img src="" alt="" />
        </div>
        <div className="category-box">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
