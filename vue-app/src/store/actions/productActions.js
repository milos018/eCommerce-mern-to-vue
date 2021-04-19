import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from "../constants/productConstants";

export const listProducts = async ({ commit }) => {
  try {
    commit(PRODUCT_LIST_REQUEST);
    const { data } = await axios.get("http://localhost:5500/api/v1/products");

    commit(PRODUCT_LIST_SUCCESS, data);
  } catch (error) {
    const errorData =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    commit(PRODUCT_LIST_FAIL, errorData);
  }
};

export const listProductDetails = async ({ commit }, productId) => {
  try {
    commit(PRODUCT_DETAILS_REQUEST);
    const { data } = await axios.get(
      "http://localhost:5500/api/v1/products/" + productId
    );

    commit(PRODUCT_DETAILS_SUCCESS, data);
  } catch (error) {
    const errorData =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    commit(PRODUCT_DETAILS_FAIL, errorData);
  }
};
