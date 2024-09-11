import "./Right_Product.scss";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/Star";
import { product_detail, product_suggest } from "../../Product_data";
const Right_Product = () => {
  return (
    <>
      <div className="Right_Product_Slider">
        <div className="des2_title">
          <h1 className="pr_des2_ti">{product_detail[0].title}</h1>
          <div className="pr_des2_ti2">
            <img src={product_detail[0].svg_top_src} alt="" />
            <div className="pr-des2-div">
              <p>{product_detail[0].svg_red_name}</p>
              <span>{product_detail[0].svg_name}</span>
            </div>
          </div>
        </div>
        <div className="des2__price">
          <div className="des2___price_usd">
            <p className="des2__price_p">{product_detail[0].price}</p>
            <span className="des2__price_span"> / Piece</span>
          </div>
          <div className="des2__price_usd_sub">
            <p className="des2__price_detail">{product_detail[0].price_sub}</p>
            <p className="des2__price_detail_sub">
              {product_detail[0].price_sub_detail}
            </p>
          </div>
        </div>
        <div className="des2__detail">
          <a href="#" className="des2__detail_a">
            <div className="des2__detail_a_div">
              <p className="des2__detail_a_p">Product Details</p>
              <span className="des2__detail_a_span">
                <ChevronRightIcon />
              </span>
            </div>
          </a>
          <div className="des2__detail_div_1">
            <div>
              <p className="des2__detail_div_p1">
                {product_detail[0].detail_name1}
              </p>
            </div>
            <div>
              <p className="des2__detail_div_p2">
                {product_detail[0].detail_Customization}
              </p>
            </div>
          </div>
          <div className="des2__detail_div_1">
            <div>
              <p className="des2__detail_div_p1">
                {product_detail[0].detail_name2}
              </p>
            </div>
            <div>
              <p className="des2__detail_div_p2">
                {product_detail[0].detail_type}
              </p>
            </div>
          </div>
          <div className="des2__detail_div_1">
            <div>
              <p className="des2__detail_div_p1">
                {product_detail[0].detail_name3}
              </p>
            </div>
            <div>
              <p className="des2__detail_div_p2">
                {product_detail[0].detail_certi}
              </p>
            </div>
          </div>
          <div className="des2__detail_flexbox">
            <a href="#" className="des2__detail_flexbox_div1">
              <p className="des2_detail_flexbox_div1_svg">
                <MailOutlineIcon />
              </p>
              <p className="des2_detail_flexbox_div1_p">Contact Supplier</p>
            </a>
            <a href="#" className="des2__detail_flexbox_div2">
              <img
                className="des2__detail_flexbox_div2_img"
                src="../../../../public/assets/Images/product/num1.png"
                alt=""
              />
              <p className="des2__detail_flexbox_div2_p">Chat</p>
            </a>
          </div>
          <div className="des2__detail_subtitle">
            Still deciding? Get samples of<span>US$ 12/Piece</span>
            <a href="#">Request Sample</a>
          </div>
        </div>
        <div className="des2__sugest">
          <div className="des2__sugest_maindiv1">
            <a href="#" className="des2__sugest_maindiv1_sub1">
              <div className="des2__sugest_maindiv1_sub1_num1">
                <img
                  src={product_suggest[0].src_company_logo}
                  className="des2__sugest_maindiv1_sub1_img"
                  alt=""
                />
              </div>
              <div className="des2__sugest_maindiv1_sub1_num2">
                <div className="des2__sugest_maindiv1_sub1_num2_div1">
                  {product_suggest[0].name_company}
                  <ChevronRightIcon />
                </div>
                <div className="des2__sugest_maindiv1_sub1_num2_div2">
                  {product_suggest[0].company_name_sub}
                </div>
              </div>
            </a>
            <div className="des2__sugest_maindiv1_sub2">
              <a
                href="#"
                className="des2__sugest_maindiv1_sub2_a1"
                data-text="360 Virtual Tour"
              >
                <AutorenewIcon />
              </a>
              <a
                href="#"
                className="des2__sugest_maindiv1_sub2_a1"
                data-text="Hebi,China"
              >
                <PlaceIcon />
              </a>
            </div>
          </div>
          <div className="des2__sugest_maindiv2">
            <p className="des2__sugest_maindiv2_p1">Rating</p>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <a href="#" className="des2__sugest_maindiv2_sapn">
              {product_suggest[0].rate}
              <p>
                <ChevronRightIcon />
              </p>
            </a>
          </div>
          <a href="#" className="des2__sugest_maindiv3">
            <div
              className="des2__sugest_maindiv3_div"
              data-text="Supplies With Verfied Bussieness Licenese"
            >
              <img
                src={product_suggest[0].dimond_src}
                className="des2__sugest_maindiv3_div_img"
                alt=""
              />
              <p className="des2__sugest_maindiv3_div_p">Diamond Member</p>
              <span className="des2__sugest_maindiv3_div_span">Since 2008</span>
            </div>
          </a>
          <a href="#" className="des2__sugest_maindiv4">
            <div
              className="des2__sugest_maindiv4_div"
              data-text=" Audited by an independent third-party inspection agency"
            >
              <img
                src={product_suggest[0].suggest_src}
                className="des2__sugest_maindiv4_div_img"
                alt=""
              />
              <p className="des2__sugest_maindiv4_div_p">Audited Supplier</p>
            </div>
          </a>
          <ul className="des2__sugest_ul">
            <li
              className="des2__sugest_ul_li"
              data-text="The export experience of the supplier is more than 10 years"
            >
              Years of Export Experience
            </li>
            <li
              className="des2__sugest_ul_li"
              data-text="The supplier has 125 foreign trading staff(s) and 73 staff(s)
                with over 6 years of overseas trading experience"
            >
              Experienced Team
            </li>
            <li
              className="des2__sugest_ul_li"
              data-text="The supplier has 2 Self-brands, check the Audit Report for more
                information"
            >
              Self-branded
            </li>
            <li
              className="des2__sugest_ul_li"
              data-text=" The supplier has quality management system certification,
                including: ISO9001:2015 certificate ISO14001 ISO 13485:2016"
            >
              Management Certification
            </li>
          </ul>
          <p className="des2__sugest_____p">
            <a href="#">sign in</a>
            to see all verified strength labels (36)
          </p>
        </div>
      </div>
    </>
  );
};

export default Right_Product;
