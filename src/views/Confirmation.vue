<template>
  <div>
    <section v-if="!orderDetail" id="confirmationInvalid">
      <router-link
        :to="{
          name: 'category',
          params: { categoryName: this.categoryName }
        }"
      >
        <button class="normal2xButton">Continue Shopping</button>
      </router-link>
    </section>
    <template v-else>
      <section id="confirmationSummary">
        <h1>Confirmation</h1>
        <p>
          Your confirmation number is
          {{ orderDetail.order.confirmationNumber }}
        </p>
        <p>{{ new Date(orderDetail.order.dateCreated) }}</p>
      </section>
      <section id="confirmationOrderDetails">
        <table id="orderDetailsTable">
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
      <section id="customerDetails">
        <h1>Customer Information</h1>
        <p>{{ orderDetail.customer.customerName }} ({{ orderDetail.customer.email }})</p>
        <p>{{ orderDetail.customer.address }}</p>
        <p>{{ orderDetail.customer.phone }}</p>
      </section>
      <section id="confirmationContinue">
        <router-link
          :to="{
            name: 'category',
            params: { categoryName: this.categoryName }
          }"
        >
          <button class="normal2xButton">Continue Shopping</button>
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

<style scoped>
#confirmationSummary h1 {
  font-weight: bold;
  margin-top: 30px;
}

section p {
  margin-top: 5px;
}

#confirmationSummary {
  display: flex;
  flex-direction: column;
  text-align: center;
}

#confirmationOrderDetails {
  display: flex;
  margin-top: 30px;
  justify-content: center;
}

#orderDetailsTable {
  text-align: center;
}

#customerDetails {
  text-align: center;
  display: block;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 300px;
  margin-right: 300px;
  background-color: #e1e1e1;
  border: 2px solid black;
  padding: 10px;
}

#customerDetails p:last-of-type {
  margin-bottom: 10px;
}

#customerDetails h1 {
  font-weight: bold;
  margin-top: 10px;
}

#confirmationContinue {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}

#orderDetailsTable {
  border: 2px solid black;
  background-color: #f1f1e1;
}

#orderDetailsTable th {
  font-weight: bold;
}

#orderDetailsTable td,
#orderDetailsTable th {
  padding: 5px;
}

#orderDetailsTable td {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

#confirmationInvalid {
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-around;
}
</style>
