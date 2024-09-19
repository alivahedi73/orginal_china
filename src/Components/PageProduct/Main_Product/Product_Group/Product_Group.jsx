import "./Product_Group.scss";
import SearchIcon from "@mui/icons-material/Search";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { product_group, production_address } from "./data_Product_Group";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Product_Group = () => {
  return (
    <>
      <div className="Product_group_main">
        <h4 className="pr_group_h4">Product Groups</h4>
        <div className="group_search">
          <div className="div_1_group">
            <input
              type="text"
              id="search_proudct_group"
              placeholder="Search Products"
            />
            <div className="button_search">
              <SearchIcon />
            </div>
          </div>
          <div className="div_2_group">
            <span>
              <PictureAsPdfIcon />
            </span>
            <a href="#">Product Catalogs</a>
          </div>
        </div>
        <div className="product_detail_main">
          {product_group.map((item, index) => {
            return (
              <div className="detail___1_main" key={index}>
                <div className="group_show">
                  <a
                    href={item.herf}
                    className="datail___1_a"
                    title={item.name}
                  >
                    {item.name}
                  </a>
                  {item.subs == false ? (
                    <p></p>
                  ) : (
                    <p>
                      <KeyboardArrowRightIcon />
                    </p>
                  )}
                  {item.subs == false ? (
                    <></>
                  ) : (
                    <div className="detail_hidden">
                      {item.submenu.map((i, index) => {
                        return (
                          <a
                            href={i.href}
                            className="hidden_detail_1"
                            key={index}
                            title={i.name}
                          >
                            {i.name}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <h4 className="pr_group_h4">Find Similar Products By Category</h4>
        <div className="product_address">
          {production_address.map((item, index) => {
            return (
              <div className="address_1" key={index}>
                {item.tag == false ? (
                  <>
                    <a href={item.href} title={item.name}>
                      {item.name}
                    </a>
                    <KeyboardArrowRightIcon />
                  </>
                ) : (
                  <p>{item.p}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product_Group;
