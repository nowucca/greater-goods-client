<script setup lang="ts">
import ProductBox from "@/components/ProductBox.vue";
import { useProductStore } from "@/stores/ProductStore";

const productStore = useProductStore();
</script>

<style lang="scss">
.category-product-list {
  display: flex;
  flex-wrap: wrap;
  color: var(--ci-3);
  align-items: center;
  width: 90%;
  justify-content: space-evenly;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}
</style>

<template>
  <section class="category-product-list">
    <product-box
      v-for="product in productStore.productList"
      v-bind:key="product.productId"
      :product="product"
    />
  </section>
</template>
