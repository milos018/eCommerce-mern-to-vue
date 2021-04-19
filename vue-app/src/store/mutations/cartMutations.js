import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export default {
  [CART_ADD_ITEM]: (state, productData) => {
    const existItem = state.cartItems.find(
      item => item.product === productData.product
    );

    if (!existItem) {
      state.cartItems = [...state.cartItems, productData];
    } else {
      state.cartItems = [
        ...state.cartItems.map(x =>
          x.product === existItem.product ? productData : x
        )
      ];
    }
  },
  [CART_REMOVE_ITEM]: (state, productId) => {
    state.cartItems = [
      ...state.cartItems.filter(item => item.product !== productId)
    ];
  }
};
