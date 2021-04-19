import productMutations from "./mutations/productMutations";
import { listProducts, listProductDetails } from "./actions/productActions";

export default {
  state: () => ({}),
  mutations: productMutations,
  actions: {
    listProducts,
    listProductDetails
  },
  getters: {}
};
