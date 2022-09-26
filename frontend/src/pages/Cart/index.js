import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import { FaShippingFast, FaAws } from "react-icons/fa";
import { Button, Table, Popconfirm } from "antd";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_TOTAL, selectAllCartItems } from "../../redux/slice/cartSlice";
import {
  ADD_CART_ITEMS,
  DECREASE_CART_ITEMS,
  DELETE_CART_ITEMS,
  CLEAR_CART_ITEMS,
} from "../../redux/slice/cartSlice";

const cx = classNames.bind(styles);

const Cart = () => {
  const confirm = (item) => {
    dispatch(DELETE_CART_ITEMS(item));
  };

  const dispatch = useDispatch();
  const itemsCart = useSelector(selectAllCartItems);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(GET_TOTAL());
  }, [cart, dispatch]);

  const { cartTotalAmount } = cart;

  // console.log(itemsCart);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const sumPrice = selectedRows.reduce((accumulator, currentValue) => {
    const totalItem = currentValue.qty * currentValue.price;
    return accumulator + totalItem;
  }, 0);
  // console.log(selectedRowKeys);

  const columns = [
    {
      title: "Product",
      dataIndex: "image",
      render: (image, b) => {
        return (
          <div>
            <img
              src={image}
              alt="acs"
              style={{ heigh: "80px", width: "80px" }}
            />
            <span style={{ marginLeft: "16px" }}>{b.name}</span>
          </div>
        );
      },
    },
    {
      title: "Unit Price",
      dataIndex: "price",
      render: (price) => {
        return (
          <div>
            {price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        );
      },
    },
    {
      title: "Quantity",
      dataIndex: "qty",
      render: (qty, item) => {
        return (
          <div className={cx("handleQty")}>
            <span onClick={() => dispatch(ADD_CART_ITEMS(item))}>+</span>
            <span>
              <input
                style={{
                  heigh: "32px",
                  width: "50px",
                  border: "none",
                  paddingLeft: "18px",
                }}
                value={qty}
                onChange={() => item.qty}
              />
            </span>
            <span onClick={() => dispatch(DECREASE_CART_ITEMS(item))}>-</span>
          </div>
        );
      },
    },
    {
      title: "Total Price",
      dataIndex: "price",
      render: (price, data) => {
        return (
          <div style={{ color: "#ee4d2d" }}>
            {(price * data.qty).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
            .
          </div>
        );
      },
    },
    {
      title: "Actions",

      render: (item) => {
        return (
          <div
            className={cx("delete")}
            // onClick={() => }
          >
            <Popconfirm
              title="Are you sure to delete this one?"
              onConfirm={() => confirm(item)}
              // onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <span>Delete</span>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  const data = itemsCart.map((item, i) => {
    return { ...item, key: i };
  });

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRows(selectedRows);

    setSelectedRowKeys(selectedRowKeys);
  };
  // console.log(selectedRows);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    onSelect: (record) => {
      console.log("already checked", record);
    },
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("main")}>
        <div className={cx("freeship")}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "8px",
            }}
          >
            <FaShippingFast />
          </span>
          Select free shipping voucher below to enjoy shipping discount
        </div>
        <div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={false}
          />
        </div>
        <div className={cx("footer-checkout")}>
          <div className={cx("voucher")}>
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "700px",
              }}
            >
              <span style={{ fontWeight: "600" }}>
                <FaAws />
                Platform Voucher
              </span>
              <span style={{ color: "#05a" }}> Select Or Enter The Code</span>
            </span>
          </div>
          <div className={cx("coin")}>Discount Item</div>
          <div className={cx("checkout")}>
            <div
              onClick={() => {
                dispatch(CLEAR_CART_ITEMS()) && setSelectedRows([]);
              }}
            >
              <Button style={{ background: "rgb(238, 77, 45)", color: "#fff" }}>
                Clear Cart
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: "16px" }}>
                Total{`(${selectedRows.length} item)`}:
                <span style={{ color: "#ee4d2d", marginLeft: "4px" }}>
                  {sumPrice === 0
                    ? "0 VND"
                    : cartTotalAmount.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                </span>
              </div>
              <Button
                type="primary"
                style={{ height: "40px", width: "210px", marginLeft: "16px" }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
