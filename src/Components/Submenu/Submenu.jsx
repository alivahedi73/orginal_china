import "./Submenu.scss";
const Submenu = ({ value }) => {
  return (
    <div className="main_m">
      {value.map((item, index) => {
        return (
          <div className="mainC1" key={index}>
            <p className="mainC2">{item.name}</p>
            {item.submain.map((itm, tedad) => {
              return (
                <a className="mainC3" href="#">
                  {itm.name}
                </a>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Submenu;
