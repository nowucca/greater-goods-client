<template>
  <div id="app">
    <Header />
    <NavBar />
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { store } from '@/store.js'

export default {
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      storeState: store.state
    }
  },

  mounted: function() {
    store.loadCategories()
  }
}
</script>
<style>
@import 'css/normalize-and-reset.css';

/* Hide pages until data is read */
[v-cloak] {
  display: none !important;
}

body {
  font: 1em normal Verdana, Tahoma, sans-serif;
  color: black;
  font-size: 20px;
}

main {
  background: white;
  /* stack header-section-footer on all pages */
  display: flex;
  flex-direction: column;
}

a,
a:visited,
input[type='submit'] {
  color: blue;
}

a:hover,
a:active,
input[type='submit']:hover,
ul.buttons a:hover {
  color: purple;
}
</style>
