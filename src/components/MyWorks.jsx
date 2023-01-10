import React from "react";
import "../styles/myWorks.css";
import pokedex from "../img/pokedex.png";
import ecommerceRact from "../img/ecommerce.png";
import ecommerceVanilla from "../img/ecommerceVanillaJs.png";
import generatorBoxShadow from "../img/generatorBoxShadow.png";
import mobile from "../img/mobile.png";
import rick from "../img/rick.png";
import weather from "../img/weather.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const MyWorks = () => {
  return (
    <div className="works-box">
      <div className="works-text">
        <h2>
          My recent <span className="other-color">works</span>
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
          <img src={pokedex} />
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={ecommerceRact} />
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={rick} />
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={weather} />
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={ecommerceVanilla} />
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={generatorBoxShadow} />
        </SwiperSlide>
        <SwiperSlide className="work-slide">
          <img src={mobile} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyWorks;
