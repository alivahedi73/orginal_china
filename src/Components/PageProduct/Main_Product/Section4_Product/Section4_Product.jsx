import "./Section4_Product.scss";
import {sec4_pr_pupolar} from "./Data_Section4_Product"
const Section4_Product = () => {
  return <>
  <div className="sec4_pr_main">
    {sec4_pr_pupolar.map((item,index)=>{
        return (
          <a
            href={item.href}
            className="sec4_pr_div"
            key={index}
            title={item.title_img}
          >
            <div className="sec4_pr_div_img">
              <img src={item.src} alt="" />
            </div>
            <div className="sec4_pr_div_p">{item.name}</div>
            <div className="sec4_pr_div_p_1">
              <p>{item.price}</p>
              <span> / Piece</span>
            </div>
          </a>
        );
    })}
  </div>
  </>;
};

export default Section4_Product;
