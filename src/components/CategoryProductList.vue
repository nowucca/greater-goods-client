<template>
  <section class="category-product-list">
    <ProductBox v-for="product in selectedCategoryProducts" v-bind:key="product.productId" :product="product" />
  </section>
</template>

<script>
import ProductBox from '@/components/ProductBox.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ProductBox
  },
  computed: mapState(['selectedCategoryProducts'])
}
</script>

<style lang="scss">
.category-product-list {
  display: flex;
  flex-wrap: wrap;
  color: $ci-3;
  align-items: center;
  width: 90%;
  justify-content: space-evenly;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}
</style>
