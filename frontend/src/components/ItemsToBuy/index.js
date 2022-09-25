import styles from "./ItemsToBuy.module.scss";
import classNames from "classnames/bind";

import { Button } from "antd";
import { useDispatch } from "react-redux";
import { ADD_CART_ITEMS } from "../../redux/slice/cartSlice";

const cx = classNames.bind(styles);

const ItemsToBuy = ({ listsItem }) => {
  const dispatch = useDispatch();

  const handleAddCart = (item) => {
    dispatch(ADD_CART_ITEMS(item));
  };

  return (
    <>
      {listsItem?.map((item) => {
        return (
          <div className={cx("wrapper")} key={item.id}>
            <div className={cx("items-label")}>{item.label}</div>
            <div className={cx("items-img")}>
              <img
                className={cx("items-img-main")}
                src={item.image}
                // "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg"
                alt="abc"
              />
              <img
                className={cx("items-img-mini")}
                // src="https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png"
                src={item.imageMini}
                alt="abc"
              />
            </div>
            <div style={{ height: "21px", marginBottom: "8px" }}>
              {item.name}
            </div>
            <strong
              style={{
                heigh: "18px",
                color: "#d0021c",
                marginBottom: "8px",
                fontSize: "18px",
              }}
              className={cx("price")}
            >
              {item.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </strong>
            <p className={cx("desb")}>{item.desc}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="primary"
                className={cx("button-cart")}
                onClick={() => handleAddCart(item)}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ItemsToBuy;
