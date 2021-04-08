<template>
  <app-header></app-header>
  <main class="py-3">
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
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

h3 {
  padding: 1rem 0;
}

.rating span {
  margin: 0.1rem;
}
</style>
