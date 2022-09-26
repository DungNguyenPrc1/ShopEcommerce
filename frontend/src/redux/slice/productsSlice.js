import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  error: null,
};
export const productsFetch = createAsyncThunk(
  "products/producsFetch",
  async () => {
    try {
      const response = await axios.get(
        "https://tgdd-backend.herokuapp.com/products"
      );
      return response?.data;
    } catch (error) {
      console.log("some thing wrong");
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(productsFetch.pending, (state, action) => {
        state.status = "pending";
      })

      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = "pending";
        state.items = action.payload;
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const selectAllProducts = (state) => state.products.items;

export default productsSlice.reducer;
