import {defineStore} from "pinia";
import { ShoppingCart } from "@/models/ShoppingCart";
import type {CustomerForm, OrderDetails, ProductItem} from "@/types";
import {apiUrl} from "@/api";
import {useOrderDetailsStore} from "@/stores/OrderDetailsStore";

const CART_STORAGE_KEY = "cart";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    const initCart = new ShoppingCart();
    const cartString = localStorage.getItem(CART_STORAGE_KEY);
    if (cartString !== null) {
      // cartString is a string
      const cartFromStorage = JSON.parse(cartString) as ShoppingCart;
      Object.assign(initCart, cartFromStorage);
    }
    return {
      cart: initCart,
    };
  },
  getters: {
    count(): number {
      return this.cart.numberOfItems;
    },
    subtotal(): number {
      return this.cart.subtotal;
    },
    total(): number {
      return this.cart.total;
    },
  },

  actions: {
    clearCart() {
      this.cart.clear();
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
    },
    addToCart(product: ProductItem) {
      this.cart.addProduct(product);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
    },
    updateCart(product: ProductItem, quantity: number) {
      this.cart.update(product, quantity);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
    },
    async placeOrder(customerForm: CustomerForm) {
      // Clear any existing orders
      const orderDetailsStore = useOrderDetailsStore();
      orderDetailsStore.clearOrderDetails();

      const order = { cart: this.cart, customerForm: customerForm };
      console.log(JSON.stringify(order));

      const url = apiUrl + "orders";
      const orderDetails: OrderDetails = await fetch(url, {
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrer: "client",
        method: "POST", // or 'PUT'
        body: JSON.stringify(order),
      }).then((response) => response.json());

      const cartStore = useCartStore();
      cartStore.clearCart();
      orderDetailsStore.setOrderDetails(orderDetails);
    },
  },
});
