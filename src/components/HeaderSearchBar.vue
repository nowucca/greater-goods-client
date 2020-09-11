<template>
  <form id="header-search-bar" action="/category">
    <input id="searchBar" type="text" />
    <img id="searchIcon" src="@/assets/images/site/search-icon.png" alt="Search Icon" />
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss">
#header-search-bar {
  display: flex;
  align-items: center;

  input#searchBar {
    border: 3px solid #303216;
    height: 2.6em;
    color: $ci-3;
    font-weight: lighter;
    font-size: 18px;
    min-width: 20em;
  }

  img#searchIcon {
    height: 3em;
    border: 3px solid $ci-3;
    border-left: none;
  }
}
</style>
