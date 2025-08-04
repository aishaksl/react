import React from "react";
import { products } from "../data/product";
import Product from "../components/Product";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1> Product Details</h1>
      <hr />
      {products &&
        products.map((product) => {
          if (product.id == id) {
            return <Product product={product} />;
          }
        })}
    </div>
  );
}

export default ProductDetails;
