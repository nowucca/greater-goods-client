import { defineStore } from "pinia";
import { ProductItem } from "@/types";
import { apiUrl } from "@/services/ApiService";
import { useCategoryStore } from "@/stores/CategoryStore";

export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    productList: [] as ProductItem[],
  }),
  actions: {
    async fetchProducts(categoryName: string) {
      const categoryStore = useCategoryStore();
      const selectedCategory =
        categoryStore.categoryList?.find(
          (category) => category.name === categoryName
        ) || categoryStore.categoryList[0];
      const url =
        apiUrl + "categories/name/" + selectedCategory.name + "/products/";
      this.productList = await fetch(url).then((response) => response.json());
    },
  },
  // getters
});
