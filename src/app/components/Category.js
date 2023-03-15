import React from "react";
import category from "./category.module.css";

const Category = ({ name, color, order, description }) => {
  return (
    <div
      className={`md:flex shadow-lg  mx-6 md:mx-auto max-w-lg md:max-w-2xls rounded-lg  ${category["bg-gradient"]} `}
      style={{ backgroundColor: color }}
      // style={{ backgroundColor: `${category["bg-gradient"]}` }}
    >
      <div className={`w-full md:w-2/3 px-4 py-4 rounded-lg`}>
        <h2 className="text-lg text-gray-800 font-medium mr-auto">{name}</h2>
        <span className="text-gray-800 font-semibold tracking-tighter">
          Order: {order}
        </span>
      </div>
    </div>
  );
};

export default Category;
