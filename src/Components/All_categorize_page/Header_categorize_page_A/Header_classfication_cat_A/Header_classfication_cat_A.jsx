import "./Header_classfication_cat_A.scss";
import { data_all_cate } from "../../data_all_categorize";
import Component_menu_and_card from "./Component_menu_and_card/Component_menu_and_card";
const Header_classfication_cat_A = (cl) => {
  return (
    <>
      <div className="header_classification_cat_page">
        {data_all_cate.map((item, index) => {
          return (
            <div className="class_div_classification" key={index}>
              <a href={item.href} className="link_classification">
                {item.name}
              </a>
            </div>
          );
        })}
        {cl.value == true && (
            <div
              className="class_div_classification_mobile"
              style={
                cl.value
                  ? {
                      opacity: "1",
                      transform: "translateY(0)",
                      transition: "500ms",
                    }
                  : {
                      opacity: "0",
                      transform: "translateY(-2000%)",
                    }
              }
            >
              {data_all_cate.map((item, index) => {
                return (
                  <div
                    className="class_div_classification_mobile_sub"
                    key={index}
                  >
                    <a href={item.href} className="link_classification">
                      {item.name}
                    </a>
                  </div>
                );
              })}
            </div>
        )}
        {/* start component card and menu */}
        <Component_menu_and_card />
        {/* start component card and menu */}
      </div>
    </>
  );
};

export default Header_classfication_cat_A;
