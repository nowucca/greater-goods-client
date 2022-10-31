<script setup lang="ts">
import CategoryProductList from "@/components/CategoryProductList.vue";
import { useCategoryStore } from "@/stores/CategoryStore";
const categoryStore = useCategoryStore();
import { useProductStore } from "@/stores/ProductStore";
const productStore = useProductStore();
import { useRoute } from "vue-router";
import { watch } from "vue";
const route = useRoute();

watch(
  () => route.params.categoryName,
  async (newName) => {
    await categoryStore.setSelectedCategoryName(newName as string);
    await productStore.fetchProducts(newName as string);
  },
  { immediate: true }
);
</script>

<style scoped></style>
<template>
  <div>
    <category-product-list />
  </div>
</template>
