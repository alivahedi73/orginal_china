import Left from "../Main_cat_sub/Left/Left";
import FlexBoxSlider from "../Main_cat_sub/FlexboxSlider/FlexBoxSlider";
import Right from "../Main_cat_sub/Right/Right";
import "./Main_cat.css";
import Slider from "../Main_cat_sub/Slider/Slider";
const Main_cat = () => {
  return (
    <>
      {/* start of project */}
      <div className="main_cat col-xs-12">
        <div className="w_cat col-xs-10 offset-xs-1">
          {/* start of right categorize */}
          <div className="left__cat col-xxl-3 col-xl-4 col-xs-0">
            <Left />
          </div>
          {/* end of right categorize */}
          {/* start of center categorize */}
          <div className="center___cat col-xxl-6 col-xl-8 col-xs-12">
            <div className="sl_1 col-xxl-12 offset-xxl-0 col-xs-10 offset-xs-1">
              <Slider />
            </div>
            <div className="FlexBox__cat col-xs-12">
              <FlexBoxSlider />
            </div>
          </div>
          {/* end of center categorize */}
          {/* start of right of menu */}
          <div className="right___cat col-xxl-3 col-xs-0">
            <Right />
          </div>
          {/* end of right of menu */}
        </div>
      </div>
      {/* end of project */}
    </>
  );
};

export default Main_cat;
