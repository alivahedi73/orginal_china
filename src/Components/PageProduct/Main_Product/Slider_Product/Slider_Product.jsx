import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RedoIcon from "@mui/icons-material/Redo";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Slider_Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="swiper__main">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
          id="sl-1"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
          id="sl-2"
        >
          <SwiperSlide className="mini_slider">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide className="mini_slider">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide className="mini_slider">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide className="mini_slider">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
        </Swiper>
        <div className="heart_slider">
          <FavoriteBorderIcon />
        </div>
        <div className="undo_slider">
          <RedoIcon />
        </div>
        <div className="glass_slider">
          <ZoomInIcon />
        </div>
        <div className="about_slider">
          <a href="#" className="aboutLink_slider">
            <span>
              <ShoppingCartIcon />
            </span>
            <p className="p__slider">Add Inquiry Basket to Compare</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Slider_Product;
