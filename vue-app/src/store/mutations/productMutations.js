import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from "../constants/productConstants";

export default {
  [PRODUCT_LIST_REQUEST]: state => (state.isLoading = true),
  [PRODUCT_LIST_SUCCESS]: (state, products) => {
    state.isLoading = false;
    state.products = products;
  },
  [PRODUCT_LIST_FAIL]: (state, error) => {
    state.isLoading = false;
    state.error = error;
  },
  [PRODUCT_DETAILS_REQUEST]: state => (state.isLoading = true),
  [PRODUCT_DETAILS_SUCCESS]: (state, productData) => {
    state.isLoading = false;
    state.product = productData;
  },
  [PRODUCT_DETAILS_FAIL]: (state, error) => {
    state.isLoading = false;
    state.error = error;
  }
};
