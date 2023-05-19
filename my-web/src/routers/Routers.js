import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import Shop from "../pages/shop/Shop";
import Checkout from "../pages/checkout/Checkout";
import Register from "../pages/register/Register";
import ProductDetails from "../pages/productDetails/ProductDetails";
import ProtectRoute from "./ProtectRoute";

function Routers(props) {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />{" "}
      <Route path="shop" element={<Shop />} />{" "}
      <Route path="shop/:id" element={<ProductDetails />} />{" "}
      <Route path="cart" element={<Cart />} />{" "}
      <Route
        path="checkout"
        element={
          <ProtectRoute>
            <Checkout />
          </ProtectRoute>
        }
      />{" "}
      <Route path="register" element={<Register />} />{" "}
    </Routes>
  );
}

export default Routers;
