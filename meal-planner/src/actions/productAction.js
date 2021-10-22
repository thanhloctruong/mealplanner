import Axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL
} from "../constants/productCongstant";

export const listProducts = ({
  pageNumber = "",
  name = "",
  category = "",
  order = "",
  min = 0,
  max = 0,
  rating = 0
}) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST
  });
  try {
    const { data } = await Axios.get(
      `/api/products?pageNumber=${pageNumber}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
    );
    // console.log(data);
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};
