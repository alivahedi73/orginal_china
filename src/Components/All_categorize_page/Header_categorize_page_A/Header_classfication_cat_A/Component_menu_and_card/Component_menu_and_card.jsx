import Compon_left_side_menu_card from "./compon_left_side_menu_card/compon_left_side_menu_card";
import Component_card_right_side_menu from "./Component_card_right_side_menu/Component_card_right_side_menu";
import "./Component_menu_and_card.scss";
import Menu_bar_components_mobile from "./Menu_bar_components_mobile/Menu_bar_components_mobile";
const Component_menu_and_card = () => {
  return (
    <>
      <div className="menu_card_components">
        <div className="menu_bar_components">
          <Compon_left_side_menu_card />
        </div>
        <Menu_bar_components_mobile />
        <div className="side_card_components">
          <Component_card_right_side_menu />
        </div>
      </div>
    </>
  );
};

export default Component_menu_and_card;
