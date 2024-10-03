import "./Compon_left_side_menu_card.scss";
import { Card_sl_menu } from "../../../../data_all_categorize";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
const Compon_left_side_menu_card = () => {
  const [hover, setHover] = useState([false, 0]);
  const result = Card_sl_menu[0].submenu.slice(0, 11);
  const result1 = Card_sl_menu[0].submenu.slice(
    12,
    Card_sl_menu[0].submenu.length
  );
  let green = "#77A619";  
  return (
    <>
      <div className="com_left_side_menu___A">
        <div className="title_com_left_side_menu" style={{ color: green }}>
          {Card_sl_menu[0].name}
        </div>
        <div className="submenu_left_side_menu">
          {result.map((item, index) => {
            return (
              <div
                key={index}
                className="div__submenu_left_side"
                style={{
                  backgroundColor:
                    hover[0] && hover[1] == item.id ? green : "white",
                  color: hover[0] && hover[1] == item.id ? "white" : green,
                }}
                onMouseEnter={() => setHover([true, item.id])}
                onMouseLeave={() => setHover([false, item.id])}
              >
                <a
                  href={item.href}
                  className="div_link_submenu_left_side"
                  style={{
                    color: hover[0] && hover[1] == item.id ? "white" : green,
                  }}
                >
                  {item.name}
                </a>
                {item.has_sub == true && <ChevronRightIcon />}
                {item.has_sub == true && (
                  <div
                    className="abs_div_menu_card_left__side"
                    onMouseEnter={() => setHover([true, item.id])}
                    onMouseLeave={() => setHover([false, item.id])}
                    style={{
                      display:
                        hover[0] && hover[1] == item.id ? "flex" : "none",
                      color: hover[0] && hover[1] == 12 && "#222222",
                    }}
                  >
                    {item.submenu.map((items, index) => {
                      return (
                        <a
                          className="abs_div_menu_card_left__side_link"
                          key={index}
                          href={items.href}
                        >
                          {items.name}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          {Card_sl_menu[0].submenu.length >= 12 && (
            <>
              <div
                className="div__submenu_left_side"
                style={{
                  backgroundColor: hover[0] && hover[1] == 12 ? green : "white",
                  color: hover[0] && hover[1] == 12 ? "white" : green,
                }}
                onMouseEnter={() => setHover([true, 12])}
                onMouseLeave={() => setHover([false, 12])}
              >
                <a
                  className="div_link_submenu_left_side"
                  style={{
                    color: hover[0] && hover[1] == 12 ? "white" : green,
                  }}
                >
                  More
                </a>
                <ChevronRightIcon />
                <div
                  className="abs_div_menu_card_left__side"
                  onMouseEnter={() => setHover([true, 12])}
                  onMouseLeave={() => setHover([false, 12])}
                  style={{
                    display: hover[0] && hover[1] == 12 ? "flex" : "none",
                    backgroundColor: hover[0] && hover[1] == 12 && "#5b5b5b",
                  }}
                >
                  {result1.map((items, index) => {
                    return (
                      <a
                        className="abs_div_menu_card_left__side_link"
                        key={index}
                        href={items.href}
                        style={{ color: hover[0] && hover[1] == 12 && "white"}}
                      >
                        {items.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Compon_left_side_menu_card;
