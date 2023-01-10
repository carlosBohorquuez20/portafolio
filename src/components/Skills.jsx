import React, { useEffect } from "react";
import "../styles/skills.css";
import html from "../img/html-icon.png";
import js from "../img/js-icon.png";
import css from "../img/css-icon.png";
import git from "../img/git-icon.png";
import reactJs from "../img/reactJs.png";
import reactRouter from "../img/react-router.png";
import reactRedux from "../img/reactRedux.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "animate.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Skills = () => {

  useEffect(() => {
    window.sr = ScrollReveal();
    sr.reveal(".skills-box", {
      duration: 3000,
      origin: "right",
      distance: "-100px",
    });
  }, []);

  return (
    <div className="skills-box">
      <div className="text-skills">
        <h2>
          My <span className="other-color">Skills</span>
        </h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0:{slidesPerView: 1},
          520:{slidesPerView: 1},
          768:{slidesPerView: 3},
          1000:{slidesPerView: 4},
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="tecnologies-skills">
          <SwiperSlide>
            <div className="skills-icons">
              <img src={html} alt="html" />
              <p>HTML5</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills-icons">
              <img src={css} alt="css" />
              <p>CSS3</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills-icons">
              <img src={js} alt="js" />
              <p>JavaScript</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills-icons">
              <img src={git} alt="git" />
              <p>Git</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills-icons">
              <img src={reactJs} alt="React JS" />
              <p>React JS</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills-icons">
              <img src={reactRouter} alt="React Router" />
              <p>React Router</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="skills-icons">
              <img src={reactRedux} alt="React Redux" />
              <p>React Redux</p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Skills;
