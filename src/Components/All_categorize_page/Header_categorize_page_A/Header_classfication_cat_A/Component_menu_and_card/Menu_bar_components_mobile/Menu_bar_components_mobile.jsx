import "./Menu_bar_components_mobile.scss";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Menu_bar_components_mobile = ({ data,id }) => {
  let [click, setClick] = useState(false);
  let [cli, setCli] = useState([true, 1]);
  return (
    <>
      <div
        className="title_bar_mobile"
        id={id}
        style={
          click
            ? { backgroundColor: "#5b5b5b", color: "whitesmoke" }
            : { backgroundColor: "white", color: "#555555" }
        }
        onClick={() => [setClick(!click), setCli([true, 1])]}
      >
        {click ? <MenuOpenIcon /> : <MenuIcon />}
        {data[0].name}
      </div>
      {/* drawer */}
      <div
        className="menu_bar_a_project"
        style={
          click
            ? {
                transform: "scale(1)",
                display: "flex",
              }
            : {
                transform: "scale(0)",
                display: "none",
              }
        }
      >
        <div className="left_mobile_menu_bar_project_a">
          {data[0].submenu.map((item, index) => {
            return item.has_sub ? (
              <div
                className="sub_menu_project___menu_bar_mobile_a"
                key={index}
                onClick={() => setCli([true, item.id])}
                style={
                  cli[0] == true && cli[1] == item.id
                    ? { backgroundColor: "whitesmoke", color: "#5b5b5b" }
                    : { color: "whitesmoke", backgroundColor: "#5b5b5b" }
                }
              >
                {item.name}
                <KeyboardArrowRightIcon />
              </div>
            ) : (
              <div
                className="link_menu_project___menu_bar_mobile_a"
                onClick={() => setCli([true, item.id])}
                style={
                  cli[0] == true && cli[1] == item.id
                    ? { backgroundColor: "whitesmoke", color: "#5b5b5b" }
                    : { color: "whitesmoke", backgroundColor: "#5b5b5b" }
                }
                key={index}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="right_mobile_menu_bar_project_a">
          {data[0].submenu.map((item, index) => {
            return (
              cli[1] == item.id && (
                <div className="right_sub_submenu_submenu_menu_bar" key={index}>
                  <a
                    href={item.href}
                    className="link_right_submenu_sub_menu_bar"
                  >
                    {item.name}
                  </a>
                  {item.has_sub == true &&
                    item.submenu.map((item, index) => {
                      return (
                        <a
                          href={item.href}
                          className="link_s_s_submenu_right_menuBar"
                          key={index}
                        >
                          {item.name}
                        </a>
                      );
                    })}
                </div>
              )
            );
          })}
        </div>
      </div>
      {/* drawer */}
    </>
  );
};

export default Menu_bar_components_mobile;
