import { useEffect, useState } from "react";
import "./Section5_Product.scss";
import { sec5_film } from "./data_Section5_Product";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Modal from "./Modal/Modal";

const Section5_Product = () => {
  let [mouse, setMouse] = useState(true);
  let [st, setSt] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="sec5_pr_main">
        {sec5_film.map((item, index) => {
          return (
            <div
              className="sec5_pr_div"
              key={index + 1}
              onClick={handleOpenModal}
            >
              <div
                className="sec5_pr_div_img"
                onMouseLeave={() => setMouse(true)}
              >
                {mouse || st != item.id ? (
                  <div
                    onMouseEnter={() => {
                      setSt(item.id), setMouse(false);
                    }}
                    style={{
                      display:
                        (mouse === true && st === item.id) ||
                        (st !== item.id && "block"),
                    }}
                  >
                    <img src={item.img_src} alt="" />
                    <p className="sec5_pr_div_play">
                      <PlayCircleFilledIcon />
                    </p>
                  </div>
                ) : (
                  <>
                    <div
                      className={`${mouse ? "none" : "sec5_pr_hidden_play"}`}
                      style={{
                        display: mouse === true && st !== item.id && "block",
                      }}
                    >
                      <video
                        width="100%"
                        height="auto"
                        autoPlay={st == item.id}
                        muted
                      >
                        <source src={item.film_src} />
                      </video>
                    </div>
                  </>
                )}
              </div>
              <div className="sec5_pr_div_p">{item.name}</div>
            </div>
          );
        })}
        <Modal isOpen={isOpen} onClose={handleCloseModal} index={st} />
      </div>
    </>
  );
};

export default Section5_Product;
