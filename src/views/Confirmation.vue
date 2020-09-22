<template>
  <div id="confirmation">
    <section v-if="!orderDetail" id="confirmation-invalid">
      <router-link
        :to="{
          name: 'category',
          params: { categoryName: this.categoryName }
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
          {{ orderDetail.order.confirmationNumber }}
        </p>
        <p>{{ new Date(orderDetail.order.dateCreated) }}</p>
      </section>
      <section id="confirmation-order-details">
        <table id="order-details-table">
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr v-for="(item, index) in orderDetail.lineItems" :key="orderDetail.order.orderId + '-' + item.productId">
            <td>{{ orderDetail.products[index].name }}</td>
            <td>{{ item.quantity }}</td>
            <td>
              <Price :amount="orderDetail.products[index].price * item.quantity" />
            </td>
          </tr>
          <tr>
            <td colspan="2">-- Delivery Surcharge --</td>
            <td>
              <Price :amount="cart.surcharge" />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <strong>Total</strong>
            </td>
            <td>
              <strong>
                <Price :amount="orderDetail.order.amount" />
              </strong>
            </td>
          </tr>
        </table>
      </section>
      <section id="customer-details">
        <h1>Customer Information</h1>
        <p>{{ orderDetail.customer.customerName }} ({{ orderDetail.customer.email }})</p>
        <p>{{ orderDetail.customer.address }}</p>
        <p>{{ orderDetail.customer.phone }}</p>
      </section>
      <section id="confirmation-continue">
        <router-link
          :to="{
            name: 'category',
            params: { categoryName: this.categoryName }
          }"
        >
          <button class="normal-2x-button">Continue Shopping</button>
        </router-link>
      </section>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Price from '@/components/Price.vue'

export default {
  components: {
    Price
  },
  computed: {
    ...mapState(['orderDetail', 'cart', 'selectedCategoryName']),
    ...mapGetters(['categoryName'])
  }
}
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
      margin-top: 30px;
    }
  }
  #confirmation-order-details {
    display: flex;
    margin-top: 30px;
    justify-content: center;

    #order-details-table {
      text-align: center;
      border: 2px solid black;
      background-color: #f1f1e1;

      th {
        font-weight: bold;
      }
      td,
      th {
        padding: 5px;
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
    margin-top: 20px;
    margin-bottom: 30px;
    margin-left: 300px;
    margin-right: 300px;
    background-color: #e1e1e1;
    border: 2px solid black;
    padding: 10px;

    h1 {
      font-weight: bold;
      margin-top: 10px;
    }

    p:last-of-type {
      margin-bottom: 10px;
    }
  }
  #confirmation-continue {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }
}
</style>
