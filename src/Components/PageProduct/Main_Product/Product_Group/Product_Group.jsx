import "./Product_Group.scss";
import SearchIcon from "@mui/icons-material/Search";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {
  product_group,
  production_address,
  hot_search,
  hot_search_hidden,
} from "./data_Product_Group";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Transform } from "@mui/icons-material";
const Product_Group = () => {
  let [click, setClick] = useState(true);
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
          <div className="product_address_num1">
            {production_address.map((item, index) => {
              return (
                <div className="address_1" key={index}>
                  {item.tag == false ? (
                    <div className="adress_1_num1">
                      <a href={item.href} title={item.name}>
                        {item.name}
                      </a>
                      <KeyboardArrowRightIcon />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
          </div>
          <div className="product_address_num2">
            {production_address.map((item, index) => {
              return (
                <div className="address_1" key={index}>
                  {item.tag == false ? (
                    <></>
                  ) : (
                    <>
                      <div className="address_1_num2">
                        <p>{item.p}</p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <h4 className="pr_group_h4">Hot Search</h4>
        <div className="hot_search_main">
          {hot_search.map((item, index) => {
            return (
              <a
                key={index}
                href={item.href}
                title={item.name}
                className="hot_search_link"
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div
          className="click_moreless_pr_group"
          onClick={() => setClick(!click)}
        >
          <p className="click_pr_group_p">{click ? "More" : "Less"}</p>
          {click ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </div>
        <div
          className={`${
            click ? "click_div_hidden" : "click_div_show"
          } div_click_pr_group_p`}
        >
          <h5 className="less_hidden_title">
            Recommended Suppliers & Wholesalers
          </h5>
          <div className="div_less_hidden_title">
            {hot_search_hidden.map((item, index) => {
              return <a href={item.href} className="div_less_hidden_title_link" key={index}>{item.name}</a>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product_Group;
