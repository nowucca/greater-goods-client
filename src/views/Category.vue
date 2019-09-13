<template>
  <div>
    <CategoryProductList />
  </div>
</template>

<script>
import CategoryProductList from '@/components/CategoryProductList.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    CategoryProductList
  },
  created: function() {
    this.selectCategory(this.$route.params.categoryName)
  },
  mounted: function() {
    this.loadProductsForSelectedCategory()
  },
  methods: mapActions(['selectCategory', 'loadProductsForSelectedCategory'])
}
</script>

<style scoped></style>
