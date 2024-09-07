import Left from "../Main_cat_sub/Left/Left";
import FlexBoxSlider from "../Main_cat_sub/FlexboxSlider/FlexBoxSlider";
import Right from "../Main_cat_sub/Right/Right";
import Slider from "../Main_cat_sub/Slider/Slider";
import "./Main_cat.scss";


const Main_cat = () => {
  return (
    <>
      {/* start of project */}
      <div className="main_cat">
        <div className="w_cat">
          {/* start of right categorize */}
          <div className="left__cat">
            <Left />
          </div>
          {/* end of right categorize */}
          {/* start of center categorize */}
          <div className="center___cat">
            <div className="sl_1">
              <Slider />
            </div>
            <div className="FlexBox__cat">
              <FlexBoxSlider />
            </div>
          </div>
          {/* end of center categorize */}
          {/* start of right of menu */}
          <div className="right___cat">
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
