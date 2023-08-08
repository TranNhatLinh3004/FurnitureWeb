import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import Checkout from "../pages/checkout/Checkout";
import Register from "../pages/register/Register";
import ProductDetails from "../pages/productDetails/ProductDetails";
import ProtectRoute from "./ProtectRoute";
import ThankYou from "../pages/thank-you/ThankYou";
import "spin.js/spin.css";
import { Spinner } from "spin.js";
const LazyShop = React.lazy(() => import("../pages/shop/Shop"));
function Routers(props) {
  const navigate = useNavigate();

  const customSpinner = new Spinner({ color: "rgb(0, 200, 133)" });
  // Sử dụng useEffect để thực hiện chuyển hướng đến trang home khi trang được tải lần đầu
  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      {/* <Route
        path="shop"
        element={
          <React.Suspense fallback="Loading...">
            <LazyShop />
          </React.Suspense>
        }
      /> */}
      <Route
        path="shop"
        element={
          <React.Suspense
            fallback={<div ref={(el) => el && customSpinner.spin(el)} />}
          >
            <LazyShop />
          </React.Suspense>
        }
      />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="thank-you" element={<ThankYou />} />
      <Route
        path="checkout"
        element={
          <ProtectRoute>
            <Checkout />
          </ProtectRoute>
        }
      />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default Routers;
