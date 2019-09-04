<template>
  <div>
    <Header />
    <NavBar
      :categories="categories"
      :category-name="categoryName"
      v-on:change-category="$emit('change-category', $event)"
    />
    <p>This is the home page</p>
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
  props: ['categories', 'categoryName']
}
</script>

<style scoped></style>
