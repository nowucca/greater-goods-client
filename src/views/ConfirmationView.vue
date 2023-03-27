<script setup lang="ts">
import Price from "@/components/ProductPrice.vue";

import { useOrderDetailsStore } from "@/stores/OrderDetailsStore";
import { useCartStore } from "@/stores/CartStore";
import { useCategoryStore } from "@/stores/CategoryStore";
import { computed } from "vue";
import type {OrderDetails} from "@/types";

const orderDetailsStore = useOrderDetailsStore();
const cartStore = useCartStore();
const categoryStore = useCategoryStore();

const orderDetails = orderDetailsStore.orderDetails as OrderDetails;
</script>

<style lang="scss" scoped>
#confirmation {
  section p {
    margin-top: 5px;
  }

  #confirmation-invalid {
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-around;
  }
  #confirmation-summary {
    display: flex;
    flex-direction: column;
    text-align: center;

    h1 {
      font-weight: bold;
      margin-top: 1.9em;
    }
  }
  #confirmation-order-details {
    display: flex;
    margin-top: 1.9em;
    justify-content: center;

    #order-details-table {
      text-align: center;
      border: 2px solid black;
      background-color: var(--confirmation-order-details-background);

      th {
        font-weight: bold;
      }
      td,
      th {
        padding: 0.375em;
      }
      td {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
      }
    }
  }
  #customer-details {
    text-align: center;
    display: block;
    margin: 1.25em 18.75em 1.9em;
    background-color: var(--confirmation-customer-details-background);
    border: 2px solid black;
    padding: 0.625em;

    h1 {
      font-weight: bold;
      margin-top: 0.625em;
    }

    p:last-of-type {
      margin-bottom: 0.625em;
    }
  }
  #confirmation-continue {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1.9em;
    margin-bottom: 1.9em;
    text-align: center;
  }
}
</style>

<template>
  <div id="confirmation">
    <section v-if="!orderDetails" id="confirmation-invalid">
      <router-link
        :to="{
          name: 'category-view',
          params: { categoryName: categoryStore.categoryName },
        }"
      >
        <button class="normal-2x-button">Continue Shopping</button>
      </router-link>
    </section>
    <template v-else>
      <section id="confirmation-summary">
        <h1>Confirmation</h1>
        <p>
          Your confirmation number is
          {{ orderDetails.order.confirmationNumber }}
        </p>
        <p>{{ new Date(orderDetails.order.dateCreated) }}</p>
      </section>
      <section id="confirmation-order-details">
        <table id="order-details-table">
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr
            v-for="(item, index) in orderDetails.lineItems"
            :key="orderDetails.order.orderId + '-' + item.productId"
          >
            <td>{{ orderDetails.products[index].name }}</td>
            <td>{{ item.quantity }}</td>
            <td>
              <Price
                :amount="orderDetails.products[index].price * item.quantity"
              />
            </td>
          </tr>
          <tr>
            <td colspan="2">-- Delivery Surcharge --</td>
            <td>
              <Price :amount="cartStore.cart.surcharge" />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <strong>Total</strong>
            </td>
            <td>
              <strong>
                <Price :amount="orderDetails.order.amount" />
              </strong>
            </td>
          </tr>
        </table>
      </section>
      <section id="customer-details">
        <h1>Customer Information</h1>
        <p>
          {{ orderDetails.customer.name }} ({{ orderDetails.customer.email }})
        </p>
        <p>{{ orderDetails.customer.address }}</p>
        <p>{{ orderDetails.customer.phone }}</p>
      </section>
      <section id="confirmation-continue">
        <router-link
          :to="{
            name: 'category-view',
            params: { categoryName: categoryStore.categoryName },
          }"
        >
          <button class="normal-2x-button">Continue Shopping</button>
        </router-link>
      </section>
    </template>
  </div>
</template>
