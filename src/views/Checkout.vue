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
                v-model.lazy="$v.name.$model"
              />
            </div>
            <template v-if="$v.name.$error">
              <span class="error" v-if="!$v.name.required"
                >Name is required</span
              >
              <span class="error" v-if="!$v.name.minLength">
                Name must have at least
                {{ $v.name.$params.minLength.min }} letters.
              </span>
              <span class="error" v-if="!$v.name.maxLength">
                Name can have at most
                {{ $v.name.$params.maxLength.max }} letters.
              </span>
            </template>

            <div class="form-element">
              <label for="address">Address</label>
              <input
                class="textField"
                type="text"
                size="20"
                maxlength="45"
                id="address"
                name="address"
                v-model.lazy="$v.address.$model"
              />
            </div>
            <template v-if="$v.address.$error">
              <div class="error" v-if="!$v.address.required">
                Address is required
              </div>
              <div class="error" v-if="!$v.address.minLength">
                Address must have at least
                {{ $v.address.$params.minLength.min }} letters.
              </div>
              <div class="error" v-if="!$v.address.maxLength">
                Address can have at most
                {{ $v.address.$params.maxLength.max }} letters.
              </div>
            </template>

            <div class="form-element">
              <label for="phone">Phone</label>
              <input
                class="textField"
                type="tel"
                size="20"
                maxlength="45"
                id="phone"
                name="phone"
                v-model.lazy="$v.phone.$model"
              />
            </div>
            <template v-if="$v.phone.$error">
              <div class="error" v-if="$v.phone.$invalid">
                Please enter a valid phone number.
              </div>
            </template>

            <div class="form-element">
              <label for="email">Email</label>
              <input
                class="textField"
                type="email"
                size="20"
                maxlength="45"
                id="email"
                name="email"
                v-model.lazy="$v.email.$model"
              />
            </div>
            <template v-if="$v.email.$error">
              <div class="error" v-if="!$v.email.maxLength">
                Emails can have at most
                {{ $v.email.$params.maxLength.max }} letters.
              </div>
              <div class="error" v-else-if="$v.email.$invalid">
                Please enter a valid email address.
              </div>
            </template>

            <div class="form-element">
              <label for="ccNumber">Credit card</label>
              <input
                class="textField"
                type="text"
                size="20"
                maxlength="45"
                id="ccNumber"
                name="ccNumber"
                v-model="$v.ccNumber.$model"
              />
            </div>
            <template v-if="$v.ccNumber.$error">
              <div class="error" v-if="$v.ccNumber.$invalid">
                Please enter a valid card number.
              </div>
            </template>

            <!-- <tree-view
              :data="$v"
              :options="{ rootObjectKey: '$v', maxDepth: 1 }"
            ></tree-view>-->

            <div id="checkoutButtonArea">
              <button
                id="checkoutButton"
                class="emphasized2xButton"
                @click.prevent="submitOrder"
                type="submit"
              >
                Complete Purchase
              </button>

              <button
                id="resetButton"
                class="normal2xButton"
                @click="resetOrder"
                type="reset"
              >
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
        <div v-if="checkoutStatus != ''" class="formTextHolder">
          <template v-if="checkoutStatus == 'ERROR'">
            <div class="formText formErrorText" v-if="$v.$invalid">
              Please fix the problems above and try again.
            </div>
          </template>

          <template v-if="checkoutStatus == 'PENDING'">
            <div class="formText formPendingText">Processing...</div>
          </template>
          <template v-if="checkoutStatus == 'OK'">
            <div class="formText formOKText">Order placed...</div>
          </template>
          <template v-if="checkoutStatus == 'SERVER_ERROR'">
            <div class="formText formErrorText">
              An unexpected error occurred, please try again.
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Price from '@/components/Price.vue'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

import isCreditCard from 'validator/lib/isCreditCard'
import isMobilePhone from 'validator/lib/isMobilePhone'

const phone = value => isMobilePhone(value, 'en-US')
const creditCard = value => isCreditCard(value)

export default {
  components: {
    Price
  },
  data() {
    return {
      name: 'Steve',
      address: '123 Main St',
      phone: '408 555 1212',
      email: 's@s.ch',
      ccNumber: '4444333322221111',
      checkoutStatus: '' /* OK, ERROR, PENDING, SERVER_ERROR */
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(45)
    },
    address: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(45)
    },
    phone: {
      required,
      phone
    },
    email: {
      required,
      email
    },
    ccNumber: {
      required,
      creditCard
    }
  },
  computed: {
    ...mapState(['cart', 'selectedCategoryName'])
  },
  methods: {
    resetOrder() {
      console.log('Reset order')
      this.$v.$reset()
      this.checkoutStatus = ''
    },
    submitOrder() {
      console.log('Submit order')
      // Touch the form; handles folks clicking submit right away.
      // (Forces validators to run and establish if there are errors)
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.checkoutStatus = 'ERROR'
      } else {
        this.checkoutStatus = 'PENDING'
        this.$store
          .dispatch('placeOrder', {
            name: this.name,
            address: this.address,
            phone: this.phone,
            email: this.email,
            ccNumber: this.ccNumber
          })
          .then(() => {
            this.checkoutStatus = 'OK'
            this.$router.push({ name: 'confirmation' })
          })
          .catch(reason => {
            this.checkoutStatus = 'SERVER_ERROR'
            console.log('Error placing order', reason)
          })
      }
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

.fieldErrorsBox,
.error {
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

.formTextHolder {
  margin-bottom: 30px;
  margin-top: 30px;
  border: 1px solid black;
  padding: 5px;
}

.formText {
  text-align: center;
}
.formErrorText {
  color: red;
}
.formPendingText {
  color: orange;
}
.formOKText {
  color: blue;
}
</style>
