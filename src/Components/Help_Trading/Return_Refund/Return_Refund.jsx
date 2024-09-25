import "./Return_Refund.scss";
import { data_return } from "./data_Return_Refund";
const Return_Refund = () => {
  return (
    <>
      <div className="return_refound">
        <div className="return_main_refound">
          <div className="return_header">Return & Refund</div>
          <div className="FAQ_Link_div">
            <a href="#" className="FAQ_Link">
              Read the full Return & Refund rules.
            </a>
          </div>
          <div className="return_flex">
            {data_return.map((item, index) => {
              return (
                <div className="card_return" key={index}>
                  <div className="card_title_return">
                    <img
                      src="../../../../public/assets/Images/Help_Trading/question.png"
                      alt=""
                    />
                    <div className="card__ti_return">{item.title}</div>
                  </div>
                  <div className="return_card_paragraph">{item.paragraph}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Return_Refund;
