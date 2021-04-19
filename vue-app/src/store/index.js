import { createStore } from "vuex";
import productStore from "../store/productStore";
import cartStore from "../store/cartStore";

export default createStore({
  modules: {
    productStore,
    cartStore
  },
  state() {
    return {
      user: {
        isLoggedIn: false,
        email: "",
        userId: "",
        userToken: "",
        isAdmin: false
      }
    };
  },
  mutations: {
    login() {
      console.log("Login Mutation");
    },
    logout() {
      console.log("Logout Mutation");
    }
  },
  actions: {
    login() {
      console.log("Login Action");
    },
    logout() {
      console.log("Logout Action");
    }
  },
  getters: {}
});
