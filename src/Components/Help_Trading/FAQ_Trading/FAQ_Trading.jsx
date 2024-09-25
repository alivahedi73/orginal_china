import "./FAQ_Trading.scss";
import FAQ_menu_laptop from "./FAQ_menu_laptop/FAQ_menu_laptop";
import FAQ_menu_mobile from "./FAQ_menu_mobile/FAQ_menu_mobile";
const FAQ_Trading = () => {
  return (
    <>
      <div className="FAQ">
        <div className="FAQ_title">FAQ</div>
        <div className="FAQ_Link_div">
          <a href="#" className="FAQ_Link">
            Find all Frequently Asked Questions in Buyer's Guide
          </a>
        </div>
        {/* laptop  */}
        <FAQ_menu_laptop />
        {/* laptop */}
        {/* mobile */}
        <FAQ_menu_mobile />
        {/* mobile */}
      </div>
    </>
  );
};

export default FAQ_Trading;
