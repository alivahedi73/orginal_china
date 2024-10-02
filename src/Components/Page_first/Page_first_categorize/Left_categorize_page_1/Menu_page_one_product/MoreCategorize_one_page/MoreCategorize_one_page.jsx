import { useState } from "react";
import "./MoreCategorize_one_page.scss";
import Submenu_page_one_cat from "../Submenu_page_one_cat/Submenu_page_one_cat";
const MoreCategorize_one_page = ({ value }) => {
  let [click, setClick] = useState(1);
  const data1 = value.filter((value) => value.id === click); 
  return (
    <div className="cat_p1">
      <div className="cat_p2">
        {value.map((item, index) => {
          return (
            <a
              href="#"
              key={index}
              className={`cat_linka ${item.id == click ? "cat_hover" : " "}`}
              onMouseEnter={() => setClick(item.id)}
            >
              {item.name}
            </a>
          );
        })}
      </div>
      <div className="cat_p3" onMouseEnter={() => setClick(click)}>
        <Submenu_page_one_cat value={data1[0].mainSubmenu} click={click} />
      </div>
    </div>
  );
};

export default MoreCategorize_one_page;
