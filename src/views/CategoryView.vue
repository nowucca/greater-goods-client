<script setup lang="ts">
import CategoryProductList from "@/components/CategoryProductList.vue";
import { useCategoryStore } from "@/stores/CategoryStore";
import { useProductStore } from "@/stores/ProductStore";
import { useRoute } from "vue-router";
import { watch } from "vue";
import router from "@/router";
const categoryStore = useCategoryStore();
const productStore = useProductStore();
const route = useRoute();

watch(
  () => route.params.categoryName,
  async (newName) => {
    await categoryStore.setSelectedCategoryName(newName as string);
    await productStore.fetchProducts(newName as string).catch(() => {
      router.push("/not-found");
    });
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
