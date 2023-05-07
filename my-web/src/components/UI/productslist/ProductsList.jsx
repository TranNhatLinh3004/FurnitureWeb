import React from "react";
import ProductCard from "../productcard/ProductCard";

function ProductsList(props) {
  return (
    <>
      {props.data.map((item) => (
        <ProductCard item={item} />
      ))}
    </>
  );
}

export default ProductsList;
