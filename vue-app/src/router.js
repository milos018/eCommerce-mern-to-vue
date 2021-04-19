import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "./screens/HomeScreen.vue";

const routes = [
  {
    path: "/",
    name: "HomeScreen",
    component: HomeScreen
  },
  {
    path: "/product/:productId",
    name: "ProductScreen",
    component: () =>
      import(/* webpackChunkName: "single-product" */ "./screens/ProductScreen")
  },
  {
    path: "/cart/:productId?",
    name: "CartScreen",
    component: () =>
      import(/* webpackChunkName: "cart" */ "./screens/CartScreen")
  },
  {
    path: "/login"
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
