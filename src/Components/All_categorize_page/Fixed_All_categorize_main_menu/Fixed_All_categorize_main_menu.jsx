import "./Fixed_All_categorize_main_menu.scss";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import FeedIcon from "@mui/icons-material/Feed";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import { useEffect, useState } from "react";
const Fixed_All_categorize_main_menu = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 400);
      });
    });
  return (
    <>
      <div className="Fixed_All_caategorize_A">
        <a className="Fixed___1" href="#">
          <TrackChangesIcon />
          <p>RFQ</p>
          <div className="abs__Fixed___1">
            <a href="#">Post Sourcing Request</a>
          </div>
        </a>
        <a className="Fixed___1" href="#">
          <SupportAgentIcon />
          <p>Help</p>
          <div className="abs__Fixed___1__1">
            <a href="#">Any questions about our website? Talk to me!</a>
          </div>
        </a>
        <a className="Fixed___1" href="#">
          <TabletMacIcon />
          <p>App</p>
          <div className="abs__Fixed_google">
            <div className="rottate_abs"></div>
            <div className="ab_fixed_1" title="Download Made-in-China.com">
              Download Made-in-China.com App
            </div>
            <p className="ab_fixed_2">
              Safely Tap into Promising Chances Anytime.
            </p>
            <div className="abs_img_div">
              <a href="#" className="link_abs_num1">
                <img
                  src="../../../../public/assets/Image/all_categorize/fixed_1.png"
                  alt=""
                />
              </a>
              <div className="link_abs_num2">
                <a href="#" className="link_link_1">
                  <img
                    src="../../../../public/assets/Image/all_categorize/fixed_2.png"
                    alt=""
                  />
                </a>
                <a href="#" className="link_link_1">
                  <img
                    src="../../../../public/assets/Image/all_categorize/fixed_3.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </a>
        <a className="Fixed___1" href="#">
          <FeedIcon />
          <div className="abs__Fixed___1">
            <a href="#">Leave Feedback</a>
          </div>
        </a>
        <a
          className="Fixed___1"
          href="#"
          style={
            scroll
              ? { opacity: "1" }
              : { opacity: "0" }
          }
        >
          <VerticalAlignTopIcon />
          <div className="abs__Fixed___1">
            <a href="#">Back To Top</a>
          </div>
        </a>
      </div>
    </>
  );
};

export default Fixed_All_categorize_main_menu;
