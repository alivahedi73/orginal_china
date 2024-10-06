import "./Page_first_categorize.scss"
import Slider_page_one from "./Slider_page_one/Slider_page_one";
import Left_categorize_page_1 from "./Left_categorize_page_1/Left_categorize_page_1";
import FlexBoxSlider from "./FlexboxSlider_one_page/FlexboxSlider_one_page";
import FlexboxSlider_one_page from "./FlexboxSlider_one_page/FlexboxSlider_one_page";
import Right____all_cat_page_home from "./Right____all_cat_page_home/Right____all_cat_page_home";
const Page_first_categorize = () => {
    return (
      <>
        {/* start of project */}
        <div className="main_cat">
          <div className="w_cat">
            {/* start of right categorize */}
            <div className="left__cat">
              <Left_categorize_page_1 />
            </div>
            {/* end of right categorize */}
            {/* start of center categorize */}
            <div className="center___cat">
              <div className="sl_1">
                <Slider_page_one />
              </div>
              <div className="FlexBox__cat">
                <FlexboxSlider_one_page />
              </div>
            </div>
            {/* end of center categorize */}
            {/* start of right of menu */}
            <div className="right___cat">
              <Right____all_cat_page_home />
            </div>
            {/* end of right of menu */}
          </div>
        </div>
        {/* end of project */}
      </>
    );
}
 
export default Page_first_categorize;