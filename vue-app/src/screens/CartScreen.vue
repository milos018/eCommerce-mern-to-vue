<template>
  <div class="row">
    <div class="col-md-8">
      <h1>Shopping Cart</h1>
      <div
        v-if="cartItems.length === 0"
        role="alert"
        class="face alert alert-info show"
      >
        Your Cart is empty <router-link to="/cart">Go back</router-link>
      </div>
      <div v-if="cartItems.length > 0" class="list-group list-group-flush">
        <div
          v-for="item in cartItems"
          :key="item.product"
          class="list-group-item"
        >
          <div class="row">
            <div class="col-md-2">
              <img
                :src="item.image"
                :alt="item.name"
                class="img-fluid rounded"
              />
            </div>
            <div class="col-md-3">
              <router-link :to="'/product/' + item.product">{{
                item.name
              }}</router-link>
            </div>
            <div class="col-md-2">${{ item.price }}</div>
            <div class="col-md-2">
              <select
                class="form-control"
                :value="item.qty"
                @change="changeQtyHandler(item.product, $event)"
              >
                <option
                  v-for="num in item.countInStock"
                  :key="num"
                  :value="num"
                  >{{ num }}</option
                >
              </select>
            </div>
            <div class="col-md-2">
              <button
                type="button"
                class="btn btn-light"
                @click="removeFromCartHandler(item.product)"
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <div class="list-group list-group-flush">
          <div class="list-group-item">
            <h2>
              Subtotal ({{
                cartItems.reduce((acc, item) => acc + +item.qty, 0)
              }}) items
            </h2>
            ${{
              cartItems
                .reduce((acc, item) => acc + +item.qty * +item.price, 0)
                .toFixed(2)
            }}
          </div>
          <div class="list-group-item">
            <button
              type="button"
              class="btn-block btn btn-primary"
              :disabled="cartItems.length === 0"
              @click="checkoutHandler"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const { dispatch, state } = useStore();
    const { params, query } = useRoute();
    const { replace } = useRouter();

    const productId = computed(() => params.productId);
    const qty = computed(() => query.qty);

    const cartItems = computed(() => state.cartStore.cartItems);

    const addToCartHandler = () => {
      productId.value &&
        qty.value &&
        dispatch("addToCart", { productId: productId.value, qty: +qty.value });
      replace("/cart");
    };
    addToCartHandler();

    const changeQtyHandler = (productId, event) => {
      dispatch("addToCart", { productId, qty: +event.target.value });
    };

    const removeFromCartHandler = productId => {
      dispatch("removeFromCart", productId);
    };

    const checkoutHandler = () => {
      console.log("Checkout");
    };

    return {
      qty,
      productId,
      cartItems,
      changeQtyHandler,
      removeFromCartHandler,
      checkoutHandler
    };
  }
};
</script>

<style></style>
