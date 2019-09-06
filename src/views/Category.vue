<template>
  <div>
    <CategoryProductList />
  </div>
</template>

<script>
import CategoryProductList from '@/components/CategoryProductList.vue'
import { store } from '@/store.js'

export default {
  components: {
    CategoryProductList
  },
  created: function() {
    store.selectCategory(this.$route.params.categoryName)
  },
  mounted: function() {
    store.loadProductsForSelectedCategory()
  }
}
</script>

<style scoped></style>
