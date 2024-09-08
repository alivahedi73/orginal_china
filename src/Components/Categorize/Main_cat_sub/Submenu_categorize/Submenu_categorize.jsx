import SliderMenu from "../SliderMenu/SliderMenu";
import { useEffect, useState } from "react";
import "./Submenu_categorize.scss";
const Submenu_categorize = ({ value ,click}) => {
  let data = value[0].mainSubmenu;
   let [hot, setHot] = useState([]);
   let fetHotProduct = async () => {
     try {
       let data1 = await fetch("http://localhost:8000/hot_product");
       let res = await data1.json();
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
      <div className="cat-m-s">
        <div className="cat-m-s-1">
          <div className="bcat">
            {data.map((item, index) => {
              return (
                <div>
                  <p key={index}>{item.name}</p>
                  {item.link.map((i, ism) => {
                    return (
                      <a href="#" key={ism} className="cat_li">
                        {i.name}
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="cat-m1">
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
        </div>
      </div>
    </>
  );
};

export default Submenu_categorize;
