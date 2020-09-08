<template>
  <div id="cart-button">
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
@import 'src/styles/components/HeaderCart';
</style>
