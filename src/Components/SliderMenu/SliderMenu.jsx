import { useState } from "react";
import "./SliderMenu.scss";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const SliderMenu = () => {
  let [slider, setSlider] = useState(false);
  return (
    <>
      <div className="mslider_cat">
        {slider ? (
          <>
            <div
              className="pr-slide2"
              style={{ transform: "translateX(-100%)" }}
            >
              Slider_2
            </div>
            <div
              className="pr-slide1"
              style={{ transform: "translateX(0)" }}
            >
              Slider_1
            </div>
          </>
        ) : (
          <>
            <div
              className="pr-slide1"
              style={{ transform: "translateX(100%)" }}
            >
              Slider_1
            </div>
            <div
              className="pr-slide2"
              style={{ transform: "translateX(0)" }}
            >
              Slider_2
            </div>
          </>
        )}

        <div className="pr-pr" onClick={() => setSlider(!slider)}>
          <FaAngleLeft style={{ fontSize: "50px" }} />
        </div>
        <div className="nex-nex" onClick={() => setSlider(!slider)}>
          <FaAngleRight style={{ fontSize: "50px" }} />
        </div>
      </div>
    </>
  );
};

export default SliderMenu;
