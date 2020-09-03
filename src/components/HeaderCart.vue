<template>
  <div id="cartButton">
    <router-link :to="{ name: 'cart' }">
      <img src="@/assets/images/site/cart-icon.png" alt="Cart Icon" />
      <div id="cartCount">{{ cart.numberOfItems }}</div>
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

<style scoped>
#cartButton {
  min-width: 200px;
}
#cartButton img {
  width: 80px;
}

#cartButton {
  position: relative;
}

#cartCount {
  position: absolute;
  top: 12px;
  left: 38px;
  font-weight: bold;
  font-size: larger;
  color: #fafafa;
  cursor: pointer;
}
</style>
