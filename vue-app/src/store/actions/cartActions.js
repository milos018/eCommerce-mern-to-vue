import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = async ({ commit, rootState }, productData) => {
  try {
    const { data } = await axios.get(
      "http://localhost:5500/api/v1/products/" + productData.productId
    );
    commit(CART_ADD_ITEM, {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty: productData.qty
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(rootState.cartStore.cartItems)
    );
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = ({ commit, rootState }, productId) => {
  commit(CART_REMOVE_ITEM, productId);

  localStorage.setItem(
    "cartItems",
    JSON.stringify(rootState.cartStore.cartItems)
  );
};
