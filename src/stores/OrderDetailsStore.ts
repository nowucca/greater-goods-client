import { defineStore } from "pinia";
import { CategoryItem, OrderDetails, ProductItem, ShoppingCart } from "@/types";
import { apiUrl } from "@/api";
import { useCategoryStore } from "@/stores/CategoryStore";

const ORDER_DETAIL_STORAGE_KEY = "orderDetail";

export const useOrderDetailsStore = defineStore("OrderDetailsStore", {
  state: () => {
    let orderDetails = {};
    const initOrderString: string | null = sessionStorage.getItem(
      ORDER_DETAIL_STORAGE_KEY
    );
    if (initOrderString !== null) {
      const orderFromStorage = JSON.parse(initOrderString) as OrderDetails;
      orderDetails = Object.assign({}, orderFromStorage);
    }
    return {
      orderDetails: orderDetails,
    };
  },
  actions: {
    clearOrderDetails() {
      sessionStorage.removeItem(ORDER_DETAIL_STORAGE_KEY);
      this.orderDetails = {} as OrderDetails;
    },
    setOrderDetails(orderDetails: OrderDetails) {
      this.orderDetails = orderDetails;
      sessionStorage.setItem(
        ORDER_DETAIL_STORAGE_KEY,
        JSON.stringify(orderDetails)
      );
    },
  },
  // getters
});
