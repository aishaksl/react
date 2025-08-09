import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/ProductSlice";
import Product from "../components/Product";

function ProductList() {
  const dispatch = useDispatch();

  const { products, searchTerm } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-row flex-wrap space-x-5 space-y-8  ">
      {products &&
        filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
