import React, { useState } from "react";
import "./Modal.scss"
import CloseIcon from "@mui/icons-material/Close";
import { sec5_film } from "../data_Section5_Product";
const Modal = ({ isOpen, onClose,index }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="modal_1">
          <video autoPlay controls>
            <source src={sec5_film[index - 1].film_src} />
          </video>
          <div className="modal_2">{sec5_film[index - 1].name}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
