<script setup lang="ts">
import Price from "@/components/ProductPrice.vue";
import { useCategoryStore } from "@/stores/CategoryStore";
import { useCartStore } from "@/stores/CartStore";
import { computed } from "vue";
const categoryStore = useCategoryStore();
const cartStore = useCartStore();
const cart = computed(() => {
  return cartStore.cart;
});
</script>

<style lang="scss" scoped>
.cart {
  #cart-description {
    margin-top: 3.125em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #cart-contents {
    display: flex;
    flex-direction: column;
    align-items: center;

    table {
      padding: 0.2em;
      border: 1px solid red;
      margin: 3.125em 3.125em;

      td,
      th {
        border: 1px solid var(--cart-table-border);
        padding: 0.5em;
      }
      tr:nth-child(even) {
        background-color: var(--cart-table-cell-alternate-background);
      }

      tr:hover {
        background-color: var(--cart-table-border);
      }
      th {
        padding-top: 0.75em;
        padding-bottom: 0.75em;
        text-align: left;
        background-color: var(--cart-table-header-cell-background);
        color: white;
      }
      input[type="number"] {
        width: 3.125em;
      }
    }

    #cart-totals {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      border: 1px solid aliceblue;
    }
  }

  #cart-actions {
    margin: 3.125em;
    display: flex;
    justify-content: space-around;
  }
}
</style>

<template>
  <div class="cart">
    <div id="cart-description">
      <ul>
        <li>
          <template v-if="cartStore.count > 1">
            Your shopping cart contains
            {{ cartStore.count }} items.
          </template>
          <template v-else-if="cartStore.count === 1">
            Your shopping cart contains
            {{ cartStore.count }} item.
          </template>
          <template v-else>Your shopping cart is empty.</template>
        </li>
      </ul>
    </div>

    <section id="cart-contents" v-if="!cart.empty">
      <table>
        <tr>
          <th>Product Name</th>
          <th>Description</th>
          <th>Points</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>

        <tr v-for="item in cart.items" :key="item.product.productId">
          <td>{{ item.product.name }}</td>
          <td>{{ item.product.description }}</td>
          <td>
            <p class="product-points">{{ item.product.points }}</p>
          </td>
          <td>
            <Price :amount="item.product.price" />
          </td>
          <td>
            <input
              type="number"
              min="0"
              max="9"
              step="1"
              placeholder="Quantity desired"
              v-model.trim.number.lazy="item.quantity"
              @change="cartStore.updateCart(item.product, item.quantity)"
            />
          </td>
          <td>
            <Price :amount="item.product.price * item.quantity" />
          </td>
        </tr>
      </table>

      <ul id="cart-totals" v-if="!cart.empty">
        <li>
          Cart subtotal:
          <Price :amount="cart.subtotal" />
        </li>
        <li>
          Cart total:
          <b>
            <Price :amount="cart.total" />
          </b>
        </li>
      </ul>
    </section>

    <section id="cart-actions">
      <button
        class="normal-2x-button"
        v-if="!cart.empty"
        @click.stop.prevent="cartStore.clearCart"
      >
        Clear Cart
      </button>

      <router-link
        :to="{
          name: 'category-view',
          params: {
            categoryName: categoryStore.categoryName,
          },
        }"
      >
        <button class="normal-2x-button">Continue Shopping</button>
      </router-link>
      <router-link :to="{ name: 'checkout-view' }" v-if="!cart.empty">
        <button class="emphasized-2x-button">Proceed to Checkout</button>
      </router-link>
    </section>
  </div>
</template>
