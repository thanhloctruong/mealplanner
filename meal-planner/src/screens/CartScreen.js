import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { addToCart, removeCart } from "../actions/CartAction";
import { useDispatch, useSelector } from "react-redux";
import MessageBox from "../components/MessageBox";

function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
  };
  const handleCheckOut = () => {
    props.history.push("/signin?redirect=shipping");
  };
  return (
    <section class="book_section layout_padding">
      <div class="container  ">
        <div class="row">
          <div class="col-md-8 ">
            <div>
              {cartItems.length === 0 ? (
                <div>
                  <img
                    src="/images/empty-cart.png"
                    alt="empty-cart"
                    className="empty"
                  />
                  <div>
                    <Link to="/">Go Shopping</Link>
                  </div>
                </div>
              ) : (
                <ul>
                {cartItems.map((item) => (
                  <li key={item.product}>
                    <div className='row'>
                      <div className="col-md-6">
                      <div className="min-30">
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="small"
                        ></img>
                      </div>
                      <div className="col-md-6 row" style={{justifyContent:"space-around"}}>
                      
                      <div>
                        <select
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>${item.price}</div>
                      <div >
                        <button
                        className="btn btn-secondary"
                          type="submit"
                          onClick={() => handleRemoveCart(item.product)}
                        >
                          DELETE
                        </button>
                      </div>
                      </div>
                      
                    </div>
                  </li>
                ))}
              </ul>
              )}
            </div>
          </div>
          {/* <div class="col-md-4 ">
            <div class="detail-box">
              
            </div>
          </div> */}
          <div class="col-md-4 box-price">
            <ul>
              <li>
                <h2>
                  T???ng C???ng: ({cartItems.reduce((a, c) => a + c.qty, 0)} items):
                  ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h2>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleCheckOut}
                  className="btn btn-secondary"
                  disabled={cartItems.length === 0}
                >
                  proceed to checkout
                </button>
              </li>
            </ul>
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default CartScreen;
