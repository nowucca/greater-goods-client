import { defineStore } from "pinia";
import { CategoryItem } from "@/types";
import { apiUrl } from "@/api";

const DEFAULT_CATEGORY_NAME = "Fresh Produce";

export const useCategoryStore = defineStore("CategoryStore", {
  state: () => ({
    categoryList: [] as CategoryItem[],
    selectedCategoryName: DEFAULT_CATEGORY_NAME as string,
  }),
  actions: {
    async fetchCategories() {
      const url = apiUrl + "categories";
      this.categoryList = await fetch(url).then((response) => response.json());
    },
    async setSelectedCategoryName(selectedCategoryName: string) {
      this.selectedCategoryName = selectedCategoryName;
    },
  },
  getters: {
    categoryName(): string {
      return this.selectedCategoryName || this.defaultCategoryName;
    },

    defaultCategoryName(): string {
      return DEFAULT_CATEGORY_NAME;
    },
  },
});
