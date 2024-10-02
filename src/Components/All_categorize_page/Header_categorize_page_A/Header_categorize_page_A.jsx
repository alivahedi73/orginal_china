import { useState } from "react";
import "./Header_categorize_page_A.scss";
import Header_A_Z_class_page_A from "./Header_A_Z_class_page_A/Header_A_Z_class_page_A";
import Header_classfication_cat_A from "./Header_classfication_cat_A/Header_classfication_cat_A";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
const Header_categorize_page_A = () => {
  let [click, setClick] = useState(false);
  let [cl, setCl] = useState(false);
  return (
    <>
      <div className="header_categoriuze_page_main">
        <div className="header_cat_page_main">
          <div className="title_flex_header_cat_page_main">
            {click ? (
              <div className="all_cat_page_titlt">All Categorize</div>
            ) : (
              <div
                className="all_cat_page_titlt"
                onClick={() => setCl(!cl)}
              >
                All Categorize
                <KeyboardDoubleArrowDownIcon className="svg_1"
                  style={
                    cl
                      ? { transform: "rotate(180deg)" }
                      : { transform: "rotate(0deg)" }
                  }
                />
              </div>
            )}
            <div className="sprate_class_header_title">
              <p>Veiw By</p>
              <div className="choice_class_header_page">
                <div
                  className="classification_div"
                  onClick={() => setClick(false)}
                  style={
                    click == false
                      ? {
                          backgroundColor: "#E64545",
                          color: "whitesmoke",
                          border: "none",
                        }
                      : { backgroundColor: "white", color: "#222222" }
                  }
                >
                  Classification
                </div>
                <div
                  className="A_Z_div"
                  onClick={() => setClick(true)}
                  style={
                    click == true
                      ? {
                          backgroundColor: "#E64545",
                          color: "whitesmoke",
                          border: "none",
                        }
                      : { backgroundColor: "white", color: "#222222" }
                  }
                >
                  A_Z
                </div>
              </div>
            </div>
          </div>
          {click ? <Header_A_Z_class_page_A /> : <Header_classfication_cat_A value={cl} />}
        </div>
      </div>
    </>
  );
};

export default Header_categorize_page_A;
