import Menu from "../Menu/Menu";
import "./Left.css";
import { TfiMenuAlt } from "react-icons/tfi";
const Left = () => {
  return (
    <>
      {/* start of Menu */}
      <div className="menu_cat col-xxl-12 col-xl-12">
        {/* start of title project */}
        <div className="ti_cat col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1">
          <p className="pCat">
            <TfiMenuAlt />
          </p>
          <a href="#" className="linkCat">
            Categories
          </a>
        </div>
        {/* end of title project */}
        {/* start of menu in categorize */}
        <div className="Menu__catmain col-xxl-12 col-xl-12">
          <Menu />
        </div>

        {/* end of menu in categorize */}
      </div>
      {/* end of menu */}
    </>
  );
};

export default Left;
