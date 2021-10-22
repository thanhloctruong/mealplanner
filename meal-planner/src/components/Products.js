import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
function Products(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/products/${product._id}`}>
        <img src={product.image} alt={product.name} className="right__content--img"/>
      </Link>
      <div className="card-body">
        <Link to={`/products/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}

export default Products;
