<script setup lang="ts">
import Price from "@/components/ProductPrice.vue";
import { ProductItem } from "@/types";
import { defineProps } from "vue";
import { useCartStore } from "@/stores/CartStore";
const cartStore = useCartStore();
const props = defineProps<{
  product: ProductItem;
}>();

function productImageFileName(product: ProductItem): string {
  let name = product.name.toLowerCase();
  name = name.replace(/ /g, "-");
  return `${name}.jpg`;
}
</script>

<style lang="scss" scoped>
.product-box {
  background: var(--product-box-background);
  border: 1px solid var(--ci-2);
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-top: 1px;

  .product-image {
    width: 200px;
    height: 200px;
    padding-top: 5px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .product-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    font-size: 16px;
    color: var(--product-box-details);
  }

  .product-cost {
    display: block;
    position: absolute;
    margin-left: 240px;
    margin-top: 215px;
    flex-direction: column;
    align-items: flex-end;

    .product-price {
      font-size: 13px;
      color: var(--ci-3);
    }

    .gg-points-badge {
      height: 30px;
      width: 30px;
      background-color: var(--point-badge-background);
      border-radius: 50%;
      border: 1px solid var(--ci-2);

      font-size: 24px;
      font-weight: bold;
      color: var(--point-badge-foreground);
      text-align: center;
      margin-top: 20px;
    }
  }
}
</style>

<template>
  <div class="product-box">
    <img
      class="product-image"
      :src="
        require('@/assets/images/products/' + productImageFileName(product))
      "
    />

    <div class="product-details">
      <span class="product-title">{{ product.name }}</span>
      <button @click="cartStore.addToCart(product)">Add to Cart</button>
    </div>

    <div class="product-cost">
      <p class="product-price">
        <Price :amount="product.price" />
      </p>
      <p class="gg-points-badge">{{ product.points }}</p>
    </div>
  </div>
</template>
