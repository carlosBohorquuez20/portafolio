import React, { useEffect, useState } from "react";
import "../styles/navBar.css";
const NavBar = () => {
  const [menuMobile, setMenuMobile] = useState(false);

 
  useEffect (() => {
    window.sr = ScrollReveal();
    sr.reveal('.nav',{
      duration:3000,
      origin: 'bottom',
      distance: '-100px'
    });
  },[])
  return (
    <nav className="nav">
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
