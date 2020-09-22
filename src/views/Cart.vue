<template>
  <div class="cart">
    <div id="cart-description">
      <ul>
        <li>
          <template v-if="cart.numberOfItems > 1">
            Your shopping cart contains
            {{ cart.numberOfItems }} items.
          </template>
          <template v-else-if="cart.numberOfItems === 1">
            Your shopping cart contains
            {{ cart.numberOfItems }} item.
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
            <Price :amount="item.price" />
          </td>
          <td>
            <input
              type="number"
              min="0"
              max="9"
              step="1"
              placeholder="Quantity desired"
              v-model.trim.number.lazy="item.quantity"
              @change="updateCart({ product: item.product, quantity: item.quantity })"
            />
          </td>
          <td>
            <Price :amount="item.total" />
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
      <button class="normal-2x-button" v-if="!cart.empty" @click.stop.prevent="clearCart">
        Clear Cart
      </button>

      <router-link
        :to="{
          name: 'category',
          params: {
            categoryName: categoryName
          }
        }"
      >
        <button class="normal-2x-button">Continue Shopping</button>
      </router-link>
      <router-link :to="{ name: 'checkout' }" v-if="!cart.empty">
        <button class="emphasized-2x-button">Proceed to Checkout</button>
      </router-link>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Price from '@/components/Price'

export default {
  components: {
    Price
  },
  computed: {
    ...mapGetters(['categoryName']),
    ...mapState(['cart'])
  },
  methods: {
    ...mapActions(['updateCart', 'clearCart'])
  }
}
</script>

<style lang="scss" scoped>
.cart {
  #cart-description {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #cart-contents {
    display: flex;
    flex-direction: column;
    align-items: center;

    table {
      padding: 3px;
      border: 1px solid red;
      margin: 50px 50px;

      td,
      th {
        border: 1px solid #ddd;
        padding: 8px;
      }
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      tr:hover {
        background-color: #ddd;
      }
      th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #5d9756;
        color: white;
      }
      input[type='number'] {
        width: 50px;
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
    margin: 50px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
