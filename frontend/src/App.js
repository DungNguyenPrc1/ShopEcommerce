import { Fragment, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  Admin,
  Cart,
  Contact,
  Home,
  OrderHistory,
  Login,
  Register,
  Reset,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Header } from "./components";
import "antd/dist/antd.min.css";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <Fragment>
      <Router>
        <Wrapper>
          <ToastContainer />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/register" element={<Register />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Wrapper>
      </Router>
    </Fragment>
  );
}

export default App;
