import React from "react";
import { useNavigate } from "react-router";

function Product({ product }) {
  const { id, title, price, image } = product;

  const navigate = useNavigate();

  return (
    <div className="flex-col shadow-md p-4 rounded-md w-[250px] flex justify-center items-center space-y-3 transition-transform duration-300 hover:scale-105">
      <img src={image} className="w-[150px] h-[250px] " />
      <p className=" w-3/4 truncate">{title}</p>
      <h3>${price}</h3>
      <button
        className="border rounded-md px-4 py-1 cursor-pointer"
        onClick={() => navigate(`/product-details/${id}`)}
      >
        Details
      </button>
    </div>
  );
}

export default Product;
