import cartMutations from "./mutations/cartMutations";
import { addToCart, removeFromCart } from "./actions/cartActions";

export default {
  state: () => ({
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  }),
  mutations: cartMutations,
  actions: {
    addToCart,
    removeFromCart
  },
  getters: {}
};
