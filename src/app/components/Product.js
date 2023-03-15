import React from "react";

const Product = ({ name, en, id, description, price }) => {
  return (
    <div className="card w-96 glass">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Product Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name?.en}</h2>
        <p>Description: {description?.en}</p>
        <p className="font-semibold">Price: {price}</p>
      </div>
    </div>
  );
};

export default Product;
