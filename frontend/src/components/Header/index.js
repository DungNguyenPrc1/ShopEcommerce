import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Button, Popover } from "antd";

import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  SET_ACTIVE_USER,
  REMOVE_ACTIVE_USER,
} from "../../redux/slice/authSlice";

const cx = classNames.bind(styles);

const Header = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const numberCart = JSON.parse(localStorage.getItem("cartItems"));
  const cartOrder = useSelector((state) => state.cart.cartItems);
  const orderPopup = (
    <div>
      {cartOrder
        .filter((a, i) => i < 5)
        .map((cart) => {
          return (
            <div key={cart.id} className={cx("cartOder")}>
              <div>
                <img
                  src={cart.image}
                  alt={cart.name}
                  className={cx("cartOder-image")}
                />
              </div>
              <div className={cx("cartOder-content")}>
                <span>{cart.name}</span>
                <span style={{ color: "#ee4d2d" }}>
                  {cart.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
            </div>
          );
        })}
      <div className={cx("cartOder-footer")}>
        <span>{cartOrder.length} More Products In Cart</span>
        <Button type="primary">View My Shopping Cart</Button>
      </div>
    </div>
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName === null) {
          const u1 = user.email.slice(0, -10);
          setUserName(u1.toUpperCase());
        } else {
          setUserName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName,
            userID: user.uid,
          })
        );
        // ...
      } else {
        setUserName("");
        dispatch(REMOVE_ACTIVE_USER());

        // User is signed out
        // ...
      }
    });
  }, [dispatch]);
  const handleActiveLink = ({ isActive }) => {
    return isActive ? cx("active") : "";
  };
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successfully");
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
      });
  };
  return (
    <div className={cx("fixed")}>
      <div className={cx("wrapperHeader")}>
        <div className={cx("logo-header")}>
          <Link to="/">
            <h2>
              e<span>Shop</span>
            </h2>
          </Link>
        </div>
        <div className={cx("pages")}>
          <NavLink className={handleActiveLink} to="/" end>
            {/* Home */}

            <span>Home</span>
          </NavLink>
          <NavLink className={handleActiveLink} to="/contact">
            <span>Contact Us</span>
          </NavLink>
        </div>
        <div className={cx("right-header")}>
          {isLoggedIn ? (
            <></>
          ) : (
            <NavLink className={handleActiveLink} to="/login">
              <span>Login</span>
            </NavLink>
          )}
          {isLoggedIn ? (
            <NavLink
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaUserCircle size={16} />
              Hi,{userName}
            </NavLink>
          ) : (
            <></>
          )}

          {isLoggedIn ? (
            <></>
          ) : (
            <NavLink className={handleActiveLink} to="/register">
              <span>Register</span>
            </NavLink>
          )}
          {isLoggedIn ? (
            <NavLink className={handleActiveLink} to="/orderhistory">
              <span>My Orders </span>
            </NavLink>
          ) : (
            <></>
          )}
          {isLoggedIn ? (
            <NavLink className={handleActiveLink} to="/cart">
              <Popover
                title="Recently Added Products"
                placement="bottomRight"
                content={orderPopup}
              >
                <span style={{ display: "flex", alignItems: "center" }}>
                  <span>Cart</span>
                  <span
                    style={{
                      paddingLeft: "4px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <AiOutlineShoppingCart
                      style={{ fontSize: "16px", color: "#fff" }}
                    />
                    <span
                      className={cx("cart-number")}
                    >{`${cartOrder.length}`}</span>
                  </span>
                </span>
              </Popover>
            </NavLink>
          ) : null}

          {isLoggedIn ? (
            <NavLink onClick={logoutUser} to="/">
              <span>Logout</span>
            </NavLink>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
