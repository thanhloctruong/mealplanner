import React, { useEffect } from "react";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Dished from "../components/Dished";


function Place(props) {
  
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
  // const products = data.map((product) => (
  //   <Magazine src={product.src} title={product.name} text="" />
  // ));
console.log(products);
  return (
    <section class="food_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Our Menu
        </h2>
      </div>
      <ul className="filters_menu">
        <li className="active" data-filter="*">
          All
        </li>
        <li data-filter=".burger">Burger</li>
        <li data-filter=".pizza">Pizza</li>
        <li data-filter=".pasta">Pasta</li>
        <li data-filter=".fries">Fries</li>
      </ul>

      <div className="filters-content">
        <div className="row grid">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              {products.map((product) => (
                <Dished key={product._id} product={product} />
              ))}
              {/* <Products key={product._id} product={product}></Products> */}
            </>
          )}
          {/* component dished */}
          {/* add sort */}
          {/* <Menu/> */}
        </div>
      </div>
      <div className="btn-box">
        <a href="">View More</a>
      </div>
    </div>
  </section>
  );
}

export default Place;
