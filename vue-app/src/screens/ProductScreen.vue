<template>
  <router-link to="/" class="btn btn-light my-3">Go Back</router-link>
  <div class="row">
    <div class="col-md-6">
      <img :src="product.image" :alt="product.name" class="img-fluid" />
    </div>
    <div class="col-md-3">
      <div class="list-group list-group-flush">
        <div class="list-group-item">
          <h3>{{ product.name }}</h3>
        </div>
        <div class="list-group-item">
          <div class="rating">
            <rating
              :value="product.rating"
              :text="`${product.numReviews} reviews`"
            ></rating>
          </div>
        </div>
        <div class="list-group-item">Price: ${{ product.price }}</div>
        <div class="list-group-item">
          Description: {{ product.description }}
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <div class="list-group list-group-flush">
          <div class="list-group-item">
            <div class="row">
              <div class="col">Price</div>
              <div class="col">
                <strong>${{ product.price }}</strong>
              </div>
            </div>
          </div>
          <div class="list-group-item">
            <div class="row">
              <div class="col">Status</div>
              <div class="col">
                {{ product.countInStock > 0 ? "In Stock" : "Out of Stock" }}
              </div>
            </div>
          </div>
          <div class="list-group-item">
            <button
              type="button"
              class="btn-block btn btn-primary"
              :disabled="product.countInStock === 0"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import products from "../products";
import Rating from "../components/Rating";
export default {
  components: { Rating },
  setup() {
    const route = useRoute();
    const { productId } = route.params;

    const product = products.find(p => p._id === productId);

    return { product };
  }
};
</script>

<style></style>
