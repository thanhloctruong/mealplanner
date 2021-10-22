import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userSigninReducer, userRegisterReducer } from "./reducers/userReducer";
import { productListReducer } from "./reducers/productReducer";
const initialState = {
    userSignin: {
      userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null
    },
  };

  const reducer = combineReducers({
    productList: productListReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;