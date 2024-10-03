import "./Component_card_right_side_menu.scss";
import {data_card_menu_left_num1} from "../../../../data_all_categorize"
const Component_card_right_side_menu = () => {
  return (
    <>
      <div className="compentes_card_flex_right">
        {data_card_menu_left_num1.map((item,index)=>{
            return <a href={item.href} className="data_card_flex_link" key={index}>
                <img src={item.src} alt="" />
                <a href={item.href}>{item.name}</a>
            </a>
        })}
      </div>
    </>
  );
};

export default Component_card_right_side_menu;
