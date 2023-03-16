import React from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "./../hooks/useProducts";
import Loading from "./../shared/Loading";
import Product from "./Product";

const Products = () => {
  const { products, loading } = useProducts();
  const navigate = useNavigate();
  return (
    <div className="px-8 md:px-20 mx-auto mt-20 mb-10 flex flex-col gap-10">
      <div className="mt-20 flex justify-between">
        <h2 className="text-xl font-bold">Recommended for you</h2>
        <div className="">
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="text-orange-500 text-end w-full px-4 py-2 rounded-2xl bg-orange-300 border-none bg-opacity-20"
          >
            View All
          </button>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
          {products?.slice(0, 3)?.map((product) => (
            <Product key={product?.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
