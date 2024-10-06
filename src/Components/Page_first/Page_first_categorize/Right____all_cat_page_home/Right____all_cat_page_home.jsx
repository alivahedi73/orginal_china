import "./Right____all_cat_page_home.scss";
import { TbTargetArrow } from "react-icons/tb";
import { right } from "../data_Page_first_categorize";
const Right____all_cat_page_home = () => {
  let rcat = right;
  return (
    <>
      <div className="main_right">
        <div className="mr_1">you may like</div>
        {rcat.map((item, index) => {
          return (
            <a href={item.href} className="mr_2" key={index}>
              <div className="main_mr">
                <img src={item.src} alt="" />
                <div className="m_mr_2">
                  <p className="mr_3">{item.name}</p>
                  <p className="mr_4">{item.p}</p>
                </div>
              </div>
            </a>
          );
        })}

        <p className="mr_5">No desirable products?</p>
        <a href="#" className="req_mr">
          <div className="req_1">
            <p className="muy">
              <TbTargetArrow style={{ fontSize: "25px" }} />
            </p>
            <p>post your request now</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Right____all_cat_page_home;
