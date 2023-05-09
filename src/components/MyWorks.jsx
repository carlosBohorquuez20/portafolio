import React, { useEffect } from "react";
import "../styles/myWorks.css";
import pokedex from "../img/pokedex.png";
import ecommerceRact from "../img/ecommerce.png";
import ecommerceVanilla from "../img/ecommerceVanillaJs.png";
import generatorBoxShadow from "../img/generatorBoxShadow.png";
import mobile from "../img/mobile.png";
import rick from "../img/rick.png";
import weather from "../img/weather.png";
import compraListo from "../img/compraListo.png";
import technoLearn from "../img/technoLearn.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const MyWorks = () => {
  useEffect(() => {
    window.sr = ScrollReveal();
    sr.reveal(".works-box", {
      duration: 3000,
      origin: "top",
      distance: "-100px",
    });
  }, []);

  return (
    <div className="works-box" id="myWorks">
      <div className="works-text">
        <h2>
          Mis trabajos <span className="other-color">recientes</span>
        </h2>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiperWork"
      >
        <SwiperSlide className="work-slide">
          <img src={compraListo} />
          <div className="pages-links">
            <a
              href="https://github.com/No-Country/s7-11-t-javareact"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>{" "}
            </a>
            <a href="https://compralisto0.vercel.app/" target="_blank">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={technoLearn} />
          <div className="pages-links">
            <a
              href="https://github.com/No-Country/TechnoLearn-C9-27-T-JavaReact"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>{" "}
            </a>
            <a href="https://techno-learn-c9-27-t-java-react-technolearn.vercel.app/" target="_blank">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={pokedex} />
          <div className="pages-links">
            <a
              href="https://github.com/carlosBohorquuez20/Pokedex-proyect"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>{" "}
            </a>
            <a href="https://pokedex-carlos-bohorquez.netlify.app/#/characters" target="_blank">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={ecommerceRact} />
          <div className="pages-links">
            <a
              href="https://github.com/carlosBohorquuez20/e-commerce"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>{" "}
            </a>
            <a href="https://e-commerce-carlos-bohorquez.netlify.app/" target="_blank">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={rick} />
          <div className="pages-links">
            <a
              href="https://github.com/carlosBohorquuez20/Rick-And-Morty"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>{" "}
            </a>
            <a href="https://proyect-rick-and-morty.netlify.app/" target="_blank">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={weather} />
          <div className="pages-links">
            <a
              href="https://github.com/carlosBohorquuez20/Proyect-weather"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>{" "}
            </a>
            <a href="https://proyect-weather-carlos-bohorquez.netlify.app/" target="_blank">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={ecommerceVanilla} />
          <div className="pages-links">
            <a
              href="https://github.com/carlosBohorquuez20/Proyecto-e-commerce"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>{" "}
            </a>
            <a href="https://proyecto-e-commerce-carlos-bohorquez.netlify.app/" target="_blank">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={generatorBoxShadow} />
          <div className="pages-links">
            <a
              href="https://github.com/carlosBohorquuez20/Box-shadow-generator-project"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>{" "}
            </a>
            <a href="https://generator-box-shadow-carlos-bohorquez.netlify.app/" target="_blank">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={mobile} />
          <div className="pages-links">
            <a
              href="https://github.com/carlosBohorquuez20/Practica-apis"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>{" "}
            </a>
            <a href="https://practica-apis-chat.netlify.app/" target="_blank">
              <i class="fa-solid fa-globe"></i>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyWorks;
