import "./All_categorize__mobile_menu.scss";
import { categorize_data } from "../../data_all_categorize";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";
import { Drawer } from "@mui/material";
const All_categorize__mobile_menu = () => {
  let [click, setClick] = useState(false);
  let [clicksub, setClicksub] = useState(1);
  return (
    <>
      <div
        className="main_cat_mobile"
        style={
          click
            ? { backgroundColor: "lightgray" }
            : { backgroundColor: "white" }
        }
        onClick={() => setClick(!click)}
      >
        {click ? <MenuOpenIcon style={{ color: "black" }} /> : <MenuIcon style={{color:"#888888"}}/>}
        <h2
          className="h2_main_categorize_mobile"
          style={click ? { color: "black" } : { color: "#888888" }}
        >
          {categorize_data[0].name}
        </h2>
      </div>
      <div
        className="abs_mobile_cat_main"
        style={
          click
            ? {  opacity: "1" }
            : { opacity: "0" }
        }
      >
        <div className="main_mobile">
          {categorize_data[0].mainDiv.map((item, index) => {
            return (
              <div className="item_abs_mobile_main" key={index}>
                <div
                  className="item___item_abs"
                  onClick={() => setClicksub(item.id)}
                  style={
                    clicksub == item.id
                      ? {
                          backgroundColor: "#5b5b5b",
                          color: "whitesmoke",
                          paddingLeft: "0.5rem",
                        }
                      : { backgroundColor: "white", color: "#555555" }
                  }
                >
                  {item.name}
                </div>
              </div>
            );
          })}
        </div>
        <div className="categorize_menu_abs_datail_main">
          {categorize_data[0].mainDiv[clicksub - 1].submain.map(
            (item, index) => {
              return (
                <a href="#" key={index}>
                  {item.name}
                </a>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default All_categorize__mobile_menu;
