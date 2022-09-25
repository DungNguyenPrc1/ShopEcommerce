import { createSlice } from "@reduxjs/toolkit";
import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_CART_ITEMS: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
        toast.info("Increase Product Quantity", {
          closeOnClick: true,
          autoClose: 1000,
          transition: Flip,
          hideProgressBar: true,
        });
        console.log(state.cartItems[itemIndex].qty);
      } else {
        const temptProduct = { ...action.payload, qty: 1 };
        state.cartItems.push(temptProduct);
        toast.success("Add success to cart", {
          closeOnClick: true,
          autoClose: 1000,
          transition: Flip,
          hideProgressBar: true,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    DECREASE_CART_ITEMS: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].qty > 1) {
        state.cartItems[itemIndex].qty -= 1;
        toast.info("Decrease Product Quantity", {
          closeOnClick: true,
          autoClose: 1000,
          transition: Flip,
          hideProgressBar: true,
        });
      } else if (state.cartItems[itemIndex].qty === 1) {
        const removeCart = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = removeCart;
        toast.success(`Remove success ${state.cartItems.name} to cart`, {
          closeOnClick: true,
          autoClose: 1000,
          transition: Flip,
          hideProgressBar: true,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    DELETE_CART_ITEMS: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const removeCart = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeCart;
      toast.success(`Remove success ${state.cartItems.name} to cart`, {
        closeOnClick: true,
        autoClose: 1000,
        transition: Flip,
        hideProgressBar: true,
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    CLEAR_CART_ITEMS: (state, action) => {
      state.cartItems = [];
      toast.success(`Remove success  cart`, {
        closeOnClick: true,
        autoClose: 1000,
        transition: Flip,
        hideProgressBar: true,
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    GET_TOTAL: (state, action) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;

          cartTotal.total += itemTotal;
          cartTotal.quantity += qty;

          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const selectAllCartItems = (state) => state.cart.cartItems;

export const {
  ADD_CART_ITEMS,
  DECREASE_CART_ITEMS,
  DELETE_CART_ITEMS,
  CLEAR_CART_ITEMS,
  GET_TOTAL,
} = cartSlice.actions;

export default cartSlice.reducer;
