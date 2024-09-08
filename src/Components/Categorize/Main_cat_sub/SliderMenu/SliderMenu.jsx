import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const SliderMenu = () => {
  let [menuslider,setMenuslider]=useState([])
  let fetchsliderMenu=async()=>{
    try {
      let data = await fetch("http://localhost:8000/menuSlider");
      let res = await data.json()
      setMenuslider(res)
    } catch (error) {
      console.log(error.message);
      
    }
  }
  useEffect(()=>{
    fetchsliderMenu()
  },[])
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

export default SliderMenu;
