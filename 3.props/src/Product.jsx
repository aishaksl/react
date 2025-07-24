import React from "react";

function Product({ productName, productPrice }) {
  return (
    <div>
      <div>Product Information</div>
      <div>
        <div>Product name: {productName}</div>
        <div>Price:$ {productPrice}</div>
      </div>
    </div>
  );
}

export default Product;

// This is a reusable Product component.
// It receives props: productName (string) and productPrice (number).
