import React, { useEffect, useState } from "react";
import "../styles/navBar.css";
const NavBar = () => {
  const [menuMobile, setMenuMobile] = useState(false);


  useEffect(() => {
    window.sr = ScrollReveal();
    sr.reveal('.nav', {
      duration: 3000,
      origin: 'bottom',
      distance: '-100px'
    });
  }, [])

  return (
    <nav className="nav">
      <div className="nav-desktop">
        <h2><i class="fa-solid fa-laptop-code"></i></h2>
        <div>
          <a href="#home">Inicio</a>
          <a href="#about">Sobre mi</a>
          <a href="#skills">Mis habilidades</a>
          <a href="#myWorks">Mis trabajos</a>
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
          <a href="#home">Inicio</a>
          <a href="#about">Sobre mi</a>
          <a href="#skills">Mis habilidades</a>
          <a href="#myWorks">Mis trabajos</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
