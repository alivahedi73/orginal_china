import { useState } from "react";
import "./FAQ_Trading.scss";
import { FAQ_menu_data } from "./data_FAQ_Trading";
const FAQ_Trading = () => {
  let [click, setClick] = useState(1);
  return (
    <>
      <div className="FAQ">
        <div className="FAQ_title">FAQ</div>
        <div className="FAQ_Link_div">
          <a href="#" className="FAQ_Link">
            Find all Frequently Asked Questions in Buyer's Guide
          </a>
        </div>
        <div className="FAQ_menu">
          <div className="FAQ_left">
            {FAQ_menu_data.map((item, index) => {
              return (
                <div
                  className={`${
                    click == item.id ? "FAQ_item_active" : "FAQ_item"
                  }`}
                  key={index}
                  onMouseEnter={() => setClick(item.id)}
                >
                  {item.title_left}
                </div>
              );
            })}
          </div>
          <div className="FAQ_right">
            {FAQ_menu_data.map((item, index) => {
              return click === item.id ? (
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
              ) : (
                <></>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ_Trading;
