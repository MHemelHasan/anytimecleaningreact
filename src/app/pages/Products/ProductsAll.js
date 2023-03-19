import React from "react";
import Product from "../../components/Product";
import useProducts from "./../../hooks/useProducts";
import Loading from "./../../shared/Loading";

const ProductsAll = () => {
  const { products, loading } = useProducts();

  return (
    <div className="px-8 md:px-20 mx-auto my-20">
      {loading ? (
        <Loading />
      ) : (
        <div class=" grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-3 lg:gap-x-4 lg:px-0">
          {products?.map((product) => (
            <Product key={product?.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsAll;
