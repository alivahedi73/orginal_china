import "./Categorize_Spolight.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import {data_sploight_slider} from "../data_all_categorize"
const Categorize_Spolight = () => {
  return (
    <>
      <div className="main_categorize_spolight">
        <div className="categorize__spolight">
          <div className="title_cate_spolight">
            <h2 className="title_h2_cat_splight">Spotlight</h2>
            <p className="title_p_cat_spolight">
              Browse our directory of machine products to find quality plastic
              machinery, shearing machine, paper machine and much more. To find
              reliable China machinery suppliers, begin by selecting a category
              below.
            </p>
          </div>
          <div className="splight_cat_slider">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                640: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                768: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
                1352: {
                  slidesPerView: 5,
                  slidesPerGroup: 5,
                },
                1750: {
                  slidesPerView: 6,
                  slidesPerGroup: 6,
                },
              }}
              navigation={true}
              freeMode={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper"
              id="spolight_cat___slider"
            >
              {data_sploight_slider.map((item,index)=>{
                return <SwiperSlide key={index}>
                    <a href={item.href} className="spolight_slider_link" title={item.name}>
                        <img src={item.src} alt={item.alt} className="spolight_slider_link_img" />
                        <div className="spolight_slider_link_p">{item.name}</div>
                    </a>
                </SwiperSlide>;
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categorize_Spolight;
