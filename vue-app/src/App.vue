<template>
  <app-header></app-header>
  <main class="py-3">
    <div class="container">
      <h1>Welcome to ProShop</h1>
      <!-- <router-view /> -->
    </div>
  </main>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "./shared/UI/AppHeader";
import AppFooter from "./shared/UI/AppFooter";
export default {
  components: { AppHeader, AppFooter },
  setup() {
    return {};
  }
};
</script>

<style lang="scss">
main {
  min-height: 80vh;
}
</style>
