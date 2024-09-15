import { useState } from "react";
import Section3_num2_slider1 from "./Section3_num2_slider1/Section3_num2_slider1";
import "./Section3_Pr_Num2.scss";
const Section3_Pr_Num2 = () => {
  return (
    <>
      <div className="Section3__product__num2">
        {/* start of company profile */}
        <div className="Section3__product__num2_companyProfile">
          <h3 className="Section3__product__num2_companyProfile_h3">
            Company Profiles
          </h3>
          <div className="Section3__product__num2_companyProfile_n1">
            {/* start slider company profile */}
            <div className="Section3__product__num2_companyProfile_n1_sub1">
              <div className="section3_pr__num2__slider1">
                <Section3_num2_slider1 />
              </div>
              <a href="#" className="section3_pr__num2__slider1_a">
                Book Factory Tour
              </a>
            </div>
            {/* end slider company profile */}
            {/* start detail side bar in company profile */}
            <div className="Section3__product__num2_companyProfile_n1_sub2"></div>
            {/* end side bar in company profile */}
          </div>
        </div>
        {/* end of company profile */}
      </div>
    </>
  );
};

export default Section3_Pr_Num2;
