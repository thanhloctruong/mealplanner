import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { useSelector, useDispatch } from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { detailsProduct, createReview } from "../actions/productAction";
import { productDetailsReducer } from "../reducers/productReducer";
// import { PRODUCT_REVIEW_CREATE_RESET } from "constants/productConstants";

function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  // console.log(productDetails.product);
  // const productReviewCreate = useSelector((state) => state.productReviewCreate);
  // const {
  //   loading: loadingReviewCreate,
  //   error: errorReviewCreate,
  //   success: successReviewCreate,
  // } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    // if (successReviewCreate) {
    //   window.alert('Review Submitted Successfully');
    //   setRating('');
    //   setComment('');
    //   // dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    // }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  // useEffect(() => {
  //   if (successReviewCreate) {
  //     window.alert('Review Submitted Successfully');
  //     setRating('');
  //     setComment('');
  //     // dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
  //   }
  //   dispatch(detailsProduct(productId));
  // },  [dispatch, productId, successReviewCreate]);
  const handleAddToCart = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch();
      // createReview(productId, { rating, comment, name: userInfo.name })
    } else {
      alert("Please enter comment and rating");
    }
  };
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger"> {error} </MessageBox>
      ) : (
        <div>
          <Link to="/menu">Back to result</Link>
          {/* bs */}
          <section class="book_section layout_padding">
            <div class="container  ">
              <div class="row">
                <div class="col-md-4 ">
                  <div class="img-box">
                    <img
                      className="large"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                </div>
                <div class="col-md-4 ">
                  <div class="detail-box">
                    <h2>{product.name}</h2>
                    <ul>
                      <li>
                        <Rating
                          rating={product.rating}
                          numReviews={product.numReviews}
                        />
                      </li>
                      <li>
                        Price:{" "}
                        {product.price.toLocaleString("vi", {
                          style: "currency",
                          currency: "VND"
                        })}
                      </li>
                      <li>
                        Description: <p>{product.description}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-4 box-price">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">{product.price.toLocaleString("vi", {
                          style: "currency",
                          currency: "VND"
                        })}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Quantity</div>
                      <div style={{paddingLeft:"2rem"}}>
                        <select 
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </li>
                  <li >
                  <div >
                    <button class="btn btn-secondary" onClick={handleAddToCart} style={{width:"100%", marginTop:"2rem"}}>
                      Add to cart
                    </button>

                  </div>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </section>
          {/* bs */}
          
          <div>
            <h2 id="reviews">Reviews</h2>
            {product.reviews.length === 0 && (
              <MessageBox>There is no review</MessageBox>
            )}
            <ul>
              {product.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating rating={review.rating} caption=" "></Rating>
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
              <li>
                {userInfo ? (
                  <form className="form" onSubmit={submitHandler}>
                    <div>
                      <h2>Write a customer review</h2>
                    </div>
                    <div>
                      <label htmlFor="rating">Rating</label>
                      <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1- Poor</option>
                        <option value="2">2- Fair</option>
                        <option value="3">3- Good</option>
                        <option value="4">4- Very good</option>
                        <option value="5">5- Excelent</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label />
                      <button className="primary" type="submit">
                        Submit
                      </button>
                    </div>
                    <div>
                      {/* {loadingReviewCreate && <LoadingBox></LoadingBox>}
                      {errorReviewCreate && (
                        <MessageBox variant="danger">
                          {errorReviewCreate}
                        </MessageBox>
                      )} */}
                    </div>
                  </form>
                ) : (
                  <MessageBox>
                    Please <Link to="/signin">Sign In</Link> to write a review
                  </MessageBox>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductScreen;
