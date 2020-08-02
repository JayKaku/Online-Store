import React, { Component } from "react";
import { SingleCartProduct } from "./SingleCartProduct";

const CartList = ({ products, removeFromCart }) => {
  return (
    <div className="section">
      {products &&
        products.map((product) => {
          return (
            <SingleCartProduct
              key={product.id}
              product={product}
              removeFromCart={removeFromCart}
            />
          );
        })}
    </div>
  );
};

export default CartList;
