import "./Header_A_Z_class_page_A.scss";
import {data_all_sortbutton} from "../../data_all_categorize"
const Header_A_Z_class_page_A = () => {
    return (
      <>
        <div className="header_A_Z_title">
          <h1 className="h1_A_Z">
            Manufacturing & Processing Machinery Latest Trending Categories
          </h1>
          {data_all_sortbutton.map((item, index) => {
            return (
              <div className="link_div_A_Z_A" key={index}>
                <a href={item.href} className="link_A_Z_A">
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>
      </>
    );
}
 
export default Header_A_Z_class_page_A;