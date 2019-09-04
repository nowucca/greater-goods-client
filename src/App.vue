<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link
        :to="{ name: 'category', params: { categoryName: categoryName } }"
        >Category</router-link
      >
    </div>
    <router-view
      :categories="categories"
      :categoryName="categoryName"
      v-on:change-category="categoryName = $event"
    />
  </div>
</template>

<script>
import ApiClient from '@/services/ApiClient.js'

export default {
  data: function() {
    return {
      categories: [],
      categoryName: 'Dairy'
    }
  },
  mounted: function() {
    ApiClient.loadCategories().then(cats => (this.categories = cats))
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
