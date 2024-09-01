import { useState } from "react";
import Submenu_categorize from "../Submenu_categorize/Submenu_categorize";
import "./MoreCategorize.scss";
const MoreCategorize = ({ value }) => {
  let [click, setClick] = useState(1);
  const data1 = value.filter((value) => value.id === click );

  return (
    <div className="cat_p1">
      <div className="cat_p2">
        {value.map((item, index) => {
          return (
            <a
              href="#"
              key={index}
              className={`cat_linka ${item.id==click?"cat_hover":" "}`}
              onMouseEnter={() => setClick(item.id)}
            >
              {item.name}
            </a>
          );
        })}
      </div>
      <div className="cat_p3" onMouseEnter={() => setClick(click)}>
        <Submenu_categorize value={data1} click={click} />
      </div>
    </div>
  );
};

export default MoreCategorize;
