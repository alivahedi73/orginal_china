import "./Bilborder.scss";
import { data_bilborder } from "./data_Bilborder";
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
import CloseIcon from "@mui/icons-material/Close";
const Bilborder = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="main_bilborder">
        <div className="bilborder_cer">
          <h4>Bulletin Board</h4>
          <p>{data_bilborder.length} items</p>
        </div>
        <div className="slider_bilborder">
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
            id="bil_slider"
          >
            {data_bilborder.map((item, index) => {
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
              <div className="slider2_hidden___modal">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                  id="modal_bilborder"
                >
                  {data_bilborder.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="modal_div_1">
                          <p>{item.name}</p>
                          <span>{item.time}</span>
                        </div>
                        <div className="modal_div_img">
                          <img src={item.src} alt="" />
                        </div>
                        <div className="modal_div_p">{item.des}</div>
                        <div className="button_close" onClick={handleClose}>
                          <CloseIcon />
                        </div>
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

export default Bilborder;
