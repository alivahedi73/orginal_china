import "./Find_Suppliers.scss";
import { find_data_sup } from "./data_Find_Suppliers";
const Find_Suppliers = () => {
  return (
    <>
      <div className="find_suppliers_main">
        <div className="eight_major_header">
          <div className="eight_head"></div>
          <h3 className="eight_header">How to Find Audited Suppliers</h3>
          <div className="eight_head"></div>
        </div>
        {find_data_sup.map((item, index) => {
          return (
            <div className="major_div_img" key={index}>
              <img src={item.src} alt={item.alt} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Find_Suppliers;
