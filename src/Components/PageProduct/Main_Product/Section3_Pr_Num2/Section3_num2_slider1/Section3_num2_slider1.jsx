import * as React from "react";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Section3_num2_slider1.scss";
import { data_section3_product_num2__slider1 } from "./data_section3_num2_slider1";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Height } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

const Section3_num2_slider1 = () => {
  let data_1 = data_section3_product_num2__slider1;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        id="section3____slider_1"
      >
        {data_1.map((item, index) => {
          return (
            <SwiperSlide key={index} onClick={handleOpen}>
              <img src={item.src} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {open ? (
        <>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <div className="slider2_hidden">
                <Swiper
                  spaceBetween={0}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                  id="section3____slider_2"
                >
                  {data_1.map((item, index) => {
                    return (
                      <SwiperSlide key={index} onClick={handleOpen}>
                        <img src={item.src} alt="" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </Fade>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Section3_num2_slider1;
