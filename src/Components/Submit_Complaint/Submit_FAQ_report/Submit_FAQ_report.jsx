import "./Submit_FAQ_report.scss";
import { dataSubmit_FAQ_report } from "./data_Submit_FAQ_report";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Submit_FAQ_report = () => {
  return (
    <>
      <div className="FAQ_submit_report_main">
        <h3 className="FAQ_Submit_report">FAQ</h3>
        <div className="ul_FAQ_submit">
          {dataSubmit_FAQ_report.map((item, index) => {
            return (
              <ul className="ul_FAQ" key={index}>
                <li className="li_FAQ">
                  <a href={item.href} className="li_a_FAQ">
                    {item.name}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
        <a href="#" className="tips_FAQ">
          Learn more tips for online safe trading <ChevronRightIcon fontSize="inherit" />
        </a>
      </div>
    </>
  );
};

export default Submit_FAQ_report;
