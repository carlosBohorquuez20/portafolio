import React, { useEffect } from "react";
import "../styles/footer.css";
const Footer = () => {
  useEffect(() => {
    window.sr = ScrollReveal();
    sr.reveal(".headline", {
      duration: 3000,
      origin: "bottom",
      distance: "-100px",
    });
  }, []);

  return (
    <footer className="headline">
      <div className="menu-footer ">
          <a href="#home">Inicio</a>
          <a href="#about">Sobre mi</a>
          <a href="#skills">Mis habilidades</a>
          <a href="#myWorks">Mis trabajos</a>
      </div>
      <div className="icons-footer">
        <div className="icons-socials">
          <a
            href="https://www.linkedin.com/in/carlos-bohorquez-parra-711b5224b/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="icons-socials">
          <a href="https://github.com/carlosBohorquuez20" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
