import "./STS_Trading_Choose.scss";
import { sts_fetch } from "./data_STS_Trading_Choose";
const STS_Trading_Choose = () => {
  return (
    <>
      <div className="sts_main">
        <div className="sts">
          <h2 className="sts_h2">Why Choose Secured Trading Service (STS)?</h2>
          <div className="sts_div">
            {sts_fetch.map((item,index)=>{
                return (
                  <div className="sts_f" key={index}>
                    <div className="sts_img">
                      <img src={item.src} alt="" />
                    </div>
                    <div className="sts_div2">
                      <div className="sts_ti">{item.title}</div>
                      <p className="sts_p">{item.p}</p>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default STS_Trading_Choose;
