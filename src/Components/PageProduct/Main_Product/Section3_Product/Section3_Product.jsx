import "./Section3_Product.scss";
import {
  section3_connect,
  section3_title,
} from "../Section3_Product/data_section3_product";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useState } from "react";
import Section3_Pr_Num2 from "../Section3_Pr_Num2/Section3_Pr_Num2";
import Section3_Pr_Num1 from "../Section3_Pr_Num1/Section3_Pr_Num1";
const Section3_Product = () => {
  let [click, setClick] = useState(false);
  return (
    <>
      <div className="proudct3_section3_sub">
        {/* start of categorize */}
        <div className="proudct3_section3_sub_menu">
          <div className="proudct3_section3_sub_menu_main">
            <div className="proudct3_section3_sub_menu_main_num1">
              <div
                className={`${
                  click
                    ? "proudct3_section3_sub_menu_main_num1_click1"
                    : "proudct3_section3_sub_menu_main_num1_click1_active"
                }`}
                onClick={() => setClick(false)}
              >
                Product Description
              </div>
              <div
                className={`${
                  click
                    ? "proudct3_section3_sub_menu_main_num1_click2_active"
                    : "proudct3_section3_sub_menu_main_num1_click2"
                }`}
                onClick={() => setClick(true)}
              >
                Company Info.
              </div>
              <div></div>
            </div>
            <div className="proudct3_section3_sub_menu_main_num2">
              {click ? (
                <>
                  <div
                    className="proudct3_section3_sub_menu_main_num2_sub"
                    id="sec3_sub1_num1"
                  >
                    {section3_title[1].name[0]}
                  </div>
                  <div
                    className="proudct3_section3_sub_menu_main_num2_sub"
                    id="sec3_sub1_num2"
                  >
                    {section3_title[1].name[1]}
                  </div>
                  <div
                    className="proudct3_section3_sub_menu_main_num2_sub"
                    id="sec3_sub1_num3"
                  >
                    {section3_title[1].name[2]}
                  </div>
                  <div
                    className="proudct3_section3_sub_menu_main_num2_sub"
                    id="sec3_sub1_num4"
                  >
                    {section3_title[1].name[3]}
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="proudct3_section3_sub_menu_main_num2_sub"
                    id="sec3_sub2_num1"
                  >
                    {section3_title[0].name[0]}
                  </div>
                  <div
                    className="proudct3_section3_sub_menu_main_num2_sub"
                    id="sec3_sub2_num1"
                  >
                    {section3_title[0].name[1]}
                  </div>
                  <div
                    className="proudct3_section3_sub_menu_main_num2_sub"
                    id="sec3_sub1_num1"
                  >
                    {section3_title[0].name[2]}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="proudct3_section3_sub_menu_des">
            {click ? <Section3_Pr_Num2 /> : <Section3_Pr_Num1 />}
          </div>
        </div>
        {/* end of categorize */}
        {/* start of connect panel */}
        <div className="proudct3_section3_sub_connect">
          <div className="proudct3_section3_sub_connect_div1">
            <a
              href={section3_connect[0].href}
              className="proudct3_section3_sub_connect_div1_num1"
            >
              <img src={section3_connect[0].img_company} alt="" />
            </a>
            <div className="proudct3_section3_sub_connect_div1_num2">
              <a href={section3_connect[0].href}>
                <p>
                  {" "}
                  {section3_connect[0].name_company} <ChevronRightIcon />{" "}
                </p>
              </a>
              <div className="proudct3_section3_sub_connect_div1_num2_sub">
                <p>{section3_connect[0].star_company}</p>
                <span>
                  <StarRateIcon />
                </span>
                <img
                  src="../../../../../public/assets/Images/product/section3_product/svg1.png"
                  alt=""
                />
                <img
                  src="../../../../../public/assets/Images/product/section3_product/svg2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="proudct3_section3_sub_connect_div2">
            <img
              src="../../../../../public/assets/Images/product/section3_product/profile.jpg"
              alt=""
            />
            <div className="proudct3_section3_sub_connect_div2_sub1">
              <p>{section3_connect[0].name_person}</p>
              <span>
                <AddBusinessIcon title="Business Card" />
              </span>
            </div>
          </div>
          <a
            href="section3_connect[0].connect_button_href"
            className="proudct3_section3_sub_connect_div3"
          >
            <span>
              <MailOutlineIcon />
            </span>
            <p>Contact Supplier</p>
          </a>
          <a
            className="proudct3_section3_sub_connect_div4"
            href={section3_connect[0].chat_button_href}
          >
            <img
              src="../../../../../public/assets/Images/product/section3_product/chat_icon.gif"
              alt=""
            />
            <p>Chat</p>
          </a>
        </div>
        {/* end of connect panel */}
      </div>
    </>
  );
};

export default Section3_Product;
