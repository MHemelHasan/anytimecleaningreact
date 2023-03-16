import React from "react";
import Loading from "../shared/Loading";
import useCategories from "./../hooks/useCategories";

const CategoriesAll = () => {
  const { categories, loading } = useCategories();
  return (
    <div className="px-8 md:px-20 mx-auto my-20">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-full">
          {categories?.map((category) => (
            <div
              className="relative p-4 w-full bg-white rounded-lg overflow-hidden hover:shadow flex flex-col justify-center items-center cursor-pointer"
              style={{ minHeight: "100px", backgroundColor: category?.color }}
              key={category?.id}
            >
              <h2 className="mt-2 text-white text-base lg:text-lg font-semibold line-clamp-1">
                {category?.name}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesAll;
