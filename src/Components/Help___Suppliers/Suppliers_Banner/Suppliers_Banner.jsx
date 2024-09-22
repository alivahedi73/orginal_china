import "./Suppliers_Banner.scss";
import { data_suppliers__banner } from "./data_Suppliers_Banner";
const Suppliers_Banner = () => {
  return (
    <>
      <div className="help_suppliers_banner">
        <div className="help_suppliers_main">
          <img
            src={data_suppliers__banner[0].src}
            alt={data_suppliers__banner[0].src}
            className="suppliers_banner_img"
          />
        </div>
      </div>
    </>
  );
};

export default Suppliers_Banner;
