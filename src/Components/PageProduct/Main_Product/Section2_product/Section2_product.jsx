import { FreeMode, Navigation } from "swiper/modules";
import "./Section2_product.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Section2_product = () => {
  return (
    <>
      <div className="section2_pr">
        <h2 className="section2_h2">Find Similar Products</h2>
        <div className="section2_slider_product">
          <Swiper
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
            spaceBetween={5}
            navigation={true}
            freeMode={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper"
            id="section2_slider"
          >
            <SwiperSlide>
              <a
                href="#"
                className="sec2_swiper_a"
                title="Contec Cms60d China Manufacturer SpO2 Monitor Handheld Pulse Oximeter"
              >
                <img
                  src="../../../../../public/assets/Images/product/Fingertip-Pulse-Oximeter-Cms50q1-Oximetro-Pediatric-Oximeter.webp"
                  alt=""
                  className="sec2_swiper_img"
                />
                <p className="sec2_swiper_p">
                  Contec Cms60d China Manufacturer SpO2 Monitor Handheld Pulse
                  Oximeter
                </p>
                <div className="sec2_swiper_div">
                  <span className="sec2_swiper_div_pr1">US$50.00-80.00</span>
                  <span className="sec2_swiper_div_pr2"> / Piece</span>
                </div>
                <div className="sec2_swiper_div_num2">
                  <span className="sec2_swiper_div_num2_s1">1 Piece</span>
                  <span className="sec2_swiper_div_num2_s2"> (MOQ)</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
            <SwiperSlide>Slide 10</SwiperSlide>
            <SwiperSlide>Slide 11</SwiperSlide>
            <SwiperSlide>Slide 12</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Section2_product;
