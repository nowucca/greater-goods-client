<template>
  <div class="product">
    <img
      class="productImage"
      :src="require('@/assets/images/products/' + productImageFileName(product))"
    />

    <div class="productDetails">
      <span class="productTitle">{{ product.name }}</span>
      <button class="normalButton" @click="addToCart(product)">
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

<style scoped>
.product {
  background: #ffffff;
  border: 1px solid #979797;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 1px;
}

.product .productImage {
  width: 200px;
  height: 200px;
  margin-left: 50px;
  margin-right: 50px;
}

.productDetails {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  font-size: 16px;
  color: #1805ff;
}

.productCost {
  display: block;
  position: absolute;
  margin-left: 240px;
  margin-top: 215px;
  flex-direction: column;
  align-items: flex-end;
}

.productCost .productPrice {
  font-size: 13px;
  color: #303216;
}

.productCost .ggPointsBadge {
  height: 30px;
  width: 30px;
  background-color: #caf898;
  border-radius: 50%;
  border: 1px solid #979797;

  font-size: 24px;
  font-weight: bold;
  color: #896e45;
  text-align: center;
  margin-top: 20px;
}

.productPoints {
  height: 30px;
  width: 30px;
  background-color: #caf898;
  border-radius: 50%;
  border: 1px solid #979797;

  font-size: 24px;
  font-weight: bold;
  color: #896e45;
  text-align: center;
}
</style>
