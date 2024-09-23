import "./Eight_major_suppliers.scss";
import { eight_major___data } from "./data_Eight_major_suppliers";
const Eight_major_suppliers = () => {
  return (
    <>
      <div className="eight_major_main">
        <div className="eight_major">
          <div className="eight_major_header">
            <div className="eight_head"></div>
            <h3 className="eight_header">
              Eight Major Capability Certifications
            </h3>
            <div className="eight_head"></div>
          </div>
          <div className="main__eight_major">
            {eight_major___data.map((item, index) => {
              return (
                <div className="div_major" key={index}>
                  <img src={item.src} alt={item.alt} />
                  <div className="major_abs">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Eight_major_suppliers;
