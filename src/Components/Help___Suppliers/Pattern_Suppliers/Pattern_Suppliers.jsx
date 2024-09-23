import "./Pattern_Suppliers.scss";
import { card_pattern__1, benfit_card } from "./data_Pattern_Suppliers";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DoneIcon from "@mui/icons-material/Done";
const Pattern_Suppliers = () => {
  return (
    <>
      <div className="main_pattern">
        <div className="pattern__supp">
          <div className="eight_major_header">
            <div className="eight_head"></div>
            <h3 className="eight_header">Cooperation Partners Introduction</h3>
            <div className="eight_head"></div>
          </div>
          {/* start of card */}
          <div className="card_pattern">
            {card_pattern__1.map((item, index) => {
              return (
                <div className="Card_main_pattern" key={index}>
                  <div className="card_img_pattern">
                    <img src={item.src} alt="" className="img___card" />
                    <a href={item.href} className="card_absoulte_pat">
                      <p>{item.name}</p>
                      <span>
                        <KeyboardArrowRightIcon />
                      </span>
                    </a>
                  </div>
                  <a href={item.href} className="link_report_card">
                    Report Sample
                  </a>
                </div>
              );
            })}
          </div>
          {/*end of card */}
          <div className="eight_major_header">
            <div className="eight_head"></div>
            <h3 className="eight_header">
              Benefits you can enjoy by choosing Audited Suppliers
            </h3>
            <div className="eight_head"></div>
          </div>
          <div className="benfit_div">
            <div className="benfit_1">
              <img
                src="../../../../public/assets/Images/Help_suppliers/benfit_supplier.jpg"
                alt=""
              />
            </div>
            <div className="benfit_2">
              {benfit_card.map((item, index) => {
                return (
                  <div className="div_benfit_card" key={index}>
                    <div className="span_benfit____card">
                      <span>
                        <DoneIcon />
                      </span>
                    </div>
                    <div className="P-benfit___card">
                      <p className="title_p_benfit">{item.title}</p>
                      <p className="benfit_p_card">{item.p}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pattern_Suppliers;
