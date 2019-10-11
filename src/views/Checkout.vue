<template>
  <div>
    <section id="checkoutEmpty" v-if="cart.empty">
      <p>Your cart is empty. Please add an item to your cart to checkout.</p>

      <router-link
        :to="{ name: 'category', params: { name: selectedCategoryName } }"
      >
        <button class="normal2xButton">Continue Shopping</button>
      </router-link>
    </section>
    <section id="checkoutMain" v-if="!cart.empty">
      <p style="font-weight:bold">Checkout</p>

      <div id="checkoutFormAndInfo">
        <div id="checkoutFormBox">
          <form
            id="checkoutForm"
            v-on:submit.prevent="submitOrder"
            v-on:reset="resetOrder"
            method="post"
          >
            <div class="form-element">
              <label for="name">Name</label>
              <input
                class="textField"
                type="text"
                size="20"
                maxlength="45"
                id="name"
                name="name"
                v-model="customerForm.name"
              />
            </div>

            <div class="form-element">
              <label for="address">Address</label>
              <input
                class="textField"
                type="text"
                size="20"
                maxlength="45"
                id="address"
                name="address"
                v-model="customerForm.address"
              />
            </div>

            <div class="form-element">
              <label for="phone">Phone</label>
              <input
                class="textField"
                type="tel"
                size="20"
                maxlength="45"
                id="phone"
                name="phone"
                v-model="customerForm.phone"
              />
            </div>

            <div class="form-element">
              <label for="email">Email</label>
              <input
                class="textField"
                type="email"
                size="20"
                maxlength="45"
                id="email"
                name="email"
                v-model="customerForm.email"
              />
            </div>

            <div class="form-element">
              <label for="ccNumber">Credit card</label>
              <input
                class="textField"
                type="text"
                size="20"
                maxlength="45"
                id="ccNumber"
                name="ccNumber"
                v-model="customerForm.ccNumber"
              />
            </div>

            <div id="checkoutButtonArea">
              <button
                id="checkoutButton"
                class="emphasized2xButton"
                type="submit"
              >
                Complete Purchase
              </button>
              <button id="resetButton" class="normal2xButton" type="reset">
                Reset Form
              </button>
            </div>
          </form>
        </div>
        <div id="checkoutInfo">
          <span id="checkoutInfoText">
            Your credit card will be charged
            <strong>
              <Price :amount="cart.total" />
            </strong>
            <br />(
            <strong>
              <Price :amount="cart.subtotal" />
            </strong>
            +
            <strong>
              <Price :amount="cart.surcharge" />
            </strong>
            shipping)
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Price from '@/components/Price.vue'
export default {
  components: {
    Price
  },
  data() {
    return {
      customerForm: {
        name: 'Steve',
        address: '123 Main St',
        phone: '408 555 1212',
        email: 's@s.ch',
        ccNumber: '4444333322221111'
      }
    }
  },
  computed: {
    ...mapState(['cart', 'selectedCategoryName'])
  },
  methods: {
    resetOrder() {
      console.log('Reset order')
    },
    submitOrder() {
      console.log('Submit order')
    }
  }
}
</script>

<style scoped>
#checkoutInfo,
#checkoutMain p,
#checkoutEmpty p {
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}

#checkoutEmpty {
  text-align: center;
  margin-bottom: 30px;
}

#checkoutFormErrors {
  margin-bottom: 30px;
  text-align: center;
}

#checkoutEmpty input,
#checkoutEmpty select,
#checkoutEmpty button,
#checkoutMain input,
#checkoutMain select,
#checkoutMain button {
  margin-top: 15px;
  margin-right: 5px;
  line-height: 32px;
}
#checkoutFormErrors {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  color: red;
}

.fieldErrorsBox {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  font-size: 16px;
  color: red;
  margin-top: 5px;
  margin-bottom: 5px;
}

#checkoutFormAndInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
#checkoutFormBox {
}

.form-element label {
  display: inline-block;
  text-align: right;
  margin-right: 10px;
}

.form-element {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
}

#checkoutForm {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

#checkoutButton {
  text-align: center;
  text-decoration: none;
  border: 2px solid #818181;
}

#checkoutButtonArea {
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 30px;
}
</style>
