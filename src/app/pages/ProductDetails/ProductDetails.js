import React, { useState } from "react";
import Rating from "react-rating";
import { NavLink, useParams } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetails";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const ProductDetails = () => {
  const { id } = useParams();
  const { productDetail } = useProductDetails(id);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt="Product"
              src=""
              className="aspect-square w-full rounded-xl object-cover"
            />

            <div className="grid grid-cols-2 gap-4 lg:mt-4">
              <img
                alt="Product"
                src=""
                className="aspect-square w-full rounded-xl object-cover"
              />

              <img
                alt="Product"
                src=""
                className="aspect-square w-full rounded-xl object-cover"
              />

              <img
                alt="Product"
                src=""
                className="aspect-square w-full rounded-xl object-cover"
              />

              <img
                alt="Product"
                src=""
                className="aspect-square w-full rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="sticky top-0">
            <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
              {productDetail?.featured ? "Featured" : ""}
            </strong>

            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch] space-y-2">
                <h1 className="text-xl font-bold sm:text-2xl">
                  {productDetail?.name?.en}
                </h1>

                <p className="text-sm">Highest Rated Product</p>

                <div className="-ml-0.5 flex">
                  <Rating
                    initialRating={productDetail?.rate}
                    emptySymbol={
                      <AiOutlineStar
                        icon={AiOutlineStar}
                        style={{ color: "orange" }}
                      />
                    }
                    fullSymbol={
                      <AiFillStar
                        style={{ color: "orange" }}
                        icon={AiFillStar}
                      />
                    }
                    readonly
                  ></Rating>
                </div>
              </div>

              <p className="text-lg font-bold">${productDetail?.price}</p>
            </div>

            <div className="mt-4">
              <div className="prose max-w-none">
                <p>
                  <span className="font-semibold"> Description: </span>
                  <span>
                    {isReadMore
                      ? productDetail?.description?.en
                          .slice(0, 100)
                          .replace(/(<([^>]+)>)/gi, "") + "..."
                      : productDetail?.description?.en.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                  </span>{" "}
                  {productDetail?.description?.en?.length > 100 && (
                    <>
                      {" "}
                      <button
                        onClick={toggleReadMore}
                        className="mt-2 text-sm font-medium underline"
                      >
                        {isReadMore ? "Read More" : " Read Less"}
                      </button>
                    </>
                  )}
                </p>
              </div>
            </div>

            <form className="mt-8">
              <div className="mt-8 flex gap-4">
                <div>
                  <label htmlFor="quantity" className="sr-only">
                    Qty
                  </label>

                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    defaultValue="1"
                    className="w-12 rounded border border-gray-600 focus:ring-gray-500 py-3 text-center text-base [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
                {productDetail?.enable_booking ? (
                  <NavLink to={`/checkout`}>
                    {" "}
                    <button className="block rounded bg-primary px-5 py-3 text-base font-medium text-white hover:bg-emerald-600">
                      Book this service
                    </button>
                  </NavLink>
                ) : (
                  <button className="w-56 rounded bg-primary px-6 py-3 text-sm font-medium transition hover:scale-105">
                    Closed
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
