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
      <div class="container">
        <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-3 g-4">
          {products?.map((product) => (
            <div class="col">
              <Product key={product?.id} {...product} />
            </div>
          ))}
        </div>
      </div>

      )}
    </div>
  );
};

export default ProductsAll;
