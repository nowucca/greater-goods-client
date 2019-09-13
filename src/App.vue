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
<style>
@import '~@/assets/css/normalize-and-reset.css';

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

.normalButton {
  border: 1px solid #979797;
  font-weight: bold;
  font-size: 13px;
  color: #71b869;
  text-align: center;
  width: 96px;
  height: 30px;
}

.normalButton:hover {
  background-color: #71b869;
  color: white;
  font-weight: normal;
}

.normal2xButton {
  border: 1px solid #979797;
  font-weight: bold;
  font-size: 18px;
  color: #303216;
  text-align: center;
  background: #d8d8d8;
  border-radius: 3px;

  width: 280px;
  height: 50px;
}

.normal2xButton:hover {
  background: #a7a7a7;
}

.emphasized2xButton {
  border: 1px solid #979797;
  font-weight: bold;
  font-size: 18px;
  color: white;
  text-align: center;
  background: #71b869;
  border-radius: 3px;

  width: 280px;
  height: 50px;
}

.emphasized2xButton:hover {
  background: #5d9756;
}
</style>
