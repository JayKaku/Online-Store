import React from "react";
import { SingleProduct } from "./SingleProduct";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="section">
      {products &&
        products.map((product) => {
          return (
            <SingleProduct
              product={product}
              addToCart={addToCart}
              key={product.id}
            />
          );
        })}
    </div>
  );
};

export default ProductList;
