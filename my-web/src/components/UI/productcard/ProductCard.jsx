import React from "react";
import productImg from "../../../assets/images/arm-chair-01.jpg";
import { Col } from "reactstrap";
import "./productcard.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActives } from "../../../redux/slices/cartSlice";

import { ToastContainer, toast } from "react-toastify";
function ProductCard(props) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActives.addItem({
        id: props.item.id,
        productName: props.item.productName,
        imgUrl: props.item.imgUrl,
        price: props.item.price,
      })
    );
    toast.success("Item added to cart");

  };
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={props.item.imgUrl}
            alt="ẢNh LỖi"
          />
        </div>
        <div className="p-2">
          <h3 className="product__name">
            <Link to={`/shop/${props.item.id}`}>{props.item.productName}</Link>
          </h3>
          <span className="text-center">{props.item.category}</span>
        </div>

        <div className="product__card-bottom ">
          <span className="price">${props.item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i class="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
}

export default ProductCard;
