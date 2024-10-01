import "./Menu_page_one_product.scss";
import { FaCaretRight } from "react-icons/fa";
import { Menu } from "../../data_Page_first_categorize";
import Submenu_page_one_cat from "./Submenu_page_one_cat/Submenu_page_one_cat";
import MoreCategorize_one_page from "./MoreCategorize_one_page/MoreCategorize_one_page";
const Menu_page_one_product = () => {
  
  return (
    <>
      <div className="submenu">
        {Menu.map((item, index) => {
          
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
                      <Submenu_page_one_cat value={item.mainDiv} />
                    </div>
                  </div>
                  {/* end of submenu */}
                </div>
              ) : (
                <div key={item.id}>
                  <a href="#" className="sub_2" key={item.id}>
                    <span>{item.name}</span>
                  </a>
                  <div className="cat_sub">
                    <MoreCategorize_one_page value={item.mainDiv} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu_page_one_product;
