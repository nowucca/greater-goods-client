<template>
  <div>
    <Header />
    <NavBar :category-name="categoryName" />
    This is the category page for category: {{ categoryName }}
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
  props: ['categoryName']
}
</script>

<style scoped></style>
