<template>
  <div id="cartButton">
    <router-link :to="{ name: 'cart' }">
      <img src="@/assets/site/cart-icon.png" alt="Cart Icon" />
    </router-link>
    <div id="cartCount">0</div>
  </div>
</template>

<script>
export default {}
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
}
</style>
