import "./Help_Trading_Banner.scss"
const Help_Trading_Banner = () => {
    return (
      <>
        <a className="help_trading_banner" href="#">
          <div className="trading_banner">
            <div className="trading_banner_1">
              <h1 className="banner_tr_h1">Secured Trading Service</h1>
              <p className="banner_tr_p">
                From payment to delivery, we protect your trading.
              </p>
              <div className="banner_tr_link">Start Order</div>
            </div>
            <div className="trading_banner_2">
              <img
                src="../../../../public/assets/Images/Help_Trading/laptop.png"
                alt=""
              />
              <div className="tr_bann_abs_1">
                <img
                  src="../../../../public/assets/Images/Help_Trading/pament.png"
                  alt=""
                />
              </div>
              <div className="tr_bann_abs_2">
                <img
                  src="../../../../public/assets/Images/Help_Trading/delivery.png"
                  alt=""
                />
              </div>
              <div className="tr_bann_abs_3">
                <img
                  src="../../../../public/assets/Images/Help_Trading/box.png"
                  alt=""
                />
              </div>
              <div className="tr_bann_abs_4">
                <img
                  src="../../../../public/assets/Images/Help_Trading/free.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </a>
      </>
    );
}
 
export default Help_Trading_Banner;