<template>
  <div>
    <Header />
    <NavBar
      :categories="categories"
      :category-name="categoryName"
      v-on:change-category="$emit('change-category', $event)"
    />
    <p>This is the category page for category: {{ categoryName }}</p>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    NavBar,
    Footer
  },
  props: ['categories', 'categoryName'],
  beforeRouteUpdate: function(to, from, next) {
    console.log('category update')
    this.$emit('category-change', to.params.name)
    next()
  }
}
</script>

<style scoped></style>
