<template>
  <h1>Latest Products</h1>
  <div class="row">
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
import { ref } from "vue";
import Product from "../components/Product";
import axios from "axios";
export default {
  components: { Product },
  setup() {
    const products = ref([]);
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5500/api/products");
        products.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
    return { products };
  }
};
</script>

<style></style>
