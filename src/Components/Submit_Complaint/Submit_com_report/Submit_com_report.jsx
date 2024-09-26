import { useState } from "react";
import "./Submit_com_report.scss";
import { submit_data_report } from "./data_Submit_com_report";
import * as React from "react";
import Modal from "@mui/material/Modal";

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
        {click[2] === "" ? (
          <a className="continue_sub_disable">Continue</a>
        ) : (
          <a onClick={handel_page} className="continue_sub_enable">
           Continue
          </a>
        )}
        {/* button continue */}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="ppppppp"></div>
      </Modal>
    </>
  );
};

export default Submit_com_report;
