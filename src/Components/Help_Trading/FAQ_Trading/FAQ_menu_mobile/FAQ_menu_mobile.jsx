import { useState } from "react";
import { FAQ_menu_data } from "../data_FAQ_Trading";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "./FAQ_menu_mobile.scss"
const FAQ_menu_mobile = () => {
  let [click_mob, setClick_mob] = useState([1, false]);
  return (
    <>
      <div className="FAQ_menu_mobile">
        {FAQ_menu_data.map((item, index) => {
          return (
            <div
              className={"FAQ_main_mobile"}
              key={index}
              style={
                click_mob[0] == item.id && click_mob[1] == true
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "rgba(211, 211, 211, 0.659)" }
              }
            >
              <div
                className={`${
                  click_mob[0] == item.id && click_mob[1] == true
                    ? "FAQ_item_active_mobile"
                    : "FAQ_item_mobile"
                } FAQ_item_mobile`}
                onClick={() => setClick_mob([item.id, !click_mob[1]])}
              >
                {item.title_left}
              </div>
              <div
                className="FAQ_SVG"
                style={
                  click_mob[0] == item.id && click_mob[1] == true
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0)" }
                }
              >
                <KeyboardDoubleArrowDownIcon fontSize="inherit" />
              </div>
              {click_mob[0] == item.id && click_mob[1] == true ? (
                <div
                  className="FAQ_child"
                  style={
                    click_mob[0] == item.id && click_mob[1] == true
                      ? {
                          transform: "translateY(0)",
                          opacity: "1",
                          transitionDuration: "300ms",
                          transitionTimingFunction: "linear",
                          transitionProperty: "all",
                          visibility: "visible",
                        }
                      : {
                          transitionDuration: "300ms",
                          transitionTimingFunction: "linear",
                          transitionProperty: "all",
                        }
                  }
                >
                  <div key={index} className="FAQ_data">
                    <div className="FAQ_data_title">{item.title_right}</div>
                    <div className="FAQ_type1">
                      <p>{item.p}</p>
                      {/* svg true */}
                      {item.svg ? (
                        <>
                          <img src={item.img_src} alt="" />
                          <p>{item.p_second}</p>
                        </>
                      ) : (
                        <></>
                      )}
                      {/* svg true */}
                      {/*link true  */}
                      {item.link ? (
                        <a href={item.link_href}>{item.link_name}</a>
                      ) : (
                        <></>
                      )}
                      {/* link true */}
                    </div>
                    {item.div ? (
                      <>
                        <div className="FAQ_type2">{item.div_1}</div>
                        <div className="FAQ_type2">{item.div_2}</div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FAQ_menu_mobile;
