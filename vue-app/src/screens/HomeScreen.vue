<template>
  <h1>Latest Products</h1>
  <app-loader v-if="isLoading"></app-loader>
  <app-message v-if="error" variant="danger">{{ error }}</app-message>
  <div v-if="!isLoading && !error" class="row">
    <div
      v-for="product in products"
      :key="product._id"
      class="col-xl-3 col-lg-4 col-md-6 col-sm-12"
    >
      <product :product="product"></product>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Product from "../components/product/Product";

export default {
  components: { Product },
  setup() {
    const { dispatch, state } = useStore();

    dispatch("listProducts");

    const isLoading = computed(() => state.productStore.isLoading);
    const error = computed(() => state.productStore.error);
    const products = computed(() => state.productStore.products);

    return { isLoading, error, products };
  }
};
</script>
