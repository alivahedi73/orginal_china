import "./Submenu_categorize.scss";
const Submenu_categorize = ({ value ,click}) => {
  let data = value[0].mainSubmenu;
  return (
    <>
      <div className="cat-m-s">
        <div className="cat-m-s-1">
          <div className="bcat">
            {data.map((item, index) => {
              return (
                <div>
                  <p key={index}>{item.name}</p>
                  {item.link.map((i, ism) => {
                    return (
                      <a href="#" key={ism} className="cat_li">
                        {i.name}
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="cat-m1"></div>
      </div>
    </>
  );
};

export default Submenu_categorize;
