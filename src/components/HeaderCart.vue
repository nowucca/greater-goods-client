<template>
  <div id="header-cart">
    <router-link :to="{ name: 'cart' }">
      <img src="@/assets/images/site/cart-icon.png" alt="Cart Icon" />
      <div id="cart-count">{{ cart.numberOfItems }}</div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style lang="scss">
#header-cart {
  min-width: 12.5em;
  position: relative;

  img {
    width: 80px;
  }

  #cart-count {
    position: absolute;
    top: 12px;
    left: 38px;
    font-weight: bold;
    font-size: larger;
    color: #fafafa;
    cursor: pointer;
  }
}
</style>
