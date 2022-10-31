import { defineStore } from "pinia";
import { ProductItem, ShoppingCart } from "@/types";

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
    updateBookQuantity(product: ProductItem, quantity: number) {
      this.cart.update(product, quantity);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
    },
  },
});
