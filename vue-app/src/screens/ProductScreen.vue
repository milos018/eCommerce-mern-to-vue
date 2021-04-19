<template>
  <router-link to="/" class="btn btn-light my-3">Go Back</router-link>
  <app-loader v-if="isLoading"></app-loader>
  <app-message v-if="error" variant="danger">{{ error }}</app-message>
  <div v-if="!isLoading && !error" class="row">
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
          <div v-if="product.countInStock > 0" class="list-group-item">
            <div class="row">
              <div class="col">Qty</div>
              <div class="col">
                <select class="form-control" v-model="qty">
                  <option
                    v-for="num in product.countInStock"
                    :key="num"
                    :value="num"
                    >{{ num }}</option
                  >
                </select>
              </div>
            </div>
          </div>
          <div class="list-group-item">
            <button
              @click="addToCartHandler"
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import Rating from "../components/product/Rating";
export default {
  components: { Rating },
  setup() {
    const { productId } = useRoute().params;
    const { dispatch, state } = useStore();

    dispatch("listProductDetails", productId);

    const isLoading = computed(() => state.productStore.isLoading);
    const error = computed(() => state.productStore.error);
    const product = computed(() => state.productStore.product);

    const qty = ref(1);
    const { push } = useRouter();

    const addToCartHandler = () => {
      push("/cart/" + productId + "?qty=" + qty.value);
    };

    return { qty, isLoading, error, product, addToCartHandler };
  }
};
</script>

<style></style>
