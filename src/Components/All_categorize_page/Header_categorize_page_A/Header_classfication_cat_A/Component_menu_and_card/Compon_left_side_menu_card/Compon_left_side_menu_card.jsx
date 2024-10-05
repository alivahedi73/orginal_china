import "./Compon_left_side_menu_card.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";

const Compon_left_side_menu_card = ({ rang, data }) => {
  const [hover, setHover] = useState([false, 0]);
  const result = data[0].submenu.slice(0, 11);
  const result1 = data[0].submenu.slice(12, data[0].submenu.length);

  return (
    <>
      <div className="com_left_side_menu___A">
        <div className="title_com_left_side_menu" style={{ color: rang }}>
          {data[0].name}
        </div>
        <div className="submenu_left_side_menu">
          {result.map((item, index) => {
            return (
              <div
                key={index}
                className="div__submenu_left_side"
                style={{
                  backgroundColor:
                    hover[0] && hover[1] == item.id ? rang : "white",
                  color: hover[0] && hover[1] == item.id ? "white" : rang,
                }}
                onMouseEnter={() => setHover([true, item.id])}
                onMouseLeave={() => setHover([false, item.id])}
              >
                <a
                  href={item.href}
                  className="div_link_submenu_left_side"
                  style={{
                    color: hover[0] && hover[1] == item.id ? "white" : rang,
                  }}
                >
                  {item.name}
                </a>

                {item.has_sub == true && <ChevronRightIcon />}
                {data[0].submenu.length < 7 && item.has_sub == true && (
                  <div className="absd_link_show_menu">
                    {item.submenu.map((items, index) => {
                      return (
                        <a
                          href={items.href}
                          key={index}
                          style={{
                            color:
                              hover[0] && hover[1] == item.id ? "white" : "#555555",
                          }}
                        >
                          {items.name} /
                        </a>
                      );
                    })}
                  </div>
                )}
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
          {data[0].submenu.length >= 12 && (
            <>
              <div
                className="div__submenu_left_side"
                style={{
                  backgroundColor: hover[0] && hover[1] == 12 ? rang : "white",
                  color: hover[0] && hover[1] == 12 ? "white" : rang,
                }}
                onMouseEnter={() => setHover([true, 12])}
                onMouseLeave={() => setHover([false, 12])}
              >
                <a
                  className="div_link_submenu_left_side"
                  style={{
                    color: hover[0] && hover[1] == 12 ? "white" : rang,
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
                        style={{ color: hover[0] && hover[1] == 12 && "white" }}
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
