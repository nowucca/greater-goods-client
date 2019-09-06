<template>
  <section class="products-container">
    <ProductBox
      v-for="product in storeState.selectedCategoryProducts"
      v-bind:key="product.productId"
      :product="product"
    />
  </section>
</template>

<script>
import ProductBox from '@/components/ProductBox.vue'
import { store } from '@/store.js'

export default {
  components: {
    ProductBox
  },
  data() {
    return {
      storeState: store.state
    }
  }
}
</script>

<style scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 90%;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
