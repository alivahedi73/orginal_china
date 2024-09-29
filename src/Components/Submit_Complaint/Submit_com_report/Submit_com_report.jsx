import { useState } from "react";
import "./Submit_com_report.scss";
import { submit_data_report } from "./data_Submit_com_report";
import * as React from "react";
import Modal from "@mui/material/Modal";
import SigninComp from "./signinComp/signinComp";
import CloseIcon from "@mui/icons-material/Close";
const Submit_com_report = () => {
  let [click, setClick] = useState([false, false, ""]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let login = false;
  const handel_page = () => {
    if (login == true) {
      switch (click[2]) {
        case "btn_left_1":
          alert("left_number_1");
          break;
        case "btn_left_2":
          alert("left_number_2");
          break;
        case "btn_left_3":
          alert("left_number_3");
          break;
        case "btn_left_4":
          alert("left_number_4");
          break;
        case "btn_left_5":
          alert("left_number_5");
          break;
        case "btn_left_6":
          alert("left_number_6");
          break;
        case "btn_right_1":
          alert("right_number_1");
          break;
        case "btn_right_2":
          alert("right_number_2");
          break;
        case "btn_right_3":
          alert("right_number_3");
          break;
        case "btn_right_4":
          alert("right_number_4");
          break;
        default:
          break;
      }
    } else {
      handleOpen();
    }
  };
  return (
    <>
      <div className="submit_com_report">
        {/* button */}
        <div className="submit_button">
          {submit_data_report.map((item, index) => {
            return (
              <div className="sb_div_button" key={index}>
                <h4 className="sb_div_div_h4">{item.title}</h4>
                <div className="main_sub_mit">
                  {item.subbutton.map((item, index) => {
                    return (
                      <div className="button_report_main" key={index}>
                        <input
                          type="radio"
                          className="radio__report"
                          name="radio_button"
                          onClick={() => {
                            item.left
                              ? setClick([
                                  true,
                                  false,
                                  item.left
                                    ? "btn_left_" + item.id
                                    : "btn_right_" + item.id,
                                ])
                              : setClick([
                                  false,
                                  true,
                                  item.left
                                    ? "btn_left_" + item.id
                                    : "btn_right_" + item.id,
                                ]);
                          }}
                          id={
                            item.left
                              ? "btn_left_" + item.id
                              : "btn_right_" + item.id
                          }
                        />
                        <label
                          htmlFor={
                            item.left
                              ? "btn_left_" + item.id
                              : "btn_right_" + item.id
                          }
                        >
                          {item.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* button */}
        {/* button continue */}
        <a
          className={`${
            click[2] !== "" && "continue_sub_enable"
          }  continue_sub_disable`}
          onClick={click[2] !== "" && handel_page}
        >
          Continue
        </a>
        {/* button continue */}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="sign____comp">
          <div className="submit____close_modal">
            <p>Sign In</p>
            <CloseIcon fontSize="inherit" onClick={handleClose} />
          </div>
          <SigninComp />
        </div>
      </Modal>
    </>
  );
};

export default Submit_com_report;
