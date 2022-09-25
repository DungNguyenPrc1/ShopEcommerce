import styles from "./Home.module.scss";
import classNames from "classnames/bind";

import SliderBanner from "../../components/SliderBanner";
import { iphonebanner } from "../../asset";
import TagPromo from "../../components/TagPromo";
import { topzone } from "../../asset";
import Items from "../../components/Items";
import { selectAllProducts } from "../../redux/slice/productsSlice";
import { useSelector } from "react-redux";
import ItemsToBuy from "../../components/ItemsToBuy";

const cx = classNames.bind(styles);
const Home = () => {
  const dataProducts = useSelector(selectAllProducts);

  const promoTag = [
    {
      id: 1,
      image: "https://cdn.tgdd.vn//content/icon--96x104-2.png",
      content: "San Sale Online",
    },
    {
      id: 2,
      image: "https://cdn.tgdd.vn//content/Group-46580-100x100-1.png",
      content: "Laptop tựu trường",
    },
    {
      id: 3,
      image: "https://cdn.tgdd.vn//content/Frame-46574-100x100-2.png",
      content: "Xả hàng giảm sốc",
    },
    {
      id: 4,
      image: "https://cdn.tgdd.vn//content/dong-ho-120x120.png",
      content: "Bão sale đồng hồ",
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <img src={iphonebanner} alt="ip14" className={cx("banner")} />
      <div className={cx("main")}>
        <div className={cx("slider-banner")}>
          <SliderBanner />
        </div>
        <div className={cx("toppromo")}>
          <TagPromo dataPromo={promoTag}></TagPromo>
        </div>
        <img
          src={topzone}
          alt="1"
          style={{ opacity: "0", marginBottom: "30px" }}
        />
        <img src={topzone} alt="2" />
        <div className={cx("dealshock")}>
          <img
            src="https://cdn.tgdd.vn/2022/09/banner/TAGLINE-HOTSALE-LDP-Desk-1200x100.png"
            alt="abc"
            style={{ marginLeft: "-10px" }}
          />
          <div className={cx("list-tem")}>
            <Items listsItem={dataProducts} />
          </div>
          <div className={cx("moreitem")}>
            <span>Xem tất cả sản phẩm</span>
          </div>
        </div>
        <div className={cx("buyitem")}>
          <div className={cx("list-item-buy")}>
            <ItemsToBuy listsItem={dataProducts} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          <div className={cx("readMorebtn")}>Read More</div>
        </div>
        <div className={cx("tech")}>
          <div className={cx("tech-new")}>
            <div
              style={{
                fontSize: "22px",
                fontWeight: "600",
                padding: "15px 22px",
              }}
            >
              Technologies
            </div>
            <ul
              style={{
                display: "grid",
                padding: "15px 18px",
                gridTemplateColumns: "1fr 1fr 1fr",
                // justifyContent: "space-between",
              }}
            >
              <li className={cx("technology-tag")}>
                <img
                  src="https://cdn.tgdd.vn/Files/2022/08/22/1458529/laptopgiamgiacucmanhthang8_800x450-200x200.jpg"
                  alt="#"
                />
                <span>
                  'Back to school' cùng những mẫu laptop giảm giá cực ngon chào
                  năm học 2022 nào!
                </span>
              </li>
              <li className={cx("technology-tag")}>
                <img
                  src="https://cdn.tgdd.vn/Files/2022/08/08/1454004/anhbia1_800x450-200x200.jpg"
                  alt="#"
                />
                <span>
                  'Back to school' cùng những mẫu laptop giảm giá cực ngon chào
                  năm học 2022 nào!
                </span>
              </li>
              <li className={cx("technology-tag")}>
                <img
                  src="https://cdn.tgdd.vn/Files/2022/09/02/1461580/vivo-x80-631_1280x720-200x200.jpg"
                  alt="#"
                />
                <span>
                  'Back to school' cùng những mẫu laptop giảm giá cực ngon chào
                  năm học 2022 nào!
                </span>
              </li>
            </ul>
          </div>
          <div className={cx("ads")}>
            <img
              src="https://cdn.tgdd.vn/2022/03/banner/DesktopTGDD-285x350.png"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
