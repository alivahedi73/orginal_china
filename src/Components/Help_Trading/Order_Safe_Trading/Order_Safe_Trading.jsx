import "./Order_Safe_Trading.scss";
import { order___tra } from "./data_Order_Safe_Trading";
import CircleIcon from "@mui/icons-material/Circle";
const Order_Safe_Trading = () => {
  return (
    <>
      <div className="order_trading">
        <h2 className="order_h2">How to Keep the Order Safe?</h2>
        <div className="order_div">
          <div className="order_1">
            <img
              src="../../../../public/assets/Images/Help_Trading/pub-how.png"
              alt=""
            />
          </div>
          <div className="order_2">
            {order___tra.map((item,index)=>{
                return (
                  <div className="main_order" key={index}>
                    <div className="order_2_1">
                        <CircleIcon />
                    </div>
                    <div className="order_2_2">
                        <h5>{item.title}</h5>
                        <div className="order_pt">{item.p}
                            {item.link?<a href={item.href} className="order_link">{item.a}</a>:<></>}
                        </div>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order_Safe_Trading;
