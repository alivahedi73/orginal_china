import { useState } from "react";
import "./Search_bar_All_ctaegorize_A.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Search_bar_All_ctaegorize_A = () => {
  let [click, setClick] = useState(false);
  let [choose, setChoose] = useState("Product");
  const data_product___1 = [
    {
      id: 1,
      name: "Product",
    },
    {
      id: 2,
      name: "Suppliers",
    },
    {
      id: 3,
      name: "Sourcing Requests",
    },
  ];
  return (
    <>
      <div className="searchBar_all_cat_AAA">
        <div className="SEARCH_BAR_MAIN_CAT">
          <input type="text" className="search_bar_cat_A" />
          <div
            className="chooise_search_bar_cat"
            onClick={() => setClick(!click)}
            style={
              click
                ? { borderColor: "rgb(75, 75, 243)" }
                : { borderColor: "#5b5b5b44" }
            }
          >
            <p>{choose}</p>
            <ArrowDropDownIcon
              style={
                click
                  ? { transform: "rotate(180deg)" }
                  : { transform: "rotate(0deg)" }
              }
            />
            <div
              className="abs_choose_search_bar_cat"
              style={
                click
                  ? { opacity: "1", transform: "scale(1)" }
                  : { opacity: "0", transform: "scale(0)" }
              }
            >
              {data_product___1.map((item, index) => {
                return (
                  <div
                    className="item_choose_abs_bar_cat"
                    key={index}
                    onClick={() => setChoose(item.name)}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
          <button type="submit" id="submit_all_cat_search_bar_cat_a">Search</button>
        </div>
      </div>
    </>
  );
};

export default Search_bar_All_ctaegorize_A;
