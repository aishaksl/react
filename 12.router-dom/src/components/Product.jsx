import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, name, price } = product;

  const navigate = useNavigate();

  return (
    <div className="m-3">
      <div>Product Details</div>
      <h3>Name:{name}</h3>
      <h3>price:{price}</h3>
      <button
        className="border cursor-pointer p-1 rounded-sm"
        onClick={() => navigate(`/product-details/${id}`)}
      >
        See Details
      </button>
    </div>
  );
}

export default Product;
