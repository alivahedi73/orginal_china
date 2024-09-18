import "./Main_Product.scss";
import Slider_Product from "./Slider_Product/Slider_Product";
import "../../styles/index.scss";
import Right_Product from "./Right_Product/Right_Product";
import Section2_product from "./Section2_product/Section2_product";
import Section3_Product from "./Section3_Product/Section3_Product";
import Section4_Product from "./Section4_Product/Section4_Product";
import Section5_Product from "./Section5_Product/Section5_Product";
import ChatIcon from "@mui/icons-material/Chat";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
const Main_Product = () => {
  return (
    <>
      {/* start of section one */}
      <div className="main_product">
        <div className="describe_product">
          <div className="des1__product">
            {/* start slider */}
            <div className="Slider_product">
              <Slider_Product />
            </div>
            {/* end of slider */}
          </div>
          {/* start of right slider */}
          <div className="des2__product">
            <Right_Product />
          </div>
          {/* end of right slider */}
        </div>
      </div>
      {/* End of section one */}
      {/* start of section two */}
      <div className="main_product_sec2">
        <Section2_product />
      </div>
      {/* End of section two */}
      {/* start of section three */}
      <div className="main_product_sec3">
        <Section3_Product />
      </div>
      {/* end of section three */}
      {/* start of section four */}
      <div className="main_product_sec4">
        <h3>People who viewed this also viewed</h3>
        <Section4_Product />
        <div className="main_product_sec5">
          <h3>Watch Related Videos</h3>
          <Section5_Product />
        </div>
      </div>
      {/* start of connect mobile */}
      <div className="mobile_fix_connect">
        <a href="#" className="mobile_1">
          <div>
            <div>
              <ChatIcon />
            </div>
            <span>Chat</span>
          </div>
        </a>
        <a href="#" className="mobile_1">
          <div>
            <div>
              <DashboardCustomizeIcon />
            </div>
            <span>Customizer</span>
          </div>
        </a>
        <div className="button_fix">
          contact Supplier
        </div>
      </div>
      {/* end of connect mobile */}
      {/* end of section four */}
    </>
  );
};

export default Main_Product;
