<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link :to="{ name: 'category', params: { categoryName: 'Dairy' } }"
        >Category</router-link
      >
    </div>
    <router-view />
  </div>
</template>

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
