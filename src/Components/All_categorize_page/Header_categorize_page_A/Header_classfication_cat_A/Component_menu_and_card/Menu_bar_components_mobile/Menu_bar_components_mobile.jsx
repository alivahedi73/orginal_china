import "./Menu_bar_components_mobile.scss";
import { Card_sl_menu } from "../../../../data_all_categorize";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useState } from "react";
const Menu_bar_components_mobile = () => {
  let [click, setClick] = useState(false);
  return (
    <>
      <div
        className="title_bar_mobile"
        style={
          click
            ? { backgroundColor: "#5b5b5b", color: "whitesmoke" }
            : { backgroundColor: "white", color: "#555555" }
        }
        onClick={() => setClick(!click)}
      >
        {click ? <MenuOpenIcon /> : <MenuIcon />}
        {Card_sl_menu[0].name}
      </div>
    </>
  );
};

export default Menu_bar_components_mobile;
