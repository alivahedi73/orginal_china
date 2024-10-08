
import "./FlexboxSlider_one_page.scss";
import {FlexBoxSlider} from "../data_Page_first_categorize"
const FlexboxSlider_one_page = () => {
  let flex = FlexBoxSlider;
  return (
    <>
      <div className="sl_2">
        {flex.map((item, index) => {
          return (
            <div key={index}>
              {item.class ? (
                <a href="#" className="s_1" key={index + 1}>
                  <img src={item.src} alt={item.alt} />
                  <p className="s_1_P">{item.pfirst}</p>
                  <p className="sp1_hover">{item.psecond}</p>
                  <p className="s_hover">&#8594;</p>
                </a>
              ) : (
                <a href="#" className="s_2" key={item.id}>
                  <img src={item.src} className="s2Img" alt={item.alt} />
                  <p className="s2P">{item.pfirst}</p>
                  <div className="sp_hover">&#8594;</div>
                </a>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FlexboxSlider_one_page;
