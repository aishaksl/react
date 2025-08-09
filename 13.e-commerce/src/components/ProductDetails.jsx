import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setSelectedProduct } from "../redux/slices/ProductSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addtoCard, amount } from "../redux/slices/cardSlice";

function ProductDetails() {
  const { id } = useParams();

  const { products, selectedProduct } = useSelector((store) => store.product);

  const { price, image, title, description } = selectedProduct;

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  const addCard = () => {
    if (count <= 0) return;

    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };
    dispatch(addtoCard(payload));
    dispatch(amount());
  };

  return (
    <div className=" flex flex-row items-center justify-center space-x-10">
      <img src={image} className="w-[300px] h-[500px]" />
      <div className="space-y-4">
        <h1 className="font-bold text-3xl ">{title}</h1>
        <div className="text-md">{description}</div>
        <h2 className="text-lg font-bold">${price}</h2>
        <div className="flex flex-row items-center space-x-1">
          <CiCirclePlus className="text-xl" onClick={increment} />
          <div className="text-xl font-bold">{count}</div>
          <CiCircleMinus className="text-xl" onClick={decrement} />
        </div>
        <button
          onClick={addCard}
          className="border px-3 py-1 rounded-md cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
