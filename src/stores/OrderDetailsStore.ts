import { defineStore } from "pinia";
import { CategoryItem, OrderDetails, ProductItem } from "@/types";
import { apiUrl } from "@/services/ApiService";
import { useCategoryStore } from "@/stores/CategoryStore";

const ORDER_DETAIL_STORAGE_KEY = "orderDetail";

export const useOrderDetailsStore = defineStore("OrderDetailsStore", {
  state: () => ({
    orderDetails: null as null | OrderDetails,
  }),
  actions: {
    clearOrderDetails() {
      sessionStorage.removeItem(ORDER_DETAIL_STORAGE_KEY);
      this.orderDetails = null;
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
