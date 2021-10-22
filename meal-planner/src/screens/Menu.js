import React, { useEffect } from "react";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

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

  return (
    <>
      <div className="banner">
        <div
          className="banner__img"
          style={{ backgroundImage: `url(${"/images/danhmuc5.jpg"})` }}
        ></div>
        <div className="">
          <h2 className="banner__text">Menu</h2>
        </div>
      </div>
      <div className="right__content row">
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          <div className="row center">
            {products.map((product) => (
              <Products key={product._id} product={product}></Products>
            ))}
          </div>
        </>
      )}
      </div>
    </>
  );
}

export default Place;
