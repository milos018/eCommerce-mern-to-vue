<template>
  <div class="my-3 p-3 rounded card">
    <router-link :to="`/product/${product._id}`">
      <img :src="product.image" class="card-img-top" />
    </router-link>
    <div class="card-body">
      <router-link :to="`/product/${product._id}`">
        <div class="card-title">
          <strong>{{ product.name }}</strong>
        </div>
      </router-link>
      <div class="card-text">
        <rating
          :value="product.rating"
          :text="`${product.numReviews} reviews`"
        ></rating>
      </div>
      <h3 class="card-text">${{ product.price }}</h3>
    </div>
  </div>
</template>

<script>
import Rating from "./Rating";
export default {
  components: { Rating },
  props: ["product"]
};
</script>

<style></style>
