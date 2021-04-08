<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link to="/" class="navbar-brand">ProShop</router-link>
        <button
          aria-controls="basic-navbar-nav"
          type="button"
          aria-label="Toggle Navigation"
          class="navbar-toggler collapsed"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="basic-navbar-nav">
          <div class="ml-auto navbar-nav">
            <router-link to="/cart" class="nav-link">
              <i class="fas fa-shopping-cart"></i>Cart
            </router-link>
            <router-link to="/login" class="nav-link">
              <i class="fas fa-user"></i>Sign In
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
