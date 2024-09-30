import "./All_categorize___laptop_menu.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { categorize_data } from "../../data_all_categorize";
const All_categorize___laptop_menu = () => {
  let [mouse, setMouse] = useState([0, false]);
  return (
    <>
      <div className="page_cat_menu_main">
        <h1 className="title_menu_cat__main">{categorize_data[0].name}</h1>
        {categorize_data[0].mainDiv.map((item, index) => {
          return (
            <div
              className="submenu_title_cat_menu"
              key={index}
              onMouseEnter={() => setMouse([item.id, true])}
              onMouseLeave={() => setMouse([item.id, false])}
              style={
                mouse[1] === true && mouse[0] === item.id
                  ? { backgroundColor: "lightgray" }
                  : { backgroundColor: "white" }
              }
            >
              <div className="cat___1_main" title={item.name}>
                <div className="item_cat_main">
                  <h2 className="h2_item_cat">{item.name}</h2>
                  <ChevronRightIcon />
                </div>
                <div className="items_tag_a">
                  <a href="#">{item.submain[0].name}</a>
                  <p>/</p>
                  <a href="#">{item.submain[1].name}</a>
                  <p>/</p>
                </div>
              </div>
              {/* div absolute menu in hover */}
              {mouse[1] === true && (
                <div
                  className="abs_categorize_menu"
                  onMouseEnter={() => setMouse([item.id, true])}
                  onMouseLeave={() => setMouse([item.id, false])}
                >
                  {categorize_data[0].mainDiv[mouse[0] - 1].submain.map(
                    (item, index) => {
                      return (
                        <a href="#" key={index}>
                          {item.name}
                        </a>
                      );
                    }
                  )}
                </div>
              )}
              {/* div absolute menu in hover */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default All_categorize___laptop_menu;
