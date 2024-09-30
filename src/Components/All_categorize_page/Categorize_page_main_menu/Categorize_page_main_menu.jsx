import "./Categorize_page_main_menu.scss";
import {  data_categorizer_img } from "../data_all_categorize";
import All_categorize___laptop_menu from "./All_categorize___laptop_menu/All_categorize___laptop_menu";
import All_categorize__mobile_menu from "./All_categorize__mobile_menu/All_categorize__mobile_menu";
const Categorize_page_main_menu = () => {
  return (
    <>
      <div className="categorize_page_part_one">
        <div className="categorize___main_part_one">
          {/* mobile */}
          <All_categorize__mobile_menu />
          {/* mobile */}
          {/* desktop */}
          <All_categorize___laptop_menu />
          {/* desktop */}
          <div className="card_page_categorize">
            {data_categorizer_img.map((item, index) => {
              return (
                <a href={item.href} className="card_page_cat" key={index}>
                  <p className="card_page_name">{item.name}</p>
                  <img src={item.src} alt="" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categorize_page_main_menu;
