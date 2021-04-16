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
              :value="+product.rating"
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
import axios from "axios";
import Rating from "../components/Rating";
import { ref } from "vue";
export default {
  components: { Rating },
  setup() {
    const route = useRoute();
    const { productId } = route.params;

    const product = ref([]);
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5500/api/v1/products/" + productId
        );
        product.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();

    return { product };
  }
};
</script>

<style></style>
