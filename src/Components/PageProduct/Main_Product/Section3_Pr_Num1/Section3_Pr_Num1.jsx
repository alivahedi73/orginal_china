import "./Section3_Pr_Num1.scss";
import {
  data_sec3_pr_num1,
  data_sec3_productDescription,
  data_sec3_img,
  company_info_img,
  company_Information,
} from "./data_section3_pr_Num1";
import { useInViewContext } from "../../../../Context/ContextProvider";
const Section3_Pr_Num1 = () => {
  let data = data_sec3_pr_num1;
  let product = data_sec3_productDescription;
  let img_pr = data_sec3_img;
  const { sec3_Ref_1, sec3_Ref_2, sec3_Ref_3 } = useInViewContext();
  return (
    <>
      <div className="Section3__product__num1">
        {/* start of basic info */}
        <div className="Section3__product__BasicInfo" ref={sec3_Ref_1}>
          <h3 className="Section3__product__BasicInfo_h3" id="prode_1">
            Basic Info.
          </h3>
          {/* start detail basic info */}
          <div className="Section3__product_BasicInfo__div">
            {data.map((item, index) => {
              return (
                <div
                  className="Section3__product_BasicInfo__div_main"
                  key={index}
                >
                  <div className="Section3__product_BasicInfo__div_sub">
                    <div className="sec3___pr_basic_left">
                      {item.name_left_1}
                    </div>
                    <div className="sec3___pr_basic_right">
                      {item.name_right_1}
                    </div>
                  </div>
                  <div className="Section3__product_BasicInfo__div_sub">
                    <div className="sec3___pr_basic_left">
                      {item.name_left_2}
                    </div>
                    <div className="sec3___pr_basic_right">
                      {item.name_right_2}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* end detail basic info */}
        </div>
        {/* end of basic info */}
        {/* start of product description */}
        <div className="Section3__product_productDescription" ref={sec3_Ref_2}>
          <h3 className="Section3__product__productDescription_h3" id="prode_2">
            Product Description
          </h3>
          <a href={product[0].href} className="section3__product_prDes_a1">
            <img src={product[0].src} alt={product[0].alt} />
          </a>
          <div className="section3__product_prDes_divblue">
            Product Description
          </div>
          <div className="section3__product_prDes_titleblue">
            {product[1].title}
          </div>
          {img_pr.map((item, index) => {
            return (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className="sec3_pr___img"
              />
            );
          })}
        </div>
        {/* end of product description */}
        {/* start of company information */}
        <div className="Section3__CompanyInfo_main" ref={sec3_Ref_3}>
          <div className="sec3__company_div1" id="prode_3"></div>
          <h4>Introduction:</h4>
          <p>{company_Information[0].p}</p>
          <div className="sec3__company_div2">Company Profile</div>
          {company_info_img.map((item, index) => {
            return (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className="sec3__company_img_des"
              />
            );
          })}
        </div>
        {/* end of company information */}
      </div>
    </>
  );
};

export default Section3_Pr_Num1;
