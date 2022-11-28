import { defineStore } from "pinia";
import { CategoryItem, ProductItem } from "@/types";
import { apiUrl } from "@/services/ApiService";
import { useCategoryStore } from "@/stores/CategoryStore";

export const useProductStore = defineStore("ProductStore", {
  state: () => ({
    productList: [] as ProductItem[],
  }),
  actions: {
    async fetchProducts(categoryName: string) {
      console.log("fetching products for ", categoryName);
      const categoryStore = useCategoryStore();
      const selectedCategory = categoryStore.categoryList?.find(
        (category) => category.name === categoryName
      );
      const catName = selectedCategory ? selectedCategory.name : categoryName;
      const url = `${apiUrl}products/category?name=${catName}`;
      this.productList = await fetch(url).then((response) => response.json());
    },
  },
  // getters
});
