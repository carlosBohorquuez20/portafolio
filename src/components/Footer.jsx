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
        <div>
          <i class="fa-solid fa-house"></i> Home
        </div>
        <div>
          <i class="fa-solid fa-user"></i> About Me
        </div>
      </div>
      <div className="icons-footer">
        <div className="icons-socials">
          <i class="fa-brands fa-linkedin"></i>
        </div>
        <div className="icons-socials">
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
