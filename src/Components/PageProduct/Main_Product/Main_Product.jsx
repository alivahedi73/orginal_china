import "./Main_Product.scss";
import Slider_Product from "./Slider_Product/Slider_Product";
import "../../styles/index.scss";
import Right_Product from "./Right_Product/Right_Product";
import Section2_product from "./Section2_product/Section2_product";
import Section3_Product from "./Section3_Product/Section3_Product";
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
    </>
  );
};

export default Main_Product;
