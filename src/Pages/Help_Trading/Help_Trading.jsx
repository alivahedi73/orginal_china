import Buyers_Sayes_slider from "../../Components/Help_Trading/Buyers_Sayes_slider/Buyers_Sayes_slider";
import FAQ_Trading from "../../Components/Help_Trading/FAQ_Trading/FAQ_Trading";
import Help_Trading_Banner from "../../Components/Help_Trading/Help_Trading_Banner/Help_Trading_Banner";
import Order_Safe_Trading from "../../Components/Help_Trading/Order_Safe_Trading/Order_Safe_Trading";
import Speed_Up_Trading_Help from "../../Components/Help_Trading/Speed_Up_Trading_Help/Speed_Up_Trading_Help";
import STS_Trading_Choose from "../../Components/Help_Trading/STS_Trading_Choose/STS_Trading_Choose";

const Help_Trading = () => {
  return (
    <>
      <Help_Trading_Banner />
      <Speed_Up_Trading_Help />
      <STS_Trading_Choose />
      <Order_Safe_Trading />
      <Buyers_Sayes_slider />
      <FAQ_Trading />
    </>
  );
};

export default Help_Trading;
