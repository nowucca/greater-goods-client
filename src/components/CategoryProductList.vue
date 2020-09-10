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
@import 'src/styles/components/CategoryProductList';
</style>
