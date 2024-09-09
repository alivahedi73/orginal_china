import "./Main_Product.scss";
import Slider_Product from "./Slider_Product/Slider_Product";
import { product_detail } from "../Product_data";
const Main_Product = () => {
  console.log(product_detail[0].title);
  
  return (
    <>
      <div className="main_product">
        <div className="describe_product">
          <div className="des1__product">
            {/* start slider */}
            <div className="Slider_product">
              <Slider_Product />
            </div>
            {/* end of slider */}
          </div>
          <div className="des2__product">
            <div className="des2_title">
              <h1 className="pr_des2_ti">{product_detail[0].title}</h1>
              <div className="pr_des2_ti2">
                <img src={product_detail[0].svg_top_src} alt="" />
                <div className="pr-des2-div">
                  <p>{product_detail[0].svg_red_name}</p>
                  <span>{product_detail[0].svg_name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_Product;
