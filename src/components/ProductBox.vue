<template>
  <div class="product-box">
    <img class="productImage" :src="require('@/assets/images/products/' + productImageFileName(product))" />

    <div class="productDetails">
      <span class="productTitle">{{ product.name }}</span>
      <button @click="addToCart(product)">
        Add to Cart
      </button>
    </div>

    <div class="productCost">
      <p class="productPrice">
        <Price :amount="product.price" />
      </p>
      <p class="ggPointsBadge">{{ product.points }}</p>
    </div>
  </div>
</template>

<script>
import Price from '@/components/Price.vue'
import { mapActions } from 'vuex'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    Price
  },
  methods: {
    productImageFileName: function(product) {
      let name = product.name.toLowerCase()
      name = name.replace(/ /g, '-')
      return `${name}.jpg`
    },
    ...mapActions(['addToCart'])
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/components/ProductBox';
</style>
