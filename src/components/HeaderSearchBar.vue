<template>
  <form id="header-search-bar" action="/category">
    <input id="search-bar" type="text" />
    <img id="search-icon" src="@/assets/images/site/search-icon.png" alt="Search Icon" />
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss">
#header-search-bar {
  display: flex;
  align-items: center;

  input#search-bar {
    border: 3px solid #303216;
    height: 2.6em;
    color: var(--ci-3);
    font-weight: lighter;
    font-size: 18px;
    min-width: 20em;
  }

  img#search-icon {
    height: 3em;
    border: 3px solid var(--ci-3);
    border-left: none;
  }
}
</style>
