<!--suppress SassScssResolvedByNameOnly -->
<template>
  <div id="app">
    <Header />
    <NavBar :visible="$route.meta.hideNavbar !== true" />
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

import { mapActions } from 'vuex'

export default {
  components: {
    Header,
    NavBar,
    Footer
  },
  methods: {
    ...mapActions(['loadCategories'])
  },

  mounted: function() {
    this.loadCategories()
  }
}
</script>
<style lang="scss">
@import 'src/styles/normalize-and-reset.scss';
@import 'src/styles/main.scss';
</style>
