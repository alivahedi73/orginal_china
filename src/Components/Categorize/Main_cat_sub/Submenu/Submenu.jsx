import { useEffect, useState } from "react";
import SliderMenu from "../SliderMenu/SliderMenu";
import "./Submenu.scss";
const Submenu = ({ value }) => {
  let [hot, setHot] = useState([]);
  let fetHotProduct = async () => {
    try {
      let data = await fetch("http://localhost:8000/hot_product");
      let res = await data.json();
      setHot(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetHotProduct();
  }, []);
  return (
    <>
      <div className="main_m">
        {value.map((item, index) => {
          return (
            <div className="mainC1" key={index}>
              <p className="mainC2">{item.name}</p>
              {item.submain.map((itm, tedad) => {
                return (
                  <a className="mainC3" href="#">
                    {itm.name}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
      <a className="morecat" href="#">
        <p>
          More Categorize <span>&#62;</span>
        </p>
      </a>
      <div className="main_slider">
        <div className="bpb">
          <SliderMenu />
        </div>
      </div>
      <div className="des_slider">
        <div className="maindes_slider">
          <p className="m__slider1">Hot Products :</p>
          {hot.map((item, index) => {
            return (
              <a href="#" className="m__slider2" key={index}>
                <p>{item.name}</p>
                <span>{"   . "}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Submenu;
