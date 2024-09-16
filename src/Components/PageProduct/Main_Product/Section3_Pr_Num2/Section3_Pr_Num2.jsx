import { useState } from "react";
import Section3_num2_slider1 from "./Section3_num2_slider1/Section3_num2_slider1";
import "./Section3_Pr_Num2.scss";
import {
  section3____pr_detail_product,
  sect3____pargraph,
  section3___trade,
  section3_trade1,
} from "../Section3_Pr_Num2/data__Section3_pr_Num2";
import { BorderTop } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Section3_pr_company_slider from "./Section3_pr_company_slider/Section3_pr_company_slider";
const Section3_Pr_Num2 = () => {
  let [click, setClick] = useState(true);
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
            <div className="Section3__product__num2_companyProfile_n1_sub2">
              {section3____pr_detail_product.map((item, index) => {
                return (
                  <div
                    className={`${
                      item.br ? "SEC3_PR_Main_br SEC3_PR_Main" : "SEC3_PR_Main"
                    }`}
                    key={index}
                  >
                    <div className="SEC3_PR_Main_left">
                      <p>{item.title}</p>
                    </div>
                    <div className="SEC3_PR_Main_right">
                      <p>{item.detail}</p>
                      {item.subtitle == "" ? <></> : <a>{item.subtitle}</a>}
                      {item.aftersubtitle == "" ? (
                        <></>
                      ) : (
                        <span>{item.aftersubtitle}</span>
                      )}
                      {item.a.map((i, index) => {
                        return (
                          <div key={index}>
                            <a href={i.href} key={index}>
                              {i.name}
                            </a>
                            <span>{i.after}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* end side bar in company profile */}
          </div>
          <div className="Section3__product__num2_companyProfile__pragraph">
            <p className="Section3__product__num2_companyProfile__pragraph_p1">
              {sect3____pargraph[0].p}
            </p>
            {click ? <p className="sec3__p_hidden">....</p> : <></>}
            <div
              className={`${
                click
                  ? "Sec3___product__companyprofile_____show__hidden"
                  : "Sec3___product__companyprofile_____show"
              }`}
            >
              <p>{sect3____pargraph[1].p}</p>
              <p>{sect3____pargraph[2].p}</p>
            </div>
            <div
              className="Section3__product__num2_companyProfile__pragraph__hidden"
              onClick={() => setClick(!click)}
            >
              {click ? (
                <div className="sec3____hidden">
                  <p>Veiw All</p>
                  <span>
                    <KeyboardArrowDownIcon />
                  </span>
                </div>
              ) : (
                <div className="sec3____hidden">
                  <p>Veiw Less</p>
                  <span>
                    <KeyboardArrowUpIcon />
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* end of company profile */}
        {/* start of trade project */}
        <div className="section3_product_num2_Trade_Capacity_main">
          <h3 className="section3_product_num2_Trade_Capacity_main_h3">
            Trade Capacity
          </h3>
          <div className="section3_product_num2_Trade_Capacity_main_div1">
            {section3___trade.map((item, index) => {
              return (
                <div className="trade_div" key={index}>
                  <div className="trade_left">{item.title}</div>
                  <div className="trade_right">{item.detial}</div>
                </div>
              );
            })}
          </div>
          <h3 className="section3_product_num2_Trade_Capacity_main_h3">
            Production Capacity
          </h3>
          <div className="section3_product_num2_Trade_Capacity_main_div2">
            {section3_trade1.map((item, index) => {
              return (
                <div className="trade_div" key={index}>
                  <div className="trade_left">{item.title}</div>
                  {item.table ? (
                    <div className="trade_right">
                      {item.table_br.map((i, index) => {
                        return (
                          <div className="trade_right_table" key={index}>
                            <div
                              className={`${
                                i.id == 1 ? "show" : ""
                              } trade_right_table_left`}
                            >
                              {i.name}
                            </div>
                            <div
                              className={`${
                                i.id == 1 ? "show" : ""
                              } trade_right_table_right`}
                            >
                              {i.detail}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="trade_right">{item.detail}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* end of trade project */}
        {/* start of company show */}
        <div className="section3_product_num2_CompanyShow_main">
          <h3 className="section3_product_num2_CompanyShow_h3">Company Show</h3>
          <Section3_pr_company_slider />
        </div>
        {/* end of company show */}
      </div>
    </>
  );
};

export default Section3_Pr_Num2;
