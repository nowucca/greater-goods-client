<script setup lang="ts">
import { useCartStore } from "@/stores/CartStore";

const cartStore = useCartStore();
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

<template>
  <div id="header-cart">
    <router-link :to="{ name: 'home-view' }">
      <img src="@/assets/images/site/cart-icon.png" alt="Cart Icon" />
      <div id="cart-count">{{ cartStore.count }}</div>
    </router-link>
  </div>
</template>
