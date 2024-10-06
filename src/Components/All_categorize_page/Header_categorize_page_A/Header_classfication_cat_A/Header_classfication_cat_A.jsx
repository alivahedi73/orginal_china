import "./Header_classfication_cat_A.scss";
import Component_menu_and_card from "./Component_menu_and_card/Component_menu_and_card";
import {
  Card_sl_menu,
  data_left_menu_bar_brown,
  card_brown_data_right_bar,
  data_left_menu_bar_green,
  data_left_menu_bar_yellow,
  data_left_menu_bar_b_BRown,
  data_left_menu_bar_b_sabaz,
  data_left_menu_bar_b_palstic,
  data_left_menu_bar_b_phili,
  data_left_menu_bar_b_p1,
  data_left_menu_bar_b_sabaz___1,
  Card_sl_menu_1,
  data_left_menu_bar_b_p2,
  data_card_menu_left_num1,
  data_all_cate,
} from "../../data_all_categorize";
const Header_classfication_cat_A = (cl) => {
  return (
    <>
      <div className="header_classification_cat_page">
        {data_all_cate.map((item, index) => {
          return (
            <div className="class_div_classification" key={index}>
              <a href={`#item_${item.id}`} className="link_classification">
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
        <Component_menu_and_card
          id={1}
          rang={"#77A619"}
          data_right={data_card_menu_left_num1}
          data_left={Card_sl_menu}
        />
        {/* start component card and menu */}
        <Component_menu_and_card
          id={2}
          rang={"#99793D"}
          data_left={data_left_menu_bar_brown}
          data_right={card_brown_data_right_bar}
        />
        <Component_menu_and_card
          id={3}
          rang={"#42A685"}
          data_left={data_left_menu_bar_green}
          data_right={card_brown_data_right_bar}
        />
        <Component_menu_and_card
          id={4}
          rang={"#E8A422"}
          data_left={data_left_menu_bar_yellow}
          data_right={card_brown_data_right_bar}
        />
        <Component_menu_and_card
          id={5}
          rang={"#B37950"}
          data_left={data_left_menu_bar_b_BRown}
          data_right={card_brown_data_right_bar}
        />
        <Component_menu_and_card
          id={6}
          rang={"#3EB3B3"}
          data_left={data_left_menu_bar_b_sabaz}
          data_right={card_brown_data_right_bar}
        />
        <Component_menu_and_card
          id={7}
          rang={"#E6742E"}
          data_left={data_left_menu_bar_b_palstic}
          data_right={card_brown_data_right_bar}
        />
        <Component_menu_and_card
          id={8}
          rang={"#39E9BF"}
          data_left={data_left_menu_bar_b_phili}
          data_right={card_brown_data_right_bar}
        />
        <Component_menu_and_card
          id={9}
          rang={"#5081B3"}
          data_left={data_left_menu_bar_b_p1}
          data_right={card_brown_data_right_bar}
        />
        <Component_menu_and_card
          id={10}
          rang={"#59B361"}
          data_left={data_left_menu_bar_b_sabaz___1}
          data_right={card_brown_data_right_bar}
        />
        <Component_menu_and_card
          id={11}
          rang={"#397CBF"}
          data_right={data_card_menu_left_num1}
          data_left={Card_sl_menu_1}
        />
        <Component_menu_and_card
          id={12}
          rang={"#999999"}
          data_right={data_card_menu_left_num1}
          data_left={data_left_menu_bar_b_p2}
        />
        <div className="bottom_header_classification_about_page">
          <p>Veiw related</p>
          <a href="#"> Manufacturing & Processing Machinery suppliers </a>
          <p>{">"}</p>
        </div>
        <div className="bottom_header_classification_about_page">
          <p>Welcome to Made-in-China.com!</p>
          <div>
            We have the widest selection of machinery industrial areas in China,
            like
            <a href="#">Zhangjiagang Injection Molding Machine</a> ,
            <a href="#">Suzhou Plastic Machinery,</a>
            <a href="#">Shanghai Engineering Construction Machinery</a>and so
            on. Browse our selection of manufacturing & processing machinery
            catalog. Featuring China suppliers and wholesalers with their
            products and services, Made-in-China.com is the best platform for
            you and helps you source from China.
          </div>
        </div>
      </div>
    </>
  );
};

export default Header_classfication_cat_A;
