<template>
  <div id="checkout">
    <section id="checkout-empty" v-if="cart.empty">
      <p>Your cart is empty. Please add an item to your cart to checkout.</p>

      <router-link :to="{ name: 'category', params: { name: selectedCategoryName } }">
        <button class="normal-2x-button">Continue Shopping</button>
      </router-link>
    </section>
    <section id="checkout-main" v-if="!cart.empty">
      <p style="font-weight:bold">Checkout</p>

      <div id="checkout-form-and-info">
        <div id="checkout-form-box">
          <form id="checkout-form" v-on:submit.prevent="submitOrder" v-on:reset="resetOrder" method="post">
            <div class="form-element">
              <label for="name">Name</label>
              <input
                class="textField"
                type="text"
                size="20"
                maxlength="45"
                id="name"
                name="name"
                @blur="$v.name.$touch()"
                v-model.lazy="$v.name.$model"
              />
            </div>
            <template v-if="$v.name.$error">
              <span class="error" v-if="!$v.name.required">Name is required</span>
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
                @blur="$v.address.$touch()"
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
                @blur="$v.phone.$touch()"
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
                @blur="$v.email.$touch()"
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
                @blur="$v.ccNumber.$touch()"
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

            <div id="checkout-button-area">
              <button id="checkout-button" class="emphasized-2x-button" @click.prevent="submitOrder" type="submit">
                Complete Purchase
              </button>

              <button id="reset-button" class="normal-2x-button" @click="resetOrder" type="reset">
                Reset Form
              </button>
            </div>
          </form>
        </div>
        <div id="checkout-info">
          <span id="checkout-info-text">
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
        <div v-if="checkoutStatus !== ''" class="form-text-holder">
          <template v-if="checkoutStatus === 'ERROR'">
            <div class="form-text form-error-text" v-if="$v.$invalid">
              Please fix the problems above and try again.
            </div>
          </template>

          <template v-if="checkoutStatus === 'PENDING'">
            <div class="form-text form-pending-text">Processing...</div>
          </template>
          <template v-if="checkoutStatus === 'OK'">
            <div class="form-text form-ok-text">Order placed...</div>
          </template>
          <template v-if="checkoutStatus === 'SERVER_ERROR'">
            <div class="form-text form-error-text">
              An unexpected error occurred, please try again.
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Price from '@/components/Price.vue'
import { email, maxLength, minLength, required } from 'vuelidate/lib/validators'

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
      name: '',
      address: '',
      phone: '',
      email: '',
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
      phone: phone
    },
    email: {
      required,
      email: email
    },
    ccNumber: {
      required,
      creditCard: creditCard
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['categoryName'])
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

<style lang="scss" scoped>
@mixin checkout-element {
  margin-top: 15px;
  margin-right: 5px;
  line-height: 32px;
}

@mixin checkout-paragraph {
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}

#checkout {
  #checkout-empty {
    text-align: center;
    margin-bottom: 30px;

    input,
    select,
    button {
      @include checkout-element;
    }

    p {
      @include checkout-paragraph;
    }
  }

  #checkout-main {
    input,
    select,
    button {
      @include checkout-element;
    }
    p {
      @include checkout-paragraph;
    }

    #checkout-form-and-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      #checkout-form {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .error {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-around;
          font-size: 16px;
          color: red;
          margin-top: 0.3em;
          margin-bottom: 0.3em;
        }

        .form-element {
          display: flex;
          flex-direction: row;
          align-items: baseline;
          justify-content: space-between;

          label {
            display: inline-block;
            text-align: right;
            margin-right: 0.625em;
          }
        }

        #checkout-button-area {
          display: flex;
          flex-direction: column;
          align-self: center;
          margin-top: 1.9em;

          #checkout-button {
            text-align: center;
            text-decoration: none;
            border: 2px solid var(--checkout-button-border);
          }
        }
      }

      #checkout-info {
        @include checkout-paragraph;
      }
      .form-text-holder {
        margin: 1.9em;
        border: 1px solid black;
        padding: 0.3em;

        .form-text {
          text-align: center;
        }

        .form-error-text {
          color: red;
        }

        .form-pending-text {
          color: orange;
        }

        .form-ok-text {
          color: blue;
        }
      }
    }
  }
}
</style>
