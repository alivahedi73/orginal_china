import Menu from "../Menu/Menu";
import "./Left.scss";
const Left = () => {
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
          <Menu />
        </div>
        {/* end of menu in categorize */}
      </div>
      {/* end of menu */}
    </>
  );
};

export default Left;
