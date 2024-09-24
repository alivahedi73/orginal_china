import "./Buyers_Sayes_slider.scss";
import { Buyers_slider } from "./data_Buyers_Sayes_slider";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Buyers_Sayes_slider = () => {
  return (
    <>
      <div className="buyers_said">
        <div className="buers_main">
          <h2 className="buyers_h2">What Buyers Said Matters</h2>
          <div className="buyers_slider">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              loop={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
              id="buyers___slider"
            >
              {Buyers_slider.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="swiper_bu_1">
                      <img src={item.image_src} alt="" />
                    </div>
                    <div className="swiper_bu_2">
                      <div className="buyers_name">{item.name}</div>
                      <div className="buyers_country">
                        <img src={item.image_country} alt="" />
                        <p>{item.country}</p>
                      </div>
                      <div className="par_bueyrs_up">
                        <img src={item.image_pragraph} alt="" />
                      </div>
                      {/*  */}
                      <div className="buers_sw_div">{item.text}</div>
                      {/*  */}
                      <div className="par_bueyrs_down">
                        <img src={item.image_pragraph} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buyers_Sayes_slider;
