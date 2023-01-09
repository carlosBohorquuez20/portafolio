import React, { useState } from "react";
import "../styles/navBar.css";
const NavBar = () => {
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <nav>
      <div className="nav-desktop">
        <p>Carlos Bohorquez</p>
        <div>
          <a href="">Home</a>
          <a href="">About Me</a>
          <a href="">Skills</a>
          <a href="">My works</a>
          <a href="">Contact</a>
        </div>
      </div>
      <div className="menu-mobile" onClick={() => setMenuMobile(true)}>
        <i class="fa-solid fa-bars"></i>
      </div>
      <div
        className={`${menuMobile === true ? "activeMenu" : "desactivedMenu"}`}
      >
        <div className="list-menu">
          <div className="close" onClick={() => setMenuMobile(false)}>
            <i class="fa-solid fa-xmark"></i>
          </div>
          <a href="">Home</a>
          <a href="">About Me</a>
          <a href="">Skills</a>
          <a href="">My works</a>
          <a href="">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
