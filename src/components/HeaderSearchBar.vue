<template>
  <form id="searchForm" action="/category">
    <input id="searchBar" type="text" />
    <img
      id="searchIcon"
      src="@/assets/site/search-icon.png"
      alt="Search Icon"
    />
  </form>
</template>

<script>
export default {}
</script>

<style scoped>
header #searchForm {
  display: flex;
  align-items: center;
}

input#searchBar {
  border: 3px solid #303216;
  height: 45px;
  color: #303216;
  font-weight: lighter;
  font-size: 18px;
  min-width: 300px;
}

img#searchIcon {
  height: 47px;
  border: 3px solid #303216;
  border-left: none;
}
</style>
