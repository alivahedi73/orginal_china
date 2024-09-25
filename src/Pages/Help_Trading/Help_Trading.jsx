import { useEffect, useState } from "react";
import Buyers_Sayes_slider from "../../Components/Help_Trading/Buyers_Sayes_slider/Buyers_Sayes_slider";
import FAQ_Trading from "../../Components/Help_Trading/FAQ_Trading/FAQ_Trading";
import Footer_banner_trading from "../../Components/Help_Trading/Footer_banner_trading/Footer_banner_trading";
import Help_Trading_Banner from "../../Components/Help_Trading/Help_Trading_Banner/Help_Trading_Banner";
import Order_Safe_Trading from "../../Components/Help_Trading/Order_Safe_Trading/Order_Safe_Trading";
import Return_Refund from "../../Components/Help_Trading/Return_Refund/Return_Refund";
import Speed_Up_Trading_Help from "../../Components/Help_Trading/Speed_Up_Trading_Help/Speed_Up_Trading_Help";
import STS_Trading_Choose from "../../Components/Help_Trading/STS_Trading_Choose/STS_Trading_Choose";
import Nav_Link_trading from "../../Components/Help_Trading/Nav_Link_trading/Nav_Link_trading";

const Help_Trading = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 400);
    });
  });
  return (
    <>
      <Help_Trading_Banner />
      <Speed_Up_Trading_Help />
      <STS_Trading_Choose />
      <Order_Safe_Trading />
      <Buyers_Sayes_slider />
      <FAQ_Trading />
      <Return_Refund />
      <Footer_banner_trading />
      <Nav_Link_trading scroll={scroll} />
    </>
  );
};

export default Help_Trading;
