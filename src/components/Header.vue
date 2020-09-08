<template>
  <header id="header">
    <div id="leftHeader">
      <div id="logo">
        <router-link :to="{ name: 'home' }">
          <img src="@/assets/images/site/logo.png" alt="Greater Goods Grocers" />
        </router-link>
      </div>

      <div id="logoText">
        <a href="#">
          <span>Greater Goods Grocers</span>
        </a>
      </div>
    </div>

    <div id="midHeader">
      <HeaderSearchBar />
    </div>

    <div id="rightHeader">
      <HeaderCart />

      <div id="avatarArea">
        <a href="#">
          <img src="@/assets/images/site/avatar.png" alt="Cart Icon" />
        </a>
      </div>

      <div id="accountArea">
        <div id="welcomeMessage">
          <span>Welcome, Guest</span>
        </div>
        <div id="signinLinks">Sign In | Register</div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderSearchBar from '@/components/HeaderSearchBar.vue'
import HeaderCart from '@/components/HeaderCart.vue'
export default {
  components: {
    HeaderSearchBar,
    HeaderCart
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/components/Header';
</style>
