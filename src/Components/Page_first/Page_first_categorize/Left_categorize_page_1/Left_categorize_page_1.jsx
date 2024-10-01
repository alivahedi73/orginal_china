// import Menu from "../Menu/Menu";
import "./Left_categorize_page_1.scss";
import Menu_page_one_product from "./Menu_page_one_product/Menu_page_one_product";
const Left_categorize_page_1 = () => {
  return (
    <>
      {/* start of Menu */}
      <div className="menu_cat">
        {/* start of title project */}
        <div className="ti_cat">
          <p className="pCat">&#8801;</p>
          <a href="#" className="linkCat">
            Categories
          </a>
        </div>
        {/* end of title project */}
        {/* start of menu in categorize */}
        <div className="Menu__catmain">
          <Menu_page_one_product />
        </div>
        {/* end of menu in categorize */}
      </div>
      {/* end of menu */}
    </>
  );
};

export default Left_categorize_page_1;
