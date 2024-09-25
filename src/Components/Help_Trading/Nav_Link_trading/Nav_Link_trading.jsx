import "./Nav_Link_trading.scss";
const Nav_Link_trading = ({ scroll }) => {
  return (
    <>
      <div
        className="fotter_scroll"
        style={
          scroll
            ? { transform: "translateY(0)" }
            : { transform: "translateY(110%)" }
        }
      >
        <div className="mainscroll">
          <p>We secure your trading from safe payments to on-time-delivery.</p>
          <a href="#">Start Order</a>
        </div>
      </div>
    </>
  );
};

export default Nav_Link_trading;
