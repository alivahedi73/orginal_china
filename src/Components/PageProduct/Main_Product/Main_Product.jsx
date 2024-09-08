import "./Main_Product.scss"
import Slider_Product from "./Slider_Product/Slider_Product";
const Main_Product = () => {
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
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Main_Product;