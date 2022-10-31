<script setup lang="ts">
import AppHeaderSearchBar from "@/components/AppHeaderSearchBar.vue";
import AppHeaderCart from "@/components/AppHeaderCart.vue";
</script>

<style lang="scss">
#header {
  font-size: 16px;
  background: var(--background-1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #left-header {
    width: 25rem;
    height: 6.25rem;
    display: flex;
    align-items: center;
  }

  #logo img {
    width: 3.75em;
    margin-left: 2.5em;
    margin-right: 0.625em;
  }

  #logo-text span {
    color: var(--ci-3);
    font-size: 24px;
  }
  #right-header {
    width: 25em;
    display: flex;
    align-items: center;
  }
  #avatar-area {
    margin-right: 1.25em;
  }

  #account-area {
    font-size: 16px;
    color: var(--ci-3);
  }
}
</style>

<template>
  <header id="header">
    <div id="left-header">
      <div id="logo">
        <router-link :to="{ name: 'home-view' }">
          <img
            src="@/assets/images/site/logo.png"
            alt="Greater Goods Grocers"
          />
        </router-link>
      </div>

      <div id="logo-text">
        <a href="#">
          <span>Greater Goods Grocers</span>
        </a>
      </div>
    </div>

    <div id="mid-header">
      <app-header-search-bar />
    </div>

    <div id="right-header">
      <app-header-cart />

      <div id="avatar-area">
        <a href="#">
          <img src="@/assets/images/site/avatar.png" alt="Cart Icon" />
        </a>
      </div>

      <div id="account-area">
        <div id="welcome-message">
          <span>Welcome, Guest</span>
        </div>
        <div id="signin-links">Sign In | Register</div>
      </div>
    </div>
  </header>
</template>
