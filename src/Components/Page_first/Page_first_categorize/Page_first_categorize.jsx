import "./Page_first_categorize.scss"
import Slider_page_one from "./Slider_page_one/Slider_page_one";
import Left_categorize_page_1 from "./Left_categorize_page_1/Left_categorize_page_1";
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
                {/* <FlexBoxSlider /> */}
              </div>
            </div>
            {/* end of center categorize */}
            {/* start of right of menu */}
            <div className="right___cat">
              {/* <Right /> */}
            </div>
            {/* end of right of menu */}
          </div>
        </div>
        {/* end of project */}
      </>
    );
}
 
export default Page_first_categorize;