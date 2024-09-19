import "./Footter_product.scss";
import { footer, footter_languge } from "./data_Footter_product";
const Footter_product = () => {
  return (
    <>
      <div className="Footer___main">
        <div className="hotproduct_footer">
          {footer.map((item, index) => {
            return (
              <div className="hot_sub" key={index}>
                <a href={item.href} className="hot_sub_a">
                  {item.name}
                </a>
                {item.id == footer.length ? <></> : <span>|</span>}
              </div>
            );
          })}
        </div>
        <div className="languge_footer">
          <div className="lan_1">
            <p>Language Options: </p>
          </div>
          {footter_languge.map((item, index) => {
            return (
              <div className="hot_sub" key={index}>
                <a href={item.href} className="hot_sub_a">
                  {item.name}
                </a>
                {item.id == footter_languge.length ? <></> : <span>|</span>}
              </div>
            );
          })}
        </div>
        <div className="footer_coppyright">
          <span> Copyright © 1998-2024 </span>
          <a href="#">Focus Technology Co., Ltd. </a>
          <span>All Rights Reserved.</span>
          <div className="endfooter">
            <span>|</span>
            <a href="#">User Agreement</a>
          </div>
          <div className="endfooter">
            <span>|</span>
            <a href="#">Declaration</a>
          </div>
          <div className="endfooter">
            <span>|</span>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footter_product;
