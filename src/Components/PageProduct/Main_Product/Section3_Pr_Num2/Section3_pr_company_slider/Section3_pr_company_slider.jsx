import "./Section3_pr_company_slider.scss";
import { slider______1 } from "./data____Section3_pr_company_slider";
import { FreeMode, Navigation } from "swiper/modules";
import * as React from "react";
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Height } from "@mui/icons-material";

const Section3_pr_company_slider = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
      <div className="Section3_pr_company_slider_nm1">
        <div className="sec3_slider___1_cer">
          <h4>Certificates</h4>
          <p>{slider______1.length} items</p>
        </div>
        <div className="start__slider1">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1352: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
            spaceBetween={10}
            navigation={true}
            freeMode={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper"
            id="Slider_____1"
          >
            {slider______1.map((item, index) => {
              return (
                <SwiperSlide key={index + 1} onClick={handleOpen}>
                  <div className="sl___1">
                    <img src={item.src} alt="" />
                  </div>
                  <div className="sl___2">{item.name}</div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
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
              <div className="slider2_hidden___1">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                  id="sl_____3"
                >
                  {slider______1.map((item,index)=>{
                    return <SwiperSlide key={index}>
                        <div className="modal_div_1">
                            <p>{item.name}</p>
                            <span>{item.time}</span>
                        </div>
                        <div className="modal_div_img">
                            <img src={item.src} alt="" />
                        </div>
                        <div className="modal_div_p">
                            {item.name}
                        </div>
                    </SwiperSlide>;
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

export default Section3_pr_company_slider;
