<script setup lang="ts">
import Price from "@/components/ProductPrice.vue";
import { computed, reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { useCartStore } from "@/stores/CartStore";
import { isCreditCard, isMobilePhone } from "@/utils";
import { useCategoryStore } from "@/stores/CategoryStore";

import {
  helpers,
  email,
  maxLength,
  minLength,
  required,
} from "@vuelidate/validators";

import CheckoutFieldError from "@/components/CheckoutFieldError.vue";

const cartStore = useCartStore();
const cart = computed(() => {
  return cartStore.cart;
});

const categoryStore = useCategoryStore();
import router from "@/router";

const form = reactive({
  name: "Steve",
  address: "123 Main St",
  phone: "4085551212",
  email: "steve@email.com",
  ccNumber: "4444333322221111",
  checkoutStatus: "" /* OK, ERROR, PENDING, SERVER_ERROR */,
});

const rules = {
  name: {
    required: helpers.withMessage("Please provide a name.", required),
    minLength: helpers.withMessage(
      "Name must have at least 4 letters.",
      minLength(4)
    ),
    maxLength: helpers.withMessage(
      "Name can have at most 45 letters.",
      maxLength(45)
    ),
  },
  address: {
    required: helpers.withMessage("Please provide an address.", required),
    minLength: helpers.withMessage(
      "Your address must have at least 4 letters.",
      minLength(4)
    ),
    maxLength: helpers.withMessage(
      "Your address  can have at most 45 letters.",
      maxLength(45)
    ),
  },
  email: {
    required: helpers.withMessage("Please provide an email address.", required),
    email: helpers.withMessage("Please provide a valid email address.", email),
  },
  phone: {
    required: helpers.withMessage("Please provide a phone number.", required),
    phone: helpers.withMessage(
      "Please provide a valid phone number.",
      (value: string) => !helpers.req(value) || isMobilePhone(value)
    ),
  },
  ccNumber: {
    required: helpers.withMessage("Please provide a credit card.", required),
    phone: helpers.withMessage(
      "Please provide a valid credit card.",
      (value: string) => !helpers.req(value) || isCreditCard(value)
    ),
  },
};

const $v = useVuelidate(rules, form);

function resetOrder() {
  console.log("Reset order");
  $v.value.$reset();
  form.checkoutStatus = "";
}

async function submitOrder() {
  console.log("Submit order");
  const isFormCorrect = await $v.value.$validate();
  if (!isFormCorrect) {
    form.checkoutStatus = "ERROR";
  } else {
    form.checkoutStatus = "PENDING";
    cartStore
      .placeOrder(
        {
          name: form.name,
          address: form.address,
          phone: form.phone,
          email: form.email,
          ccNumber: form.ccNumber,
        },
        cart
      )
      .then(() => {
        form.checkoutStatus = "OK";
        router.push({ name: "confirmation-view" });
      })
      .catch((reason) => {
        form.checkoutStatus = "SERVER_ERROR";
        console.log("Error placing order", reason);
      });
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

<template>
  <div id="checkout">
    <section id="checkout-empty" v-if="cart.empty">
      <p>Your cart is empty. Please add an item to your cart to checkout.</p>

      <router-link
        :to="{
          name: 'category-view',
          params: { categoryName: categoryStore.categoryName },
        }"
      >
        <button class="normal-2x-button">Continue Shopping</button>
      </router-link>
    </section>
    <section id="checkout-main" v-if="!cart.empty">
      <p style="font-weight: bold">Checkout</p>

      <div id="checkout-form-and-info">
        <div id="checkout-form-box">
          <form
            id="checkout-form"
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
                @blur="$v.name.$touch()"
                v-model.lazy="$v.name.$model"
              />
            </div>
            <CheckoutFieldError field-name="name" :validator="$v" />

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
            <CheckoutFieldError field-name="address" :validator="$v" />

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
            <CheckoutFieldError field-name="phone" :validator="$v" />

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
            <CheckoutFieldError field-name="email" :validator="$v" />

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
            <CheckoutFieldError field-name="ccNumber" :validator="$v" />

            <div id="checkout-button-area">
              <button
                id="checkout-button"
                class="emphasized-2x-button"
                @click.prevent="submitOrder"
                type="submit"
              >
                Complete Purchase
              </button>

              <button
                id="reset-button"
                class="normal-2x-button"
                @click="resetOrder"
                type="reset"
              >
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
        <div v-if="form.checkoutStatus !== ''" class="form-text-holder">
          <template v-if="form.checkoutStatus === 'ERROR'">
            <div class="form-text form-error-text" v-if="$v.$invalid">
              Please fix the problems above and try again.
            </div>
          </template>

          <template v-if="form.checkoutStatus === 'PENDING'">
            <div class="form-text form-pending-text">Processing...</div>
          </template>
          <template v-if="form.checkoutStatus === 'OK'">
            <div class="form-text form-ok-text">Order placed...</div>
          </template>
          <template v-if="form.checkoutStatus === 'SERVER_ERROR'">
            <div class="form-text form-error-text">
              An unexpected error occurred, please try again.
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>
