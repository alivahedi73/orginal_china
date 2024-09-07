
import "./SliderMenu.css";
import { useState } from "react";
const SliderMenu = () => {
   let [click, setClick] = useState(false);
  return (
    <>
      <div className="mslider_cat">
        <div className="banner">
          <div className="imgBox">
            <div className={`benner_img ${click ? "none" : "active"}`}>
              <a href="#" className="classbanner">
                <img
                  src="../../../../public/assets/Images/sl_1/s2.jpg"
                  alt=""
                />
                <p>Test1!</p>
              </a>
              <a href="#" className="classbanner">
                <img
                  src="../../../../public/assets/Images/sl_1/s2.jpg"
                  alt=""
                />
                <p>Test1!</p>
              </a>
              <a href="#" className="classbanner">
                <img
                  src="../../../../public/assets/Images/sl_1/s2.jpg"
                  alt=""
                />
                <p>Test1!</p>
              </a>
            </div>
            <div className={`benner_img ${click ? "none" : "active"}`}>
              <a href="#" className="classbanner">
                <img
                  src="../../../../public/assets/Images/sl_1/s1.jpg"
                  alt=""
                />
                <p>Test2!</p>
              </a>
              <a href="#" className="classbanner">
                <img
                  src="../../../../public/assets/Images/sl_1/s1.jpg"
                  alt=""
                />
                <p>Test2!</p>
              </a>
              <a href="#" className="classbanner">
                <img
                  src="../../../../public/assets/Images/sl_1/s1.jpg"
                  alt=""
                />
                <p>Test2!</p>
              </a>
            </div>
          </div>
          <ul className="control">
            <li className="n1" onClick={() => setClick(!click)}>
              &#9664;
            </li>
            <li className="n2" onClick={() => setClick(!click)}>
              &#9654;
            </li>
          </ul>
          <div className="paggnation">
            <div
              className={`m1 ${click ? "nonebulet" : "activebulet"}`}
              onClick={() => setClick(false)}
            ></div>
            <div
              className={`m1 ${click ? "activebulet" : "nonebulet"}`}
              onClick={() => setClick(true)}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderMenu;
