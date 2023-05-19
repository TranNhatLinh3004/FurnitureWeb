import React from "react";
import ProductCard from "../productcard/ProductCard";

function ProductsList(props) {
  return (
    <>
      {props.data?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );
}

export default ProductsList;
