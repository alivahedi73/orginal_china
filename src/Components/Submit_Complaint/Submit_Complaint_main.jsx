import Submit_address_bar from "./Submit_address_bar/Submit_address_bar";
import Submit_Com_header from "./Submit_Com_header/Submit_Com_header";
import Submit_com_report from "./Submit_com_report/Submit_com_report";
import "./Submit_Complaint_main.scss";
import Submit_FAQ_report from "./Submit_FAQ_report/Submit_FAQ_report";
import Submit_Service_Process from "./Submit_Service_Process/Submit_Service_Process";
import TrendingPageNavbar from "./trendingPageNavbar/trendingPageNavbar";

const Submit_Complaint_main = () => {
  return (
    <>
      <div className="submit_cont_main">
        {/* navBar */}
        <TrendingPageNavbar />
        <Submit_address_bar />
        {/* navBar */}
        <div className="sub_cont_main_div">
          {/* header */}
          <Submit_Com_header />
          {/* header */}
          {/* submit report */}
          <Submit_com_report />
          {/* submit report */}
          {/* service proceess */}
          <Submit_Service_Process />
          {/* service proceess */}
          {/* FAQ */}
          <Submit_FAQ_report />
          {/* FAQ */}
        </div>
      </div>
    </>
  );
};

export default Submit_Complaint_main;
