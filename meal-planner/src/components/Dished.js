import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Dished(props) {
  const { product } = props;
  return (
    <div key={product._id} className="col-sm-6 col-lg-4 all pizza">
              <Link to={`/products/${product._id}`}>

      <div className="box">
        <div>
          <div className="img-box">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="detail-box">
            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <div className="options">
              <h6>
                {product.price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND"
                })}
              </h6>
                <i className="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>
      </div>
      </Link>

    </div>
  );
}

export default Dished;
