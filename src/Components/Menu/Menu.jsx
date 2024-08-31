import { useEffect, useState } from "react";
import "./Menu.scss";
import { FaCaretRight } from "react-icons/fa";
import Submenu from "../Submenu/Submenu";
const Menu = () => {
  let [menu, setMenu] = useState([]);
  let fetchMenu = async () => {
    try {
      let data = await fetch("http://localhost:8000/Menu");
      let res = await data.json();
      setMenu(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <>
      <div className="submenu">
        {menu.map((item, index) => {
          return (
            <div key={index}>
              {item.class == false ? (
                <div>
                  <a href="#" className="sub_1" key={item.id}>
                    {item.name}
                  </a>
                  {/* start of submenu */}
                  <div className="main_sub">
                    <div className="msMenu_1">
                      <Submenu value={item.mainDiv} />
                    </div>
                  </div>
                  {/* end of submenu */}
                </div>
              ) : (
                <a href="#" className="sub_2" key={item.id}>
                  <span>{item.name}</span>
                  {/* start of submenu */}
                  <div className="main_sub">
                    <div className="msMenu_1"></div>
                  </div>
                  {/* end of submenu */}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
