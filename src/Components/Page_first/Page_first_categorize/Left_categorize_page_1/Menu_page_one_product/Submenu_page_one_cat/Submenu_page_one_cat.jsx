import { hot_product } from "../../../data_Page_first_categorize";
import "./Submenu_page_one_cat.scss";
import SliderMenu_one_page from "./SliderMenu_one_page/SliderMenu_one_page";
const Submenu_page_one_cat = ({ value }) => {
  let hot = hot_product;  
  return (
    <>
      <div className="main_m">
        {value?.map((item, index) => {
          return (
            <div className="mainC1" key={index}>
              <p className="mainC2">{item.name}</p>
              {item.submain?.map((items, index) => {
                console.log(items);

                return (
                  <a className="mainC3" href="#" key={index}>
                    {items.name}
                  </a>
                );
              })}
              {item.link?.map((items, index) => {
                console.log(items);

                return (
                  <a className="mainC3" href="#" key={index}>
                    {items.name}
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
          <SliderMenu_one_page />
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

export default Submenu_page_one_cat;
