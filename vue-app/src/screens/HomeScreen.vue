<template>
  <h1>Latest Products</h1>
  <div class="row">
    <div
      v-for="product in productList"
      :key="product._id"
      class="col-xl-3 col-lg-4 col-md-6 col-sm-12"
    >
      <product :product="product"></product>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Product from "../components/Product";
import products from "../products";
export default {
  components: { Product },
  setup() {
    const productList = computed(() => products);
    return { productList };
  }
};
</script>

<style></style>
