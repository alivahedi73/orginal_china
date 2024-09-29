import "./Submit_Service_Process.scss";
import { dataServiceProcesss } from "./data_service_process_main";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Submit_Service_Process = () => {
  return (
    <>
      <div className="service_process_main">
        <h3 className="serviceProcess_header">Service Process</h3>
        <div className="serviceProcess_div">
          {dataServiceProcesss.map((item, index) => {
            return (
              <div className="item_services" key={index}>
                {item.tag === true && <ChevronRightIcon />}
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Submit_Service_Process;
