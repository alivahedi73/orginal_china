import "./Why_choose_Suppliers.scss";
import {
  Why_choose_Suppliers_img,
  end_chosse,
} from "./data_Why_choose_Suppliers";
const Why_choose_Suppliers = () => {
  return (
    <>
      <div className="why_choose_main">
        <div className="supplier_header">
          <div className="squre_sup_head"></div>
          <h3 className="why_choose_header">Why Choose Audited Suppliers?</h3>
          <div className="squre_sup_head"></div>
        </div>
        <div className="class_suuplier">
          <div className="p_supplier_main_1">
            An Audited Supplier is authentic and has already been on-site
            verified. It will be marked with “Audited Supplier” logo.To
            facilitate efficient business opportunity matching,
            Made-in-China.com has upgraded Audited Supplier services in June
            2023, members with{" "}
            <img src={Why_choose_Suppliers_img[0].src} alt="" /> and{" "}
            <img src={Why_choose_Suppliers_img[1].src} alt="" /> are all our
            certified suppliers.
            <br />
            For presenting Chinese suppliers to global buyers and reducing
            transaction risks, Made-in-China.com has launched "Audited Supplier"
            since 2007 and entrusted SGS, Bureau Veritas, TÜVRheinland and CTI,
            the world's leading inspection companies, to verify the authenticity
            of premium suppliers on the platform and produce an objective and
            comprehensive audit report for each supplier. All audit reports are
            available online for free.
          </div>
        </div>
        <div className="supplier_header">
          <div className="squre_sup_head"></div>
          <h3 className="why_choose_header">
            Learn more about the complete audit process
          </h3>
          <div className="squre_sup_head"></div>
        </div>
        <div className="end_why_choose">
          {end_chosse.map((item, index) => {
            return <div className="end__1" key={index}>
                <div className="card_end_1"></div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Why_choose_Suppliers;
