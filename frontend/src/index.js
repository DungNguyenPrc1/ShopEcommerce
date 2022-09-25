import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
import { Provider } from "react-redux";
import { productsFetch } from "./redux/slice/productsSlice";
import { GET_TOTAL } from "./redux/slice/cartSlice";
import store from "./redux/store";
store.dispatch(productsFetch());
store.dispatch(GET_TOTAL());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalStyles>
  </React.StrictMode>
);
