<template>
  <div>
    <Header />
    <NavBar />
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
  }
}
</script>

<style scoped></style>
