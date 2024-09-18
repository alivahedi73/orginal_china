import "./Section3_Product.scss";
import {
  section3_connect,
  section3_title,
  sec3_pr_form,
} from "../Section3_Product/data_section3_product";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useEffect, useState } from "react";
import Section3_Pr_Num2 from "../Section3_Pr_Num2/Section3_Pr_Num2";
import Section3_Pr_Num1 from "../Section3_Pr_Num1/Section3_Pr_Num1";
import { useInViewContext } from "../../../../Context/ContextProvider";
import StarIcon from "@mui/icons-material/Star";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
const Section3_Product = () => {
  let [click, setClick] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const [indexNumber, setIndex] = useState(-1);
  const {
    sec3_InView_1,
    sec3_InView_2,
    sec3_InView_3,
    sec3_InView_4,
    sec3_InView_5,
    sec3_InView_6,
    sec3_InView_7,
  } = useInViewContext();

  useEffect(() => {
    if (click == false) {
      if (sec3_InView_1) {
        setIndex(1);
      }
      if (sec3_InView_2) {
        setIndex(2);
      }
      if (sec3_InView_3) {
        setIndex(3);
      }
    }
    if (click == true) {
      if (sec3_InView_4) {
        setIndex(4);
      }
      if (sec3_InView_5) {
        setIndex(5);
      }
      if (sec3_InView_6) {
        setIndex(6);
      }
      if (sec3_InView_7) {
        setIndex(7);
      }
    }
  }, [
    sec3_InView_1,
    sec3_InView_2,
    sec3_InView_3,
    sec3_InView_4,
    sec3_InView_5,
    sec3_InView_6,
    sec3_InView_7,
  ]);
  return (
    <>
      <div className="proudct3_section3_sub">
        {/* start of categorize */}
        <div className="proudct3_section3_sub_menu">
          {/* satrt of up page */}
          <div className="proudct3_section3_sub_menu_up">
            <div className="proudct3_section3_sub_menu_main">
              <div className="proudct3_section3_sub_menu_main_num1">
                <div
                  className={`${
                    click
                      ? "proudct3_section3_sub_menu_main_num1_click1"
                      : "proudct3_section3_sub_menu_main_num1_click1_active"
                  }`}
                  onClick={() => {
                    setClick(false);
                    setIndex(1);
                  }}
                >
                  Product Description
                </div>
                <div
                  className={`${
                    click
                      ? "proudct3_section3_sub_menu_main_num1_click2_active"
                      : "proudct3_section3_sub_menu_main_num1_click2"
                  }`}
                  onClick={() => {
                    setClick(true);
                    setIndex(4);
                  }}
                >
                  Company Info.
                </div>
                <div></div>
              </div>
              <div className="proudct3_section3_sub_menu_main_num2">
                {click ? (
                  <>
                    <div
                      className="proudct3_section3_sub_menu_main_num2_sub"
                      id="sec3_sub1_num1"
                      style={
                        indexNumber === 4
                          ? { color: "red", borderBottom: "5px solid red" }
                          : {}
                      }
                      onClick={() => {
                        const element = document.getElementById("prode_4");
                        element.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {section3_title[1].name[0]}
                    </div>
                    <div
                      className="proudct3_section3_sub_menu_main_num2_sub"
                      id="sec3_sub1_num2"
                      style={
                        indexNumber === 5
                          ? { color: "red", borderBottom: "5px solid red" }
                          : {}
                      }
                      onClick={() => {
                        const element = document.getElementById("prode_5");
                        element.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {section3_title[1].name[1]}
                    </div>
                    <div
                      className="proudct3_section3_sub_menu_main_num2_sub"
                      id="sec3_sub1_num3"
                      style={
                        indexNumber === 6
                          ? { color: "red", borderBottom: "5px solid red" }
                          : {}
                      }
                      onClick={() => {
                        const element = document.getElementById("prode_6");
                        element.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {section3_title[1].name[2]}
                    </div>
                    <div
                      className="proudct3_section3_sub_menu_main_num2_sub"
                      id="sec3_sub1_num4"
                      style={
                        indexNumber === 7
                          ? { color: "red", borderBottom: "5px solid red" }
                          : {}
                      }
                      onClick={() => {
                        const element = document.getElementById("prode_7");
                        element.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {section3_title[1].name[3]}
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="proudct3_section3_sub_menu_main_num2_sub"
                      id="sec3_sub2_num1"
                      style={
                        indexNumber === 1
                          ? { color: "red", borderBottom: "5px solid red" }
                          : {}
                      }
                      onClick={() => {
                        const element = document.getElementById("prode_1");
                        element.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {section3_title[0].name[0]}
                    </div>
                    <div
                      className="proudct3_section3_sub_menu_main_num2_sub"
                      id="sec3_sub2_num1"
                      style={
                        indexNumber === 2
                          ? { color: "red", borderBottom: "5px solid red" }
                          : {}
                      }
                      onClick={() => {
                        const element = document.getElementById("prode_2");
                        element.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {section3_title[0].name[1]}
                    </div>
                    <div
                      className="proudct3_section3_sub_menu_main_num2_sub"
                      id="sec3_sub1_num1"
                      style={
                        indexNumber === 3
                          ? { color: "red", borderBottom: "5px solid red" }
                          : {}
                      }
                      onClick={() => {
                        const element = document.getElementById("prode_3");
                        element.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {section3_title[0].name[2]}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="proudct3_section3_sub_menu_des">
              {click ? <Section3_Pr_Num2 /> : <Section3_Pr_Num1 />}
            </div>
          </div>
          {/* end of up page */}
          {/* start of registeration */}
          <div className="proudct3_section3_sub_menu_down">
            <h4>Send your message to this supplier</h4>
            <div className="pr3_input__1">
              <div className="form1_num1">
                <p>
                  <StarIcon />
                </p>
                <span>From :</span>
              </div>
              <div className="form1_num2">
                <input
                  type="email"
                  name="sub_email"
                  id="Sub_email_1"
                  placeholder="Enter your email Address"
                  onChange={handleChange}
                  value={email}
                />
                <div className="errorEmail">{error}</div>
              </div>
            </div>
            <div className="pr3_input__2">
              <div className="pr3_input__2_num1">
                <p>
                  <StarIcon />
                </p>
                <span>To :</span>
              </div>
              <div className="pr3_input__2_num2">
                <img src={sec3_pr_form[0].src} alt="" />
                <p>{sec3_pr_form[0].name}</p>
              </div>
            </div>
            <div className="pr3_input__3">
              <div className="form1_num1">
                <p>
                  <StarIcon />
                </p>
                <span>Message :</span>
              </div>
              <div className="form1_num2">
                <textarea
                  name="comment"
                  id="comment_input"
                  minLength={20}
                  maxLength={4000}
                  placeholder="We suggest you detail your prdouct requirements and company information here."
                ></textarea>
                <p>Enter between 20 to 4,000 characters.</p>
                <div className="form_submit">
                  <button id="subbmitt">Send</button>
                  <p className="detail_submit">
                    This is not what you are looking for?
                  </p>
                  <a href="#" className="detail_div">
                    <span>
                      <TrackChangesIcon />
                    </span>
                    <p>Post a Sourcing Request Now</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* end of registeration */}
        </div>
        {/* end of categorize */}
        {/* start of connect panel */}
        <div className="proudct3_section3_sub_connect">
          <div className="proudct3_section3_sub_connect_div1">
            <a
              href={section3_connect[0].href}
              className="proudct3_section3_sub_connect_div1_num1"
            >
              <img src={section3_connect[0].img_company} alt="" />
            </a>
            <div className="proudct3_section3_sub_connect_div1_num2">
              <a href={section3_connect[0].href}>
                <p>
                  {" "}
                  {section3_connect[0].name_company} <ChevronRightIcon />{" "}
                </p>
              </a>
              <div className="proudct3_section3_sub_connect_div1_num2_sub">
                <p>{section3_connect[0].star_company}</p>
                <span>
                  <StarRateIcon />
                </span>
                <img
                  src="../../../../../public/assets/Images/product/section3_product/svg1.png"
                  alt=""
                />
                <img
                  src="../../../../../public/assets/Images/product/section3_product/svg2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="proudct3_section3_sub_connect_div2">
            <img
              src="../../../../../public/assets/Images/product/section3_product/profile.jpg"
              alt=""
            />
            <div className="proudct3_section3_sub_connect_div2_sub1">
              <p>{section3_connect[0].name_person}</p>
              <span>
                <AddBusinessIcon title="Business Card" />
              </span>
            </div>
          </div>
          <a
            href="section3_connect[0].connect_button_href"
            className="proudct3_section3_sub_connect_div3"
          >
            <span>
              <MailOutlineIcon />
            </span>
            <p>Contact Supplier</p>
          </a>
          <a
            className="proudct3_section3_sub_connect_div4"
            href={section3_connect[0].chat_button_href}
          >
            <img
              src="../../../../../public/assets/Images/product/section3_product/chat_icon.gif"
              alt=""
            />
            <p>Chat</p>
          </a>
        </div>
        {/* end of connect panel */}
      </div>
    </>
  );
};

export default Section3_Product;
