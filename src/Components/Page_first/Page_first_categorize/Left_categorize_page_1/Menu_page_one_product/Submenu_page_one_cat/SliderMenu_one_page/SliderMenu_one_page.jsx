import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";
import { menuSlider } from "../../../../data_Page_first_categorize";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const SliderMenu_one_page = () => {
  let menuslider = menuSlider;
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        id="sl_2"
      >
        <SwiperSlide>
          {menuslider.map((item, index) => {
            return (
              <a href="#" className="div_slider" key={index}>
                <img src={item.src} alt="" />
                <p>{item.name}</p>
              </a>
            );
          })}
        </SwiperSlide>
        <SwiperSlide>
          {menuslider.map((item, index) => {
            return (
              <a href="#" className="div_slider" key={index}>
                <img src={item.src} alt="" />
                <p>{item.name}</p>
              </a>
            );
          })}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderMenu_one_page;
