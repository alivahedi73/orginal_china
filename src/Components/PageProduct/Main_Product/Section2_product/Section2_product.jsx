import { FreeMode, Navigation } from "swiper/modules";
import "./Section2_product.scss";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { slider_Proudcts_inBottom } from "../Slider_Product/data_Slider_Product";
const Section2_product = () => {
  let data = slider_Proudcts_inBottom;
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
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index + 1}>
                  <a
                    href={item.href}
                    className="sec2_swiper_a"
                    title={item.title}
                  >
                    <img
                      src={item.img_src}
                      alt=""
                      className="sec2_swiper_img"
                    />
                    <p className="sec2_swiper_p">{item.p_name}</p>
                    <div className="sec2_swiper_div">
                      <span className="sec2_swiper_div_pr1">{item.price}</span>
                      <span className="sec2_swiper_div_pr2">
                        {item.detail_price}
                      </span>
                    </div>
                    <div className="sec2_swiper_div_num2">
                      <span className="sec2_swiper_div_num2_s1">
                        {item.detail_price}
                      </span>
                      <span className="sec2_swiper_div_num2_s2">
                        {item.detail_price_span}
                      </span>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Section2_product;
