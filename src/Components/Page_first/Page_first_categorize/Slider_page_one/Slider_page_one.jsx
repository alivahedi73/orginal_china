import React, {  useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import {sl_data} from "../data_Page_first_categorize"
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider_page_one = () => {
  let sl = sl_data;

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        id="sl_1"
      >
        {sl.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <a href={item.href}>
                <img src={item.src} alt="" />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider_page_one;
