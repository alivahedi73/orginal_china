import Compon_left_side_menu_card from "./compon_left_side_menu_card/compon_left_side_menu_card";
import Component_card_right_side_menu from "./Component_card_right_side_menu/Component_card_right_side_menu";
import "./Component_menu_and_card.scss";
import Menu_bar_components_mobile from "./Menu_bar_components_mobile/Menu_bar_components_mobile";
const Component_menu_and_card = ({rang,data_left,data_right}) => {
  return (
    <>
      <div className="menu_card_components" id="test">
        <div className="menu_bar_components">
          <Compon_left_side_menu_card rang={rang} data={data_left}/>
        </div>
        <Menu_bar_components_mobile data={data_left}  />
        <div className="side_card_components">
          <Component_card_right_side_menu data={data_right}  />
        </div>
      </div>
    </>
  );
};

export default Component_menu_and_card;
